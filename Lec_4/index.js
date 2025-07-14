let product=[{
    name:"motorolla",
    amount:70000,
    quantity:10
},
{
    name:"Iphone 16",
    amount:100000,
    quantity:0
}]
function buyProduct(Product_name,cb){
    //do some asynchronous operation
    setTimeout(()=>{
        //all the operation completed
        console.log("all the I/O is completed and all the details are written in user data");
        let isProduct=product.filter((p)=>
            p.name==Product_name)[0];
        if(!isProduct){
            cb("product is not available");
            
        }
        else{
            cb(null,isProduct.amount);
        }
        console.log(isProduct);
},0) 
}
let availableamount=200000;
function deductbankaccount(amount,cb){
    if(amount>availableamount){
        cb("bankbalance is low",null)
    }else{
        availableamount-=amount;
        cb(null,"amount deducted")
    }
}
buyProduct("IPhone 16",function(){
    console.log("product is purchased")
})
buyProduct("motorolla",function(err,amount){
    if(err)return console,log(err);
    console.log(amount);
    deductbankaccount(amount, function(err,message){
        if(err) return console.log(err)
            console.log(message);
    })
})
//promise is an object which represent eventual completion or failure of an asynchronous operation