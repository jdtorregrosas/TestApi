var cors = require('cors');
var express = require('express')
var automoviles = require('./testData/automoviles.json');
var hoteles = require('./testData/hoteles.json');
var vuelos = require('./testData/vuelos.json');
var cruceros = require('./testData/cruceros.json');
var vacaciones = require('./testData/vacaciones.json');
var heroes = require('./testData/heroes.json');
var heroes = require('./testData/enemies.json');
var app = express()

app.use(cors({ origin: '*' }));

app.get('/status', function (req, res) {
  res.send({ status: "ok" });
})

app.get('/heroes', function (req, res) {
  res.send(heroes);
})


app.get('/enemies', function (req, res) {
  res.send(enemies);
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
