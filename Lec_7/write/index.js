let users=[
    {
        name:"Sushobhit",
        age:"19",
        address:"panchkula"
    },{
        name:"soni",
        age:"20",
        address:"chandigarh"
    }
]
const fs= require("fs");
fs.writeFile("../user.txt",JSON.stringify(users),function(err){
    if(err)return console.log(err);
    console.log("user written !!");
})