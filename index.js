var express  = require('express');
var app      = express();                     // Utilizamos express
var mongoose = require('mongoose');
const bodyParser = require('body-parser')
var http = require('http');
var server = http.createServer(app);