const http=require('http');
const v=require('./index.js')
console.log(v.name)
http.createServer((req,res)=>
{
    res.write("Hello Dheeraj");
}).listeners(5000);