/**
* Nome do Bot : Hydra Bot
* Bot desenvolvido por Arquimar
* Início do desenvolvimento 30/05/2023
* Contato : wa.me/557197108211
* Email: arquimarsx@gmail.com
*/

const { default: makeWASocket, makeInMemoryStore, makeCacheableSignalKeyStore, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
// const { useMongoDBAuthState } = require("./src/lib/mongoAuthState");
const NodeCache = require('node-cache')
const speed = require('performance-now')
const usePairingCode = process.argv.includes("--use-pairing-code")
const msgRetryCounterCache = new NodeCache()
const keep_alive = require('./src/lib/keep_alive.js')
const fs = require("fs")
const path = require("path")
const P = require('pino')
const clc = require("cli-color")
const util = require('util')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const readline = require("readline")
const Actions = require("./src/lib/sticker")
const ytdl2 = require('./src/lib/ytdl2')
const axios = require('axios')
const addStickerMetaData = require("./src/lib/addStickerMetaData.js")
const { translate } = require('@vitalets/google-translate-api')
const sightengine = require('sightengine')('1322141040', '9EWBYkeg9N8NiQNVAVa9FSpHysV5twTg')
const mongoURL = "mongodb+srv://arquimar:x6WrcziOKdwYEckM@bot.450btox.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require("mongodb");
const { TelegraPh, UploadFileUgu } = require("./src/lib/uploader.js")
const { 
prefix,
nomebot,
numerodono,
tempfolder,
audiotempfolder,
createStickerMetaData,
sendEmojiMixSticker,
frases,
menuimagem1,
menuimagem2,
menuimagem3,
menuimagem4,
menuimagem5,
menuimagem6,
menuimagem7,
menuimagem8,
menuimagem9,
menuimagem10,
menuimagem11,
semfotoimagem,
menuMensagem,
grupoErroMensagem,
botAdminErroMensagem,
botAdminLinkGrupoErroMensagem,
botAdminLinkErroMensagem,
botAdminFotoErroMensagem,
botAdminVideoErroMensagem,
botAdminAudioErroMensagem,
botAdminStickerErroMensagem,
botAdminPornoErroMensagem,
antiFotoAtivadoMensagem,
antiFotoDesativadoMensagem,
antiVideoAtivadoMensagem,
antiVideoDesativadoMensagem,
antiAudioAtivadoMensagem,
antiAudioDesativadoMensagem,
antiStickerAtivadoMensagem,
antiStickerDesativadoMensagem,
antiFotoErroMensagem,
antiVideoErroMensagem,
antiAudioErroMensagem,
antiStickerErroMensagem,
antiFotoJaAtivoErroMensagem,
antiFotoNaoAtivoErroMensagem,
antiVideoJaAtivoErroMensagem,
antiVideoNaoAtivoErroMensagem,
antiAudioJaAtivoErroMensagem,
antiAudioNaoAtivoErroMensagem,
antiStickerJaAtivoErroMensagem,
antiStickerNaoAtivoErroMensagem,
donoErroMensagem,
adminErroMensagem,
donoGrupoOuCriadorErroMensagem,
nomeErroMensagem,
descErroMensagem,
listaGruposErroMensagem,
tagErroMensagem,
grupoFechadoTempMensagem,
grupoAbertoTempMensagem,
grupoPermitirEditarMensagem,
grupoNegarEditarMensagem,
promoverErroMensagem,
rebaixarErroMensagem,
membroAdminErroMensagem,
membroDonoRebaixarErroMensagem,
membroSemAdminErroMensagem,
membroDesconhecidoErroMensagem,
banErroMensagem,
membroDonoBanErroMensagem,
mesmoMembroBanErroMensagem,
botBanErroMensagem,
antilinkGrupoEstaAtivoErroMensagem,
antilinkEstaAtivoErroMensagem,
antilinkGrupoJaAtivoErroMensagem,
antilinkGrupoNaoAtivoErroMensagem,
antilinkGrupoErroMensagem,
antilinkJaAtivoErroMensagem,
antilinkNaoAtivoErroMensagem,
antilinkErroMensagem,
antiArgsErroMensagem,
antiPornoErroMensagem,
antiPornoJaAtivoErroMensagem,
antiPornoAtivadoMensagem,
antiPornoNaoAtivoErroMensagem,
antiPornoDesativadoMensagem,
linkGrupoJaAtivoErroMensagem,
linkGrupoNaoAtivoErroMensagem,
linkGrupoErroMensagem,
linkDesativadoErroMensagem,
bemvindoJaAtivoErroMensagem,
bemvindoNaoAtivoErroMensagem,
bemvindoErroMensagem,
bemvindoDoisJaAtivoErroMensagem,
bemvindoDoisNaoAtivoErroMensagem,
bemvindoDoisErroMensagem,
adminLogsJaAtivoErroMensagem,
adminLogsNaoAtivoErroMensagem,
adminLogsErroMensagem,
imagemVideoGifErroMensagem,
menuErroMensagem,
marcarErroMensagem,
stickerErroMensagem,
toImgErroMensagem,
toGifErroMensagem,
stickerImagemErroMensagem,
stickerAnimadoErroMensagem,
stickerGifErroMensagem,
stickerNaoAnimadoErroMensagem,
fecharGrupoErroMensagem,
abrirGrupoErroMensagem,
perEditarGrupoErroMensagem,
negarEditarGrupoErroMensagem,
comandoInexistenteErroMensagem,
horariosErroMensagem,
adminListaErroMensagem,
vozArgsMensagem,
vozErroMensagem,
comandosImgEditorErroMensagem,
comandos2ImgEditorErroMensagem,
comandos3ImgEditorErroMensagem,
selecionarIdiomaErroMensagem,
selecionarIdiomaTradutorErroMensagem,
vozCaracErroMensagem,
musicaErroMensagem,
linkMP3ErroMensagem,
linkVideoErroMensagem,
linkDocErroMensagem,
fecharGrupoTempErroMensagem,
abrirGrupoTempErroMensagem,
tempoLongoErroMensagem,
apenasNumerosErroMensagem,
linkNaoRedefiniuErroMensagem,
linkErroMensagem,
redefinirErroMensagem,
addListaNegraErroMensagem,
numeroJaAdcionadoErroMensagem,
removerListaNegraErroMensagem,
semNumeroAlgumErroMensagem,
numeroNaoAdcionadoErroMensagem,
chatGPTErroMensagem,
chatGPTApi1ErroMensagem,
chatGPTApi2ErroMensagem,
listaNegraErroMensagem,
escolherTimerFecharGrupoMensagem,
escolherTimerAbrirGrupoMensagem,
imagemErroMensagem,
audioErroMensagem,
toAnimeErroMensagem,
verificarImagemToAnimeErroMensagem,
enviandoImgAnimeMensagem1,
enviandoImgAnimeMensagem2,
enviandoImgAnimeMensagem3,
attpErroMensagem,
attp2ErroMensagem,
ttpErroMensagem,
ttp2ErroMensagem,
ttp3ErroMensagem,
ttp4ErroMensagem,
ttp5ErroMensagem,
ttp6ErroMensagem,
ttpAttpErroMensagem,
emojiMixArgsMensagem,
emojiMixErroMensagem,
criarNoticiaErroMensagem,
noticiaJaCriadaErroMensagem,
noticiaNaoCriadaErroMensagem,
eliminarNoticiaErroMensagem,
nenhumaNoticiaErroMensagem,
noticiaCriadaMensagem,
noticiaRemovidaMensagem,
noticiasErroMensagem,
promoverMensagem,
rebaixarMensagem,
antilinkGrupoAtivadoMensagem,
antilinkGrupoDesativadoMensagem,
antilinkAtivadoMensagem,
antilinkDesativadoMensagem,
linkGrupoAtivadoMensagem,
linkGrupoDesativadoMensagem,
linkMensagem,
linkRedefinidoMensagem,
bemvindoAtivadoMensagem,
bemvindoDesativadoMensagem,
bemvindoDoisAtivadoMensagem,
bemvindoDoisDesativadoMensagem,
adminLogsAtivadoMensagem,
adminLogsDesativadoMensagem,
admLogsPromoveuMensagem,
admLogsDemoteMensagem,
bemvindoEstaAtivoErroMensagem,
bemvindoDoisEstaAtivoErroMensagem,
linkGrupoDetectadoMensagem,
linkDetectadoMensagem,
pornoDetectadoMensagem,
horariosMensagem,
bemvindoMensagem1,
bemvindoMensagem2,
bemvindoMensagem3,
bemvindoMensagem4,
bemvindoMensagem5,
igArgsMensagem,
igErroMensagem,
apiErroMensagem,
igDownloadArgsMensagem,
linkInstaInvalidoErroMensagem,
igDownloadEnviandoMensagem,
igDownloadPostsBaixadosMensagem,
igStoryArgsMensagem,
igStoryEnviandoMensagem,
igStoryBaixadosMensagem,
pinterestArgsMensagem,
pinterestErroMensagem,
pinterestDownloadArgsMensagem,
linkPinterestInvalidoErroMensagem,
pinterestDownloadErroMensagem,
soundcloudDownloadArgsMensagem,
linkSoundcloudInvalidoErroMensagem,
soundcloudDownloadErroMensagem,
enviandoMusicaSCMensagem1,
enviandoMusicaSCMensagem2,
enviandoMusicaSCMensagem3,
scBuscarArgsMensagem,
scBuscarErroMensagem,
scBuscarMscsEncontradasMensagem,
stickerBuscarArgsMensagem,
stickerBuscarErroMensagem,
stickerBuscarEnviadosMensagem,
imgBuscarArgsMensagem,
imgBuscarErroMensagem,
imgBuscarEnviadosMensagem,
randompfpArgsMensagem,
randomaestheticArgsMensagem,
randomanimeArgsMensagem,
imagemVideoAudioStickerErroMensagem,
toDocErroMensagem,
simiArgsMensagem,
simiErroMensagem,
profileArgsMensagem,
profileErroMensagem,
traduzirArgsMensagem,
jaEstaNoIdiomaErroMensagem,
traduzirErroMensagem,
fraseArgsMensagem,
fraseErroMensagem,
audioFxErroMensagem,
gfxArgsMensagem,
gfxErroMensagem,
comandosGfxErroMensagem,
comandos2GfxErroMensagem,
comandos3GfxErroMensagem,
ephotoErroMensagem,
textproErroMensagem,
afxErroMensagem,
funcEmUsoErroMensagem,
tiktokDownloadArgsMensagem,
linkTikTokInvalidoErroMensagem,
linkNaoPermitidoErroMensagem,
tiktokDownloadErroMensagem,
botErroMensagem,
addListaNegraMensagem,
removidoListaNegraMensagem,
removerListaNegraMensagem,
enviandoFxMensagem1,
enviandoFxMensagem2,
enviandoFxMensagem3,
enviandoMusicaMensagem1,
enviandoMusicaMensagem2,
enviandoMusicaMensagem3,
enviandoMusicaMensagem4,
enviandoMusicaMensagem5,
enviandoMP3Mensagem,
enviandoVideoMensagem,
enviandoDocMensagem,
getMediaMessageContent,
getGroupAdmins,
textoParaVoz,
downloadImage,
downloadVideo,
downloadAudio,
downloadSticker,
fetchBuffer,
fetchJson,
isSoundCloudUrl,
isPinterestUrl,
isInstagramUrl,
isTikTokUrl,
isUrl
} = require ('./src/lib/config')

const logger = P({
level: 50
})
const store = makeInMemoryStore({
logger: P().child({
level: 'silent',
stream: 'store'
})
})
store.readFromFile('./data/store.json')
setInterval(() => {store.writeToFile('./data/store.json')}, 10000)
const retryCache = new NodeCache({ stdTTL: 30, checkperiod: 20 })
const sendCache  = new NodeCache({ stdTTL: 30, checkperiod: 20 })
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
})
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antilinkgrupo = JSON.parse(fs.readFileSync('./src/antilinkgrupo.json'))
const antiporno = JSON.parse(fs.readFileSync('./src/antiporno.json'))
const antifoto = JSON.parse(fs.readFileSync('./src/antifoto.json'))
const antivideo = JSON.parse(fs.readFileSync('./src/antivideo.json'))
const antiaudio = JSON.parse(fs.readFileSync('./src/antiaudio.json'))
const antisticker = JSON.parse(fs.readFileSync('./src/antisticker.json'))
const bemvindo = JSON.parse(fs.readFileSync('./src/bemvindo.json'))
const bemvindodois = JSON.parse(fs.readFileSync('./src/bemvindo2.json'))
const adminlogs = JSON.parse(fs.readFileSync('./src/admin_logs.json'))
const adminlogsinfo = JSON.parse(fs.readFileSync('./src/admin_msgs.json'))
const linkgrupo = JSON.parse(fs.readFileSync('./src/linkgrupo.json'))
const listanegra = JSON.parse(fs.readFileSync('./src/listanegra.json'))
const noticias = JSON.parse(fs.readFileSync('./src/noticias.json'))
var stickersearchactived = false
var imgsearchactived = false
var instagramdlactived = false
var igstoryactived = false
var pinterestactived = false
var scbuscaractived = false
var randompfpactived = false
var randomaestheticactived = false
var randomanimeactived = false
const rsuperemojis = ['✔', '☑', '🧡', '💜', '💚', '❤', '💞', '💟', '🌙', '🆗', '🆙', '✅', '💙', '💗', '💋', '☪', '💕', '💖', '🤍', '❣']

