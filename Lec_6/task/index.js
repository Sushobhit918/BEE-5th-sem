const fs= require("fs");

let data3="";
let data1="";
let data2="";
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data);
    data1=data;
})
fs.readFile("../demo2.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data);
    data2=data;
    data3=data1+data2;
    fs.writeFile("../task.txt",data3,function(err){
        if(err)return console.log(err);
        console.log("done");
    })
})

// write data in file using fs module
//input data should be taken using terminal

console.log(process.argv);
//process.argv k andar hota hai terminal mein array ke form mein output deta hai
