const fs=require("fs");
fs.readFile("../user.txt","Utf-8",function(err,data){
    if(err) return console.log(err);
    let a= JSON.parse(data);
    console.log(a[0]);
})