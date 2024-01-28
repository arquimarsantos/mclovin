const { downloadContentFromMessage, downloadMediaMessage } = require('@whiskeysockets/baileys')
const addStickerMetaData = require("./addStickerMetaData.js")
const { writeFile } = require('fs/promises')
const mimetype = require("mime-types")
const axios = require("axios")
const { randomBytes } = require('crypto')
const ff = require('fluent-ffmpeg')
const path = require('path')
const fs = require('fs')
const prefix = "!"
const nomedono = "ᥲrqᥙιjᥱt᥉kι. 🌙"
const contatodono = "wa.me/4915510203160"
const numerodono = ["4915510203160"]
const nomebot = "☪ 𝙼𝚌𝙻𝚘𝚟𝚒𝚗 - 𝙱𝚘𝚝 シ ☪"
const menuimagem1 = "./src/media/menu1.jpeg"
const menuimagem2 = "./src/media/menu2.jpg"
const menuimagem3 = "./src/media/menu3.jpg"
const menuimagem4 = "./src/media/menu4.jpg"
const menuimagem5 = "./src/media/menu5.jpg"
const menuimagem6 = "./src/media/menu6.jpg"
const menuimagem7 = "./src/media/menu7.jpg"
const menuimagem8 = "./src/media/menu8.jpg"
const menuimagem9 = "./src/media/menu9.jpg"
const menuimagem10 = "./src/media/menu10.jpg"
const menuimagem11 = "./src/media/menu11.jpg"
const semfotoimagem = "./src/media/no_profile.jpg"
const tempfolder = path.resolve('./src/tmp')
const audiotempfolder = path.resolve('./src/audios')

function createStickerMetaData(pushName) {
return {
packname: `彡 💌 𝙲𝚛𝚎𝚊𝚍𝚘 𝚙𝚘𝚛:\n↳ ${nomebot}`,
author: `彡 🧛🏻‍♂️ ᥲrqᥙιjᥱt᥉kι 🌙\n\n彡 👤 ${pushName}`
};
}

function menuMensagem()
{
return `
      ╭━━🦋•ೋೋ• 🦋━━╮
          ${nomebot}   
      ╰━━🦋•ೋೋ• 🦋━━╯

╭━━『🧛🏻‍♂️』ℂℝ𝔼𝔸𝔻𝕆ℝ『🧛🏻‍♂️』
│❒ Dueño : ${nomedono}
│❒ Contacto : ${contatodono}
╰━━『🇧🇷』ℂℝ𝔼𝔸𝔻𝕆ℝ『🇧🇷』

╭━━ 『🐞』𝑴𝑰𝑬𝑴𝑩𝑹𝑶𝑺『🍄』
┝ _➛${prefix}instagram || ${prefix}ig *<texto>*
┝ _➛${prefix}instadl || ${prefix}igdl *<link>*
┝ _➛${prefix}igstory *<texto>*
┝ _➛${prefix}tiktokdl || ${prefix}ttkdl *<link>*
┝ _➛${prefix}pinterest || ${prefix}p *<texto>*
┝ _➛${prefix}pinterestdl *<link>*
┝ _➛${prefix}soundcloud || ${prefix}sc *<link>*
┝ _➛${prefix}soundcloudbuscar || ${prefix}scbuscar *<texto>*
┝ _➛${prefix}stickerbuscar || ${prefix}sbuscar *<texto>*
┝ _➛${prefix}imgbuscar *<texto>*
┝ _➛${prefix}randomprofile || ${prefix}randompfp
┝ _➛${prefix}aesthetic
┝ _➛${prefix}randomanime || ${prefix}anime
┝ _➛${prefix}attp *<texto>* || ${prefix}attp2 *<texto>*
┝ _➛${prefix}ttp *<texto>* || ${prefix}ttp2(6) *<texto>*
┝ _➛${prefix}sticker || ${prefix}s || ${prefix}ss
┝ _➛${prefix}play || ${prefix}song <texto>
┝ _➛${prefix}emojimix
┝ _➛${prefix}ephoto
┝ _➛${prefix}textpro
┝ _➛${prefix}gfx
┝ _➛${prefix}audiofx
┝ _➛${prefix}voz *<texto>* *<texto2>*
┝ _➛${prefix}traducir *<texto>* *<texto2>*
┝ _➛${prefix}chatgpt || ${prefix}gpt *<texto>*
┝ _➛${prefix}sim || ${prefix}simsimi
┝ _➛${prefix}pfp *<etiquetar>*
┝ _➛${prefix}toimg || ${prefix}toimage
┝ _➛${prefix}togif
┝ _➛${prefix}todoc
┝ _➛${prefix}toanime
┝ _➛${prefix}ytmp3 || ${prefix}ytaudio *<link>*
┝ _➛${prefix}ytmp4 || ${prefix}ytvideo *<link>*
┝ _➛${prefix}ytdoc *<link>*
┝ _➛${prefix}link
┝ _➛${prefix}adminlista
┝ _➛${prefix}frase *<número>*
┝ _➛${prefix}horarios
┝ _➛${prefix}bot
┝ _➛${prefix}noticiasbot
╰━

╭━━ 『👑』𝑨𝑫𝑴𝑰𝑵𝑺『🕵🏻‍♀️』
┝ _➛${prefix}ban || ${prefix}kick
┝ _➛${prefix}bienvenido *<1 || 0>*
┝ _➛${prefix}bienvenido2 *<1 || 0>*
┝ _➛${prefix}ocultar || ${prefix}ocultar2
┝ _➛${prefix}etiquetar || ${prefix}mencionar
┝ _➛${prefix}antilink *<1 || 0>*
┝ _➛${prefix}antilinkgrupo *<1 || 0>*
┝ _➛${prefix}nombregrupo *<texto>*
┝ _➛${prefix}descgrupo *<texto>*
┝ _➛${prefix}adminlogs *<1 || 0>*
┝ _➛${prefix}antifoto *<1 || 0>*
┝ _➛${prefix}antivideo *<1 || 0>*
┝ _➛${prefix}cerrargrupo
┝ _➛${prefix}abrirgrupo
┝ _➛${prefix}antiporno *<1 || 0>*
┝ _➛${prefix}linkgrupo *<1 || 0>*
┝ _➛${prefix}listagrupos
┝ _➛${prefix}listanegra
┝ _➛${prefix}permitireditargrupo
┝ _➛${prefix}denegareditargrupo
┝ _➛${prefix}antiaudio *<1 || 0>*
┝ _➛${prefix}antisticker *<1 || 0>*
┝ _➛${prefix}cerrargrupotmp *<tiempo>*
┝ _➛${prefix}abrirgrupotmp *<tiempo>*
┝ _➛${prefix}promover *<etiquetar>*
┝ _➛${prefix}sacaradmin *<etiquetar>*
┝ _➛${prefix}addlistanegra *<número>*
┝ _➛${prefix}sacarlistanegra *<número>*
┝ _➛${prefix}redefinir
╰━
`
}

function grupoErroMensagem()
{
return '[❗] Necesitas estar en un grupo para usar este comando!'
}

function botAdminErroMensagem()
{
return '[❗] Para que este comando funcione el bot debe ser administrador del grupo!'
}

function botAdminLinkErroMensagem()
{
return '[❗] La función antilink no funcionará si el bot no tiene administrador en el grupo.'
}

function botAdminLinkGrupoErroMensagem()
{
return '[❗] La función antilinkgrupo no va funcionar si el bot no tiene administrador en el grupo.'
}

function botAdminFotoErroMensagem()
{
return '[❗] La función antifoto no va funcionar si el bot no tiene administrador en el grupo.'
}

function botAdminVideoErroMensagem()
{
return '[❗] La función antivideo no va funcionar si el bot no tiene administrador en el grupo.'
}

function botAdminAudioErroMensagem()
{
return '[❗] La función antiaudio no va funcionar si el bot no tiene administrador en el grupo.'
}

function botAdminStickerErroMensagem()
{
return '[❗] La función antisticker no va funcionar si el bot no tiene administrador en el grupo.'
}

function botAdminPornoErroMensagem()
{
return '[❗] La función antiporno no va funcionar si el bot no tiene administrador en el grupo.'
}

function adminErroMensagem()
{
return '[❗] Solo los administradores pueden usar este comando!'
}

function donoGrupoOuCriadorErroMensagem()
{
return '[❗] Solo el dueño(a)/creador del grupo puede usar este comando.'
}

function donoErroMensagem()
{
return '[❗] Solo el creador del bot puede usar este comando.'
}

function nomeErroMensagem()
{
return `[❗] Usa ${prefix}nombregrupo <texto>`
}

function descErroMensagem()
{
return `[❗] Usa ${prefix}descgrupo <texto>`
}

function tagErroMensagem()
{
return `[❗] Usa ${prefix}ocultar || ${prefix}ocultar2 <texto>`
}

function promoverErroMensagem()
{
return `[❗] Etiqueta el miembro or la mensaje del miembro que deseas promocionar, usa ${prefix}promover <etiquetar>`
}

function rebaixarErroMensagem()
{
return `[❗] Etiqueta el miembro or la mensaje del miembro que deseas sacar el administrador, usa ${prefix}sacaradmin <etiquetar>`
}

function membroAdminErroMensagem()
{
return '[❗] Este miembro ya es administrador del grupo!'
}

function membroDonoRebaixarErroMensagem()
{
return '[❗] No puedes sacar admin del creador/dueño(a) del grupo!'
}

function membroSemAdminErroMensagem()
{
return '[❗] Este miembro no tiene administrador en el grupo!'
}

function membroDesconhecidoErroMensagem()
{
return '[❗] Este miembro no está en el grupo.'
}

function banErroMensagem()
{
return `[❗] Etiqueta el miembro or la mensaje del miembro que deseas banear, usa ${prefix}ban || ${prefix}kick <etiquetar>`
}

function membroDonoBanErroMensagem()
{
return '[❗] No puedes banear el creador/dueño(a) del grupo!'
}

function mesmoMembroBanErroMensagem()
{
return '[❗] No puedes banear tu mismo(a).'
}

function botBanErroMensagem()
{
return '[❗] No puedes banear el bot del grupo por comando, solo en la lista si quieres!'
}

function antilinkGrupoEstaAtivoErroMensagem()
{
return `[❗] El Antilink-Grupo ya está activado, deshabilíta antes con ${prefix}antilinkgrupo 0`
}

function antilinkEstaAtivoErroMensagem()
{
return `[❗] El Antilink ya está activado, deshabilíta antes con ${prefix}antilink 0`
}

function antilinkJaAtivoErroMensagem()
{
return '[❗] Antilink ya está activo!'
}

function antilinkNaoAtivoErroMensagem()
{
return '[❗] Antilink ya está desactivado!'
}

function antiPornoJaAtivoErroMensagem()
{
return '[❗] Antiporno ya está activo!'
}

function antiPornoNaoAtivoErroMensagem()
{
return '[❗] Antiporno ya está desactivado!'
}

function antiFotoJaAtivoErroMensagem()
{
return '[❗] Antifoto ya está activo!'
}

function antiFotoNaoAtivoErroMensagem()
{
return '[❗] Antifoto ya está desactivado!'
}

function antiVideoJaAtivoErroMensagem()
{
return '[❗] Antivideo ya está activo!'
}

function antiVideoNaoAtivoErroMensagem()
{
return '[❗] Antivideo ya está desactivado!'
}

function antiAudioJaAtivoErroMensagem()
{
return '[❗] Antiaudio ya está activo!'
}

function antiAudioNaoAtivoErroMensagem()
{
return '[❗] Antiaudio ya está desactivado!'
}

function antiStickerJaAtivoErroMensagem()
{
return '[❗] Antisticker ya está activo!'
}

function antiStickerNaoAtivoErroMensagem()
{
return '[❗] Antisticker ya está desactivado!'
}

function antilinkErroMensagem()
{
return `[❗] Usa ${prefix}antilink 1 || 0`
}

function antiFotoErroMensagem()
{
return `[❗] Usa ${prefix}antifoto 1 || 0`
}

function antiVideoErroMensagem()
{
return `[❗] Usa ${prefix}antivideo 1 || 0`
}

function antiAudioErroMensagem()
{
return `[❗] Usa ${prefix}antiaudio 1 || 0`
}

function antiStickerErroMensagem()
{
return `[❗] Usa ${prefix}antisticker 1 || 0`
}

function antiPornoErroMensagem()
{
return `[❗] Usa ${prefix}antiporno 1 || 0`
}

function antiArgsErroMensagem()
{
return '[❗] 1 para activar, 0 para desactivar'
}

function antilinkGrupoJaAtivoErroMensagem()
{
return '[❗] Antilink-Grupo ya está activo!'
}

function antilinkGrupoNaoAtivoErroMensagem()
{
return '[❗] Antilink-Grupo ya está desactivado!'
}

function antilinkGrupoErroMensagem()
{
return `[❗] Usa ${prefix}antilinkgrupo 1 || 0`
}

function linkGrupoJaAtivoErroMensagem()
{
return '[❗] Link grupo ya está activo!'
}

function linkGrupoNaoAtivoErroMensagem()
{
return '[❗] Link grupo ya está desactivado!'
}

function linkGrupoErroMensagem()
{
return `[❗] Usa ${prefix}linkgrupo 1 || 0`
}

function antiBanGhostJaAtivoErroMensagem()
{
return '[❗] Antibanghost ya está activo!'
}

function antiBanGhostNaoAtivoErroMensagem()
{
return '[❗] Antibanghost ya está desactivado!'
}

function antiBanGhostErroMensagem()
{
return `[❗] Usa ${prefix}antibanghost 1 || 0`
}

function bemvindoJaAtivoErroMensagem()
{
return '[❗] Bienvenido ya está activo!'
}

