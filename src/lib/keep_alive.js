const https = require('https');
const express = require('express')
const app = express()
const { ProxyAgent } = require('proxy-agent')
const agent = new ProxyAgent()
require("fix-esm").register();
/*
var proxies = [
'http://205.164.84.250:8591',
'http://187.60.219.4:3128',
'http://191.242.177.114:3128',
'http://201.89.89.34:8080',
'http://138.97.14.247:8080',
'http://201.20.67.70:8080',
'http://187.84.189.5:8080',
'http://201.91.82.155:3128',
'http://200.250.219.130:8080',
'http://181.44.225.203:999',
'http://191.102.254.26:8084',
'http://138.121.161.121:8290',
'http://190.103.177.131:80',
'http://206.0.16.2:999',
'http://191.102.254.53:8081',
'http://181.209.100.2:999',
'http://201.217.246.212:8080',
'http://181.209.117.50:8080',
'http://138.121.161.86:8190'
]
const randomproxies = proxies[Math.floor(Math.random() * proxies.length)]
*/
https.get('https://186.215.87.194:30005', { agent }, (res) => {
console.log(res.statusCode, res.headers);
res.pipe(process.stdout);
});
/*
setInterval( () => {
var proxies2 = [
'http://205.164.84.250:8591',
'http://187.60.219.4:3128',
'http://191.242.177.114:3128',
'http://201.89.89.34:8080',
'http://138.97.14.247:8080',
'http://201.20.67.70:8080',
'http://187.84.189.5:8080',
'http://201.91.82.155:3128',
'http://200.250.219.130:8080',
'http://181.44.225.203:999',
'http://191.102.254.26:8084',
'http://138.121.161.121:8290',
'http://190.103.177.131:80',
'http://206.0.16.2:999',
'http://191.102.254.53:8081',
'http://181.209.100.2:999',
'http://201.217.246.212:8080',
'http://181.209.117.50:8080',
'http://138.121.161.86:8190'
]
const randomproxies2 = proxies2[Math.floor(Math.random() * proxies2.length)]
http.get(randomproxies2, { agent }, (res) => {
console.log(res.statusCode, res.headers);
res.pipe(process.stdout);
});
}, 86400000)
*/
app.get('/', function (req, res) {
res.send('online!')
})
app.listen(8000)

/* LISTA DE PROXIES (ANTIBAN)
// ALEMANHA //
http://85.8.68.2:80
http://191.101.80.162:80
http://116.203.28.43:80
http://185.225.232.191:80
http://164.90.184.248:80
http://35.207.123.94:80
http://164.68.105.216:80
http://167.172.96.213:80
http://37.120.189.106:80
http://188.34.140.205:8080
// ARGENTINA //
http://181.44.225.203:999
http://191.102.254.26:8084
http://138.121.161.121:8290
http://190.103.177.131:80
http://206.0.16.2:999
http://191.102.254.53:8081
http://181.209.100.2:999
http://201.217.246.212:8080
http://181.209.117.50:8080
http://138.121.161.86:8190
// BRASIL //
http://205.164.84.250:8591
http://187.60.219.4:3128
http://191.242.177.114:3128
http://201.89.89.34:8080
http://138.97.14.247:8080
http://201.20.67.70:8080
http://187.84.189.5:8080
http://201.91.82.155:3128
http://200.250.219.130:8080
// ESTADOS UNIDOS //
http://32.223.6.94:80
http://50.168.163.179:80
http://50.168.163.176:80
http://50.168.210.226:80
http://50.168.210.236:80
http://50.168.210.234:80
http://50.168.210.232:80
http://50.168.210.238:80
http://50.168.210.239:80
http://50.171.152.30:80
http://50.168.210.235:80
http://50.171.152.29:80
http://50.218.57.74:80
http://50.218.57.66:80
http://50.218.57.64:80
http://50.218.57.65:80
http://50.218.57.68:80
http://50.218.57.69:80
http://50.220.168.134:80
http://50.218.57.70:80
http://50.231.172.74:80
http://50.174.7.157:80
http://50.174.7.162:80
http://50.174.7.158:80
http://50.174.7.159:80
http://50.174.7.154:80
http://50.174.7.152:80
http://50.174.7.155:80
http://50.174.7.156:80
http://50.174.145.15:80
var proxies = ['http://85.8.68.2:80', 'http://191.101.80.162:80', 'http://116.203.28.43:80', 'http://185.225.232.191:80', 'http://164.90.184.248:80', 'http://35.207.123.94:80', 'http://164.68.105.216:80', 'http://167.172.96.213:80', 'http://37.120.189.106:80', 'http://188.34.140.205:8080', 'http://181.44.225.203:999', 'http://191.102.254.26:8084', 'http://138.121.161.121:8290', 'http://190.103.177.131:80', 'http://206.0.16.2:999', 'http://191.102.254.53:8081', 'http://181.209.100.2:999', 'http://201.217.246.212:8080', 'http://181.209.117.50:8080', 'http://138.121.161.86:8190', 'http://205.164.84.250:8591', 'http://187.60.219.4:3128', 'http://191.242.177.114:3128', 'http://201.89.89.34:8080', 'http://138.97.14.247:8080', 'http://205.164.84.250:8591', 'http://201.20.67.70:8080', 'http://187.84.189.5:8080', 'http://201.91.82.155:3128', 'http://200.250.219.130:8080', 'http://32.223.6.94:80', 'http://50.168.163.179:80', 'http://50.168.163.176:80', 'http://50.168.210.226:80', 'http://50.168.210.236:80', 'http://50.168.210.234:80', 'http://50.168.210.232:80', 'http://50.168.210.238:80', 'http://50.168.210.239:80', 'http://50.171.152.30:80', 'http://50.168.210.235:80', 'http://50.171.152.29:80', 'http://50.218.57.74:80', 'http://50.218.57.66:80', 'http://50.218.57.64:80', 'http://50.218.57.65:80', 'http://50.218.57.68:80', 'http://50.218.57.69:80', 'http://50.220.168.134:80', 'http://50.218.57.70:80', 'http://50.231.172.74:80', 'http://50.174.7.157:80', 'http://50.174.7.162:80', 'http://50.174.7.158:80', 'http://50.174.7.159:80', 'http://50.174.7.154:80', 'http://50.174.7.152:80', 'http://50.174.7.155:80', 'http://50.174.7.156:80', 'http://50.174.145.15:80']
*/
