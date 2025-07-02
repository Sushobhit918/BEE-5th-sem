const fs=require('fs')
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multiply(a,b){
    return a*b;
}
fs.readFile("demo.txt","utf-8",(data)=>{
    console.log(data);
})
add(2,3);
sub(5,6);
multiply(3,2);
console.log("exit");
//lib_uv is a library of cpp which consist of Eventloop and second one is thread pool.
//V8 Engine 
//Lib_uv  and v8 engine are two component of node.js
//in which order call back will be executed will be decided by event loop.
//phases of eventloop: 1) Expired timer 2) IO Polling 3) Set Immediate 4) Close calback
//difference between setTime out and set Immediate
//process.next ki priority promise se zyada hoti hai