function bemvindoNaoAtivoErroMensagem()
{
return '[❗] Bienvenido ya está desactivado!'
}

function bemvindoErroMensagem()
{
return `[❗] Usa ${prefix}bienvenido 1 || 0`
}

function adminLogsJaAtivoErroMensagem()
{
return '[❗] Adminlogs ya está activo!'
}

function adminLogsNaoAtivoErroMensagem()
{
return '[❗] Adminlogs ya está desactivado!'
}

function adminLogsErroMensagem()
{
return `[❗] Usa ${prefix}adminlogs 1 || 0`
}

function bemvindoDoisJaAtivoErroMensagem()
{
return '[❗] Bienvenido2 ya está activo!'
}

function bemvindoDoisNaoAtivoErroMensagem()
{
return '[❗] Bienvenido2 ya está desactivado!'
}

function bemvindoDoisErroMensagem()
{
return `[❗] Usa ${prefix}bienvenido2 1 || 0`
}

function imagemVideoGifErroMensagem()
{
return `[❗] Etiqueta la imagen/vídeo/gif y usa el comando para hacer el sticker!\n \n➳ ${prefix}sticker || ${prefix}s (sticker grande)\n➳ ${prefix}ss (sticker medio, no cambia en el vídeo!!)`
}

function videoLongoErroMensagem(segundos)
{
return `[❗] El vídeo tiene más de ${segundos} segundos, necesita estar abajo de ese tiempo!`
}

function toImgErroMensagem()
{
return `[❗] Ingrese ${prefix}toimg || ${prefix}toimage sin argumentos!`
}

function botErroMensagem()
{
return `[❗] Ingrese ${prefix}bot sin argumentos!`
}

function comandosImgEditorErroMensagem(pfx, cmd)
{
return `[❗] Usa ${pfx}${cmd} <texto>`
}

function comandos2ImgEditorErroMensagem(pfx, cmd)
{
return `[❗] Usa ${pfx}${cmd} <texto> <texto2>`
}

function comandos3ImgEditorErroMensagem(pfx, cmd)
{
return `[❗] Usa ${pfx}${cmd} <texto> <número>`
}

function toGifErroMensagem()
{
return `[❗] Ingrese ${prefix}togif sin argumentos!`
}

function stickerImagemErroMensagem()
{
return '[❗] Etiqueta un sticker y usa el comando para hacer la imagen!'
}

function stickerAnimadoErroMensagem()
{
return `[❗] Esto es un sticker animado, usa ${prefix}togif para convertir en gif.`
}

function stickerGifErroMensagem()
{
return '[❗] Etiqueta un sticker y usa el comando para hacer el gif!'
}

function stickerNaoAnimadoErroMensagem()
{
return `[❗] Esto no es un sticker animado, usa ${prefix}toimg para convertir este tipo de sticker como imagen.`
}

function menuErroMensagem()
{
return `[❗] Ingrese ${prefix}menu sin argumentos!`
}

function marcarErroMensagem()
{
return `[❗] Ingrese ${prefix}etiquetar || ${prefix}mencionar sin argumentos!`
}

function stickerErroMensagem()
{
return `[❗] Ingrese ${prefix}s || ${prefix}sticker sin argumentos!`
}

function listaGruposErroMensagem()
{
return `[❗] Ingrese ${prefix}listagrupos sin argumentos!`
}

function fecharGrupoErroMensagem()
{
return `[❗] Ingrese ${prefix}cerrargrupo sin argumentos!`
}

function abrirGrupoErroMensagem()
{
return `[❗] Ingrese ${prefix}abrirgrupo sin argumentos!`
}

function perEditarGrupoErroMensagem()
{
return `[❗] Ingrese ${prefix}permitireditargrupo sin argumentos!`
}

function negarEditarGrupoErroMensagem()
{
return `[❗] Ingrese ${prefix}denegareditargrupo sin argumentos!`
}

function horariosErroMensagem()
{
return `[❗] Ingrese ${prefix}horarios sin argumentos!`
}

function adminListaErroMensagem()
{
return `[❗] Ingrese ${prefix}adminlista sin argumentos!`
}

function linkErroMensagem()
{
return `[❗] Ingrese ${prefix}link sin argumentos!`
}

function redefinirErroMensagem()
{
return `[❗] Ingrese ${prefix}redefinir sin argumentos!`
}

function listaNegraErroMensagem()
{
return `[❗] Ingrese ${prefix}listanegra sin argumentos!`
}

function musicaErroMensagem(prefix, cmd)
{
return `[❗] Usa ${prefix}${cmd} <texto>`
}

function linkMP3ErroMensagem()
{
return `[❗] Usa ${prefix}ytmp3 || ${prefix}ytaudio <link>`
}

function linkVideoErroMensagem()
{
return `[❗] Usa ${prefix}ytmp4 || ${prefix}ytvideo <link>`
}

function linkDocErroMensagem()
{
return `[❗] Usa ${prefix}ytdoc <link>`
}

function fecharGrupoTempErroMensagem()
{
return `[❗] Usa ${prefix}cerrargrupotmp <tiempo> segundos|minutos|horas|dias`
}

function abrirGrupoTempErroMensagem()
{
return `[❗] Usa ${prefix}abrirgrupotmp <tiempo> segundos|minutos|horas|dias`
}

function escolherTimerFecharGrupoMensagem()
{
return `[❗] Elija entre segundos, minutos, horas, dias\n \nejemplo : ${prefix}cerrargrupotmp 30 segundos`
}

function escolherTimerAbrirGrupoMensagem()
{
return `[❗] Elija entre segundos, minutos, horas, dias\n \nejemplo : ${prefix}abrirgrupotmp 10 segundos`
}

function addListaNegraErroMensagem()
{
return `[❗] Usa ${prefix}addlistanegra <número> (El número no puede tener + ni espacios)`
}

function numeroJaAdcionadoErroMensagem()
{
return `[❗] Este número ya esta en la lista negra, usted hasta puede mirar en ${prefix}listanegra`
}

function chatGPTErroMensagem()
{
return `[❗] Usa ${prefix}chatgpt || ${prefix}gpt <texto> (ingrese algo que tiene duda or curiosidad, etc)`
}

function imagemErroMensagem()
{
return '[❗] Etiqueta una imagen para hacer eso!'
}

function audioErroMensagem()
{
return '[❗] Etiqueta un audio para hacer eso.'
}

function toAnimeErroMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function verificarImagemToAnimeErroMensagem()
{
return '[❗] La imagen no fue convertida, verifique si la imagen sea el rostro de una persona, or ocurrió otro error descoñocido...'
}

function enviandoImgAnimeMensagem1()
{
return 'Haciendo la conversión... ⌛'
}

function enviandoImgAnimeMensagem2()
{
return 'Convertiendo! 🥷🏼'
}

function enviandoImgAnimeMensagem3()
{
return 'Convertiendo y enviando, espera... ⚡ '
}

function attpErroMensagem()
{
return `[❗] Usa ${prefix}attp <texto>`
}

function attp2ErroMensagem()
{
return `[❗] Usa ${prefix}attp2 <texto>`
}

function ttpErroMensagem()
{
return `[❗] Usa ${prefix}ttp <texto>`
}

function ttp2ErroMensagem()
{
return `[❗] Usa ${prefix}ttp2 <texto>`
}

function ttp3ErroMensagem()
{
return `[❗] Usa ${prefix}ttp3 <texto>`
}

function ttp4ErroMensagem()
{
return `[❗] Usa ${prefix}ttp4 <texto>`
}

function ttp5ErroMensagem()
{
return `[❗] Usa ${prefix}ttp5 <texto>`
}

function ttp6ErroMensagem()
{
return `[❗] Usa ${prefix}ttp6 <texto>`
}

function emojiMixArgsMensagem()
{
return `Ejemplo : ${prefix}emojimix 😅+🤔`
}

function emojiMixErroMensagem()
{
return '[❗] Ocurrió un error, talvez los emojis ingresados no sea compatible.'
}

function criarNoticiaErroMensagem()
{
return `[❗] Usa ${prefix}crearnoticia <texto>`
}

function noticiasErroMensagem()
{
return `[❗] Usa ${prefix}noticiasbot sin argumentos!`
}

function noticiaJaCriadaErroMensagem()
{
return 'Ya tiene una noticia creada en el momento. 🚫'
}

function eliminarNoticiaErroMensagem()
{
return `[❗] Usa ${prefix}eliminarnoticia <texto>`
}

function noticiaNaoCriadaErroMensagem()
{
return '[❗] No tiene noticia creada para eliminar.'
}

function nenhumaNoticiaErroMensagem()
{
return 'No hay noticias del bot hasta el momento. 🚫'
}

function chatGPTApi1ErroMensagem()
{
return 'Lo siento, el bot no puede obtener una respuesta de ambas APIs en este momento. 🚫'
}

function chatGPTApi2ErroMensagem()
{
return 'Ocurrió un error al obtener la respuesta de ambas APIs en el bot. 🚫'
}

function tempoLongoErroMensagem()
{
return '[❗] El tiempo es demasiado largo, acorta el tiempo!'
}

function apenasNumerosErroMensagem()
{
return '[❗] Usted ingresó letras donde no debia, ingrese apenas números! nombres y caracteres no son permitidos.'
}

function addListaNegraMensagem(numero)
{
return `${numero} fue añadido con éxito en la lista negra! ✅`
}

function removerListaNegraErroMensagem()
{
return `[❗] Usa ${prefix}sacarlistanegra <número> (El número no puede tener + ni espacios)`
}

function semNumeroAlgumErroMensagem()
{
return `[❗] No tiene ningún número en la lista negra!`
}

function numeroNaoAdcionadoErroMensagem()
{
return `[❗] Este número no está añadido en la lista negra.`
}

function ttpAttpErroMensagem()
{
return '[❗] Ocurrió un error al intentar hacer eso, talvez sea un problema en la API.'
}

function vozArgsMensagem()
{
return `[❗] Usa ${prefix}voz <idioma> <texto>`
}

function vozErroMensagem()
{
return '[❗] Ocurrió un error, talvez el texto ingresado no es compatible con el idioma elegido.'
}

function selecionarIdiomaErroMensagem()
{
return '[❗] Elija un idioma...\n \nIdiomas disponibles :\n□ ar - arabe\n□ de - alemán\n□ en - inglés\n□ es - español\n□ fr - francés\n□ id - indonesio\n□ it - italiano\n□ ja - japonés\n□ ko - coreano\n□ pt - portugués\n□ ru - ruso\n□ sv - sueco'
}

function selecionarIdiomaTradutorErroMensagem()
{
return '[🌐] Elija un idioma para traducir...\n \n‼️ Algunos idiomas pueden no funcionar, aparecerá un mensaje de error\n \nIdiomas disponibles :\n□ af - afrikáans\n□ sq - albanés\n□ am - amárico\n□ ar - arabe\n□ hy - armenio\n□ as - asamés\n□ ay - aimara\n□ az - azerbaiyano\n□ bm - bambara\n□ eu - vasco\n□ be - bielorruso\n□ bn - bengalí\n□ bho - bhospuri\n□ bs - bosnio\n□ bg - búlgaro\n□ ca - catalán\n□ ceb - cebuano\n□ zh-CN - chino (simplificado)\n□ zh-Hant - chino (tradicional)\n□ co - corso\n□ hr - croata\n□ cs - checo\n□ da - danés\n□ dv - dhivehi\n□ doi - dogri\n□ nl - neerlandés\n□ en - inglés\n□ es - español\n□ eo - esperanto\n□ et - estonio\n□ ee - ewe\n□ fil - filipino (tagalo)\n□ fi - finés\n□ fr - Francés\n□ fy - frisón\n□ gl - gallego\n□ ka - georgiano\n□ de - alemán\n□ el - grieg\n□ gn - guaraní\n□ gu - guyaratí\n□ ht - criollo haitiano\n□ ha - hausa\n□ haw - hawaiano\n□ he - hebreo\n□ hi - hindi\n□ hmn - hmong\n□ hu - húngaro\n□ is - islandés\n□ ig - igbo\n□ il - ilocano\n□ id - indonesio\n□ ga - irlandés\n□ it - italiano\n□ ja - japonés\n□ ja - javanés\n□ kn - canarés\n□ kk - kazajo\n□ km - jemer\n□ rw - kiñaruanda\n□ gom - konkani\n□ ko - corean\n□ kri - krio\n□ ku - curdo\n□ ckb - kurdo (sorani)\n□ ky - kirg\n□ lo - laosiano\n□ la - latín\n□ lv - letón\n□ ln - lingala\n□ lt - lituano\n□ lg - luganda\n□ lb - luxemburgués\n□ mk - macedonio\n□ mai - maithili\n□ mg - malgache\n□ ms - malayo\n□ ml - malabar\n□ mt - maltés\n□ mi - maorí\n□ mr - marathi\n□ mni-Mtei - meiteilon (manipuri)\n□ lus - mizo\n□ mn - mongol\n□ my - birmano\n□ ne - nepalí\n□ no - noruego\n□ ny - nyanja (chichewa)\n□ or - odia (oriya)\n□ om - oromo\n□ ps - pashto\n□ fa - persa\n□ pl - polaco\n□ pt - portugués (portugal y brasil)\n□ pa - punjabi\n□ qu - quechua\n□ ro - rumano\n□ ru - ruso\n□ sm - samoano\n□ sa - sánscr\n□ gd - gaélico\n□ nso - sepedi\n□ sr - serbio\n□ st - sesoto\n□ sn - shona\n□ sd - sindhi\n□ si - cingalés\n□ sk - eslovaco\n□ sl - esloveno\n□ so - somalí\n□ su - sundanés\n□ sw - suajili\n□ sv - sueco\n□ tl - tagalo (filipino)\n□ tg - tayiko\n□ ta - tamil\n□ tt - tártaro\n□ te - telugú\n□ th - tailandés\n□ ti - tigriña\n□ ts - tsonga\n□ tr - turco\n□ tk - turcom\n□ ak - twi (akan)\n□ uk - ucraniano\n□ ur - urdu\n□ ug - uigur\n□ uz - uzbeko\n□ vi - vietnamita\n□ cy - galés\n□ xh - xhosa\n□ yi - yiddish\n□ yo - yoruba\n□ zu - zulú'
}

