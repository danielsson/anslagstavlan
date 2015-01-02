var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.engine('jade', require('jade').__express);



app.use(express.static(__dirname + "/public"));


app.get('/', function (req, res) {
  res.render("index.jade");
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(3000);