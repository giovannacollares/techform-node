var app = require('./App/config/server');

var rotaHome = require('./App/routes/home')(app);
var rotaHome = require('./App/routes/front')(app);
var rotaHome = require('./App/routes/back')(app);
var rotaHome = require('./App/routes/servidores')(app);

app.listen(3050, function() {
console.log("Servidor ativo com Express!");
});
