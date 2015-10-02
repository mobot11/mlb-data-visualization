var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 8000;

var request = require('superagent');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));