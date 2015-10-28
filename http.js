var http = require('http');
var fs = require('fs');
var requestListener = function(req,res){
    if(req.url=='/')
        res.write(fs.readFileSync('./index.html'))
    else if(req.url!='./favicon.ico'){
       var data =(fs.readFileSync('.'+req.url))
        res.write(data)
    }
    res.end()
}
var server = http.createServer(requestListener);
server.listen(8000)
console.log('server started..')