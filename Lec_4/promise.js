
let p=new Promise((resolve,reject)=>{
resolve("i completed my promise");
})
p.then((data)=>{
console.log(data);
}).catch((err)=>{
console.log(err)
})
console.log(p);

let product = [
    { name: "motorolla", 
      amount: 70000, 
      quantity: 10 },
    { name: "Iphone 16", 
      amount: 100000,
      quantity: 0 }
];

let availableamount = 200000;
function buyProduct(Product_name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isProduct = product.find(p => p.name === Product_name);
            if (!isProduct) {
                reject("Product is not available");
            }else {
                resolve(isProduct.amount);
            }
        }, 0);
    });
}
function deductBankAccount(amount) {
    return new Promise((resolve, reject) => {
        if (amount > availableamount) {
            reject("Bank balance is low");
        } else {
            availableamount -= amount;
            resolve("Amount deducted");
        }
    });
}
buyProduct("Iphone 16")
    .then(amount => {
        console.log("Product price:", amount);
        return deductBankAccount(amount);
    })
    .then(message => {
        console.log(message);
    })
    .catch(err => {
        console.log("Error:", err);
    });
buyProduct("motorolla")
    .then(amount => {
        console.log("Product price:", amount);
        return deductBankAccount(amount);
    })
    .then(message => {
        console.log(message);
    })
    .catch(err => {
        console.log("Error:", err);
    });
    //The promise is an objet. {Important point to be noted}.
