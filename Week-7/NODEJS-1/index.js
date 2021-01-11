const fs = require("fs")
const http = require("http")

let host = "localhost";
let port = 8080;

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let timestamp = []
timestamp.push(hour)
timestamp.push(minutes)
timestamp.push(seconds)
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let datestamp = []
datestamp.push(day)
datestamp.push(month)
datestamp.push(year)
let writestr = datestamp.join("/")+" "+timestamp.join(":");
let filename = datestamp.join("-")+"-"+timestamp.join("-")+".txt";

http.createServer((req,res)=>{
    if(req.method!="GET"){
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    }else if(req.url=="/write"){
        fs.writeFile(`./Folder/${filename}`,writestr,function(error){
            if(error){
                console.log(error)
            }else{
                console.log("File Created")
                res.write(`<h1>File Created with Filename ${filename} and content ${writestr}</h1>`)
                res.end()
            }
        })
    }else if(req.url=="/read"){
        fs.readdir("./Folder/",{ withFileTypes: true },function(error,files){
            if(error){
                console.log(error)
            }else{
                let str = ""
                files.forEach(function(file){
                    str+=`<li>${file["name"]}</li>`
                })
                res.write(`<h1>${str}</h1>`)
                res.end()
            }
        })
    }else{
        res.write("<h1>Go to /write or /read </h1>")
    }
}).listen(port,host,()=>{
    console.log(`Server is Running at http://${host}:${port}`);
})