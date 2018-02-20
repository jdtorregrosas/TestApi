var express = require('express')
var automoviles = require('./testData/automoviles.json');
var hoteles = require('./testData/hoteles.json');
var vuelos = require('./testData/vuelos.json');
var cruceros = require('./testData/cruceros.json');
var vacaciones = require('./testData/vacaciones.json');
var app = express()

app.get('/status', function (req, res) {
  res.send({ status: "ok" });
})

app.get('/heroes', function (req, res) {
  res.send(hoteles);
})

app.get('/automoviles', function (req, res) {
  res.send(automoviles);
})

app.get('/hoteles', function (req, res) {
  res.send(hoteles);
})

app.get('/vuelos', function (req, res) {
  res.send(vuelos);
})

app.get('/cruceros', function (req, res) {
  res.send(cruceros);
})

app.get('/vacaciones', function (req, res) {
  res.send(vacaciones);
})


app.listen(process.env.PORT || 5000)
