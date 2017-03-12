var express = require('express')
var app = express()


app.use(express.static('build'))

app.get('/', function (req, res) {
  res.sendfile("index.htm;")
})

var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
console.log("port", port);
console.log("ip", ip);
app.listen(port, ip);