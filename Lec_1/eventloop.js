const fs=require('fs');
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("immediate callback")
})
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer2");
    },0)
    setImmediate(()=>{
        console.log("immediate2");
    })
})
console.log("end");