//var http = require('http');
require("fix-esm").register();
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
res.send('online!')
})
/*
http.createServer(function (req, res) {
res.write("Funcionando!");
res.end();
}).listen(3306);
*/
