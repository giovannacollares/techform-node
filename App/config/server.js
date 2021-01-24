var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs');
app.set('views','././App/views')

app.use(bodyParser.urlencoded({extend:true}));

consign()
.include('././App/routes')
.then('././App/config/database.js')
.then('././App/models')
.into(app);

module.exports = app;