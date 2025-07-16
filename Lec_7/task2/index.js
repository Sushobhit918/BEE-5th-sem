const fs = require("fs");
let userData = [];
fs.readFile("../user1.txt","utf-8",(err,dataA)=>{
    if(err){
        return console.log(err)
    }
    let usersA = JSON.parse(dataA);
    let i= 0;
    usersA.forEach(element => {
        userData[i++] = element
    });
    fs.readFile("../user2.txt","utf-8",(err,dataB)=>{
         if(err){
        return console.log(err);
    }
    let usersB = JSON.parse(dataB)
      usersB.forEach(element => {
        userData[i++] = element
    });
    console.log(userData);

    })
    
})

//todo  ka title description input lena hai aur add karna hai