const frases = [
    {
        index: 1,
        latin: "💐 *Autor:* *John Maxwell*",
        arabic: "💐 *Frase:* _En la vida algunas veces se gana, otras veces se aprende._",
        translation_id: "💐 *Opinión:* Hay que aprender de esos momentos desagradables, para de esta manera seguir creciendo como individuos. En otras palabras, no importa cómo caes, sino cómo te levantas.",
        translation_en: "En otras palabras, no importa cómo caes, sino cómo te levantas."
    },
    {
        index: 2,
        latin: "💐 *Autor:* *Paulo Coelho*",
        arabic: "💐 *Frase:* _No midas tu riqueza por el dinero que tienes, mídela por aquellas cosas que tienes y que no cambiarías por dinero._",
        translation_id: "💐 *Opinión:* En una sociedad materialista es fácil autoevaluarse en función de las posesiones que tenemos, y este tipo de valoraciones son muy negativas para la autoestima.",
        translation_en: "Además, lo que realmente te hará feliz en el día a día, son esas pequeñas cosas y esos momentos agradables."
    },
    {
        index: 3,
        latin: "💐 *Autor:* *Anónimo*",
        arabic: "💐 *Frase:* _Pedir perdón es de inteligentes, perdonar es de nobles y perdonarse es de sabios._",
        translation_id: "💐 *Opinión:* El perdón es una de las mejores terapias emocionales. Si pides perdón y si perdonas, demuestra tu grandeza como individuo. Pero más grande eres, y mejor vas a estar emocionalmente, si también te perdonas a ti mismo. Algo que parece fácil en la teoría, pero que se vuelve complicado en la práctica.",
        translation_en: "Si te identificas con esta frase porque te cuesta perdonarte a ti mismo, el Mindfulness te puede ser de gran utilidad. También existe una filosofía hawaiana llamada Ho'oponopono que basa su efectividad en el perdón espiritual."
    },
    {
        index: 4,
        latin: "💐 *Autor:* *Anónimo*",
        arabic: "💐 *Frase:* _Si quieres algo que nunca tuviste, debes hacer algo que nunca hiciste._",
        translation_id: "💐 *Opinión:* Si haces siempre lo mismo, seguramente siempre tendrás las mismas consecuencias. ",
        translation_en: "Si lo que quieres es tener nuevas experiencias, conocer a gente interesante o crecer en el trabajo, mejor que empieces a plantearte nuevas actividades y hagas cosas que habitualmente no haces."
    },
    {
        index: 5,
        latin: "💐 *Autor:* *Proverbio turco*",
        arabic: "💐 *Frase:* _El que busca un amigo sin defectos se queda sin amigos._",
        translation_id: "💐 *Opinión:* La intención esta frase es hacernos notar que todos tenemos defectos y cometemos muchos errores, no hay persona perfecta en este mundo. ",
        translation_en: "Ser una persona demasiado perfeccionista provoca consecuencias negativas para uno mismo."
    },
    {
        index: 6,
        latin: "💐 *Autor:* *Proverbio escocés*",
        arabic: "💐 *Frase:* _La sonrisa cuesta menos que la electricidad y da más luz._",
        translation_id: "💐 *Opinión:* Esta frase es una de esas frases inspiradoras, pero también es una frase sabia. Sonreír ayuda a mantener el buen humor, embellece el rostro y despierta buenos pensamientos.  ",
        translation_en: "No es lo mismo pedirle algo a alguien fríamente, que pedirlo con una sonrisa, pues la sonrisa no solamente produce un efecto muy positivo en nosotros mismos, también en la otra persona."
    },
    {
        index: 7,
        latin: "💐 *Autor:* *Henry Ford*",
        arabic: "💐 *Frase:* _No encuentres la falta, encuentra el remedio._",
        translation_id: "💐 *Opinión:* Esta frase me recuerda a una que un buen amigo siempre me decía: “ Si no formas parte de la solución, pasas a formar parte del problema.",
        translation_en: "Ambas frases no nos quieren decir que no debemos buscar el origen del problema, pues es necesario hacerlo. Pero en lugar de quedarnos lamentando la falla de manera eterna, debemos solucionar lo antes posible lo que ha ocurrido mal. Esta es la clave para mejorar.",
    },
    {
        index: 8,
        latin: "💐 *Autor:* *William George Ward*",
        arabic: "💐 *Frase:* _El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas._",
        translation_id: "💐 *Opinión:* Tanto ser un pesimista como demasiado optimista puede traer consecuencias negativas para uno mismo.",
        translation_en: "El pesimista todo lo va a ver mal y no existirá nada para que ese mal cambie. El optimista todo lo va a ver bien y distorsiona la realidad para que encaje con sus pensamientos. En cambio, una persona realista trata de solucionar los problemas pese a saber que es complicado en muchas ocasiones. Es decir, mantiene los pies en el suelo y actúa de manera sensata.",
    },
    {
        index: 9,
        latin: "💐 *Autor:* *Madre Teresa de Calcuta*",
        arabic: "💐 *Frase:* _A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar sería mucho menos si le faltara una gota._",
        translation_id: "💐 *Opinión:* Significa que aunque sintamos que lo que hacemos no sirve para nada, cada cosa que hacemos tiene una consecuencia.",
        translation_en: "A veces no somos capaces de ver esa consecuencia inmediatamente, o a veces es solamente un paso más en un camino que estamos recorriendo. Se trata de ir construyendo y al final llegará la recompensa.",
    },
    {
        index: 10,
        latin: "💐 *Autor:* *Buddha*",
        arabic: "💐 *Frase:* _La reflexión es el camino hacia la inmortalidad; la falta de reflexión, el camino hacia la muerte._",
        translation_id: "💐 *Opinión:* Esta frase extraída de la filosofía budista hace referencia a la importancia de la reflexión en el desarrollo personal y en el aprendizaje por y para la vida.",
        translation_en: "Todos hemos aprendido de los errores, pero cada uno vive las experiencias de manera única. Para poder retener estas experiencias, es necesario un proceso de pensamiento activo sobre lo que vivimos, para, de esta manera, cuestionarnos el sentido que tienen estas experiencias para nosotros.",
    },
    {
        index: 11,
        latin: "💐 *Autor:* *Francis Bacon*",
        arabic: "💐 *Frase:* _La ocasión hay que crearla, no esperar a que llegue._",
        translation_id: "💐 *Opinión:* Esta frase se refiere a que las oportunidades hay que buscarlas, no van a venir solas.",
        translation_en: "Es decir, si queremos algo, hay que luchar por ello. Un antídoto contra la Parálisis del análisis.",
    },
    {
        index: 12,
        latin: "💐 *Autor:* *Napoleón*",
        arabic: "💐 *Frase:* _Los sabios son los que buscan la sabiduría; los necios piensan haberla encontrado._",
        translation_id: "💐 *Opinión:* Esta frase se refiere a que las oportunidades hay que buscarlas, no van a venir solas.",
        translation_en: "Es decir, si queremos algo, hay que luchar por ello. Un antídoto contra la Parálisis del análisis.",
    },
    {
        index: 13,
        latin: "💐 *Autor:* *Séneca*",
        arabic: "💐 *Frase:* _No es pobre el que tiene poco, sino el que mucho desea._",
        translation_id: "💐 *Opinión:* Esta frase es igual a la frase “No es más rico el que más tiene, sino el que menos necesita”, y se refiere a que las personas que menos cosas materiales desean o necesitan, son las que definitivamente van a ser más felices en la vida.",
        translation_en: "Tener mucho no significa ser más feliz, pues si uno se contenta con poco, no necesita tener mucha riqueza.",
    },
    {
        index: 14,
        latin: "💐 *Autor:* *William Shakespeare*",
        arabic: "💐 *Frase:* _Si no recuerdas la más ligera locura en que el amor te hizo caer, no has amado._",
        translation_id: "💐 *Opinión:* Esta frase del autor de Romeo y Julieta nos recuerda que el enamoramiento es una de las sensaciones más extraordinarias de las que puede disfrutar el ser humano.",
        translation_en: "El amor es como una droga que te puede hacer sentir en pleno subidón y te puede hacer cometer locuras increíbles que jamás hayas pensado.",
    },
    {
        index: 15,
        latin: "💐 *Autor:* *Anónimo*",
        arabic: "💐 *Frase:* _Cuando el sabio señala la luna, el tonto se fija en el dedo._",
        translation_id: "💐 *Opinión:* Los necios no quieren ver más allá de lo que sus ojos pueden ver.",
        translation_en: "En cambio, los sabios expanden su mente, son creativos y reflexionan. Mientras el sabio es un explorador, el necio es conformista.",
    },
    {
        index: 16,
        latin: "💐 *Autor:* *Ralph Waldo Emerson*",
        arabic: "💐 *Frase:* _Un amigo es una persona con la que se puede pensar en voz alta._",
        translation_id: "💐 *Opinión:* Un auténtico amigo es esa persona que no te va a fallar y a la que le puedes confiar tus mayores secretos.",
        translation_en: "Esta frase define el significado de amistad y resalta la importancia de la confianza plena en alguien. Sin duda, quien tiene un amigo tiene un tesoro y debemos valorar esta conexión con otras personas.",
    },
    {
        index: 17,
        latin: "💐 *Autor:* *Buddha*",
        arabic: "💐 *Frase:* _El dolor es inevitable pero el sufrimiento es opcional._",
        translation_id: "💐 *Opinión:* Todos podemos vivir experiencias que nos hagan sufrir y pasarlo mal, y esto tiene un proceso para superarlo pues es parte de la vida.",
        translation_en: "Pero nosotros tenemos la posibilidad de hacer cosas para no quedarnos estancados en el sufrimiento. Por tanto, es decisión nuestra superar las malas experiencias lo antes posible.",
    },
    {
        index: 18,
        latin: "💐 *Autor:* *David Abernathy*",
        arabic: "💐 *Frase:* _Se puede matar al soñador, pero no al sueño._",
        translation_id: "💐 *Opinión:* Una frase que nos explica que la carne es finita, pero no así las ideas.",
        translation_en: "Incluso lo intagible es finito.",
    },
    {
        index: 19,
        latin: "💐 *Autor:* *Benjamin Franklin*",
        arabic: "💐 *Frase:* _Quien tiene paciencia, obtendrá lo que desea._",
        translation_id: "💐 *Opinión:* Uno de los primeros presidentes de los Estados Unidos nos informa sobre la gran virtud que es la paciencia.",
        translation_en: "Dicha virtud que no todos tienen.",
    },
    {
        index: 20,
        latin: "💐 *Autor:* *Pitágoras*",
        arabic: "💐 *Frase:* _Educad a los niños, y no será necesario castigar a los hombres._",
        translation_id: "💐 *Opinión:* Pitágoras el griego sobre la gran trascendencia de la educación en una sociedad.",
        translation_en: "Hacer el mal a alguien en su plena etapa de cremiento no es bueno.",
    },
    {
        index: 21,
        latin: "💐 *Autor:* *Confucio*",
        arabic: "💐 *Frase:* _Aprender sin reflexionar es malgastar la energía._",
        translation_id: "💐 *Opinión:* El sabio pensador chino Confucio, sobre la necesidad de llevar a cabo un estilo de aprendizaje basado en la reflexión.",
        translation_en: "Saber no gastar el tiempo.",
    },
    {
        index: 22,
        latin: "💐 *Autor:* *Maquiavelo*",
        arabic: "💐 *Frase:* _Las personas ofenden antes a los que aman que a los que temen._",
        translation_id: "💐 *Opinión:* Las personas que son obstinadas pueden causarnos cierto miedo, es por eso que vamos con pies de plomo a la hora de tratar con ellas.",
        translation_en: "Tener cuidado con ese tipo de personas.",
    },
    {
        index: 23,
        latin: "💐 *Autor:* *Francis Bacon*",
        arabic: "💐 *Frase:* _La amistad duplica las alegrías y divide las angustias por la mitad._",
        translation_id: "💐 *Opinión:* Una verdad innegable; la vida es menos cruda cuando la pasamos cerca de personas que nos quieren de forma genuina.",
        translation_en: "La amistad puede ser buena dependiendo de las personas.",
    },
    {
        index: 24,
        latin: "💐 *Autor:* *Friedrich Nietzsche*",
        arabic: "💐 *Frase:* _Solamente aquel que construye el futuro tiene derecho a juzgar el pasado._",
        translation_id: "💐 *Opinión:* Nietzsche nos dejó muchas citas célebres, como por ejemplo esta, que nos indica la relevancia de tomar el control de nuestras vidas.",
        translation_en: "Recuerda tomar Agua. 👀",
    },
    {
        index: 25,
        latin: "💐 *Autor:* *Johann Kaspar Lavater*",
        arabic: "💐 *Frase:* _Si quieres ser sabio, aprende a interrogar razonablemente, a escuchar con atención, a responder serenamente y a callar cuando no tengas nada que decir._",
        translation_id: "💐 *Opinión:* Unos consejos prácticos para alcanzar altas cotas de inteligencia y sabiduría.",
        translation_en: "Consejos que salvan vidas.",
    },
    {
        index: 26,
        latin: "💐 *Autor:* *Jorge Luis Borges*",
        arabic: "💐 *Frase:* _He cometido el peor pecado que uno puede cometer. No he sido feliz._",
        translation_id: "💐 *Opinión:* Borges nos dejó esta reflexión, que demuestra que no estuvo suficientemente atento a gozar de la vida.",
        translation_en: "Vivela, tal vez sea la ultima.",
    },
    {
        index: 27,
        latin: "💐 *Autor:* *Platón*",
        arabic: "💐 *Frase:* _La libertad está en ser dueños de nuestra propia vida._",
        translation_id: "💐 *Opinión:* La libertad es uno de los conceptos más ampliamente estudiados por los filósofos.",
        translation_en: "Aquí, Platón nos explica cuál es la clave para ser libre.",
    },
    {
        index: 28,
        latin: "💐 *Autor:* *René Descartes*",
        arabic: "💐 *Frase:* _Daría todo lo que sé, por la mitad de lo que ignoro._",
        translation_id: "💐 *Opinión:* El francés René Descartes también era totalmente consciente de que, a pesar de ser uno de los más brillantes pensadores modernos, ignoraba mucho más de lo que conocía.",
        translation_en: "Ignorar las cosas, no es bueno.",
    },
    {
        index: 29,
        latin: "💐 *Autor:* *Baltasar Gracián*",
        arabic: "💐 *Frase:* _Saber y saberlo demostrar es valer dos veces._",
        translation_id: "💐 *Opinión:* Una de las diferencias entre el conocimiento superficial y el conocimiento profundo, según Baltasar Gracián.",
        translation_en: "Poner en práctica lo que sabes.",
    },
    {
        index: 30,
        latin: "💐 *Autor:* *Lao-tsé*",
        arabic: "💐 *Frase:* _Saber que no se sabe, eso es humildad. Pensar que uno sabe lo que no sabe, eso es enfermedad._",
        translation_id: "💐 *Opinión:* Lao-tsé ahonda en el asunto de la ignorancia y la percepción de sabiduría, en la línea de otros pensadores que pronunciaron frases similares.",
        translation_en: "No ser ignorante.",
    },
    {
        index: 31,
        latin: "💐 *Autor:* *Epicteto de Frigia*",
        arabic: "💐 *Frase:* _La persona sabia no debe abstenerse de participar en el gobierno del Estado, pues es un delito renunciar a ser útil a los necesitados y un cobardía ceder el paso a los indignos._",
        translation_id: "💐 *Opinión:* Una reflexión de corte político; los ciudadanos sabios deben intentar participar en la gestión de la polis, para aportar su granito de arena a una administración que debe ser justa con todos.",
        translation_en: "Recuerda tener tiempo para todo.",
    },
    {
        index: 32,
        latin: "💐 *Autor:* *Confucio*",
        arabic: "💐 *Frase:* _La vida es muy simple, pero insistimos en hacerla complicada._",
        translation_id: "💐 *Opinión:* El filósofo Confucio creía que la vida se rige por principios simples que debemos adoptar como normas para nuestro día a día.",
        translation_en: "Es tan simple...",
    },
    {
        index: 33,
        latin: "💐 *Autor:* *Abraham Lincoln*",
        arabic: "💐 *Frase:* _Al final, no son los años en nuestra vida lo que cuenta, sino la vida en nuestros años._",
        translation_id: "💐 *Opinión:* Lincoln, sobre el criterio de calidad que según él deberíamos aplicar a la hora de valorar nuestras vidas.",
        translation_en: "Todos omiten el hecho que cada vez se acercan la muerte con el pasar del tiempo, pero si vives plenamente habrá valido la pena",
    },
    {
        index: 34,
        latin: "💐 *Autor:* *Voltaire*",
        arabic: "💐 *Frase:* _Cada persona es una criatura del tiempo en el que vive._",
        translation_id: "💐 *Opinión:* Voltaire creía que no podemos considerarnos seres independizados del contexto histórico que nos toca vivir.",
        translation_en: "Nuestras ideas y nuestro modo de vida están siempre condicionados por la fecha de nuestro nacimiento.",
    },
    {
        index: 35,
        latin: "💐 *Autor:* *Aristóteles*",
        arabic: "💐 *Frase:* _Somos lo que hacemos repetidamente._",
        translation_id: "💐 *Opinión:* Aristóteles se distanció del idealismo de Platón; para él importaban más los hechos y el entorno, y esto queda claro en esta frase de la vida eminentemente filosófica.",
        translation_en: "Repetir nos hace mejor.",
    },
    {
        index: 36,
        latin: "💐 *Autor:* *Charlie Chaplin*",
        arabic: "💐 *Frase:* _La vida es una tragedia cuando se ve en primer plano, pero en plano general pasa a ser una comedia._",
        translation_id: "💐 *Opinión:* Chaplin, como director de cine, sabía que un mismo hecho, o incluso la vida de una persona, cambia dependiendo del modo en el que se presente.",
        translation_en: "Malos y buenos momentos.",
    },
    {
        index: 37,
        latin: "💐 *Autor:* *Albert Camus*",
        arabic: "💐 *Frase:* _El hombre es la única criatura que se niega a ser quien es._",
        translation_id: "💐 *Opinión:* Albert Camus, en una de sus frases filosóficas acerca de la lucha que el ser humano mantiene con la creación de un sentido para su existencia.",
        translation_en: "Aprende aceptar lo que eres.",
    },
    {
        index: 38,
        latin: "💐 *Autor:* *Cassandra Clare*",
        arabic: "💐 *Frase:* _Todo conocimiento resulta hiriente._",
        translation_id: "💐 *Opinión:* Una frase sabia referida al modo en el que cada nueva pieza de conocimiento trastoca los cimientos de lo que creíamos que sabíamos.",
        translation_en: "Siempre hay algo por aprender",
    },
    {
        index: 39,
        latin: "💐 *Autor:* *Pablo Picasso*",
        arabic: "💐 *Frase:* _Lleva mucho tiempo llegar a ser joven._",
        translation_id: "💐 *Opinión:* El reputado pintor invierte el orden temporal en el que se ubica la juventud para dar a entender que es, más que una fase biológica, algo aprendido.",
        translation_en: "Recuerda ser buena persona 😸",
    },
    {
        index: 40,
        latin: "💐 *Autor:* *Hannah Arendt*",
        arabic: "💐 *Frase:* _El tiempo es aquello que más queremos y también lo que peor utilizamos._",
        translation_id: "💐 *Opinión:* La filósofa Hannah Arendt, sobre el riesgo que conlleva la simple actividad de pensar.",
        translation_en: "Pensar nos hace mas autosuficientes.",
    },
    {
        index: 41,
        latin: "💐 *Autor:* *William Penn*",
        arabic: "💐 *Frase:* _No hay pensamientos peligrosos; pensar es, en sí mismo, algo peligroso._",
        translation_id: "💐 *Opinión:* Una paradoja planteada por el filósofo inglés William Penn. Para ser conscientes de que la vida está para saberla aprovechar al máximo.",
        translation_en: "Si fuera posible cambiarlo, es probable el resultado de la paradoja del abuelo.",
    },
    {
        index: 42,
        latin: "💐 *Autor:* *David Ben-Gurión*",
        arabic: "💐 *Frase:* _Alguien que no cree en los milagros no es realista._",
        translation_id: "💐 *Opinión:* Acerca de las anomalías y hechos inexplicables contenidos en la realidad.",
        translation_en: "Si nunca has estado enfrente de una anomalía, tal vez pienses que no existe.",
    },
    {
        index: 43,
        latin: "💐 *Autor:* *Francis Bacon*",
        arabic: "💐 *Frase:* _La esperanza es un buen desayuno, pero una mala cena._",
        translation_id: "💐 *Opinión:* La esperanza como algo que tiene doble filo. ",
        translation_en: "Resulta positiva cuando todo un mundo de posibilidades se abre ante nosotros, pero no tanto cuando es el último recurso.",
    },
    {
        index: 44,
        latin: "💐 *Autor:* *Allan Bloom*",
        arabic: "💐 *Frase:* _La educación es el movimiento de la oscuridad a la luz._",
        translation_id: "💐 *Opinión:* Una imagen potente para explica lo que es la educación.",
        translation_en: "Imagen que dependiendo de como lo imaginas puede tener la verdad sobre ti",
    },
    {
        index: 45,
        latin: "💐 *Autor:* *Erich Fromm*",
        arabic: "💐 *Frase:* _La creatividad requiere que la valentía se desprenda de las certezas._",
        translation_id: "💐 *Opinión:* El padre del psicoanálisis humanista, sobre la relación entre la valentía y la incertidumbre.",
        translation_en: "Ser valiente te hace creativo/a",
    },
    {
        index: 46,
        latin: "💐 *Autor:* *Edmund Burke*",
        arabic: "💐 *Frase:* _Aquellos que no conocen la historia están condenados a repetirla._",
        translation_id: "💐 *Opinión:* El filósofo conservador Edmund Burke, sobre la necesidad de conocer el pasado.",
        translation_en: "Conoce el Pasado, te ahorra tiempo a un Futuro.",
    },
    {
        index: 47,
        latin: "💐 *Autor:* *Cicerón*",
        arabic: "💐 *Frase:* _Nada es tan increíble como para que la oratoria no lo pueda transformar en aceptable._",
        translation_id: "💐 *Opinión:* Cicerón habla sobre el poder de los discursos bien diseñados.",
        translation_en: "Un discurso puede convencer a muchos.",
    },
    {
        index: 48,
        latin: "💐 *Autor:* *Dante*",
        arabic: "💐 *Frase:* _De una pequeña chispa puede prender una llama._",
        translation_id: "💐 *Opinión:* Una frase sabia en la que se entrevé, mediante una imagen poética.",
        translation_en: "Modos insospechados en los que pueden aparecer fenómenos muy importantes y significativos.",
    },
    {
        index: 49,
        latin: "💐 *Autor:* *Dante*",
        arabic: "💐 *Frase:* _El liderazgo no depende de estar en lo cierto._",
        translation_id: "💐 *Opinión:* Uno de los pensadores sobre la educación más importantes habla aquí sobre el modo en el que tenemos que interpretar la legitimidad del liderazgo.",
        translation_en: "Recuerda, si dices saberlo todo, eres un ignorante.",
    },
    {
        index: 50,
        latin: "💐 *Autor:* *B. F. Skinner*",
        arabic: "💐 *Frase:* _El entorno da forma a las acciones del individuo._",
        translation_id: "💐 *Opinión:* El referente más importante de la psicología conductista habla sobre lo relativo de esa línea que separa individuo y entorno.",
        translation_en: "El entorno determina tus acciones.",
    },
    {
        index: 51,
        latin: "💐 *Autor:* *Stanislaw Jerzy Lec*",
        arabic: "💐 *Frase:* _La juventud es un reglo de la naturaleza, pero la edad es una obra de arte._",
        translation_id: "💐 *Opinión:* Un modo optimista de valorar la edad y el paso hacia la vejez.",
        translation_en: "La edad no determina tu forma de ver el mundo.",
    },
    {
        index: 52,
        latin: "💐 *Autor:* *Stanislaw Jerzy Lec*",
        arabic: "💐 *Frase:* _Nadie puede herirme sin mi permiso._",
        translation_id: "💐 *Opinión:* El influyente líder pacifista se refiere en esta frase sabia al poder de la propia voluntad.",
        translation_en: "Tener el agrado hacia lo que haces permitira que tu voluntad no se obstruya.",
    },
    {
        index: 53,
        latin: "💐 *Autor:* *David Carradine*",
        arabic: "💐 *Frase:* _Si no puedes ser poeta, sé el poema._",
        translation_id: "💐 *Opinión:* Una perspectiva diferente para ver el modo en el que nuestra vida puede tener carácter artístico.",
        translation_en: "Aprender a tener varias habilidades.",
    },
    {
        index: 54,
        latin: "💐 *Autor:* *Eurípides*",
        arabic: "💐 *Frase:* _Nada tiene más fuerza que la extrema necesidad._",
        translation_id: "💐 *Opinión:* El poeta griego Eurípides habla sobre cómo, en última instancia , el poder de nuestros actos nace cuando nuestra libertad y situación para tomar decisiones se ven reducidas.",
        translation_en: "La necesidad puede ser un peligro.",
    },
    {
        index: 55,
        latin: "💐 *Autor:* *San Agustín*",
        arabic: "💐 *Frase:* _La soberbia no es grandeza sino hinchazón; y lo que está hinchado parece grande pero no está sano._",
        translation_id: "💐 *Opinión:* Uno de los problemas de la soberbia es que, tras la apariencia, esconde a alguien herido e inseguro.",
        translation_en: "La inseguridad hace que te veas menos.",
    },
    {
        index: 56,
        latin: "💐 *Autor:* *William Shakespeare*",
        arabic: "💐 *Frase:* _Es mejor ser rey de tu silencio que esclavo de tus palabras._",
        translation_id: "💐 *Opinión:* Nunca digas cosas de las que te puedas arrepentir en el futuro.",
        translation_en: "Cuando sucede eso, estas pensando de manera irracional.",
    },
    {
        index: 57,
        latin: "💐 *Autor:* *William Shakespeare*",
        arabic: "💐 *Frase:* _La belleza es poder; una sonrisa es su espada._",
        translation_id: "💐 *Opinión:* Una reflexión sobre la belleza y sus principales atributos.",
        translation_en: "Atributos que pueden ser arma de doble filo.",
    },
    {
        index: 58,
        latin: "💐 *Autor:* *Ogden Nash*",
        arabic: "💐 *Frase:* _La edad adulta es cuando te has encontrado con tanta gente que cada nueva persona te recuerda a otra._",
        translation_id: "💐 *Opinión:* Entonces, nada te sorprende.",
        translation_en: "La sabiduría de la edad adulta comporta unos ciertos problemas, como este que retrata Ogden Nash.",
    },
    {
        index: 59,
        latin: "💐 *Autor:* *Severo Ochoa*",
        arabic: "💐 *Frase:* _En principio, la investigación necesita más cabezas que medios._",
        translation_id: "💐 *Opinión:* Una frase de la vida y la ciencia que nos muestra la importancia del talento humano.",
        translation_en: "Talento humano, todos tienen almenos uno.",
    },
    {
        index: 60,
        latin: "💐 *Autor:* *Maquiavelo*",
        arabic: "💐 *Frase:* _El que es elegido príncipe con el favor popular debe conservar al pueblo como amigo._",
        translation_id: "💐 *Opinión:* Una reflexión de corte político según el mítico historiador italiano.",
        translation_en: "Una frase un tanto medieval.",
    },
    {
        index: 61,
        latin: "💐 *Autor:* *Camilo José Cela*",
        arabic: "💐 *Frase:* _La Historia nos enseña dos cosas: que jamás los poderosos coincidieron con los mejores, y que jamás la política fue tejida por los políticos._",
        translation_id: "💐 *Opinión:* Sobre la política y la hegemonía, del gran escritor Camilo José Cela.",
        translation_en: "Poderosos que tal vez esten solos.",
    },
    {
        index: 62,
        latin: "💐 *Autor:* *José Ortega y Gasset*",
        arabic: "💐 *Frase:* _Con la moral corregimos los errores de nuestros instintos, y con el amor los errores de nuestra moral._",
        translation_id: "💐 *Opinión:* El ensayista español realiza una disquisición que cada uno debe interpretar.",
        translation_en: "Aprender a equivocarse. Irónico.",
    },
    {
        index: 63,
        latin: "💐 *Autor:* *Novalis*",
        arabic: "💐 *Frase:* _Cuando veas un gigante, examina antes la posición del sol; no vaya a ser la sombra de un pigmeo._",
        translation_id: "💐 *Opinión:* El engañarse ante su entorno.",
        translation_en: "Nuestra percepción puede engañarnos, por tanto tómate tu tiempo para reflexionar sobre las pequeñas cosas de la vida.",
    },
    {
        index: 64,
        latin: "💐 *Autor:* *Platón*",
        arabic: "💐 *Frase:* _La pobreza no viene por la disminución de las riquezas, sino por la multiplicación de los deseos._",
        translation_id: "💐 *Opinión:* Una reflexión del filósofo griego en que resalta el vicio de la avaricia.",
        translation_en: "Avaricia abunda en las personas sin caminos.",
    },
    {
        index: 65,
        latin: "💐 *Autor:* *Ovidio*",
        arabic: "💐 *Frase:* _No os entreguéis por demasiado a la ira; una ira prolongada engendra odio._",
        translation_id: "💐 *Opinión:* La rabia puede traernos consecuencias nefastas en nuestra vida.",
        translation_en: "No darle importancia al odio.",
    },
    {
        index: 66,
        latin: "💐 *Autor:* *Kant*",
        arabic: "💐 *Frase:* _La educación es el desarrollo sobre la persona de toda la perfección de que su naturaleza es capaz._",
        translation_id: "💐 *Opinión:* Para concluir la selección de frases, esta reflexión del filósofo alemán para evidenciar la importancia de la educación.",
        translation_en: "La educación lo es todo.",
    },
    {
        index: 67,
        latin: "💐 *Autor:* *Arturo Pérez-Reverte*",
        arabic: "💐 *Frase:* _El problema de las palabras es que, una vez echadas, no pueden volverse solas a su dueño. De modo que a veces te las vuelven en la punta de un acero._",
        translation_id: "💐 *Opinión:* El literato español, sobre la crueldad de lo dicho.",
        translation_en: "Recuerda decir bien las cosas, sin arrepentimientos.",
    },
    {
        index: 68,
        latin: "💐 *Autor:* *Winston Churchill*",
        arabic: "💐 *Frase:* _El esfuerzo constante – no la fuerza o la inteligencia – es la clave para liberar nuestro potencial._",
        translation_id: "💐 *Opinión:* Mítica reflexión sobre la constancia y la perseverancia.",
        translation_en: "Todo esfuerzo tiene su recompensa.",
    },
    {
        index: 69,
        latin: "💐 *Autor:* *Ernesto Sábato*",
        arabic: "💐 *Frase:* _Ser original es en cierto modo estar poniendo de manifiesto la mediocridad de los demás._",
        translation_id: "💐 *Opinión:* Una de esas frases sabias no aptas para mentes cerradas.",
        translation_en: "Hay que saber ser Original en base a ideas que existen con un estilo propio.",
    },
    {
        index: 70,
        latin: "💐 *Autor:* *Mark Twain*",
        arabic: "💐 *Frase:* _No hay nada tan grotesco o increíble que el ser humano medio no pueda creer._",
        translation_id: "💐 *Opinión:* La imaginación no tiene límites, para bien o para mal.",
        translation_en: "Recuerda imaginar paera bien.",
    },
    {
        index: 71,
        latin: "💐 *Autor:* *Napoleón*",
        arabic: "💐 *Frase:* _Nunca interrumpas a tu enemigo cuanto está cometiendo una equivocación._",
        translation_id: "💐 *Opinión:* Un consejo táctico de este famoso militar.",
        translation_en: "Recuerda siempre tener ventajas.",
    },
    {
        index: 72,
        latin: "💐 *Autor:* *Lao-Tsé*",
        arabic: "💐 *Frase:* _Conocer a los demás es sabiduría; conocerse a uno mismo es iluminación._",
        translation_id: "💐 *Opinión:* El auto-conocimiento como aspecto fundamental de la vida.",
        translation_en: "Hay que tener iniciativa para aprender en el camino por cuenta propia.",
    },
    {
        index: 73,
        latin: "💐 *Autor:* *Charles Bukowski*",
        arabic: "💐 *Frase:* _Estamos aquí para vivir nuestras vidas tan bien que la Muerte tiemble al arrebatárnoslas._",
        translation_id: "💐 *Opinión:* Una credencia del vitalismo.",
        translation_en: "Vive como si fuera el último día.",
    },
    {
        index: 74,
        latin: "💐 *Autor:* *B.F. Skinner*",
        arabic: "💐 *Frase:* _No deberíamos instruir en la lectura de libros, sino enseñar a amar los libros._",
        translation_id: "💐 *Opinión:* Un aprendizaje de tipo emocional.",
        translation_en: "Un mundo de letras...",
    },
    {
        index: 75,
        latin: "💐 *Autor:* *Martin Luther King*",
        arabic: "💐 *Frase:* _Tu verdad aumentará en la medida que sepas escuchar la verdad de los otros._",
        translation_id: "💐 *Opinión:* La sabiduría no está compuesta de descubrimientos realizados individualmente.",
        translation_en: "Sino que incluye lo que aprendemos de los demás.",
    },
    {
        index: 76,
        latin: "💐 *Autor:* *Mario Benedetti*",
        arabic: "💐 *Frase:* _No te rindas, porque cada día es un comienzo nuevo, porque esta es la hora y el mejor momento._",
        translation_id: "💐 *Opinión:* Una manera de ver el ahora que además nos sirve como fuente de motivación.",
        translation_en: "La paz se puede si todos están de acuerdo.",
    },
    {
        index: 77,
        latin: "💐 *Autor:* *Erasmo de Rotterdam*",
        arabic: "💐 *Frase:* _La paz más desventajosa es mejor que la guerra más justa._",
        translation_id: "💐 *Opinión:* Una apreciación moral acerca del valor de la paz.",
        translation_en: "En la guerra nadie gana, solo hay dolor.",
    },
    {
        index: 78,
        latin: "💐 *Autor:* *Baruch Spinoza*",
        arabic: "💐 *Frase:* _Si no quieres repetir el pasado, estúdialo._",
        translation_id: "💐 *Opinión:* La memoria nos permite aprender de nuestros errores, y eso es algo que hay que aprovechar.",
        translation_en: "Es la mejor manera de no volver a caer.",
    },
    {
        index: 79,
        latin: "💐 *Autor:* *Anselmo de Canterbury*",
        arabic: "💐 *Frase:* _Los desastres nos enseñan humildad._",
        translation_id: "💐 *Opinión:* Incluso las crisis tienen algo bueno, pues nos recuerdan nuestro escaso poder frente al mundo.",
        translation_en: "El ser humano no puede con todo.",
    },
    {
        index: 80,
        latin: "💐 *Autor:* *Nelson Mandela*",
        arabic: "💐 *Frase:* _No hay nada como volver a un lugar que permanece sin cambiar para encontrar las formas en las que tú mismo has cambiado._",
        translation_id: "💐 *Opinión:* La interacción con el entorno nos permite conocernos mejor.",
        translation_en: "Recordar que todo sigue igual... Es un buen sentimiento.",
    },
    {
        index: 81,
        latin: "💐 *Autor:* *Epícuro*",
        arabic: "💐 *Frase:* _Cuanto más grande es la dificultad, más gloria hay en superarla._",
        translation_id: "💐 *Opinión:* El filósofo griego, fundador epicureísmo, nos deja esta gran frase motivadora para la historia.",
        translation_en: "Saberse superar....",
    },
    {
        index: 82,
        latin: "💐 *Autor:* *Friedrich Hegel*",
        arabic: "💐 *Frase:* _Ser independiente de la opinión pública es la primera condición formal para lograr algo grande._",
        translation_id: "💐 *Opinión:* Pensar nos hace ver las cosas de una manera alterna.",
        translation_en: "Una frase que habla del pensamiento propio.",
    },
    {
        index: 83,
        latin: "💐 *Autor:* *Leibniz*",
        arabic: "💐 *Frase:* _Vivimos en el mejor de los posibles mundos._",
        translation_id: "💐 *Opinión:* Al menos éste es el único que conocemos.",
        translation_en: "Con sus cosas buenas y sus cosas malas.",
    },
    {
        index: 84,
        latin: "💐 *Autor:* *Benjamin Franklin*",
        arabic: "💐 *Frase:* _El que es bueno para poner excusas rara vez es bueno para cualquier otra cosa._",
        translation_id: "💐 *Opinión:* Los cobardes ponen excusas en vez de afrontar la realidad.",
        translation_en: "Solo sabe evadir, y no afrontar.",
    },
    {
        index: 85,
        latin: "💐 *Autor:* *Noam Chomsky*",
        arabic: "💐 *Frase:* _Si no creemos en la libertad de expresión de las personas que despreciamos, no creemos en ella en absoluto._",
        translation_id: "💐 *Opinión:* Una frase que nos recuerda la importancia de la libertad de expresión.",
        translation_en: "La libertad es buena cuando somos libre de manera educada.",
    },
    {
        index: 86,
        latin: "💐 *Autor:* *Tales*",
        arabic: "💐 *Frase:* _La cosa más difícil en la vida es conocerte a ti mismo._",
        translation_id: "💐 *Opinión:* El autoconocimiento es clave para tener una vida emocional sana.",
        translation_en: "Siempre es bueno no dejar de aprender.",
    },
    {
        index: 87,
        latin: "💐 *Autor:* *Epíteto*",
        arabic: "💐 *Frase:* _No es lo que te ocurre, sino cómo reaccionas lo que importa._",
        translation_id: "💐 *Opinión:* Sobre la importancia de evaluar de forma positiva los hechos.",
        translation_en: "Hasta lo malo puede ser bueno.",
    },
    {
        index: 88,
        latin: "💐 *Autor:* *George Savile*",
        arabic: "💐 *Frase:* _La persona que es una maestra en la paciencia puede con todo lo demás._",
        translation_id: "💐 *Opinión:* Una frase del personaje célebre George Savile que hablar del poder de la paciencia.",
        translation_en: "Si te consideras una persona paciente, vales mucho como persona.",
    },
    {
        index: 89,
        latin: "💐 *Autor:* *Mark Twain*",
        arabic: "💐 *Frase:* _No hay una visión más triste que la de un joven pesimista._",
        translation_id: "💐 *Opinión:* Mark Twain habla sobre el valor asociado a la juventud y el error de desperdiciar esta etapa de la vida.",
        translation_en: "Es muy joven el mundo como para estar triste.",
    },
    {
        index: 90,
        latin: "💐 *Autor:* *Umberto Eco*",
        arabic: "💐 *Frase:* _Nada es más nocivo para la creatividad que el furor de la inspiración._",
        translation_id: "💐 *Opinión:* Una gran frase del siempre recordado, Umberto Eco.",
        translation_en: "Todos tenemos una idea de la vida.",
    },
    {
        index: 91,
        latin: "💐 *Autor:* *Emerson*",
        arabic: "💐 *Frase:* _El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene._",
        translation_id: "💐 *Opinión:* Una frase que deberíamos tener siempre en nuestra cabeza.",
        translation_en: "Disfrutar del esfuerzo...",
    },
    {
        index: 92,
        latin: "💐 *Autor:* *Henry David Thoreau*",
        arabic: "💐 *Frase:* _Casi todas las personas viven la vida en una silenciosa desesperación._",
        translation_id: "💐 *Opinión:* Una frase que pretende explicar la complejidad de la vida y los malos momentos que uno puede experimentar.",
        translation_en: "Experimentar la vida y ver como nos sorprende.",
    },
    {
        index: 93,
        latin: "💐 *Autor:* *D. Pire*",
        arabic: "💐 *Frase:* _Andaríamos mejor si no fuera porque hemos construido demasiados muros y no suficientes puentes._",
        translation_id: "💐 *Opinión:* Una frase sobre lo peor del ser humano. Los muros nunca han sido buenos.",
        translation_en: "Divider el mundo solo hace ser menos fuerte todo.",
    },
    {
        index: 94,
        latin: "💐 *Autor:* *Jairo Fowbier Pabón*",
        arabic: "💐 *Frase:* _La experiencia no es cuanto se vive sino todo el bien que se aprende._",
        translation_id: "💐 *Opinión:* La experiencia nos sirve para aprender.",
        translation_en: "Aprender es saber asumir que no lo sabes todo.",
    },
    {
        index: 95,
        latin: "💐 *Autor:* *Chamfort*",
        arabic: "💐 *Frase:* _La falsa modestia es la más decente de todas las mentiras._",
        translation_id: "💐 *Opinión:* Hace referencia a la falsa modestia. Pues, dentro de las mentiras, es la menos mala.",
        translation_en: "Hay que ser directo(a) en todo.",
    },
    {
        index: 96,
        latin: "💐 *Autor:* *C.G. Jung*",
        arabic: "💐 *Frase:* _Tú eres aquello que haces, no aquello que dices que harás._",
        translation_id: "💐 *Opinión:* Tus acciones determinan aquello que eres, no tus palabras.",
        translation_en: "Si vas a decirlo demuestra que lo puedes cumplir.",
    },
    {
        index: 97,
        latin: "💐 *Charles Dickens*",
        arabic: "💐 *Frase:* _El corazón humano es un instrumento de muchas cuerdas; el perfecto conocedor de personas, las sabe hacer vibrar todas, como un buen músico._",
        translation_id: "💐 *Opinión:* La persona que se conoce es una persona poderosa.",
        translation_en: "Siempre hay algo nuevo por conocer.",
    },
    {
        index: 98,
        latin: "💐 *Solomon Asch*",
        arabic: "💐 *Frase:* _La mayoría de actos sociales deben ser entendidos en su contexto, ya que pierden significado si son aislados._",
        translation_id: "💐 *Opinión:* Las personas somos seres biopsicosociales.",
        translation_en: "Es decir, el contexto es importante en influye en cómo actuamos.",
    },
    {
        index: 99,
        latin: "💐 *Erich Fromm*",
        arabic: "💐 *Frase:* _Si una persona ama solo a una persona y es indiferente ante todos los demás, su amor no es amor, sino apego simbiótico o egoísmo ampliada._",
        translation_id: "💐 *Opinión:* Cuando estamos enamorados de alguien, daríamos la vida por esa persona.",
        translation_en: "Podemos engañarnos y creer que somos buenas personas, pero hasta los más egoístas pueden perder la cabeza por alguien y parecer personas entregadas.",
    }
]


