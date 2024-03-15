const { extractDataFromMessage, downloadImage, downloadVideo, downloadSticker, tempfolder, criandoStickerMensagem, videoLongoErroMensagem, getMediaMessageContent, comprimirSticker, createStickerMetaData, fetchBuffer, apiErroMensagem } = require('./config')
const addStickerMetaData = require("./addStickerMetaData.js");
const fetch = require('node-fetch')
const { UploadFileUgu } = require("./uploader.js")
const pathToFfmpeg = require("ffmpeg-static")
const ffmpeg = require('fluent-ffmpeg')
const util = require('util')
const fs = require('fs')
const path = require('path')

//ffmpeg.setFfmpegPath(pathToFfmpeg)

class Actions{

constructor(bot, baileysMessage) {
const { remoteJid, isImage, isVideo, isSticker, isAudio } = extractDataFromMessage(baileysMessage)
this.bot = bot
this.remoteJid = remoteJid
this.isImage = isImage
this.isVideo = isVideo
this.isSticker = isSticker
this.isAudio = isAudio
this.baileysMessage = baileysMessage
this.pushname = this.baileysMessage.pushName ? this.baileysMessage.pushName : ''
this.responder = (text) => {
this.bot.sendMessage(this.remoteJid, { text: text }, { quoted: this.baileysMessage })
}
}

async sticker() {
const messageTypes = {
conversation: this.baileysMessage?.message?.conversation,
imageMessage: this.baileysMessage?.message?.imageMessage?.caption,
videoMessage: this.baileysMessage?.message?.videoMessage?.caption,
extendedTextMessage: this.baileysMessage?.message?.extendedTextMessage?.text
}
const mediaMessage = getMediaMessageContent(this.baileysMessage, messageTypes)
if (this.isImage) {
const inputPath = await downloadImage(this.baileysMessage, `${Math.floor(Math.random() * 10000)}`)
const outputPath = path.resolve(tempfolder, `${Math.floor(Math.random() * 10000)}.webp`)
ffmpeg(inputPath).outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-loop 0", "-an", "-vsync 0", "-s 512x512"]).toFormat("webp").save(outputPath)
.on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(inputPath)
fs.unlinkSync(outputPath)
throw new Error(error)
}
const mediaWithMetaDataPath = await addStickerMetaData(outputPath, createStickerMetaData(this.pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await this.bot.sendMessage(this.remoteJid, { sticker: media }, { quoted: this.baileysMessage })
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
} else if (this.isVideo) {
const sizeInSeconds = 12;
const seconds = this.baileysMessage.message?.videoMessage?.seconds || 
this.baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage?.seconds
const haveSecondsRule = seconds <= sizeInSeconds;
if (!haveSecondsRule) return this.responder(videoLongoErroMensagem(sizeInSeconds))
this.responder(criandoStickerMensagem())
const inputPath = await downloadVideo(this.baileysMessage, `${Math.floor(Math.random() * 10000)}`)
const outputPath = path.resolve(tempfolder, `${Math.floor(Math.random() * 10000)}.webp`)
ffmpeg(inputPath).addOutputOptions([`-y`, `-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat("webp").save(outputPath)
.on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(inputPath)
fs.unlinkSync(outputPath)
throw new Error(error)
}
let resultSticker = await fs.promises.readFile(outputPath)
// se o sticker pesa mais que 1MB
if (resultSticker.length > 1000000) {
fs.unlinkSync(outputPath)
// comprimir
return await comprimirSticker(this.bot, this.remoteJid, this.pushname, inputPath, outputPath, this.baileysMessage)
}
const mediaWithMetaDataPath = await addStickerMetaData(outputPath, createStickerMetaData(this.pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await this.bot.sendMessage(this.remoteJid, { sticker: media }, { quoted: this.baileysMessage })
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
} else if (mediaMessage.isAnimated) {
let inputPath = await downloadSticker(this.baileysMessage, `${Math.floor(Math.random() * 10000)}`)
const image = await UploadFileUgu(inputPath)
let api = await fetch(`https://api.ouzen.xyz/convert/webp-to-mp4?url=${encodeURIComponent(util.format(image.url))}&apikey=zenzkey_91737a4ecd09`)
let x = await api.json()
if (x.status == false) return reply(apiErroMensagem())
const emojis2 = ['✔', '☑', '🎞']
const randomemojismsg2 = emojis2[Math.floor(Math.random() * emojis2.length)]
this.bot.sendMessage(this.remoteJid, { react: { text: randomemojismsg2, key: this.baileysMessage.key }})
await this.bot.sendMessage(this.remoteJid, { video: { url: x.result }, gifPlayback: true }, {quoted: this.baileysMessage})
fs.unlinkSync(inputPath)
} else if (this.isSticker) {
const ipath = await downloadSticker(this.baileysMessage, `${Math.floor(Math.random() * 10000)}`)
const emojis = ['✔', '☑']
const randomemojismsg = emojis[Math.floor(Math.random() * emojis.length)]
this.bot.sendMessage(this.remoteJid, { react: { text: randomemojismsg, key: this.baileysMessage.key }})
await this.bot.sendMessage(this.remoteJid, { image: { url: ipath}}, {quoted: this.baileysMessage})
fs.unlinkSync(ipath)
}
}
}

module.exports = Actions
