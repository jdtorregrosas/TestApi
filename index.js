var express = require('express')
var flights = require('./testData/flights.json');
var app = express()

app.get('/status', function (req, res) {
  res.send({ status: "ok" });
})

app.get('/flight', function (req, res) {
  res.send(flights);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})