function vozCaracErroMensagem()
{
return '[❗] Ha excedido el límite de textos, disminuya las palabras.'
}

function removerListaNegraMensagem(numero)
{
return `${numero} fue eliminado de la lista negra. ✔`
}

function linkDesativadoErroMensagem()
{
return '[❗] No puede tener el acceso al link del grupo directamente en el comando, pues el acceso fue desactivado por un administrador!'
}

function linkNaoRedefiniuErroMensagem()
{
return '[❗] El link del grupo no fue redefinido, posiblemente el link de este grupo está desactivado por 1 semana en el momento!'
}

function igArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese el nombre de usuario de alguien\n \nEjemplo: ${prefix}${cmd} arqq_santos`
}

function igErroMensagem()
{
return '[❗] Este nombre de usuario no fue encontrado, talvez no exista or fue ingresado incorrectamente.'
}

function apiErroMensagem()
{
return '[❗] Ocurrió un error en este sistema, informe el error al creador del bot para que sea arreglado!'
}

function igDownloadArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese el link de alguna publicación de instagram\n \nUsa ${prefix}${cmd} <link>`
}

function linkInstaInvalidoErroMensagem()
{
return '[❗] Esto no es un link de instagram.'
}

function igDownloadEnviandoMensagem()
{
return 'Enviando... si no llegar nada la cuenta es privada or el link no esta ingresado correctamente.'
}