async function connect() {
const { error, version } = await fetchLatestBaileysVersion()
if (error){
console.log(`Sessão está sem conexão, verifica a internet.`)
return connect()
}
// AWS : mongodb+srv://arquimar:HXXywMJcmSyBuqsC@bot.b9ozlk3.mongodb.net/?retryWrites=true&w=majority
// GoogleCloud : mongodb+srv://arquimar:x6WrcziOKdwYEckM@bot.450btox.mongodb.net/?retryWrites=true&w=majority
/*
const { state, saveCreds } = await useMongoDBAuthState({		
mongodbUri: 'mongodb+srv://arquimar:HXXywMJcmSyBuqsC@bot.b9ozlk3.mongodb.net/?retryWrites=true&w=majority',		
databaseName: 'mclovin',
collectionName: 'creds',
sessionId: 'client-01'	
})
*/
const { state, saveCreds } = await useMultiFileAuthState("sessions");
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const cfonts = require('cfonts')
const bot = makeWASocket( {
logger: P({ level: "silent" }),
usePairingCode,
mobile: false,
browser: ["Ubuntu", "Chrome", "20.0.04"],
defaultQueryTimeoutMs: undefined,
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, P({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
msgRetryCounterCache: retryCache,
getMessage: async key => {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message || undefined
}
})

store.bind(bot.ev);

bot.ev.on('creds.update', saveCreds)

if (!bot.authState.creds.registered) {
const phoneNumber = await question(`\nEscriba su número de WhatsApp:\nEjemplo: ${clc.bold("559885512460")}\n/> `)
const code = await bot.requestPairingCode(phoneNumber)
console.log(`Su código de conexión es: ${clc.bold(code)}\n`)
console.log(`Abre su WhatsApp, entra en ${clc.bold("Dispositivos vinculados > Vincular un dispositivo > Vincular con el número de teléfono.")}`)
}

bot.ev.on('connection.update', async({ connection, lastDisconnect, receivedPendingNotifications }) => {
const status = lastDisconnect?.error?.output?.statusCode
/*
if(connection === 'connecting') return
// Flush Buffer
if(receivedPendingNotifications && !bot.authState.creds?.myAppStateKeyId) {
try {
bot?.ev.flush()
} catch (e) {
console.log(e)
}
}
*/
if (connection === 'close' && status) {
const reason = Object.entries(DisconnectReason).find(i => i[1] === status)?.[0] || 'unknown'
console.log(`Conexão foi encerrada, status: ${reason} (${status})`)
if (status !== 403 && status !== 401 && status) {
connect()
}
} else if(connection === 'open') {
console.log(`Conectado com sucesso!`)
}
})

bot.ev.on('group-participants.update', async (g) => {
const from = g.id
const isBemVindo = bemvindo.includes(from)
const isBemVindo2 = bemvindodois.includes(from)
const isGroup = from.endsWith("@g.us")
const isAdminLogs = isGroup ? adminlogsinfo.includes(from) : false
const groupMetadata = isGroup ? await bot.groupMetadata(from): ""
const groupName = isGroup ? groupMetadata.subject: ""
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const botNumber = bot.user.id ? bot.user.id.split(":")[0] + "@s.whatsapp.net" : bot.user.id
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${nomebot}`,"title": "hmm" }}}
const dbackid = []
for(i=0;i<listanegra.length;++i) dbackid.push(listanegra[i].groupId)
if(dbackid.indexOf(g.id) >= 0) {
if (g.action == 'add') {
let participants = g.participants
for (let num of participants) {
var user = `${num.split('@')[0]}`
var ind = dbackid.indexOf(g.id)
if(isBotAdmins && listanegra[ind].actived && listanegra[ind].number.indexOf(num.split('@')[0]) >= 0) {
bot.sendMessage(from,{text: removidoListaNegraMensagem(user)})
await bot.groupParticipantsUpdate(from, [num], 'remove')
}
}
}
}
if (g.action == 'add' && isBemVindo) {
let participants = g.participants
for (let num of participants) {
var user = `@${num.split('@')[0]}`
const timer = [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
const randomtimer = timer[Math.floor(Math.random() * timer.length)]
setTimeout( () => {
const msgsbv = [bemvindoMensagem1(user), bemvindoMensagem2(user), bemvindoMensagem3(user), bemvindoMensagem4(user), bemvindoMensagem5(user)]
const randombvmsg = msgsbv[Math.floor(Math.random() * msgsbv.length)]
bot.sendMessage(from, {text: randombvmsg, mentions: [num]})
}, randomtimer)
}
} else if (g.action == 'add' && isBemVindo2) {
let participants = g.participants
for (let num of participants) {
var user = `@${num.split('@')[0]}`
try {
fotouser = await bot.profilePictureUrl(num, 'image')
} catch {
const timer = [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
const randomtimer = timer[Math.floor(Math.random() * timer.length)]
setTimeout( () => {
const msgsbv = [bemvindoMensagem1(user), bemvindoMensagem2(user), bemvindoMensagem3(user), bemvindoMensagem4(user), bemvindoMensagem5(user)]
const randombvmsg = msgsbv[Math.floor(Math.random() * msgsbv.length)]
bot.sendMessage(from, {text: randombvmsg, mentions: [num]})
}, randomtimer)
}
const msgsbv = [bemvindoMensagem1(user), bemvindoMensagem2(user), bemvindoMensagem3(user), bemvindoMensagem4(user), bemvindoMensagem5(user)]
const randombvmsg = msgsbv[Math.floor(Math.random() * msgsbv.length)]
const templateMessageBv = {
image: {url: fotouser},
caption: randombvmsg,
mentions: [num]
}
const timer = [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
const randomtimer = timer[Math.floor(Math.random() * timer.length)]
setTimeout( () => {
bot.sendMessage(from, templateMessageBv)
}, randomtimer)
}
}
if (g.action == 'promote') {
let participants = g.participants
for (let num of participants) {
var admin = `+${g.author.split('@')[0]}`
var user = `+${num.split('@')[0]}`
const date = new Date()
let currentDay= String(date.getDate()).padStart(2, '0')
let currentMonth = String(date.getMonth()+1).padStart(2,"0")
let currentYear = date.getFullYear()
let currentDate = `${currentDay}/${currentMonth}/${currentYear}`
let horas = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Sao_Paulo',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
if (isAdminLogs) {
bot.sendMessage(from, { text: admLogsPromoveuMensagem(`@${g.author.split('@')[0]}`, `@${num.split('@')[0]}`), mentions: [g.author, num, groupAdmins] }, { quoted: selo })
}
adminlogs.push(`${admin} dio administrador a ${user} en ${groupName} (${currentDate} - ${horas})`)
fs.writeFileSync('./src/admin_logs.json', JSON.stringify(adminlogs))
}
} else if(g.action == 'demote') {
let participants = g.participants
for (let num of participants) {
var admin = `+${g.author.split('@')[0]}`
var user = `+${num.split('@')[0]}`
const date = new Date()
let currentDay= String(date.getDate()).padStart(2, '0')
let currentMonth = String(date.getMonth()+1).padStart(2,"0")
let currentYear = date.getFullYear()
let currentDate = `${currentDay}/${currentMonth}/${currentYear}`
let horas = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Sao_Paulo',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
if (isAdminLogs) {
bot.sendMessage(from, { text: admLogsDemoteMensagem(`@${g.author.split('@')[0]}`, `@${num.split('@')[0]}`), mentions: [g.author, num, groupAdmins] }, { quoted: selo})
}
adminlogs.push(`${admin} eliminó el administrador de ${user} en ${groupName} (${currentDate} - ${horas})`)
fs.writeFileSync('./src/admin_logs.json', JSON.stringify(adminlogs))
}
}
})

bot.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return
const key = {
remoteJid: info.key.remoteJid,
id: info.key.id, 
participant: info.key.participant
}
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0] 
const from = info.key.remoteJid
info.mentionedUser = info.message.contextInfo ? info.message.contextInfo.mentionedJid : []
let quotedd = info.quoted = info.message.contextInfo ? info.message.contextInfo.quotedMessage : null
if (info.quoted) {
let type = Object.keys(quotedd)[0]
info.quoted = info.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(info.quoted)
info.quoted = info.quoted[type]
}
if (typeof info.quoted === 'string') info.quoted = {
text: info.quoted
}
}
const messageTypes = {
conversation: info?.message?.conversation,
imageMessage: info?.message?.imageMessage?.caption,
videoMessage: info?.message?.videoMessage?.caption,
extendedTextMessage: info?.message?.extendedTextMessage?.text
}
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const args = body.trim().split(/ +/).slice(1)
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
const liveselo = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const orderselo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"orderMessage": {
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${nomebot}`,
}}}
const isQuotedText = !!info.message?.textMessage || !!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.textMessage
const isQuotedImage = !!info.message?.imageMessage || !!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
const isQuotedVideo = !!info.message?.videoMessage || !!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage
const isQuotedAudio = !!info.message?.audioMessage || !!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage
const isQuotedSticker = !!info.message?.stickerMessage || !!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage
const isQuotedviewOnceMessageV2 = !!info.message?.viewOnceMessageV2 || !!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isViewOnceMessageV2 = type == 'ViewOnceMessageV2'
const reply = (text) => {
bot.sendMessage(from, { text: text }, { quoted: info })
}
const mediaMessage = getMediaMessageContent(info, messageTypes)
const texto = q = args.join(" ")
const isCmd = body.startsWith(prefix)
const cmd = isCmd? body.slice(1).split(/ +/).shift().toLowerCase() : null
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ''
const groupMetadata = isGroup ? await bot.groupMetadata(from) : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupName = isGroup ? groupMetadata.subject: ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntiLinkGrupo = isGroup ? antilinkgrupo.includes(from) : false
const isAntiPorno = isGroup ? antiporno.includes(from) : false
const isAntiFoto = isGroup ? antifoto.includes(from) : false
const isAntiVideo = isGroup ? antivideo.includes(from) : false
const isAntiAudio = isGroup ? antiaudio.includes(from) : false
const isAntiSticker = isGroup ? antisticker.includes(from) : false
const isBemVindo = isGroup ? bemvindo.includes(from) : false
const isBemVindo2 = isGroup ? bemvindodois.includes(from) : false
const isAdminLogs = isGroup ? adminlogsinfo.includes(from) : false
const isLinkGrupo = isGroup ? linkgrupo.includes(from) : false
const menuselo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${nomebot}\n↝ ${pushname}`,"title": "hmm" }}}
const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${nomebot}\n${groupName}`,"title": "hmm" }}}
const dbids = []
for(i=0;i<listanegra.length;++i) {
dbids.push(listanegra[i].groupId)
}
const isListaNegra = (isGroup && dbids.indexOf(from) >= 0) ? true : false
const isNoticias = noticias.criada
const groupOwner = isGroup ? groupMetadata.owner : ''
const hasGroupOwner = groupOwner ? groupOwner.split("@")[0] : ''
const isGroupOwner = isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(sender) : false
const isDono = [ ...numerodono].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(sender)
const botNumber = bot.user.id ? bot.user.id.split(":")[0] + "@s.whatsapp.net" : bot.user.id
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const actions = new Actions(bot, info)
switch(cmd) {
case 'menu':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(menuErroMensagem())
bot.sendMessage(from, { react: { text: '📚', key: info.key }})
const menuimgs = [menuimagem1, menuimagem2, menuimagem3, menuimagem4, menuimagem5, menuimagem6, menuimagem7, menuimagem8, menuimagem9, menuimagem10, menuimagem11]
const randommenuimg = menuimgs[Math.floor(Math.random() * menuimgs.length)]
const templateMessage = {
image: {url: randommenuimg},
caption: menuMensagem()
}
bot.sendMessage(from, templateMessage, { quoted: menuselo })
}
break
case 'etiquetar': case 'mencionar':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (texto) return reply(marcarErroMensagem())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
for (let mem of groupMembers) {
const symbols = [`✮ @${mem.id.split('@')[0]}\n`, `♤ @${mem.id.split('@')[0]}\n`, `𖢅 @${mem.id.split('@')[0]}\n`, `♧ @${mem.id.split('@')[0]}\n`, `𖣘 @${mem.id.split('@')[0]}\n`]
const randomsymbols = symbols[Math.floor(Math.random() * symbols.length)]
teks += randomsymbols
members_id.push(mem.id)
}
bot.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: selo })
}
break
case 'adminlista':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (texto) return reply(adminListaErroMensagem())
teks = `╭▻ *❗Admins del grupo❗*\n`
for (let admon of groupAdmins) {
teks += `⏐▻  @${admon.split('@')[0]}\n`
}
teks +=`⏐▻ Total : ${groupAdmins.length}\n╰▻`
bot.sendMessage(from, { text: teks, mentions: groupAdmins }, { quoted: selo })
}
break
case 'ocultar':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (!texto) return reply(tagErroMensagem())
bot.sendMessage(from, { text : texto ? texto : '' , mentions: groupMembers.map(r => r.id) })
}
break
case 'ocultar2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (!texto) return reply(tagErroMensagem())
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
bot.sendMessage(from, { text : texto ? texto : '' , mentions: groupMembers.map(r => r.id) })
}
break
case 'ig': case 'instagram': case 'igstalk':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || args[1]) return reply(igArgsMensagem(prefix, cmd))
try {
const emojis = ['☑', '✔', '👥']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
let api = await fetch(`https://api.ouzen.xyz/stalker/ig?username=${encodeURI(args[0].replace(/^@/, ''))}&apikey=zenzkey_91737a4ecd09`)
let x = await api.json()
if (x.status == false) return reply(igErroMensagem())
let iggs = `
╭──┤⌕ 𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑴⃟☄ ⌕├─┤
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│👤 𝙽𝚘𝚖𝚋𝚛𝚎:
│ ${x.result.full_name}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│💟 𝚄𝚜𝚞𝚊𝚛𝚒𝚘(𝚊):
│ ${x.result.username}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│👑 𝚂𝚎𝚐𝚞𝚒𝚍𝚘𝚛𝚎𝚜: *${x.result.follower_count}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│⚡ 𝚂𝚎𝚐𝚞𝚒𝚍𝚘𝚜: *${x.result.following_count}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🍷 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚌𝚒𝚘𝚗𝚎𝚜: *${x.result.media_count}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🔗 𝙴𝚗𝚕𝚊𝚌𝚎/𝙻𝚒𝚗𝚔:
│ https://instagram.com/${x.result.username.replace(/^@/, '')}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│⚓ 𝙴𝚗𝚕𝚊𝚌𝚎 𝚎𝚡𝚝𝚎𝚛𝚗𝚘:
│ ${x.result.external_url}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🔐 𝙲𝚞𝚎𝚗𝚝𝚊 𝚙𝚛𝚒𝚟𝚊𝚍𝚊: *${x.result.is_private ? 'si' : 'no'}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│📎 𝙲𝚞𝚎𝚗𝚝𝚊 𝚋𝚞𝚜𝚒𝚗𝚎𝚜𝚜: *${x.result.is_business ? 'si' : 'no'}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│☑️ 𝙲𝚞𝚎𝚗𝚝𝚊 𝚟𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚍𝚊: *${x.result.is_verified ? 'si' : 'no'}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🆕 𝙲𝚞𝚎𝚗𝚝𝚊 𝚗𝚞𝚎𝚟𝚊: *${x.result.is_new_to_instagram ? 'si' : 'no'}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🎶 𝙼𝚞́𝚜𝚒𝚌𝚊 𝚎𝚗 𝚙𝚎𝚛𝚏𝚒𝚕: *${x.result.has_music_on_profile ? 'si' : 'no'}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🎞️ 𝚅𝚒𝚍𝚎𝚘𝚜: *${x.result.has_videos ? 'si' : 'no'}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│📌 𝚁𝚎𝚎𝚕𝚜 𝚎𝚗 𝚍𝚎𝚜𝚝𝚊𝚌𝚊𝚍𝚊: *${x.result.has_highlight_reels ? 'si' : 'no'}*
│
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🏷️ 𝙱𝚒𝚘:
│ ${x.result.biography.trim()}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
let aa = `${x.result.hd_profile_pic_url_info.url}`
const templateIgstalkMessage = {
image: { url: aa},
caption: iggs
}
bot.sendMessage(from, templateIgstalkMessage, { quoted: info })
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'tiktokdl': case 'ttkdl':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto || !isUrl(texto)) return reply(tiktokDownloadArgsMensagem(prefix, cmd))
if (!isTikTokUrl(texto)) return reply(linkTikTokInvalidoErroMensagem())
if (args[1]) return reply(tiktokDownloadArgsMensagem(prefix, cmd))
const emojis = ['✅', '💟', '✔', '☑', '🆗', '💜', '💙', '👥', '💚']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
try {
let api = await fetch(`https://api.tiklydown.eu.org/api/download?url=${encodeURI(args[0])}`)
let x = await api.json()
if (x.status == 404) return reply(tiktokDownloadErroMensagem())
await bot.sendMessage(from, { 
video: { url: x.video.noWatermark },
caption: `
╭┤ૐ 𝑻𝑻𝑲 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑬𝑹⃟☪️ ૐ├
│🔍 Título:
│ ${x.title}
│👤 Enviado por: ${x.author.name}
│👑 Usuario(a): ${x.author.unique_id}
│🗓 Fecha de envío: *${x.created_at}*
│💟 Likes: *${x.stats.likeCount}*
│💬 Comentarios: *${x.stats.commentCount}*
│📩 Compartidos: *${x.stats.shareCount}*
│👀 Visualizaciones: *${x.stats.playCount}*
│☑ Salvos: *${x.stats.saveCount}*
│🕒 Duración: *${x.video.duration}* || *${x.video.durationFormatted}*
│🎞 Calidad: *${x.video.ratio}*
│🔗 Link: ${x.url}`
}, { quoted: info })
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'instagramdl': case 'instadl': case 'igdl':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto || !isUrl(texto)) return reply(igDownloadArgsMensagem(prefix, cmd))
if (!isInstagramUrl(texto)) return reply(linkInstaInvalidoErroMensagem())
if (args[1]) return reply(igDownloadArgsMensagem())
const emojis = ['✅', '✔', '☑', '🌸', '🎈', '🎀']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
reply(igDownloadEnviandoMensagem())
try {
const sleepiglink = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let api = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=GataDios&url=${encodeURI(args[0])}`)
let x = await api.json()
if (instagramdlactived == false) {
instagramdlactived = true
var postcount = 0
for (let i = 0; i < Math.min(x.result.length); i++) {
await sleepiglink(3000)
if(x.result[i].includes(".jpg")) {
postcount++
await bot.sendMessage(from, { image: { url: x.result[i] }}, { quoted: info })
} else if(x.result[i].includes(".mp4")) {
postcount++
await bot.sendMessage(from, { video: { url: x.result[i] }}, { quoted: info })
}
}
if(postcount == x.result.length) {
reply(igDownloadPostsBaixadosMensagem())
instagramdlactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(apiErroMensagem())
instagramdlactived = false
}
}
break
case 'igstory':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || args[1]) return reply(igStoryArgsMensagem(prefix, cmd))
const emojis = ['✅', '💙', '✔', '🆗', '☑', '💜']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
reply(igStoryEnviandoMensagem(args[0]))
try {
const sleepigstory = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let api = await fetch(`https://api.ouzen.xyz/downloader/instagram/story?apikey=zenzkey_91737a4ecd09&username=${encodeURI(args[0].replace(/^@/, ''))}`)
let x = await api.json()
if (igstoryactived == false) {
igstoryactived = true
if (x.status == false) {
reply(igErroMensagem())
return igstoryactived = false
}
var storycount = 0
for (let i = 0; i < Math.min(x.result.length); i++) {
await sleepigstory(3000)
if(x.result[i].extension == ".jpg") {
var user = `@${sender.split("@")[0]}`
storycount++
await bot.sendMessage(from, {
image: { url: x.result[i].url },
caption: `Cuenta: ${args[0]}\nHistoria(s): *${storycount}*\nEnviado por: ${user}`,
mentions: [sender]})
} else if(x.result[i].extension == ".mp4") {
var user = `@${sender.split("@")[0]}`
storycount++
await bot.sendMessage(from, {
video: { url: (x.result[i].url) },
caption: `Cuenta: ${args[0]}\nHistoria(s): *${storycount}*\nEnviado por: ${user}`,
mentions: [sender]})
}
}
if(storycount == x.result.length) {
reply(igStoryBaixadosMensagem())
igstoryactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(apiErroMensagem())
igstoryactived = false
}
}
break
case 'p': case 'pimg': case 'pinterest':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(pinterestArgsMensagem(prefix, cmd))
const emojis = ['✅', '✔', '☑', '💜']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
try {
const sleeppinterest = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let apiurl = await fetch(`https://api.ouzen.xyz/searching/pinterest2?query=${encodeURI(texto)}&apikey=zenzkey_91737a4ecd09`)
if (pinterestactived == false) {
pinterestactived = true
var pinterestcount = 0
const buscalimite = 5;
for (let i = 0; i < Math.min(buscalimite); i++) {
await sleeppinterest(3000)
pinterestcount++
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
}
if(pinterestcount == buscalimite) {
pinterestactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(pinterestErroMensagem())
pinterestactived = false
}
}
break
case 'pinterestdl':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto || !isUrl(texto)) return reply(pinterestDownloadArgsMensagem(prefix, cmd))
if (!isPinterestUrl(texto)) return reply(linkPinterestInvalidoErroMensagem())
if (args[1]) return reply(pinterestDownloadArgsMensagem(prefix, cmd))
const emojis = ['✅', '📷', '✔', '☑', '🆗', '💜', '💙', '🧡', '💚']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
try {
let api = await fetch(`https://api.ouzen.xyz/downloader/pinterestdl?apikey=zenzkey_91737a4ecd09&url=${encodeURI(args[0])}`)
let x = await api.json()
if (x.status == false) return reply(pinterestDownloadErroMensagem())
if(x.result.includes(".jpg")) {
await bot.sendMessage(from, { image: { url: x.result }}, { quoted: info })
} else if(x.result.includes(".mp4")) {
await bot.sendMessage(from, { video: { url: x.result }}, { quoted: info })
}
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'sc': case 'soundcloud':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto || !isUrl(texto)) return reply(soundcloudDownloadArgsMensagem(prefix, cmd))
if (!isSoundCloudUrl(texto)) return reply(linkSoundcloudInvalidoErroMensagem())
if (args[1]) return reply(soundcloudDownloadArgsMensagem(prefix, cmd))
const emojis = ['🧡', '🟠', '🟧', '🆗']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
const msgs = [enviandoMusicaSCMensagem1(), enviandoMusicaSCMensagem2(), enviandoMusicaSCMensagem3()]
const randomscmsg = msgs[Math.floor(Math.random() * msgs.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
reply(randomscmsg)
try {
let api = await fetch(`https://api.ouzen.xyz/downloader/soundcloud?apikey=zenzkey_91737a4ecd09&url=${encodeURI(args[0])}`)
let x = await api.json()
if (x.status == false) return reply(soundcloudDownloadErroMensagem())
await bot.sendMessage(from, { 
image: { url: x.result.thumbnail },
caption: `
╭─┤𖡻 𝑺𝑶𝑼𝑵𝑫𝑪𝑳𝑶𝑼𝑫⃟🎵 𖡻├─┤\n│🔍 Título: ${x.result.title}\n│🕒 Duración: ${x.result.duration}\n│⚙ Calidad: ${x.result.media.quality}\n│🎶 Extensión: ${x.result.media.extension}\n│📁 Tamaño: ${x.result.media.formattedSize}` }, { quoted: info })
await bot.sendMessage(from, { audio: { url: x.result.media.url }, mimetype: 'audio/mpeg'}, { quoted: info })
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'scbuscar': case 'soundcloudbuscar':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(scBuscarArgsMensagem(prefix, cmd))
const emojis = ['🧡', '🟠', '🟧', '🆗']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
try {
const sleepscsearch = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let api = await fetch(`https://api.ouzen.xyz/downloader/soundcloud/search?apikey=zenzkey_91737a4ecd09&query=${encodeURI(texto)}`)
let x = await api.json()
if (scbuscaractived == false) {
scbuscaractived = true
if (x.status == false) {
reply(scBuscarErroMensagem())
return scbuscaractived = false
}
var buscascount = 0
const buscalimite = 10;
for (let i = 0; i < Math.min(buscalimite, x.result.length); i++) {
await sleepscsearch(3000)
buscascount++
await bot.sendMessage(from, {
image: { url: x.result[i].thumb },
caption: `Título: ${x.result[i].title}\nArtista: ${x.result[i].artist}\nViews: ${x.result[i].views}\nAño de Lanz: ${x.result[i].release}\nDuración: ${x.result[i].timestamp}\nLink: ${x.result[i].url}` }, { quoted: info})
}
if(buscascount == x.result.length) {
reply(scBuscarMscsEncontradasMensagem())
scbuscaractived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(apiErroMensagem())
scbuscaractived = false
}
}
break
case 'stickerbuscar': case 'stickersearch': case 'sbuscar':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(stickerBuscarArgsMensagem(prefix, cmd))
try {
const sleepstksearch = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let api = await fetch(`https://api.ouzen.xyz/searching/stickersearch?query=${encodeURI(texto)}&apikey=zenzkey_91737a4ecd09`)
let x = await api.json()
if (stickersearchactived == false) {
stickersearchactived = true
if (x.status == false) {
reply(stickerBuscarErroMensagem())
return stickersearchactived = false
}
var buscascount = 0
const emojis = ['✅', '🧩', '🆗']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
for (let i = 0; i < Math.min(x.result.length); i++) {
const sleep = [3000, 5000, 7000]
const randomsleep = sleep[Math.floor(Math.random() * sleep.length)]
await sleepstksearch(randomsleep)
buscascount++
let buff = Buffer.isBuffer(x.result[i]) ? x.result[i] : /^data:.*?\/.*?;base64,/i.test(x.result[i]) ? Buffer.from(x.result[i].split`,`[1], 'base64') : /^https?:\/\//.test(x.result[i]) ? await (await fetchBuffer(x.result[i])) : fs.existsSync(x.result[i]) ? fs.readFileSync(x.result[i]) : Buffer.alloc(0)
let tmpFileIn = ''
if (x.result[i].includes(".png")) {
tmpFileIn = path.join(`./src/tmp/${Math.floor(Math.random() * 10000)}.png`)
} else if (x.result[i].includes(".gif")) {
tmpFileIn = path.join(`./src/tmp/${Math.floor(Math.random() * 10000)}.gif`)
}
const tmpFileOut = path.join(`./src/tmp/${Math.floor(Math.random() * 10000)}.webp`)
fs.writeFileSync(tmpFileIn, buff)
ffmpeg(tmpFileIn).toFormat("webp").save(tmpFileOut).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(tmpFileIn)
fs.unlinkSync(tmpFileOut)
throw new Error(error)
}
const buf = fs.readFileSync(tmpFileOut)
const mediaWithMetaDataPath = await addStickerMetaData(buf,createStickerMetaData(pushname))
const m = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, { sticker: m }, { quoted: info })
fs.unlinkSync(mediaWithMetaDataPath)
fs.unlinkSync(tmpFileIn)
fs.unlinkSync(tmpFileOut)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(tmpFileIn)
fs.unlinkSync(tmpFileOut)
throw new Error(error)
}
})
}
if(buscascount == x.result.length) {
setTimeout( () => {
reply(stickerBuscarEnviadosMensagem(buscascount))
}, 8000)
stickersearchactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(stickerBuscarErroMensagem())
stickersearchactived = false
}
}
break
/*
case 'imgbuscar':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(imgBuscarArgsMensagem(prefix, cmd))
try {
const sleepimgsearch = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let api = await fetch(`https://api-smd.vercel.app/api/bingimg?query=${encodeURI(texto)}`)
let x = await api.json()
if (imgsearchactived == false) {
imgsearchactived = true
if (x.status == false) {
reply(imgBuscarErroMensagem())
return imgsearchactived = false
}
var buscascount = 0
const emojis = ['✅', '☑', '🆗', '📷']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
for (let i = 0; i < Math.min(x.result.length); i++) {
await sleepimgsearch(3000)
buscascount++
await bot.sendMessage(from, {
image: { url: x.result[i] }}, { quoted: info })
}
if(buscascount == x.result.length) {
reply(imgBuscarEnviadosMensagem(buscascount))
imgsearchactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(apiErroMensagem())
imgsearchactived = false
}
}
break
*/
case 'randomprofile': case 'randompfp':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(randompfpArgsMensagem(prefix, cmd))
try {
const sleeprprofile = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let apiurl = await fetch(`https://api.ouzen.xyz/randomimage/profil?apikey=zenzkey_91737a4ecd09`)
if (randompfpactived == false) {
randompfpactived = true
var randompfpcount = 0
const buscalimite = 5;
for (let i = 0; i < Math.min(buscalimite); i++) {
await sleeprprofile(3000)
randompfpcount++
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
}
if(randompfpcount == buscalimite) {
randompfpactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(apiErroMensagem())
randompfpactived = false
}
}
break
case 'randomaesthetic': case 'aesthetic':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(randomaestheticArgsMensagem(prefix, cmd))
try {
const sleepaesthetic = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let apiurl = await fetch(`https://api.ouzen.xyz/randomimage/aesthetic?apikey=zenzkey_91737a4ecd09`)
if (randomaestheticactived == false) {
randomaestheticactived = true
var randomaestheticcount = 0
const buscalimite = 5;
for (let i = 0; i < Math.min(buscalimite); i++) {
await sleepaesthetic(3000)
randomaestheticcount++
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
}
if(randomaestheticcount == buscalimite) {
randomaestheticactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(apiErroMensagem())
randomaestheticactived = false
}
}
break
case 'randomanime': case 'anime':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(randomanimeArgsMensagem(prefix, cmd))
try {
const sleepanime = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/anime?apikey=zenzkey_91737a4ecd09')
if (randomanimeactived == false) {
randomanimeactived = true
var randomanimecount = 0
const buscalimite = 5;
for (let i = 0; i < Math.min(buscalimite); i++) {
await sleepanime(3000)
randomanimecount++
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
}
if(randomanimecount == buscalimite) {
randomanimeactived = false
}
} else {
reply(funcEmUsoErroMensagem())
}
} catch (e) {
reply(apiErroMensagem())
randomanimeactived = false
}
}
break
/*
case 'couples':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply('')
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/couples?apikey=zenzkey_91737a4ecd09')
let x = await apiurl.json()
if (args[0] == 'm') {
await bot.sendMessage(from, { image: { url: x.result.male }}, { quoted: info })
} else if (args[0] == 'f') {
await bot.sendMessage(from, { image: { url: x.result.female }}, { quoted: info })
} else {
reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
}
} catch (e) {
console.log(e)
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'husbu':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/husbu?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'neko':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/neko?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'waifu':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/waifu?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'calliope':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/calliope?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'kitagawa':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/kitagawa?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'maid':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/maid?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'megumin':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/megumin?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'oppai':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/oppai?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'raiden':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/raiden?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'selfies':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/selfies?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'shinobu':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/shinobu?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
case 'uniform':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(`𝙄𝙉𝙂𝙍𝙀𝙎𝙀 UN NOMBRE`)
try {
let apiurl = await fetch('https://api.ouzen.xyz/randomanime/uniform?apikey=zenzkey_91737a4ecd09')
await bot.sendMessage(from, { image: apiurl }, { quoted: info })
} catch (e) {
reply('talvez o usuário não tenha a conta privada!')
}
}
break
*/
case 'ephoto':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(ephotoErroMensagem(prefix, cmd))
reply(`───┤『🏞️』𝑬𝑷𝑯𝑶𝑻𝑶『🖌️』├───

┝ _➛${prefix}american
┝ _➛${prefix}anonymous
┝ _➛${prefix}aov
┝ _➛${prefix}arrow
┝ _➛${prefix}arrow2
┝ _➛${prefix}blackpink
┝ _➛${prefix}blueneon
┝ _➛${prefix}buoys
┝ _➛${prefix}cake
┝ _➛${prefix}caper
┝ _➛${prefix}cloth
┝ _➛${prefix}cloud
┝ _➛${prefix}coverpubg
┝ _➛${prefix}crank
┝ _➛${prefix}dragonfire
┝ _➛${prefix}eraser
┝ _➛${prefix}foggy
┝ _➛${prefix}glasses
┝ _➛${prefix}graffiti
┝ _➛${prefix}greenbrush
┝ _➛${prefix}hallowen
┝ _➛${prefix}heated
┝ _➛${prefix}horror
┝ _➛${prefix}incandescent
┝ _➛${prefix}juventus
┝ _➛${prefix}leafgraphy
┝ _➛${prefix}letters
┝ _➛${prefix}metals
┝ _➛${prefix}ml
┝ _➛${prefix}neonblue
┝ _➛${prefix}neonbp
┝ _➛${prefix}nightstars
┝ _➛${prefix}pencil
┝ _➛${prefix}pig
┝ _➛${prefix}pubgavatar
┝ _➛${prefix}puppy
┝ _➛${prefix}quotestatus
┝ _➛${prefix}scholes
┝ _➛${prefix}socialbutton
┝ _➛${prefix}sunlight
┝ _➛${prefix}television
┝ _➛${prefix}typography
┝ _➛${prefix}typography2
┝ _➛${prefix}warface
┝ _➛${prefix}water
┝ _➛${prefix}wood
┝ _➛${prefix}writestatus
┝ _➛${prefix}yasuologo`)
}
break
case 'textpro':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(textproErroMensagem(prefix, cmd))
reply(`───┤『🌌』𝑻𝑬𝑿𝑻𝑷𝑹𝑶『🪄』├───

┝ _➛${prefix}3dchristmas
┝ _➛${prefix}crackedstone
┝ _➛${prefix}3ddeepsea
┝ _➛${prefix}3dgradient
┝ _➛${prefix}3dneonlight
┝ _➛${prefix}3drainbow
┝ _➛${prefix}3dscifi
┝ _➛${prefix}3dwaterpipe
┝ _➛${prefix}americanflag
┝ _➛${prefix}berry
┝ _➛${prefix}blackpink2
┝ _➛${prefix}bluecircuit
┝ _➛${prefix}christmas
┝ _➛${prefix}dropwater
┝ _➛${prefix}fiction
┝ _➛${prefix}firework
┝ _➛${prefix}foggywindows
┝ _➛${prefix}glitch
┝ _➛${prefix}gluetext
┝ _➛${prefix}greenhorror
┝ _➛${prefix}halloween
┝ _➛${prefix}harrypotter
┝ _➛${prefix}impressiveglitch
┝ _➛${prefix}magma
┝ _➛${prefix}marvel
┝ _➛${prefix}matrix
┝ _➛${prefix}metallic
┝ _➛${prefix}natural
┝ _➛${prefix}neondevil
┝ _➛${prefix}pornhub
┝ _➛${prefix}sketch
┝ _➛${prefix}space
┝ _➛${prefix}thunder
┝ _➛${prefix}transformer
┝ _➛${prefix}wolfgalaxy
┝ _➛${prefix}wolflogo`)
}
break
case 'audiofx':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(afxErroMensagem(prefix, cmd))
reply(`───┤『🔊』𝑨𝑼𝑫𝑰𝑶𝑭𝑿『🧞‍♀️』├───

│‼ Si desea guardar el audio de alguna manera, recomendado usar ${prefix}todoc

┝ _➛${prefix}bass || ${prefix}volumen
┝ _➛${prefix}reverse
┝ _➛${prefix}slow || ${prefix}slowed
┝ _➛${prefix}slow2 || ${prefix}slowed2
┝ _➛${prefix}speed || ${prefix}speedup
┝ _➛${prefix}alto
┝ _➛${prefix}robot
┝ _➛${prefix}blown
┝ _➛${prefix}deep
┝ _➛${prefix}earrape
┝ _➛${prefix}fat
┝ _➛${prefix}2x
┝ _➛${prefix}tupai`)
}
break
// ephoto //
case 'american':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/american?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'anonymous':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/anonymous?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'aov':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/aov?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'arrow':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/arrow?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'arrow2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/arrow2?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'blackpink':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/blackpink?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'blueneon':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/blueneon?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'buoys':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/buoys?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'cake':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/cake?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'caper':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/caper?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'cloth':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/cloth?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'cloud':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/cloud?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'coverpubg':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/coverpubg?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'crank':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/crank?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'dragonfire':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/dragonfire?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'eraser':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/eraser?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'foggy':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/foggy?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'glasses':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/glasses?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'graffiti':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/graffiti?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'greenbrush':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/greenbrush?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'hallowen':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/hallowen?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'heated':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/heated?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'horror':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/horror?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'incandescent':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/incandescent?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'juventus':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos3ImgEditorErroMensagem(prefix, cmd))
if (args[2]) return reply(comandos3ImgEditorErroMensagem(prefix, cmd))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/juventus?text=${encodeURIComponent(args[0])}&number=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'leafgraphy':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/leafgraphy?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'letters':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/letters?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'metals':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/metals?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'ml':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/ml?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'neonblue':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/neonblue?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'neonbp':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/neonbp?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'nightstars':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/nightstars?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'pencil':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/pencil?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'pig':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/pig?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'pubgavatar':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/pubgavatar?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'puppy':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/puppy?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'quotestatus':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/quotestatus?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'scholes':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos3ImgEditorErroMensagem(prefix, cmd))
if (args[2]) return reply(comandos3ImgEditorErroMensagem(prefix, cmd))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/scholes?text=${encodeURIComponent(args[0])}&number=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'socialbutton':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/socialbutton?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'sunlight':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/sunlight?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'television':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/television?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'typography':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/typography?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'typography2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/typography2?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'warface':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/warface?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'water':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/water?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'wood':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/wood?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'writestatus':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/writestatus?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'yasuologo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/ephoto/yasuologo?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
// textpro //
case '3dchristmas':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/3dchristmas?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'crackedstone':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/crackedstone?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case '3ddeepsea':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/3ddeepsea?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case '3dgradient':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/3dgradient?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case '3dneonlight':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/3dneonlight?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case '3drainbow':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/3drainbow?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case '3dscifi':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/3dscifi?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case '3dwaterpipe':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/3dwaterpipe?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'americanflag':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/americanflag?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'berry':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/berry?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'blackpink2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/blackpink?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'bluecircuit':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/bluecircuit?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'christmas':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/christmas?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'dropwater':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/dropwater?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'fiction':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/fiction?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'firework':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/firework?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'foggywindows':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/foggywindows?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'glitch':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/glitch?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'gluetext':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/gluetext?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'greenhorror':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/greenhorror?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'halloween':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/halloween?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'harrypotter':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/harrypotter?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'impressiveglitch':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/impressiveglitch?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'magma':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/magma?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'marvel':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/marvel?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'matrix':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/matrix?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'metallic':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/metallic?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'natural':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/natural?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'neondevil':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/neondevil?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'pornhub':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/pornhub?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'sketch':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/sketch?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'space':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/space?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'thunder':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/thunder?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'transformer':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(comandosImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/transformer?text=${encodeURIComponent(texto)}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'wolfgalaxy':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/logowolf2?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
case 'wolflogo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || !args[1]) return reply(comandos2ImgEditorErroMensagem(prefix, cmd))
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/textpro/logowolf?text=${encodeURIComponent(args[0])}&text2=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} catch (e) {
reply(apiErroMensagem())
}
}
break
// gfx //
case 'gfx':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(gfxArgsMensagem())
if (!isQuotedImage) return reply(imagemErroMensagem())
if (args[0] != 'blur' && args[0] != 'brighten' && args[0] != 'circle' && args[0] != 'comrade' && args[0] != 'contrast' && args[0] != 'gay' && args[0] != 'glass' && args[0] != 'greyscale' && args[0] != 'horny' && args[0] != 'invert' && args[0] != 'jail' && args[0] != 'passed' && args[0] != 'pixelate' && args[0] != 'scale' && args[0] != 'sepia') return reply(gfxErroMensagem(args[0]))
const img = await downloadImage(info, `${Math.floor(Math.random() * 10000)}`)
const image = await UploadFileUgu(img)
try {
const randomemojismsg = rsuperemojis[Math.floor(Math.random() * rsuperemojis.length)]
if (args[0] == 'blur') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/blur?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'brighten') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/brighten?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'circle') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/circle?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'comrade') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/comrade?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'contrast') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/contrast?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'gay') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/gay?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'glass') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/glass?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'greyscale') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/greyscale?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'horny') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/horny?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'invert') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/invert?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'jail') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/jail?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'passed') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/passed?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
/*
} else if (args[0] == 'photomania') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
let api = await fetch(`https://api.ouzen.xyz/photoeditor/photomanipulation?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
let x = await api.json()
await bot.sendMessage(from, { image: { url: x.result.url_secury }}, {quoted: info})
*/
} else if (args[0] == 'pixelate') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/pixelate?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'scale') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/2x?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
} else if (args[0] == 'sepia') {
if (!args[1] || args[2]) return reply(comandosGfxErroMensagem(prefix, cmd, args[0]))
if (isNaN(args[1])) return reply(apenasNumerosErroMensagem())
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
const res = await fetch(`https://api.ouzen.xyz/photoeditor/sepia?url=${encodeURIComponent(util.format(image.url))}?v=${encodeURIComponent(args[1])}&apikey=zenzkey_91737a4ecd09`)
await bot.sendMessage(from, { image: res}, {quoted: info})
}
} catch (e) {
reply(apiErroMensagem())
console.log(e)
}
}
break
case 's': case 'sticker':// sticker grande
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedImage && !isQuotedVideo) return reply(imagemVideoGifErroMensagem())
if (texto) return reply(stickerErroMensagem())
await actions.sticker()
}
break
case 'ss': // sticker pequeno
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedImage && !isQuotedVideo) return reply(imagemVideoGifErroMensagem())
if (texto) return reply(stickerErroMensagem())
if (isQuotedImage) {
const inputPath = await downloadImage(info, `${Math.floor(Math.random() * 10000)}`)
const outputPath = path.resolve(tempfolder, `${Math.floor(Math.random() * 10000)}.webp`)
ffmpeg(inputPath).outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-loop 0", "-an", "-vsync 0"]).videoFilters("scale='min(512,iw)':min'(512,ih)':force_original_aspect_ratio=decrease, pad=512:512:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
).toFormat("webp").save(outputPath)
.on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(inputPath)
fs.unlinkSync(outputPath)
throw new Error(error)
}
const mediaWithMetaDataPath = await addStickerMetaData(outputPath, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, { sticker: media }, { quoted: info })
fs.unlinkSync(mediaWithMetaDataPath)
fs.unlinkSync(inputPath)
fs.unlinkSync(outputPath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(inputPath)
fs.unlinkSync(outputPath)
throw new Error(error)
}
})
} else if (isQuotedVideo) {
await actions.sticker()
}
}
break
case 'emojimix':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!args[0] || args[1]) return reply(emojiMixArgsMensagem())
try {
let [emoji1, emoji2] = texto.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let buff = Buffer.isBuffer(res.url) ? res.url : /^data:.*?\/.*?;base64,/i.test(res.url) ? Buffer.from(res.url.split`,`[1], 'base64') : /^https?:\/\//.test(res.url) ? await (await fetchBuffer(res.url)) : fs.existsSync(res.url) ? fs.readFileSync(res.url) : Buffer.alloc(0)
await sendEmojiMixSticker(bot, from, info, buff, pushname)
}
} catch (e) {
reply(emojiMixErroMensagem())
}
}
break
case 'toimg': case 'toimage':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedSticker) return reply(stickerImagemErroMensagem())
if (mediaMessage.isAnimated) return reply(stickerAnimadoErroMensagem())
if (texto) return reply(toImgErroMensagem())
await actions.sticker()
}
break
case 'togif':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedSticker) return reply(stickerGifErroMensagem())
if (!mediaMessage.isAnimated) return reply(stickerNaoAnimadoErroMensagem())
if (texto) return reply(toGifErroMensagem())
await actions.sticker()
}
break
case 'todoc':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedImage && !isQuotedVideo && !isQuotedAudio && !isQuotedSticker) return reply(imagemVideoAudioStickerErroMensagem())
if (texto) return reply(toDocErroMensagem(prefix, cmd))
const emojis = ['☑', '✔', '🆗', '📁']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
if(isQuotedImage) {
let path = await downloadImage(info, `${Math.floor(Math.random() * 10000)}`)
await bot.sendMessage(from,{
document: fs.readFileSync(path),
mimetype: 'image/jpeg',
fileName: `TODOC_IMG${Math.floor(Math.random() * 10000)}.jpeg`}, {quoted: info})
fs.unlinkSync(path)
} else if(isQuotedVideo) {
let path = await downloadVideo(info, `${Math.floor(Math.random() * 10000)}`)
await bot.sendMessage(from,{
document: fs.readFileSync(path),
mimetype: 'video/mp4',
fileName: `TODOC_VIDEO${Math.floor(Math.random() * 10000)}.mp4`}, {quoted: info})
fs.unlinkSync(path)
} else if(isQuotedAudio) {
let path = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
await bot.sendMessage(from,{
document: fs.readFileSync(path),
mimetype: 'audio/mpeg',
fileName: `TODOC_AUDIO${Math.floor(Math.random() * 10000)}.mp3`}, {quoted: info})
fs.unlinkSync(path)
} else if(isQuotedSticker) {
let path = await downloadSticker(info, `${Math.floor(Math.random() * 10000)}`)
await bot.sendMessage(from,{
document: fs.readFileSync(path),
mimetype: 'image/webp',
fileName: `TODOC_STICKER${Math.floor(Math.random() * 10000)}.webp`}, {quoted: info})
fs.unlinkSync(path)
}
}
break
/*
case 'toanime':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedImage) return reply(imagemErroMensagem())
if (texto) return reply(toAnimeErroMensagem(prefix, cmd))
const img = await downloadImage(info, `${Math.floor(Math.random() * 10000)}`)
const image = await UploadFileUgu(img)
const emojis = ['🌸', '🌹', '😇', '💙', '💜', '💕']
const randomemoji = emojis[Math.floor(Math.random() * emojis.length)]
bot.sendMessage(from, { react: { text: randomemoji, key: info.key }})
const msgs = [enviandoImgAnimeMensagem1(), enviandoImgAnimeMensagem2(), enviandoImgAnimeMensagem3()]
const randomanimemsg = msgs[Math.floor(Math.random() * msgs.length)]
reply(randomanimemsg)
try {
const anime = await (await fetch(`https://api.lolhuman.xyz/api/imagetoanime?apikey=GataDios&img=${encodeURIComponent(util.format(image.url))}`)).buffer()
await bot.sendMessage(from, { image: anime}, {quoted: info})
fs.unlinkSync(img)
} catch (e) {
fs.unlinkSync(img)
reply(verificarImagemToAnimeErroMensagem())
}
}
break
*/
case 'sim': case 'simi': case 'simsimi':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(simiArgsMensagem(prefix, cmd))
const options = {
method: 'POST',
headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
body: `text=${encodeURIComponent(texto)}&lc=es&key=`
}
const res = await fetch('https://api.simsimi.vn/v1/simtalk', options)
const json = await res.json()
if (json.status === '200') {
reply(json.message)
} else {
reply(simiErroMensagem())
}
}
break
case 'pfp':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(profileArgsMensagem(prefix, cmd))
try {
let usr = info.mentionedUser[0] ? info.mentionedUser[0] : info.quoted ? info.key.participant : texto.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
fotouser = await bot.profilePictureUrl(usr, 'image')
} catch (e) {
reply(profileErroMensagem())
}
bot.sendMessage(from, { image: { url: fotouser }}, { quoted: info })
}
break
case 'attp':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(attpErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/attp?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'attp2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(attp2ErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/attp2?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'ttp':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(ttpErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/ttp?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'ttp2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(ttp2ErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/ttp2?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'ttp3':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(ttp3ErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/ttp3?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'ttp4':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(ttp4ErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/ttp4?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'ttp5':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(ttp5ErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/ttp5?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'ttp6':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(ttp6ErroMensagem())
let buffer = await (await fetch(`https://api.lolhuman.xyz/api/ttp6?apikey=GataDios&text=${encodeURI(texto)}`)).buffer()
const mediaWithMetaDataPath = await addStickerMetaData(buffer, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, {sticker: media}, {quoted: info}).catch(e => {
reply(ttpAttpErroMensagem())
})
fs.unlinkSync(mediaWithMetaDataPath)
}
break
case 'crearnoticia':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isDono) return reply(donoErroMensagem())
if (!texto) return reply(criarNoticiaErroMensagem())
if (isNoticias) return reply(noticiaJaCriadaErroMensagem())
noticias.criada = true
noticias.lista = texto
fs.writeFileSync('./src/noticias.json', JSON.stringify(noticias, null, '\t'))
reply(noticiaCriadaMensagem())
}
break
/*
Nuevos comandos : *!attp* || *!attp2* & *!ttp* || *!ttp2* (16/12/2023 - 13:00) by arquimar 🌙 [+55 71 9957-0882]\n⏐▻ Nuevo comando : *!listagrupos* (18/12/2023 - 00:10) by arquimar 🌙 [+55 71 9957-0882]\n⏐▻ Nuevo comando : *!antilinkgrupo* (18/12/2023 - 13:08) by arquimar 🌙 [+55 71 9957-0882]\n⏐▻ *Nuevas imágenes en el menu* (18/12/2023 - 10:23)\n⏐▻ Nuevos comandos : *!toimg* || *!toimage* & *!togif* (20/12/2023 - 02:40) by arquimar 🌙 [+55 71 9957-0882]\n⏐▻ *Los stickers ahora tiene más detalles en el nombre* (20/12/2023 - 03:50)
*/
case 'eliminarnoticia':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isDono) return reply(donoErroMensagem())
if (!isNoticias) return reply(noticiaNaoCriadaErroMensagem())
noticias.criada = false
noticias.lista = ''
fs.writeFileSync('./src/noticias.json', JSON.stringify(noticias, null, '\t'))
reply(noticiaRemovidaMensagem())
}
break
case 'noticiasbot':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(noticiasErroMensagem())
if (isNoticias) {
teks = '╭▻ 💌 *Noticias del Bot* 💌\n'
teks += `⏐▻ ${noticias.lista}\n`
teks += '╰▻'
bot.sendMessage(from, { text: teks }, { quoted: liveselo })
} else {
reply(nenhumaNoticiaErroMensagem())
}
}
break
case 'bot':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(botErroMensagem())
const timestampe = speed();
const latensie = speed() - timestampe
const pad = (s) => (s < 10 ? "0" : "") + s;
const formatTime = (seconds) => {
const days = Math.floor(seconds / 86400);
const hours = Math.floor(seconds / (60 * 60));
const minutes = Math.floor((seconds % (60 * 60)) / 60);
const secs = Math.floor(seconds % 60);
return (time = `${days}dia(s), ${pad(hours)}h, ${pad(minutes)}m, ${pad(secs)}s`);
};
const uptime = () => formatTime(process.uptime());
let upTxt = `⚡ Velocidad de respuesta: *${latensie.toFixed(4)}ms*\n🟢 Tiempo activo: *${uptime()}*\n🖥 Host: *Koyeb*`;
reply(upTxt)
}
break
case 'voz':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(vozArgsMensagem())
if (args[0] != 'en' && args[0] != 'pt' && args[0] != 'ja' && args[0] != 'es' && args[0] != 'it' && args[0] != 'ru' && args[0] != 'ko' && args[0] != 'sv' && args[0] != 'ar' && args[0] != 'fr' && args[0] != 'de' && args[0] != 'id') return reply(selecionarIdiomaErroMensagem())
usuarioTexto = body.slice(8).trim()
if (!usuarioTexto) return reply(vozErroMensagem())
if (usuarioTexto.length > 1000) return reply(vozCaracErroMensagem())
try {
bot.sendPresenceUpdate('recording', from)
var respostaAudio = await textoParaVoz(args[0], usuarioTexto)
if (args[0] == 'en') {
bot.sendMessage(from, { react: { text: '🇺🇲', key: info.key }})
} else if (args[0] == 'pt') {
const emojispt = ['🇵🇹', '🇧🇷']
const randomptflagemoji = emojispt[Math.floor(Math.random() * emojispt.length)]
bot.sendMessage(from, { react: { text: randomptflagemoji, key: info.key }})
} else if (args[0] == 'ja') {
bot.sendMessage(from, { react: { text: '🇯🇵', key: info.key }})
} else if (args[0] == 'es') {
const emojises = ['🇧🇿', '🇨🇷', '🇸🇻', '🇬🇹', '🇭🇳', '🇳🇮', '🇵🇦', '🇦🇷', '🇧🇴', '🇨🇱', '🇨🇴', '🇪🇨', '🇬🇾', '🇬🇫', '🇵🇾', '🇵🇪', '🇸🇷', '🇺🇾', '🇻🇪', '🇲🇽', '🇪🇸']
const randomesflagemoji = emojises[Math.floor(Math.random() * emojises.length)]
bot.sendMessage(from, { react: { text: randomesflagemoji, key: info.key }})
} else if (args[0] == 'it') {
bot.sendMessage(from, { react: { text: '🇮🇹', key: info.key }})
} else if (args[0] == 'ru') {
bot.sendMessage(from, { react: { text: '🇷🇺', key: info.key }})
} else if (args[0] == 'ko') {
bot.sendMessage(from, { react: { text: '🇰🇷', key: info.key }})
} else if (args[0] == 'sv') {
bot.sendMessage(from, { react: { text: '🇸🇪', key: info.key }})
} else if (args[0] == 'ar') {
bot.sendMessage(from, { react: { text: '🇸🇦', key: info.key }})
} else if (args[0] == 'fr') {
bot.sendMessage(from, { react: { text: '🇫🇷', key: info.key }})
} else if (args[0] == 'de') {
bot.sendMessage(from, { react: { text: '🇩🇪', key: info.key }})
} else if (args[0] == 'id') {
bot.sendMessage(from, { react: { text: '🇮🇩', key: info.key }})
}
await bot.sendMessage(from, { audio: fs.readFileSync(respostaAudio), mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
await fs.unlinkSync(respostaAudio)
} catch(err) {
reply(vozErroMensagem())
}
}
break
case 'traducir': case 'translate':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(traduzirArgsMensagem(prefix, cmd))
if (args[0] != 'af' && args[0] != 'sq' && args[0] != 'am' && args[0] != 'ar' && args[0] != 'hy' && args[0] != 'as' && args[0] != 'ay' && args[0] != 'az' && args[0] != 'bm' && args[0] != 'eu' && args[0] != 'be' && args[0] != 'bn' && args[0] != 'bho' && args[0] != 'bs' && args[0] != 'bg' && args[0] != 'ca' && args[0] != 'ceb' && args[0] != 'zh-CN' && args[0] != 'zh-Hant' && args[0] != 'co' && args[0] != 'hr' && args[0] != 'cs' && args[0] != 'da' && args[0] != 'dv' && args[0] != 'doi' && args[0] != 'nl' && args[0] != 'en' && args[0] != 'es' && args[0] != 'eo' && args[0] != 'et' && args[0] != 'ee' && args[0] != 'fil' && args[0] != 'fi' && args[0] != 'fr' && args[0] != 'fy' && args[0] != 'gl' && args[0] != 'ka' && args[0] != 'de' && args[0] != 'el' && args[0] != 'gn' && args[0] != 'gu' && args[0] != 'ht' && args[0] != 'ha' && args[0] != 'haw' && args[0] != 'he' && args[0] != 'hi' && args[0] != 'hmn' && args[0] != 'hu' && args[0] != 'is' && args[0] != 'ig' && args[0] != 'il' && args[0] != 'id' && args[0] != 'ga' && args[0] != 'it' && args[0] != 'ja' && args[0] != 'ja' && args[0] != 'kn' && args[0] != 'kk' && args[0] != 'km' && args[0] != 'rw' && args[0] != 'gom' && args[0] != 'ko' && args[0] != 'kri' && args[0] != 'ku' && args[0] != 'ckb' && args[0] != 'ky' && args[0] != 'lo' && args[0] != 'la' && args[0] != 'lv' && args[0] != 'ln' && args[0] != 'lt' && args[0] != 'lg' && args[0] != 'lb' && args[0] != 'mk' && args[0] != 'mai' && args[0] != 'mg' && args[0] != 'ms' && args[0] != 'ml' && args[0] != 'mt' && args[0] != 'mi' && args[0] != 'mr' && args[0] != 'mni-Mtei' && args[0] != 'lus' && args[0] != 'mn' && args[0] != 'my' && args[0] != 'ne' && args[0] != 'no' && args[0] != 'ny' && args[0] != 'or' && args[0] != 'om' && args[0] != 'ps' && args[0] != 'fa' && args[0] != 'pl' && args[0] != 'pt' && args[0] != 'pa' && args[0] != 'qu' && args[0] != 'ro' && args[0] != 'ru' && args[0] != 'sm' && args[0] != 'sa' && args[0] != 'gd' && args[0] != 'nso' && args[0] != 'sr' && args[0] != 'st' && args[0] != 'sn' && args[0] != 'sd' && args[0] != 'si' && args[0] != 'sk' && args[0] != 'sl' && args[0] != 'so' && args[0] != 'su' && args[0] != 'sw' && args[0] != 'sv' && args[0] != 'tl' && args[0] != 'tg' && args[0] != 'ta' && args[0] != 'tt' && args[0] != 'te' && args[0] != 'th' && args[0] != 'ti' && args[0] != 'ts' && args[0] != 'tr' && args[0] != 'tk' && args[0] != 'ak' && args[0] != 'uk' && args[0] != 'ur' && args[0] != 'ug' && args[0] != 'uz' && args[0] != 'vi' && args[0] != 'cy' && args[0] != 'xh' && args[0] != 'yi' && args[0] != 'yo' && args[0] != 'zu') return reply(selecionarIdiomaTradutorErroMensagem())
if (!args[1]) return reply(traduzirArgsMensagem(prefix, cmd))
txt = args.slice(1).join(' ')
try {
let result = await translate(`${txt}`, { to: args[0], autoCorrect: true })
await bot.sendMessage(from, { text: result.txt}, {quoted: info})
} catch {
try {
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${encodeURIComponent(args[0])}?apikey=GataDios&text=${encodeURIComponent(txt)}`)
let loll = await lol.json()
let result2 = loll.result.translated
if (loll.result.from == args[0]) return reply(jaEstaNoIdiomaErroMensagem())
await bot.sendMessage(from, { text: result2}, {quoted: info} )
} catch (e) {
reply(traduzirErroMensagem())
}
}
}
break
case 'frase':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (isNaN(args[0])) return reply(fraseArgsMensagem(prefix, cmd))
if (args[0] < 1 || args[0] > 99) return reply(fraseErroMensagem())
if (args[1]) return reply(fraseArgsMensagem(prefix, cmd))
let json = JSON.parse(JSON.stringify(frases))
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, '')) 
return reply(`────┤『 𝑭𝑹𝑨𝑺𝑬⃟${index} 🍷 』├────

${arabic}

${latin}

${translation_id}

${translation_en}
`.trim())
}
break
case 'bass': case 'volumen':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter:a", "volume=4.0"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'reverse':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter_complex", "areverse"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'slow': case 'slowed':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-af", "asetrate=44100*0.8"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'slow2': case 'slowed2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter:a", "atempo=0.7,asetrate=44100'"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'speed': case 'speedup':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-af", "asetrate=44100*1.4"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'alto':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter_complex", "acrusher=level_in=3:level_out=5:bits=10:mode=log:aa=1"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'robot':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter_complex", "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75'"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'blown':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-af", "acrusher=.1:1:64:0:log"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'deep':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-af", "atempo=4/4,asetrate=44500*2/3"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'earrape':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-af", "volume=12"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'fat':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter:a", "atempo=1.6,asetrate=22100'"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case '2x':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'tupai':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!isQuotedAudio) return reply(audioErroMensagem())
if (texto) return reply(audioFxErroMensagem(prefix, cmd))
const ipath = await downloadAudio(info, `${Math.floor(Math.random() * 10000)}`)
const opath = path.resolve(audiotempfolder, `${Math.floor(Math.random() * 10000)}.mp3`)
const emojisfx = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🆗', '✨', '🎧']
const randomemojismsg = emojisfx[Math.floor(Math.random() * emojisfx.length)]
const msgsfx = [enviandoFxMensagem1(), enviandoFxMensagem2(), enviandoFxMensagem3()]
const randomfxmsg = msgsfx[Math.floor(Math.random() * msgsfx.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomfxmsg)
ffmpeg(ipath).outputOptions(["-y", "-filter:a", "atempo=0.5,asetrate=65100'"]).toFormat("mp3").save(opath).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
bot.sendPresenceUpdate('recording', from)
await bot.sendMessage(from, { audio: fs.readFileSync(opath), mimetype: 'audio/mpeg', ptt: true}, { quoted: info })
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
}).on("error", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
})
}
break
case 'play': case 'song': case 'cancion': case 'musica': case 'msc': {
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(musicaErroMensagem(prefix, cmd))
if (isUrl(texto)) return reply(linkNaoPermitidoErroMensagem())
const emojis = ['🎶', '✅', '🎵', '💙', '🔊', '✔', '☑', '🔉', '✨', '🎧']
const randomemojismsg = emojis[Math.floor(Math.random() * emojis.length)]
const msgs = [enviandoMusicaMensagem1(), enviandoMusicaMensagem2(), enviandoMusicaMensagem3(), enviandoMusicaMensagem4(), enviandoMusicaMensagem5()]
const randomplaymsg = msgs[Math.floor(Math.random() * msgs.length)]
bot.sendMessage(from, { react: { text: randomemojismsg, key: info.key }})
reply(randomplaymsg)
let yts = require("youtube-yts")
let search = await yts(texto)
let anup3k = search.videos[0]
const pl = await ytdl2.mp3(anup3k.url)
const vid = await ytdl2.mp4(anup3k.url)
const ytc =`🔎 Canal: ${vid.channel}`
await bot.sendMessage(from,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mpeg', ptt: false,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: ytc,
thumbnail: await fetchBuffer(pl.meta.image),
mediaType:2,
mediaUrl:anup3k.url,
}
},
},{quoted:info})
await fs.unlinkSync(pl.path)
}
}
break
case "ytmp3": case "ytaudio":
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (args.length < 1 || !isUrl(texto) || !ytdl2.isYTUrl(texto)) return reply(linkMP3ErroMensagem())
if (args[1]) return reply(linkMP3ErroMensagem())
reply(enviandoMP3Mensagem())
const audio = await ytdl2.mp3(texto)
await bot.sendMessage(from, { 
audio: fs.readFileSync(audio.path),
mimetype: 'audio/mpeg', ptt: false }, { quoted: info })
await fs.unlinkSync(audio.path)
}
break
case 'ytmp4': case 'ytvideo': {
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (args.length < 1 || !isUrl(texto) || !ytdl2.isYTUrl(texto)) return reply(linkVideoErroMensagem())
if (args[1]) return reply(linkVideoErroMensagem())
bot.sendMessage(from, { react: { text: `🎞️`, key: info.key }})
reply(enviandoVideoMensagem())
const vid = await ytdl2.mp4(texto)
const ytc = `🎶️ Título: ${vid.title}
🗓 Fecha de envío: ${vid.date}
⏰ Duración: ${vid.duration}
🔎 Canal: ${vid.channel}
🎥 Calidad: ${vid.quality}
💬 Descripción: ${vid.description}`
await bot.sendMessage(from, {
video: {url:vid.videoUrl},
caption: ytc,
},{quoted:info})
}
}
break
case 'ytdoc':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (args.length < 1 || !isUrl(texto) || !ytdl2.isYTUrl(texto)) return reply(linkDocErroMensagem())
if (args[1]) return reply(linkDocErroMensagem())
bot.sendMessage(from, { react: { text: `📁`, key: info.key }})
reply(enviandoDocMensagem())
const audio2 = await ytdl2.mp3(texto)
await bot.sendMessage(from,{
document: fs.readFileSync(audio2.path),
fileName: `YTDOC_${Math.floor(Math.random() * 10000)}.mp3`,
mimetype: 'audio/mpeg',
}, {quoted: info})
await fs.unlinkSync(audio2.path)
}
break
case 'listagrupos':
try {
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(listaGruposErroMensagem())
if (hasGroupOwner && isGroupOwner) {
let getGroups = await bot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
txt = `✦ ────『 *Grupos* 』──── ⚝\n━━━━━━━━━━━━━━━━━━━━━━\n𝗧𝗼𝘁𝗮𝗹: ${groups.length}\n━━━━━\n`
array_owners = []
for(let a of groups) {
txt += `𝗡𝗼𝗺𝗯𝗿𝗲 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼: ${a.subject}\n`
txt += `𝗗𝘂𝗲𝗻̃𝗼(𝗮) / 𝗰𝗿𝗲𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "No tiene 🚫"}\n`
txt += `𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}\n━━━━━━━━━━━━━━━━━\n
`
if(a.owner !== undefined) {
array_owners.push(`${a.owner}`)
}
}
bot.sendMessage(from, {text: txt, mentions: array_owners}, {quoted: selo})
} else if (isDono) {
let getGroups = await bot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
txt = `✦ ────『 *Grupos* 』──── ⚝\n━━━━━━━━━━━━━━━━━━━━━━\n𝗧𝗼𝘁𝗮𝗹: ${groups.length}\n━━━━━\n`
array_owners = []
for(let a of groups) {
txt += `𝗡𝗼𝗺𝗯𝗿𝗲 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼: ${a.subject}\n`
txt += `𝗗𝘂𝗲𝗻̃𝗼(𝗮) / 𝗰𝗿𝗲𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "No tiene 🚫"}\n`
txt += `𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}\n`
txt += `𝗜𝗱: ${a.id}\n━━━━━━━━━━━━━━━━━\n
`
if(a.owner !== undefined) {
array_owners.push(`${a.owner}`)
}
}
bot.sendMessage(from, {text: txt, mentions: array_owners}, {quoted: selo})
} else {
reply(donoGrupoOuCriadorErroMensagem())
}
}
} catch (e) {
console.log(e)
}
break
case 'nombregrupo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (!texto) return reply(nomeErroMensagem())
bot.groupUpdateSubject(from, texto)
}
break
case 'descgrupo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (!texto) return reply(descErroMensagem())
bot.groupUpdateDescription(from, texto)
}
break
case 'cerrargrupo':
if(isGroup) {
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (texto) return reply(fecharGrupoErroMensagem())
bot.groupSettingUpdate(from, 'announcement')
}
break
case 'abrirgrupo':
if(isGroup) {
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (texto) return reply(abrirGrupoErroMensagem())
bot.groupSettingUpdate(from, 'not_announcement')
}
break
case 'cerrargrupotmp':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (!texto) return reply(fecharGrupoTempErroMensagem())
if (isNaN(args[0])) return reply(apenasNumerosErroMensagem())
if (args[0] >= 100000) return reply(tempoLongoErroMensagem())
if (args[0] >= 51000 && args[1] == 'minutos') return reply(tempoLongoErroMensagem())
if (args[0] >= 91 && args[1] == 'dias') return reply(tempoLongoErroMensagem())
if (args[1] == 'segundos') {
var timer = args[0] * `1000`
} else if (args[1] == 'minutos') {
var timer = args[0] * `60000`
} else if (args[1] == 'horas') {
var timer = args[0] * `3600000`
} else if (args[1] == 'dias') {
var timer = args[0] * `86400000`
} else {
return reply(escolherTimerFecharGrupoMensagem())
}
var admin = `@${sender.split('@')[0]}`
bot.sendMessage(from, { text: grupoFechadoTempMensagem(admin, q), mentions: [sender]})
setTimeout(() => {
bot.groupSettingUpdate(from, 'announcement')
}, timer)
}
break
case 'abrirgrupotmp':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (!texto) return reply(abrirGrupoTempErroMensagem())
if (isNaN(args[0])) return reply(apenasNumerosErroMensagem())
if (args[0] >= 100000) return reply(tempoLongoErroMensagem())
if (args[0] >= 51000 && args[1] == 'minutos') return reply(tempoLongoErroMensagem())
if (args[0] >= 91 && args[1] == 'dias') return reply(tempoLongoErroMensagem())
if (args[1] == 'segundos') {
var timer = args[0] * `1000`
} else if (args[1] == 'minutos') {
var timer = args[0] * `60000`
} else if (args[1] == 'horas') {
var timer = args[0] * `3600000`
} else if (args[1] == 'dias') {
var timer = args[0] * `86400000`
} else {
return reply(escolherTimerAbrirGrupoMensagem())
}
var admin = `@${sender.split('@')[0]}`
bot.sendMessage(from, { text: grupoAbertoTempMensagem(admin, q), mentions: [sender]})
setTimeout(() => {
bot.groupSettingUpdate(from, 'not_announcement')
}, timer)
}
break
case 'permitireditargrupo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (texto) return reply(perEditarGrupoErroMensagem())
bot.groupSettingUpdate(from, 'unlocked')
bot.sendMessage(from, { text: grupoPermitirEditarMensagem() })
}
break
case 'denegareditargrupo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (texto) return reply(negarEditarGrupoErroMensagem())
bot.groupSettingUpdate(from, 'locked')
bot.sendMessage(from, { text: grupoNegarEditarMensagem() })
}
break
case 'linkgrupo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(linkGrupoErroMensagem())
if (Number(args[0]) === 1) {
if (isLinkGrupo) return reply(linkGrupoJaAtivoErroMensagem())
linkgrupo.push(from)
fs.writeFileSync('./src/linkgrupo.json', JSON.stringify(linkgrupo))
reply(linkGrupoAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isLinkGrupo) return reply(linkGrupoNaoAtivoErroMensagem())
linkgrupo.splice(from, 1)
fs.writeFileSync('./src/linkgrupo.json', JSON.stringify(linkgrupo))
bot.sendMessage(from, { text: linkGrupoDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
}
break
case 'link':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (texto) return reply(linkErroMensagem())
if (!isGroupAdmins && isLinkGrupo) {
const link = await bot.groupInviteCode(from)
reply(linkMensagem(link))
} else if (!isGroupAdmins && !isLinkGrupo) {
reply(linkDesativadoErroMensagem())
} else if (isGroupAdmins) {
const link = await bot.groupInviteCode(from)
reply(linkMensagem(link))
}
}
break
case 'redefinir':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (texto) return reply(redefinirErroMensagem())
try {
await bot.groupRevokeInvite(from)
reply(linkRedefinidoMensagem())
} catch (e) {
console.log(e)
reply(linkNaoRedefiniuErroMensagem())
}
}
break
case 'chatgpt': case 'gpt':{
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (!texto) return reply(chatGPTErroMensagem())
const apiUrl1 = `https://api.vihangayt.asia/ai/chatgpt?q=${encodeURIComponent(q)}`
const apiUrl2 = `https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(q)}&model=llama`        
try {   
const response1 = await fetch(apiUrl1)
const responseData1 = await response1.json()
if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {
const message = responseData1.data
await bot.sendMessage(from, { text: message, mentions: [sender] }, { quoted: info })
} else {
const response2 = await fetch(apiUrl2)
const responseData2 = await response2.json()
if (response2.status === 200 && responseData2 && responseData2.data) {
const message = responseData2.data
await bot.sendMessage(from, { text: message, mentions: [sender] }, { quoted: info })
} else {
reply(chatGPTApi1ErroMensagem())
}
}
} catch (error) {
console.error(error)
reply(chatGPTApi2ErroMensagem())
}
}
}
break
case 'promover':
try {
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply(promoverErroMensagem())
mentioned1 = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (!groupAdmins.includes(mentioned1)) {
let response = await bot.groupParticipantsUpdate(from, [mentioned1], 'promote')
if (response[0].status === "404") return reply(membroDesconhecidoErroMensagem())
bot.sendMessage(from, { text: promoverMensagem(mentioned1), mentions: [mentioned1] })
} else {
reply(membroAdminErroMensagem())
}
if (info.quoted && texto) {
let users = info.mentionedUser[0] ? info.mentionedUser[0] : info.quoted ? info.key.participant : texto.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (!groupAdmins.includes(users)) {
await bot.groupParticipantsUpdate(from, [users], 'promote')
bot.sendMessage(from, { text: promoverMensagem(users), mentions: [users] })
 } else {
reply(membroAdminErroMensagem())
}
}
}
} catch (erro) {
console.log(erro)
}
break
case 'sacaradmin':
try {
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply(rebaixarErroMensagem())
mentioned1 = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (mentioned1.includes(groupOwner)) return reply(membroDonoRebaixarErroMensagem())
if (groupAdmins.includes(mentioned1)) {
let response = await bot.groupParticipantsUpdate(from, [mentioned1], 'demote')
if (response[0].status === "404") return reply(membroDesconhecidoErroMensagem())
bot.sendMessage(from, { text: rebaixarMensagem(mentioned1), mentions: [mentioned1] })
} else {
reply(membroSemAdminErroMensagem())
}
if (info.quoted && texto) {
let users = info.mentionedUser[0] ? info.mentionedUser[0] : info.quoted ? info.key.participant : texto.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (users.includes(groupOwner)) return reply(membroDonoRebaixarErroMensagem())
if (groupAdmins.includes(users)) {
await bot.groupParticipantsUpdate(from, [users], 'demote')
bot.sendMessage(from, { text: rebaixarMensagem(users), mentions: [users] })
} else {
reply(membroSemAdminErroMensagem())
}
}
}
} catch (erro) {
console.log(erro)
}
break
case 'ban': case 'kick':
try {
if(isGroup) {
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply(banErroMensagem())
mentioned1 = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (mentioned1.includes(sender)) return reply(mesmoMembroBanErroMensagem())
if (mentioned1.includes(botNumber)) return reply(botBanErroMensagem())
if (mentioned1.includes(groupOwner)) return reply(membroDonoBanErroMensagem())
let response = await bot.groupParticipantsUpdate(from, [mentioned1], 'remove')
if (response[0].status === "404") return reply(membroDesconhecidoErroMensagem())
if (info.quoted && texto) {
let users = info.mentionedUser[0] ? info.mentionedUser[0] : info.quoted ? info.key.participant : texto.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (texto.includes(sender)) return reply(mesmoMembroBanErroMensagem())
if (texto.includes(users)) return reply(botBanErroMensagem())
if (users.includes(groupOwner)) return reply(membroDonoBanErroMensagem())
await bot.groupParticipantsUpdate(from, [users], 'remove')
}
}
} catch (erro) {
console.log(erro)
 }
