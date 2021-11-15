const http = require('http')

//req = incoming request , res = what we're sending back
const server = http.createServer((req,res)=>{
    if(req.url === '/'){ // '/' is home page
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end("here is our short history")
    }
})

server.listen(5000) //op welke poort de server luistert