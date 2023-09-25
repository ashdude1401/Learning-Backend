//importing http module 
const http = require('http');

const PORT=3000;


const server = http.createServer((req,res)=>{
    res.setHeader(200,{'content-type':'text/plain'});
    res.end('Hello World');
});


server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});