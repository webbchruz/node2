const http = require('http');
const port = 5000;
const server = http.createServer((req,res)=>{
if (req.url ==='/'){
    res.end("welcome to our home page")
}
if(req.url ==="/about"){
    res.end("here is our short history")
}
res.end(`<h1>Oops !</h1>
<p>This page doesn't exist</p>
<a href="/">Back home</a>`)
})
server.listen(port,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`server runing in port ${port} `)
});