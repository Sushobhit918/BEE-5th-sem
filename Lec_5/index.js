let users=[{
    id:1,
    name:"Sushobhit",
    age:20
},
{
    id:2,
    name:"Tushya",
    age:17
}]
function isAllowed(user_id){
    //to find the id user
    //after check age;
    return new Promise((resolve,reject)=>{
        let user=users.filter((p)=>{
            return p.id==user_id;
        })[0]
        if(user.age<18)return reject(user.name + " Not eligible");
        else return resolve(user.name + " eligible");
    })
    // setTimeout(()=>{
    //     let use=users.filter((p)=>p.id==user_id)[0];
    //     if(use.age>=18){
    //         console.log(use.name);
    //         console.log(": eligible");
    //     }else{
    //         console.log(use.name);
    //         console.log(": not eligible");
    //     }
    // },0)
}
isAllowed(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

isAllowed(2).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});