function igDownloadPostsBaixadosMensagem()
{
return 'Todas las publicaciones fueron descargadas! ✔'
}

function igStoryArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese el nombre de usuario de alguien\n \nEjemplo: ${prefix}${cmd} zuck`
}

function igStoryEnviandoMensagem(user)
{
return `Enviando historia(s) de *${user}* ⌛\n \nSi no llegar nada talvez la cuenta sea privada.`
}

function pinterestErroMensagem()
{
return '[❗] Esta busca no fue encontrada, talvez no exista, fue ingresada incorrectamente or ocurrió un error en el sistema.'
}

function igStoryBaixadosMensagem()
{
return 'Todas las historias fueron descargadas! ✔'
}

function pinterestArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese un nombre para buscar imágenes\n \nEjemplo: ${prefix}${cmd} perros`
}

function pinterestImgsBaixadasMensagem()
{
return 'Las imágenes fueron descargadas! ✔'
}

function pinterestDownloadArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese el link de pinterest\n \nUsa ${prefix}${cmd} <link>`
}

function linkPinterestInvalidoErroMensagem()
{
return '[❗] Esto no es un link de pinterest.'
}

function pinterestDownloadErroMensagem()
{
return '[❗] La imagen/vídeo no fue encontrada, talvez no exista or fue ingresado incorrectamente.'
}

function soundcloudDownloadArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese el link de soundcloud\n \nUsa ${prefix}${cmd} <link>`
}

