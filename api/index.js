var express = require('express');

var server = express();

//libera acesso à API de qualquer host/cliente
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(express.static(__dirname + '/public'));

var port = 3000;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
