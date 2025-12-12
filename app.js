var express = require('express')
var app = express()
app.use(express.static(__dirname + "/"))

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/main.html")
})