function linkSoundcloudInvalidoErroMensagem()
{
return '[❗] Esto no es un link de soundcloud.'
}

function soundcloudDownloadErroMensagem()
{
return '[❗] La música no fue encontrada, talvez no exista or fue ingresado incorrectamente.'
}

function enviandoMusicaSCMensagem1()
{
return 'Buscando música... ⌛'
}

function enviandoMusicaSCMensagem2()
{
return 'Enviando... ⚡'
}

function enviandoMusicaSCMensagem3()
{
return 'Espera... 😇'
}

function scBuscarArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese un nombre para buscar\n \nEjemplo: ${prefix}${cmd} billie eilish`
}

function scBuscarErroMensagem()
{
return '[❗] Esta busca no fue encontrada, talvez no exista or fue ingresada incorrectamente.'
}

function scBuscarMscsEncontradasMensagem()
{
return 'Todas las buscas fueron enviadas! ☑'
}

function stickerBuscarArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese el nombre de un pack de stickers para buscar\n \nEjemplo: ${prefix}${cmd} cr7\n \n࿓ Si quiere saber el nombre de los packs con más facilidad descarga la aplicación *sticker maker*`
}

function stickerBuscarErroMensagem()
{
return '[❗] Esta busca no fue encontrada, talvez no exista, fue ingresada incorrectamente or ocurrió un error en el sistema.'
}

function stickerBuscarEnviadosMensagem(total)
{
return `Todos los stickers fueron enviados! ✔\n \nϟ Total: *${total}*`
}

function imgBuscarArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese un nombre para buscar\n \nEjemplo: ${prefix}${cmd} goku`
}

function imgBuscarErroMensagem()
{
return '[❗] Esta busca no fue encontrada, talvez no exista or fue ingresada incorrectamente.'
}

function imgBuscarEnviadosMensagem(total)
{
return `Todas las imágenes fueron enviadas! ✔\n \nϟ Total: *${total}*`
}

function randompfpArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function randomaestheticArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function randomanimeArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function imagemVideoAudioStickerErroMensagem()
{
return '[❗] Etiqueta una imagen|vídeo|audio|sticker'
}

function toDocErroMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function simiArgsMensagem(prefix, cmd)
{
return `[❗] Usa ${prefix}${cmd} <texto>`
}

function simiErroMensagem()
{
return '[❗] Ocurrió un error, talvez el texto ingresado no sea compatible con la respuesta del simi.'
}

function profileArgsMensagem(prefix, cmd)
{
return `[❗] Usa ${prefix}${cmd} <etiquetar>`
}

function profileErroMensagem()
{
return '[❗] Este usuario no tiene foto en el perfil.'
}

function traduzirArgsMensagem(prefix, cmd)
{
return `[❗] Usa ${prefix}${cmd} <idioma> <texto>`
}

function jaEstaNoIdiomaErroMensagem()
{
return '[❗] El texto ingresado ya está en el idioma elegido.'
}

function traduzirErroMensagem()
{
return '[❗] Ocurrió un error, talvez el idioma elegido no funciona.'
}

function fraseArgsMensagem(prefix, cmd)
{
return `[❗] Usa ${prefix}${cmd} <número>`
}

function fraseErroMensagem()
{
return '[❗] mínimo 1 y el máximo es 99.'
}

function audioFxErroMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function ephotoErroMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function textproErroMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function afxErroMensagem(prefix, cmd)
{
return `[❗] Ingrese ${prefix}${cmd} sin argumentos!`
}

function gfxArgsMensagem()
{
return `[🧙🏼‍♂️] Elija un efecto de la lista...\n \n➳ affect\n➳ beautiful\n➳ blur\n➳ brightness *<cantidad>*\n➳ burn *<cantidad>*\n➳ circle\n➳ clyde *<mensaje>* *<nombre>*\n➳ darkness *<cantidad>*\n➳ delete\n➳ facepalm\n➳ greyscale\n➳ hitler\n➳ invert\n➳ jail\n➳ jokeoverhead\n➳ phub *<mensaje>* *<nombre>*\n➳ pixelate *<cantidad>*\n➳ quote *<mensaje>* *<nombre>*\n➳ rainbow\n➳ resize *<altura>* *<anchura>*\n➳ rip\n➳ sepia\n➳ sharpen *<cantidad>*\n➳ shit\n➳ trash\n➳ trigger\n➳ wanted\n➳ wasted\n \n࿓ Despues etiqueta una imagen, ejemplo: ${prefix}gfx sharpen 5`
}

function gfxErroMensagem(efecto)
{
return `[❗] *${efecto}* no esta en la lista de efectos, usa ${prefix}gfx para ver los efectos disponibles.`
}

function comandosGfxErroMensagem(prefix, cmd, cmd2)
{
return `[❗] Usa ${prefix}${cmd} ${cmd2} <cantidad>`
}

function comandos2GfxErroMensagem(prefix, cmd, cmd2)
{
return `[❗] Usa ${prefix}${cmd} ${cmd2} <altura> <anchura>`
}

function comandos3GfxErroMensagem(prefix, cmd, cmd2)
{
return `[❗] Usa ${prefix}${cmd} ${cmd2} <mensaje> <nombre>`
}

function funcEmUsoErroMensagem() 
{
return '[❗] Esta función ya está siendo utilizada por alguien, espera en la fila! 😇'
}

function tiktokDownloadArgsMensagem(prefix, cmd)
{
return `[❗] Ingrese el link de tiktok\n \nUsa ${prefix}${cmd} <link>`
}

function linkTikTokInvalidoErroMensagem()
{
return '[❗] Esto no es un link de tiktok.'
}

function tiktokDownloadErroMensagem()
{
return '[❗] El vídeo no fue encontrado, talvez no exista or fue ingresado incorrectamente.'
}

function comandoInexistenteErroMensagem()
{
return `[❗] Este comando no existe, usa ${prefix}menu para ver los comandos...`
}

function grupoNomeMensagem()
{
return 'Nombre del grupo cambiado con éxito... ✅'
}

function grupoDescMensagem()
{
return 'Descripción del grupo cambiada. ✅'
}

function grupoFechadoMensagem()
{
return 'Grupo fue cerrado para todos, solo los administradores pueden chatear en el grupo. ⚠'
}

function grupoAbertoMensagem()
{
return 'Grupo fue abierto para todos. ✅'
}

function grupoPermitirEditarMensagem()
{
return 'Ahora todos pueden cambiar las configuraciones del grupo. ✅'
}

function grupoNegarEditarMensagem()
{
return 'Ahora solo los admins pueden cambiar las configuraciones del grupo. ⚠'
}

function promoverMensagem(mentioneduser) {
return `Miembro @${mentioneduser.split('@')[0]} ha sido ascendido con éxito a administrador. ✅`
}

function rebaixarMensagem(mentioneduser) {
return `Miembro @${mentioneduser.split('@')[0]} ya no es más administrador del grupo. ✅`
}

function antilinkAtivadoMensagem()
{
return '「 Antilink 」activado con éxito en este grupo, solo los administradores pueden enviar links. ✔️'
}

function antilinkDesativadoMensagem()
{
return 'Antilink desactivado, ahora los miembros pueden enviar links. ⚠️'
}

function antilinkGrupoAtivadoMensagem()
{
return '「 Antilink-Grupo 」activado con éxito en este grupo, solo los administradores pueden enviar. ✔️'
}

function antiPornoDesativadoMensagem()
{
return 'Antiporno fue desactivado. ✖'
}

function antiPornoAtivadoMensagem()
{
return '「 AntiPorno 」activado con éxito en este grupo, solo los admins pueden enviar contenido adulto. ✔🔞'
}

function antiFotoDesativadoMensagem()
{
return 'Antifoto desactivado, los miembros ya pueden enviar fotos. 📷'
}

function antiFotoAtivadoMensagem()
{
return '「 Antifoto 」activado con éxito en este grupo, solo los administradores pueden enviar. ✔️'
}

function antiVideoDesativadoMensagem()
{
return 'Antivideo desactivado, los miembros ya pueden enviar videos. ☑'
}

function antiVideoAtivadoMensagem()
{
return '「 Antivideo 」activado con éxito en este grupo, solo los administradores pueden enviar vídeos. ✔️'
}

function antiAudioDesativadoMensagem()
{
return 'Antiaudio desactivado, ahora los miembros pueden enviar audios. ☑'
}

function antiAudioAtivadoMensagem()
{
return '「 Antiaudio 」activado con éxito en este grupo, solo los administradores pueden enviar. ✔️'
}

function antiStickerDesativadoMensagem()
{
return 'Antisticker desactivado, ahora los miembros ya pueden enviar stickers. ☑'
}

function antiStickerAtivadoMensagem()
{
return '「 Antisticker 」activado con éxito en este grupo, solo los administradores pueden enviar stickers. ✔️'
}

function antilinkGrupoDesativadoMensagem()
{
return 'Antilink-Grupo desactivado, ahora los miembros pueden enviar links de grupos. ✅'
}

function linkGrupoAtivadoMensagem()
{
return `Link grupo fue activado en este grupo, ahoras los miembros pueden tener acceso al link del grupo con ${prefix}link ✔️`
}

function linkGrupoDesativadoMensagem()
{
return `🚫 Link grupo desactivado, ahora los miembros no pueden tener el link del grupo directamente con ${prefix}link`
}

function adminLogsAtivadoMensagem()
{
return 'Adminlogs activado con éxito en este grupo. ✔'
}

function adminLogsDesativadoMensagem()
{
return 'Adminlogs desactivado con éxito. ⚡'
}

function bemvindoAtivadoMensagem()
{
return 'Mensaje de bienvenido(a) activado con éxito en este grupo. ✔'
}

function bemvindoDesativadoMensagem()
{
return 'Mensaje de bienvenido(a) desactivado. ⚠'
}

function bemvindoDoisAtivadoMensagem()
{
return 'Mensaje de bienvenido(a) 2 activado con éxito. ☑'
}

function bemvindoDoisDesativadoMensagem()
{
return 'Mensaje de bienvenido(a) 2 desactivado. ✖'
}

function bemvindoEstaAtivoErroMensagem()
{
return `[❗] El bienvenido ya está activado, deshabilíta antes con ${prefix}bienvenido 0`
}

function bemvindoDoisEstaAtivoErroMensagem()
{
return `[❗] El bienvenido2 ya está activado, deshabilíta antes con ${prefix}bienvenido2 0`
}

function antiBanGhostAtivadoMensagem()
{
return 'Antibanghost fue activado en este grupo, la función banghost ya no funciona. ✔️'
}

function antiBanGhostDesativadoMensagem()
{
return 'Antibanghost fue desactivado, la función de banghost ya funciona. ☑'
}

function noticiaCriadaMensagem()
{
return 'Noticia creada con éxito. ✔'
}

function noticiaRemovidaMensagem()
{
return 'Su noticia fue eliminada con éxito! ✅'
}

function linkDetectadoMensagem() {
return `‼️「 Link  Detectado 」serás baneado(a) por violar las reglas y enviar link en el grupo.`
}

function linkGrupoDetectadoMensagem() {
return `‼️「 Antilink-Grupo 」serás baneado(a) por violar las reglas y enviar link en el grupo.`
}

function pornoDetectadoMensagem() {
return `🔞「 AntiPorno 」serás baneado(a) por enviar contenido adulto en el grupo.`
}

function criandoStickerMensagem() {
return `Creando sticker, espera... ⌛`
}

function enviandoFxMensagem1() {
return 'Enviando, espera... ⌛'
}

function enviandoFxMensagem2() {
return 'Un momento... 💜'
}

function enviandoFxMensagem3() {
return 'Editando audio! ✔'
}

function enviandoMusicaMensagem1() {
return 'Enviando su música... ⌛'
}

function enviandoMusicaMensagem2() {
return 'Espera... ⌛'
}

function enviandoMusicaMensagem3() {
return 'Su deseo es una orden! 😇'
}

function enviandoMusicaMensagem4() {
return 'Enviando ahora mismo! ⚡'
}

function enviandoMusicaMensagem5() {
return 'Enviando... 💕'
}

function enviandoMP3Mensagem() {
return 'Enviando, espera un momento... ⌛'
}

function enviandoVideoMensagem() {
return 'Enviando vídeo, espera un momento... ⌛'
}

function enviandoDocMensagem() {
return 'Enviando su documento, espera... ⌛'
}

function grupoFechadoTempMensagem(admin, timer) {
return `${admin} definió que el grupo sea cerrado para los miembros en ${timer} ⚠️`
}

function grupoAbertoTempMensagem(admin, timer) {
return `${admin} definió que el grupo sea abierto para todos en ${timer} ✅`
}

function linkMensagem(link) {
return `➡️ https://chat.whatsapp.com/${link}`
}