break
case 'addlistanegra':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(addListaNegraErroMensagem())
if (isNaN(args[0])) return reply(addListaNegraErroMensagem())
var ind = dbids.indexOf(from)
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
if(isListaNegra) {
var numind = listanegra[ind].number.indexOf(listng)
if(numind >= 0) return reply(numeroJaAdcionadoErroMensagem())
listanegra[ind].number.push(listng)
} else {
listanegra.push({
groupId: from,
actived: true,
number: [listng]
})
}
fs.writeFileSync('./src/listanegra.json', JSON.stringify(listanegra, null, 2) + '\n')
bot.sendMessage(from, { text: addListaNegraMensagem(listng)})
}
break
case 'sacarlistanegra':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(removerListaNegraErroMensagem())
if (isNaN(args[0])) return reply(removerListaNegraErroMensagem())
var ind = dbids.indexOf(from)
if(!isListaNegra) return reply(semNumeroAlgumErroMensagem())
var numind = listanegra[ind].number.indexOf(args[0])
if(numind < 0) return reply(numeroNaoAdcionadoErroMensagem())
listanegra[ind].number.splice(numind, 1)
fs.writeFileSync('./src/listanegra.json', JSON.stringify(listanegra, null, 2) + '\n')
bot.sendMessage(from, { text: removerListaNegraMensagem(texto)})
}
break
case 'listanegra':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (texto) return reply(listaNegraErroMensagem())
var ind = dbids.indexOf(from)
if(!isListaNegra) return reply(semNumeroAlgumErroMensagem())
teks = '👾 *Lista Negra - Números* 👾\n'
for(i=0;i<listanegra[ind].number.length;++i) {
teks += `➤ *${listanegra[ind].number[i]}*\n`
}
reply(teks)
}
break
case 'bienvenido':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(bemvindoErroMensagem())
if (!isBemVindo2) {
if (Number(args[0]) === 1) {
if (isBemVindo) return reply(bemvindoJaAtivoErroMensagem())
bemvindo.push(from)
fs.writeFileSync('./src/bemvindo.json', JSON.stringify(bemvindo))
reply(bemvindoAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isBemVindo) return reply(bemvindoNaoAtivoErroMensagem())
bemvindo.splice(from, 1)
fs.writeFileSync('./src/bemvindo.json', JSON.stringify(bemvindo))
bot.sendMessage(from, { text: bemvindoDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
} else {
reply(bemvindoDoisEstaAtivoErroMensagem())
}
}
break
case 'bienvenido2':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(bemvindoDoisErroMensagem())
if (!isBemVindo) {
if (Number(args[0]) === 1) {
if (isBemVindo2) return reply(bemvindoDoisJaAtivoErroMensagem())
bemvindodois.push(from)
fs.writeFileSync('./src/bemvindo2.json', JSON.stringify(bemvindodois))
reply(bemvindoDoisAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isBemVindo2) return reply(bemvindoDoisNaoAtivoErroMensagem())
bemvindodois.splice(from, 1)
fs.writeFileSync('./src/bemvindo2.json', JSON.stringify(bemvindodois))
bot.sendMessage(from, { text: bemvindoDoisDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
} else {
reply(bemvindoEstaAtivoErroMensagem())
}
}
break
case 'adminlogs':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(adminLogsErroMensagem())
if (Number(args[0]) === 1) {
if (isAdminLogs) return reply(adminLogsJaAtivoErroMensagem())
adminlogsinfo.push(from)
fs.writeFileSync('./src/admin_msgs.json', JSON.stringify(adminlogsinfo))
reply(adminLogsAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAdminLogs) return reply(adminLogsNaoAtivoErroMensagem())
adminlogsinfo.splice(from, 1)
fs.writeFileSync('./src/admin_msgs.json', JSON.stringify(adminlogsinfo))
bot.sendMessage(from, { text: adminLogsDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
}
break
case 'antilink':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(antilinkErroMensagem())
if (!isAntiLinkGrupo) {
if (Number(args[0]) === 1) {
if (isAntiLink) return reply(antilinkJaAtivoErroMensagem())
antilink.push(from)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
reply(antilinkAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply(antilinkNaoAtivoErroMensagem())
antilink.splice(from, 1)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
bot.sendMessage(from, { text: antilinkDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
} else {
reply(antilinkGrupoEstaAtivoErroMensagem())
}
}
break
case 'antilinkgrupo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(antilinkGrupoErroMensagem())
if (!isAntiLink) {
if (Number(args[0]) === 1) {
if (isAntiLinkGrupo) return reply(antilinkGrupoJaAtivoErroMensagem())
antilinkgrupo.push(from)
fs.writeFileSync('./src/antilinkgrupo.json', JSON.stringify(antilinkgrupo))
reply(antilinkGrupoAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAntiLinkGrupo) return reply(antilinkGrupoNaoAtivoErroMensagem())
antilinkgrupo.splice(from, 1)
fs.writeFileSync('./src/antilinkgrupo.json', JSON.stringify(antilinkgrupo))
bot.sendMessage(from, { text: antilinkGrupoDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
} else {
reply(antilinkEstaAtivoErroMensagem())
}
}
break
case 'antiporno':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(antiPornoErroMensagem())
if (Number(args[0]) === 1) {
if (isAntiPorno) return reply(antiPornoJaAtivoErroMensagem())
antiporno.push(from)
fs.writeFileSync('./src/antiporno.json', JSON.stringify(antiporno))
reply(antiPornoAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAntiPorno) return reply(antiPornoNaoAtivoErroMensagem())
antiporno.splice(from, 1)
fs.writeFileSync('./src/antiporno.json', JSON.stringify(antiporno))
bot.sendMessage(from, { text: antiPornoDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
}
break
case 'antifoto':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(antiFotoErroMensagem())
if (Number(args[0]) === 1) {
if (isAntiFoto) return reply(antiFotoJaAtivoErroMensagem())
antifoto.push(from)
fs.writeFileSync('./src/antifoto.json', JSON.stringify(antifoto))
reply(antiFotoAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAntiFoto) return reply(antiFotoNaoAtivoErroMensagem())
antifoto.splice(from, 1)
fs.writeFileSync('./src/antifoto.json', JSON.stringify(antifoto))
bot.sendMessage(from, { text: antiFotoDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
}
break
case 'antivideo':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(antiVideoErroMensagem())
if (Number(args[0]) === 1) {
if (isAntiVideo) return reply(antiVideoJaAtivoErroMensagem())
antivideo.push(from)
fs.writeFileSync('./src/antivideo.json', JSON.stringify(antivideo))
reply(antiVideoAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAntiVideo) return reply(antiVideoNaoAtivoErroMensagem())
antivideo.splice(from, 1)
fs.writeFileSync('./src/antivideo.json', JSON.stringify(antivideo))
bot.sendMessage(from, { text: antiVideoDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
}
break
case 'antiaudio':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(antiAudioErroMensagem())
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply(antiAudioJaAtivoErroMensagem())
antiaudio.push(from)
fs.writeFileSync('./src/antiaudio.json', JSON.stringify(antiaudio))
reply(antiAudioAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply(antiAudioNaoAtivoErroMensagem())
antiaudio.splice(from, 1)
fs.writeFileSync('./src/antiaudio.json', JSON.stringify(antiaudio))
bot.sendMessage(from, { text: antiAudioDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
}
break
case 'antisticker':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
// if (!isGroup) return reply(grupoErroMensagem())
if (!isBotAdmins) return reply(botAdminErroMensagem())
if (!isGroupAdmins) return reply(adminErroMensagem())
if (args.length < 1) return reply(antiStickerErroMensagem())
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply(antiStickerJaAtivoErroMensagem())
antisticker.push(from)
fs.writeFileSync('./src/antisticker.json', JSON.stringify(antisticker))
reply(antiStickerAtivadoMensagem())
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply(antiStickerNaoAtivoErroMensagem())
antisticker.splice(from, 1)
fs.writeFileSync('./src/antisticker.json', JSON.stringify(antisticker))
bot.sendMessage(from, { text: antiStickerDesativadoMensagem() })
} else {
reply(antiArgsErroMensagem())
}
}
break
case 'horarios':
if(isGroup) {
bot.sendPresenceUpdate('composing', from)
if (texto) return reply(horariosErroMensagem())
horariosMensagem(bot, from, liveselo)
}
break
default:
if(isCmd) return reply(comandoInexistenteErroMensagem())
if (isGroup && isAntiLinkGrupo && budy.includes("https://chat.whatsapp.com/")) {
if (!isGroupAdmins) {
if (!isBotAdmins) return bot.sendMessage(from, { text: botAdminLinkGrupoErroMensagem() })
var user = `${sender.split("@")[0]}@s.whatsapp.net`
reply(linkGrupoDetectadoMensagem())
bot.groupSettingUpdate(from, 'announcement')
setTimeout( () => {
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
bot.groupParticipantsUpdate(from, [user], 'remove')
bot.groupSettingUpdate(from, 'not_announcement')
}, 3000)
}
} else if (isGroup && isAntiLink) {
if (budy.includes("https://") || budy.includes(".com")) {
if (!isGroupAdmins) {
if (!isBotAdmins) return bot.sendMessage(from, { text: botAdminLinkErroMensagem() })
var user = `${sender.split("@")[0]}@s.whatsapp.net`
reply(linkDetectadoMensagem())
bot.groupSettingUpdate(from, 'announcement')
setTimeout( () => {
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
bot.groupParticipantsUpdate(from, [user], 'remove')
bot.groupSettingUpdate(from, 'not_announcement')
}, 3000)
}
}
}
if (isGroup && isAntiPorno) {
if (!isGroupAdmins) {
if (!isBotAdmins) return bot.sendMessage(from, { text: botAdminPornoErroMensagem() })
if(isImage) {
let localArquivo = await downloadImage(info, `${Math.floor(Math.random() * 10000)}`)
let content = await UploadFileUgu(localArquivo)
sightengine.check(['nudity']).set_url(util.format(content.url)).then(function(result) {
fs.unlinkSync(localArquivo)
if (result.nudity.raw >= 0.70) {
var user = `${sender.split("@")[0]}@s.whatsapp.net`
reply(pornoDetectadoMensagem())
setTimeout( () => {
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
bot.groupParticipantsUpdate(from, [user], 'remove')
}, 3000)
}
}).catch(function(err) {
fs.unlinkSync(localArquivo)
console.log(err)
})
} else if(isSticker) {
let localArquivo = await downloadSticker(info, `${Math.floor(Math.random() * 10000)}`)
let content = await UploadFileUgu(localArquivo)
sightengine.check(['nudity']).set_url(util.format(content.url)).then(function(result) {
fs.unlinkSync(localArquivo)
if (result.nudity.raw >= 0.70) {
var user = `${sender.split("@")[0]}@s.whatsapp.net`
reply(pornoDetectadoMensagem())
setTimeout( () => {
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
bot.groupParticipantsUpdate(from, [user], 'remove')
}, 3000)
}
}).catch(function(err) {
fs.unlinkSync(localArquivo)
console.log(err)
})
}
}
}
if (isGroup && isAntiFoto) {
if (isImage) {
if (!isGroupAdmins) {
if (!isBotAdmins) return bot.sendMessage(from, { text: botAdminFotoErroMensagem() })
var user = `${sender.split("@")[0]}@s.whatsapp.net`
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
}
}
}
if (isGroup && isAntiVideo) {
if (isVideo) {
if (!isGroupAdmins) {
if (!isBotAdmins) return bot.sendMessage(from, { text: botAdminVideoErroMensagem() })
var user = `${sender.split("@")[0]}@s.whatsapp.net`
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
}
}
}
if (isGroup && isAntiAudio) {
if (isAudio) {
if (!isGroupAdmins) {
if (!isBotAdmins) return bot.sendMessage(from, { text: botAdminAudioErroMensagem() })
var user = `${sender.split("@")[0]}@s.whatsapp.net`
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
}
}
}
if (isGroup && isAntiSticker) {
if (isSticker) {
if (!isGroupAdmins) {
if (!isBotAdmins) return bot.sendMessage(from, { text: botAdminStickerErroMensagem() })
var user = `${sender.split("@")[0]}@s.whatsapp.net`
bot.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [user] } })
}
}
}
}
} catch (erro) {
console.log(erro)
}
})
return bot
}
connect()
