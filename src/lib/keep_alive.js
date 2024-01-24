//var http = require('http');
require("fix-esm").register();
const express = require('express')
const app = express()
app.get('/', function (req, res) {
res.send('online!')
})
app.listen(3000)
/*
http.createServer(function (req, res) {
res.write("Funcionando!");
res.end();
}).listen(3306);
*/