function linkRedefinidoMensagem() {
return 'El link del grupo fue redefinido con éxito, ahora es un nuevo link ✔️'
}

function removidoListaNegraMensagem(user) {
return `${user} fue eliminado(a) del grupo por estar en la lista negra. ‼️`
}

function admLogsPromoveuMensagem(admin, user) {
return `ϟ ${admin} *dio* administrador a :\n${user}`
}

function admLogsDemoteMensagem(admin, user) {
return `✘ ${admin} *sacó* administrador de :\n${user}`
}

function bemvindoMensagem1(user) {
return `${user} Sᴇᴀ ʙɪᴇɴᴠᴇɴɪᴅᴏ(ᴀ)! Lᴇᴇ ʟᴀs ʀᴇɢʟᴀs. 💜

Aʟ ᴇɴᴛʀᴀʀ, ᴘʀᴇsᴇ́ɴᴛᴀᴛᴇ ᴄᴏɴ:

📝Nᴏᴍʙʀᴇ
👶🏻Eᴅᴀᴅ
📷Fᴏᴛᴏ(ᴏᴘᴄɪᴏɴᴀʟ)
🏠Pᴀɪ́s/ᴄɪᴜᴅᴀᴅ`
}

function bemvindoMensagem2(user) {
return `${user} Sᥱᥲ bιᥱᥒ᥎ᥱᥒιd᥆(ᥲ)! Lᥱᥱ ᥣᥲ᥉ rᥱgᥣᥲ᥉. 💙

Aᥣ ᥱᥒtrᥲr, ρrᥱ᥉ᥱ́ᥒtᥲtᥱ ᥴ᥆ᥒ:

📝N᥆꧑brᥱ
👶🏻Edᥲd
📷F᥆t᥆(᥆ρᥴι᥆ᥒᥲᥣ)
🏠Pᥲί᥉/ᥴιᥙdᥲd`
}

function bemvindoMensagem3(user) {
return `${user} 𝚂𝚎𝚊 𝚋𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘(𝚊)! 𝙻𝚎𝚎 𝚕𝚊𝚜 𝚛𝚎𝚐𝚕𝚊𝚜. ❣

𝙰𝚕 𝚎𝚗𝚝𝚛𝚊𝚛, 𝚙𝚛𝚎𝚜𝚎́𝚗𝚝𝚊𝚝𝚎 𝚌𝚘𝚗:

📝𝙽𝚘𝚖𝚋𝚛𝚎
👶🏻𝙴𝚍𝚊𝚍
📷𝙵𝚘𝚝𝚘(𝚘𝚙𝚌𝚒𝚘𝚗𝚊𝚕)
🏠𝙿𝚊𝚒́𝚜/𝚌𝚒𝚞𝚍𝚊𝚍`
}

function bemvindoMensagem4(user) {
return `${user} 𝐒𝐞𝐚 𝐛𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨(𝐚)! 𝐋𝐞𝐞 𝐥𝐚𝐬 𝐫𝐞𝐠𝐥𝐚𝐬. ☪️

𝐀𝐥 𝐞𝐧𝐭𝐫𝐚𝐫, 𝐩𝐫𝐞𝐬𝐞́𝐧𝐭𝐚𝐭𝐞 𝐜𝐨𝐧:

📝𝐍𝐨𝐦𝐛𝐫𝐞
👶🏻𝐄𝐝𝐚𝐝
📷𝐅𝐨𝐭𝐨(𝐨𝐩𝐜𝐢𝐨𝐧𝐚𝐥)
🏠𝐏𝐚𝐢́𝐬/𝐜𝐢𝐮𝐝𝐚𝐝`
}

function bemvindoMensagem5(user) {
return `${user} 𝕊𝕖𝕒 𝕓𝕚𝕖𝕟𝕧𝕖𝕟𝕚𝕕𝕠(𝕒)! 𝕃𝕖𝕖 𝕝𝕒𝕤 𝕣𝕖𝕘𝕝𝕒𝕤. 🧡

𝔸𝕝 𝕖𝕟𝕥𝕣𝕒𝕣, 𝕡𝕣𝕖𝕤𝕖́𝕟𝕥𝕒𝕥𝕖 𝕔𝕠𝕟:

📝ℕ𝕠𝕞𝕓𝕣𝕖
👶🏻𝔼𝕕𝕒𝕕
📷𝔽𝕠𝕥𝕠(𝕠𝕡𝕔𝕚𝕠𝕟𝕒𝕝)
🏠ℙ𝕒𝕚́𝕤/𝕔𝕚𝕦𝕕𝕒𝕕`
}

