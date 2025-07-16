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
let users2=[{
    name:"Jain",
    age:"21",
    address:"Ambala"
},{
    name:"Rahul",
    age:"22",
    address:"Panchkula"
}]
const fs= require("fs");
fs.writeFile("../user1.txt",JSON.stringify(users),function(err){
    if(err)return console.log(err);
    console.log("user written !!");
})
fs.writeFile("../user2.txt",JSON.stringify(users2),function(err){
    if(err)return console.log(err);
    console.log("user written !!");
})