var express = require('express')
var app = express()

app.get('/', function(req, res) {
   res.json({welcome: "Welcome. Connected to Port:3000."})

})

app.listen(3000)
console.log("Connected to Port 3000")