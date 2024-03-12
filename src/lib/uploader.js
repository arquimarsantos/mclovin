const axios = require('axios')
const fetch = require('node-fetch')
const BodyForm = require('form-data')
const { FormData, Blob } = require('formdata-node')
const fs = require('fs')
const { JSDOM } = require('jsdom')



function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}


async function webp2mp4(source) {
    let form = new FormData()
    let isUrl = typeof source === 'string' && /https?:\/\//.test(source)
    const blob = !isUrl && new Blob([source.toArrayBuffer()])
    form.append('new-image-url', isUrl ? blob : '')
    form.append('new-image', isUrl ? '' : blob, 'image.webp')
    let res = await fetch('https://ezgif.com/webp-to-mp4', {
        method: 'POST',
        body: form
    })
    let html = await res.text()
    let {
        document
    } = new JSDOM(html).window
    let form2 = new FormData()
    let obj = {}
    for (let input of document.querySelectorAll('form input[name]')) {
        obj[input.name] = input.value
        form2.append(input.name, input.value)
    }
    let res2 = await fetch('https://ezgif.com/webp-to-mp4/' + obj.file, {
        method: 'POST',
        body: form2
    })
    let html2 = await res2.text()
    let {
        document: document2
    } = new JSDOM(html2).window
    return new URL(document2.querySelector('div#output > p.outfile > video > source').src, res2.url).toString()
}

module.exports = { TelegraPh, UploadFileUgu, webp2mp4 }
