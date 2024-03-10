const { MongoClient } = require('mongodb');
const { proto } = require("@whiskeysockets/baileys/WAProto");
const { BufferJSON } = require('@whiskeysockets/baileys/lib/Utils/generics')
const { initAuthCreds } = require('@whiskeysockets/baileys/lib/Utils/auth-utils')

const MongoDBAuthConfig = {
  mongodbUri: "",
  databaseName: "",
  collectionName: "",
  sessionId: ""
};

const useMongoDBAuthState = async(config) => {
  const client = new MongoClient(config.mongodbUri, {
    connectTimeoutMS: 15000,
  });
  const sessionId = config.sessionId;
  await client.connect();
  const db = client.db(config.databaseName);
  const collection = db.collection(config.collectionName);
  const ensureCollectionExists = async() => {
    const collections = await db
      .listCollections({ name: config.collectionName })
      .toArray();
    if(collections.length === 0) {
      await db.createCollection(config.collectionName);
    }
  };
  await ensureCollectionExists();
  
  async function writeData(data, key) {
    try {
    const informationToStore = JSON.parse(
      JSON.stringify(data, BufferJSON.replacer)
    );
    const update = {
      $set: {
        ...informationToStore,
      },
    };
    return collection.updateOne({ _id: key }, update, { upsert: true });
     } catch(error) {
      console.error(error);
    }
  };
  
  async function readData(key) {
    try {
      const data = await collection.findOne({ _id: key });
      const creds = JSON.stringify(data);
      return JSON.parse(creds, BufferJSON.reviver);
    } catch(error) {
      console.error('Erro ao ler dados:', error);
      throw error;
    }
  }
  const removeData = async(key) => {
    try {
      await collection.deleteOne({ _id: key });
    } catch(error) {
      throw new Error(`Error deleting creds ${error}`);
    }
  };
  const creds = (await readData("creds")) || (0, initAuthCreds)();
  return {
    state: {
      creds,
      keys: {
        get: async (type, ids) => {
          const data = {};
          await Promise.all(
            ids.map(async (id) => {
              let value = await readData(`${type}-${id}`);
              if (type === "app-state-sync-key") {
                value = proto.Message.AppStateSyncKeyData.fromObject(data);
              }
              data[id] = value;
            })
          );
          return data;
        },
        set: async (data) => {
          const tasks = [];
          for (const category of Object.keys(data)) {
            for (const id of Object.keys(data[category])) {
              const value = data[category][id];
              const key = `${category}-${id}`;
              tasks.push(value ? writeData(value, key) : removeData(key));
            }
          }
          await Promise.all(tasks);
        },
      },
    },
    saveCreds: () => {
      return writeData(creds, "creds");
    },
  };
};

module.exports = { useMongoDBAuthState };
