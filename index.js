var express = require('express')
var automoviles = require('./testData/automoviles.json');
var hoteles = require('./testData/hoteles.json');
var app = express()

app.get('/status', function (req, res) {
  res.send({ status: "ok" });
})

app.get('/automoviles', function (req, res) {
  res.send(automoviles);
})

app.get('/hoteles', function (req, res) {
  res.send(automoviles);
})

app.listen(process.env.PORT || 5000)
