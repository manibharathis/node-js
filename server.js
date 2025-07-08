const http = require("node:http")
const server = http.createServer(function(req,res){
    if(req.url == "/getSecretData"){
       res.end("Hello SECRET")
    }
    res.end("Hello WORLD")
})
server.listen(7777)