function horariosMensagem(bot, from, selo) {
// Caribe //
let antiguaebarbuda = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/St_Johns',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let aruba = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Aruba',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let bahamas = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Nassau',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let barbados = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Barbados',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let cuba = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Havana',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let dominica = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Dominica',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let granada = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Grenada',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let guadaloupe = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Guadeloupe',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let haiti = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Port-au-Prince',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let ilhascaimao = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Cayman',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let ilhasturcasecaicos = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Thunder_Bay',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let ilhasvirgens = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/St_Thomas',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let jamaica = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Jamaica',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let martinica = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Martinique',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let portorico = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Puerto_Rico',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let republicadominicana = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Santo_Domingo',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let saintbarthelemy = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/St_Barthelemy',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let santalucia = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/St_Lucia',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let saocristovaoeneves = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/St_Kitts',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let saovicenteegranadinas = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/St_Vincent',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let trinidadetobago = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Port_of_Spain',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
// América Central //
let belize = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Belize',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let costarica = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Costa_Rica',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let elsalvador = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/El_Salvador',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let guatemala = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Guatemala',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let honduras = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Tegucigalpa',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let nicaragua = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Managua',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let panama = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Panama',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
// América do Sul //
let argentina = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Buenos_Aires',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let bolivia = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/La_Paz',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let brasil = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Sao_Paulo',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let chile = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Santiago',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let colombia = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Bogota',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let equador = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Guayaquil',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let guiana = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Guyana',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let guianafrancesa = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Mendoza',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let paraguai = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Asuncion',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let peru = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Lima',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let suriname = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Paramaribo',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let uruguai = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Montevideo',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let venezuela = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Caracas',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
// América do Norte //
let mexico = new Date().toLocaleTimeString("en-US", 
{timeZone:'America/Mexico_City',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
// Europa //
let espanha = new Date().toLocaleTimeString("en-US", 
{timeZone:'Europe/Madrid',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
let portugal = new Date().toLocaleTimeString("en-US", 
{timeZone:'Europe/Lisbon',hour: "2-digit", minute: "2-digit",hourCycle:'h24'})
return bot.sendMessage(from, { text: `
╭━ 『🌎』𝙲𝚊𝚛𝚒𝚋𝚎『🌎』
┝ _➛🇦🇬 Antigua y Barbuda : ${antiguaebarbuda}
┝ _➛🇦🇼 Aruba : ${aruba}
┝ _➛🇧🇸 Bahamas : ${bahamas}
┝ _➛🇧🇧 Barbados : ${barbados}
┝ _➛🇨🇺 Cuba : ${cuba}
┝ _➛🇩🇲 Domínica : ${dominica}
┝ _➛🇬🇩 Granada : ${granada}
┝ _➛🇬🇵 Guadalupe : ${guadaloupe}
┝ _➛🇭🇹 Haiti : ${haiti}
┝ _➛🇰🇾 Islas Caimán : ${ilhascaimao}
┝ _➛🇹🇨 Islas Turcas y C. : ${ilhasturcasecaicos}
┝ _➛🇻🇮 Islas Vírgenes A. : ${ilhasvirgens}
┝ _➛🇯🇲 Jamaica : ${jamaica}
┝ _➛🇲🇶 Martinica : ${martinica}
┝ _➛🇵🇷 Puerto Rico : ${portorico}
┝ _➛🇩🇴 República D. : ${republicadominicana}
┝ _➛🇧🇱 San Bartolomé : ${saintbarthelemy}
┝ _➛🇱🇨 Santa Lucía : ${santalucia}
┝ _➛🇰🇳 San Cristóbal y N. : ${saocristovaoeneves}
┝ _➛🇻🇨 San Vicente y G. : ${saovicenteegranadinas}
┝ _➛🇹🇹 Trinidad y Tobago : ${trinidadetobago}
╰─々
╭━ 『🌎』𝙰. 𝙲𝚎𝚗𝚝𝚛𝚊𝚕『🌎』
┝ _➛🇧🇿 Belice : ${belize}
┝ _➛🇨🇷 Costa Rica : ${costarica}
┝ _➛🇸🇻 El Salvador : ${elsalvador}
┝ _➛🇬🇹 Guatemala : ${guatemala}
┝ _➛🇭🇳 Honduras : ${honduras}
┝ _➛🇳🇮 Nicaragua : ${nicaragua}
┝ _➛🇵🇦 Panamá : ${panama}
╰─々
╭━ 『🌎』𝙰. 𝚍𝚎𝚕 𝚂𝚞𝚛『🌎』
┝ _➛🇦🇷 Argentina : ${argentina}
┝ _➛🇧🇴 Bolivia : ${bolivia}
┝ _➛🇧🇷 Brasil : ${brasil}
┝ _➛🇨🇱 Chile : ${chile}
┝ _➛🇨🇴 Colombia : ${colombia}
┝ _➛🇪🇨 Ecuador :${equador}
┝ _➛🇬🇾 Guayana : ${guiana}
┝ _➛🇬🇫 Guiana Francesa : ${guianafrancesa}
┝ _➛🇵🇾 Paraguay : ${paraguai}
┝ _➛🇵🇪 Perú : ${peru}
┝ _➛🇸🇷 Surinam : ${suriname}
┝ _➛🇺🇾 Uruguay : ${uruguai}
┝ _➛🇻🇪 Venezuela : ${venezuela}
╰─々
╭━ 『🌎』𝙰. 𝚍𝚎𝚕 𝙽𝚘𝚛𝚝𝚎『🌎』
┝ _➛🇲🇽 México : ${mexico}
╰─々
╭━ 『🌍』𝙴𝚞𝚛𝚘𝚙𝚊『🌍』
┝ _➛🇪🇸 España : ${espanha}
┝ _➛🇵🇹 Portugal : ${portugal}
╰─々` }, { quoted: selo })
}

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

const fetchBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "GET",
url,
headers: {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (err) {
return err
}
}

async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({
method: 'GET',
url: url,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
},
...options
})
return res.data
} catch (err) {
return err
}
}

async function sendEmojiMixSticker(bot, from, info, media, pushname) {
const tmpFileIn = path.join(`./src/tmp/${randomBytes(3).toString('hex')}.png`)
const tmpFileOut = path.join(`./src/tmp/${randomBytes(3).toString('hex')}.webp`)
fs.writeFileSync(tmpFileIn, media)
ff(tmpFileIn).toFormat("webp").save(tmpFileOut).on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(tmpFileIn)
fs.unlinkSync(tmpFileOut)
throw new Error(error)
}
const buff = fs.readFileSync(tmpFileOut)
const mediaWithMetaDataPath = await addStickerMetaData(buff,createStickerMetaData(pushname))
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

async function comprimirSticker(bot, from, pushname, ipath, opath) {
ff(ipath).addOutputOptions([`-y`, `-vcodec`, `libwebp`, `-vf`, `scale='min(224,iw)':min'(224,ih)':force_original_aspect_ratio=decrease,fps=15, pad=224:224:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat("webp").save(opath)
.on("end", async (error) => {
if (error) {
console.log(error)
fs.unlinkSync(ipath)
fs.unlinkSync(opath)
throw new Error(error)
}
const mediaWithMetaDataPath = await addStickerMetaData(opath, createStickerMetaData(pushname))
const media = fs.readFileSync(mediaWithMetaDataPath)
await bot.sendMessage(from, { sticker: media })
fs.unlinkSync(mediaWithMetaDataPath)
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

const textoParaVoz = async (idioma, texto) => {
return new Promise((resolve,reject)=>{
const ttsAr = require('node-gtts')('ar')
const ttsFr = require('node-gtts')('fr')
const ttsDe = require('node-gtts')('de')
const ttsEn = require('node-gtts')('en')
const ttsPt = require('node-gtts')('pt')
const ttsJp = require('node-gtts')('ja')
const ttsEs = require('node-gtts')('es')
const ttsIt = require('node-gtts')('it')
const ttsId = require('node-gtts')('id')
const ttsRu = require('node-gtts')('ru')
const ttsKo = require('node-gtts')('ko')
const ttsSv = require('node-gtts')('sv')
if (idioma == 'pt') {
const templocalpt = path.resolve(`src/audios/resPt${randomBytes(3).toString('hex')}.mp3`)
ttsPt.save(templocalpt, texto, function () {
resolve(templocalpt)
})
} else if (idioma == 'en') {
const templocalen = path.resolve(`src/audios/resEn${randomBytes(3).toString('hex')}.mp3`)
ttsEn.save(templocalen, texto, function () {
resolve(templocalen)
})
} else if (idioma == 'jp') {
const templocaljp = path.resolve(`src/audios/resJp${randomBytes(3).toString('hex')}.mp3`)
ttsJp.save(templocaljp, texto, function () {
resolve(templocaljp)
})
} else if (idioma == 'es') {
const templocales = path.resolve(`src/audios/resEs${randomBytes(3).toString('hex')}.mp3`)
ttsEs.save(templocales, texto, function () {
resolve(templocales)
})
} else if (idioma == 'it') {
const templocalit = path.resolve(`src/audios/resIt${randomBytes(3).toString('hex')}.mp3`)
ttsIt.save(templocalit, texto, function () {
resolve(templocalit)
})
} else if (idioma == 'ru') {
const templocalru = path.resolve(`src/audios/resRu${randomBytes(3).toString('hex')}.mp3`)
ttsRu.save(templocalru, texto, function () {
resolve(templocalru)
})
} else if (idioma == 'ko') {
const templocalko = path.resolve(`src/audios/resKo${randomBytes(3).toString('hex')}.mp3`)
ttsKo.save(templocalko, texto, function () {
resolve(templocalko)
})
} else if (idioma == 'sv') {
const templocalsv = path.resolve(`src/audios/resSv${randomBytes(3).toString('hex')}.mp3`)
ttsSv.save(templocalsv, texto, function () {
resolve(templocalsv)
})
} else if (idioma == 'ar') {
const templocalar = path.resolve(`src/audios/resAr${randomBytes(3).toString('hex')}.mp3`)
ttsAr.save(templocalar, texto, function () {
resolve(templocalar)
})
} else if (idioma == 'fr') {
const templocalfr = path.resolve(`src/audios/resFr${randomBytes(3).toString('hex')}.mp3`)
ttsFr.save(templocalfr, texto, function () {
resolve(templocalfr)
})
} else if (idioma == 'de') {
const templocalde = path.resolve(`src/audios/resDe${randomBytes(3).toString('hex')}.mp3`)
ttsDe.save(templocalde, texto, function () {
resolve(templocalde)
})
} else if (idioma == 'id') {
const templocalid = path.resolve(`src/audios/resId${randomBytes(3).toString('hex')}.mp3`)
ttsId.save(templocalid, texto, function () {
resolve(templocalid)
})
} else {
reject(new Error(erro))
}
}).catch(err =>{
var errors = [erro]
if(!errors.includes(err.message)){
console.log(err.message)
throw new Error(msgs_texto.utilidades.voz.erro_audio)
} else {
throw err
}
})
}

const isSoundCloudUrl = (url) => {
return url.includes("soundcloud.com/")
}

const isPinterestUrl = (url) => {
return url.includes("pin.it/") || url.includes("pinterest.com/")
}

const isInstagramUrl = (url) => {
return url.includes("instagram.com/")
}

const isTikTokUrl = (url) => {
return url.includes("tiktok.com/")
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

function extractDataFromMessage(baileysMessage) {
const textMessage = baileysMessage.message?.conversation
const extendedTextMessage = baileysMessage.message?.extendedTextMessage?.text
const imageTextMessage = baileysMessage.message?.imageMessage?.caption
const videoTextMessage = baileysMessage.message?.videoMessage?.caption
const stickerTextMessage = baileysMessage.message?.stickerMessage?.caption
const audioTextMessage = baileysMessage.message?.audioMessage?.caption
const fullMessage = textMessage || extendedTextMessage || imageTextMessage || videoTextMessage || stickerTextMessage || audioTextMessage
if (!fullMessage) {
return {
remoteJid: '',
isImage: false,
isVideo: false,
isSticker: false,
isAudio: false
}
}
const isImage = !!baileysMessage.message?.imageMessage || !!baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
const isVideo = !!baileysMessage.message?.videoMessage || !!baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage
const isSticker = !!baileysMessage.message?.stickerMessage || !!baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage
const isAudio = !!baileysMessage.message?.audioMessage || !!baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage
return {
remoteJid: baileysMessage?.key?.remoteJid,
fullMessage,
isImage,
isVideo,
isSticker,
isAudio
}
}

function getMediaMessageContent(messageInfo, messageType) {
const mediaQuoted = messageInfo.message.extendedTextMessage?.contextInfo?.quotedMessage;
if (mediaQuoted) {
return (
mediaQuoted.imageMessage ||
mediaQuoted.videoMessage ||
mediaQuoted.stickerMessage
);
}
return messageInfo.message[messageType];
}

async function downloadImage(baileysMessage, fileName){
const content = baileysMessage.message?.imageMessage || baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
if(!content) return null
const stream = await downloadContentFromMessage(content, 'image')
const getExtension = async (type) => {
return await mimetype.extension(type)
}
let buffer = Buffer.from([])
for await (const chunk of stream){
buffer = Buffer.concat([buffer, chunk])
}
const filePath = path.resolve(tempfolder, `${fileName}.`+await getExtension(content.mimetype))
await writeFile(filePath, buffer)
return filePath
}

async function downloadVideo(baileysMessage, fileName){
const content = baileysMessage.message?.videoMessage || baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage
if(!content) return null 
const stream = await downloadContentFromMessage(content, 'video')
const getExtension = async (type) => {
return await mimetype.extension(type)
}
let buffer = Buffer.from([]) 
for await (const chunk of stream){
buffer = Buffer.concat([buffer, chunk])
}
const filePath = path.resolve(tempfolder, `${fileName}.`+await getExtension(content.mimetype))
await writeFile(filePath, buffer)
return filePath
}

async function downloadSticker(baileysMessage, fileName){
const content = baileysMessage.message?.stickerMessage || baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage
if(!content) return null
const stream = await downloadContentFromMessage(content, 'sticker')
const getExtension = async (type) => {
return await mimetype.extension(type)
}
let buffer = Buffer.from([])
for await (const chunk of stream){
buffer = Buffer.concat([buffer, chunk])
}
const filePath = path.resolve(tempfolder, `${fileName}.`+await getExtension(content.mimetype))
await writeFile(filePath, buffer)
return filePath
}

async function downloadAudio(baileysMessage, fileName){
const content = baileysMessage.message?.audioMessage || baileysMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage
if(!content) return null
const stream = await downloadContentFromMessage(content, 'audio')
const getExtension = async (type) => {
return await mimetype.extension(type)
}
let buffer = Buffer.from([])
for await (const chunk of stream){
buffer = Buffer.concat([buffer, chunk])
}
const filePath = path.resolve(audiotempfolder, `${fileName}.`+await getExtension(content.mimetype))
await writeFile(filePath, buffer)
return filePath
}

module.exports = {
prefix,
nomebot,
numerodono,
tempfolder,
createStickerMetaData,
comprimirSticker,
audiotempfolder,
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
donoErroMensagem,
adminErroMensagem,
donoGrupoOuCriadorErroMensagem,
nomeErroMensagem,
descErroMensagem,
listaGruposErroMensagem,
tagErroMensagem,
grupoNomeMensagem,
grupoDescMensagem,
grupoFechadoMensagem,
grupoAbertoMensagem,
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
antilinkGrupoJaAtivoErroMensagem,
antilinkGrupoNaoAtivoErroMensagem,
antilinkGrupoErroMensagem,
antilinkGrupoEstaAtivoErroMensagem,
antilinkEstaAtivoErroMensagem,
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
bemvindoJaAtivoErroMensagem,
bemvindoNaoAtivoErroMensagem,
bemvindoErroMensagem,
bemvindoDoisJaAtivoErroMensagem,
bemvindoDoisNaoAtivoErroMensagem,
bemvindoDoisErroMensagem,
adminLogsJaAtivoErroMensagem,
adminLogsNaoAtivoErroMensagem,
adminLogsErroMensagem,
antiBanGhostJaAtivoErroMensagem,
antiBanGhostNaoAtivoErroMensagem,
antiBanGhostErroMensagem,
imagemVideoGifErroMensagem,
videoLongoErroMensagem,
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
vozErroMensagem,
vozArgsMensagem,
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
noticiasErroMensagem,
noticiaCriadaMensagem,
noticiaRemovidaMensagem,
promoverMensagem,
rebaixarMensagem,
antilinkGrupoAtivadoMensagem,
antilinkGrupoDesativadoMensagem,
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
antilinkAtivadoMensagem,
antilinkDesativadoMensagem,
linkGrupoAtivadoMensagem,
linkGrupoDesativadoMensagem,
linkDesativadoErroMensagem,
bemvindoAtivadoMensagem,
bemvindoDesativadoMensagem,
bemvindoDoisAtivadoMensagem,
bemvindoDoisDesativadoMensagem,
adminLogsAtivadoMensagem,
adminLogsDesativadoMensagem,
admLogsPromoveuMensagem,
admLogsDemoteMensagem,
antiBanGhostAtivadoMensagem,
antiBanGhostDesativadoMensagem,
linkGrupoDetectadoMensagem,
linkDetectadoMensagem,
pornoDetectadoMensagem,
criandoStickerMensagem,
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
pinterestImgsBaixadasMensagem,
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
bemvindoEstaAtivoErroMensagem,
bemvindoDoisEstaAtivoErroMensagem,
ephotoErroMensagem,
textproErroMensagem,
afxErroMensagem,
funcEmUsoErroMensagem,
tiktokDownloadArgsMensagem,
linkTikTokInvalidoErroMensagem,
tiktokDownloadErroMensagem,
botErroMensagem,
addListaNegraMensagem,
removidoListaNegraMensagem,
removerListaNegraMensagem,
linkMensagem,
linkRedefinidoMensagem,
escolherTimerFecharGrupoMensagem,
escolherTimerAbrirGrupoMensagem,
getGroupAdmins,
fetchBuffer,
fetchJson,
isSoundCloudUrl,
isPinterestUrl,
isInstagramUrl,
isTikTokUrl,
isUrl,
extractDataFromMessage,
getMediaMessageContent,
downloadImage,
downloadVideo,
downloadAudio,
downloadSticker,
sendEmojiMixSticker,
textoParaVoz
}