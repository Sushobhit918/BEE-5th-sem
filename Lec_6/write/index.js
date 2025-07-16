const fs= require("fs");

fs.writeFile("../demo.txt","g26 hello",function(err){
    if(err) return console.log(err);
    console.log("success...");
})
fs.writeFile("../demo2.txt","sushobhit jain is great",function(err){
    if(err) return console.log(err);
    console.log("success...");
})
console.log("All done");