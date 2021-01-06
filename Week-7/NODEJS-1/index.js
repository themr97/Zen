// const os = require('os');

// const path = require('path');

const http = require('http');

const fs = require('fs');

// fs.writeFile("message.txt",os.platform(),function(err){
//     if(err) throw Error;
//     console.log("File Created");
// });


// fs.readFile("message.txt",'utf8',function(err,data){
//     if(err) throw Error;
//     console.log(data);
// })



http.createServer(function(req,res){
    res.write("<h1>Hello World</h1>");
    res.end();
}).listen(8000);

const folder = fs.readdir("C:/Users/mranp/Desktop/assing/Week-7/NODEJS-1/Folder",function (err,data){
    if(err) throw Error;

})


console.log(folder);