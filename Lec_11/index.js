//accessing dom element
//1.using Id
//2.using class
//3. using tag 
//4. using querySelectorAll
// let el1=document.getElementById("heading");
// console.log(el1);
// let el2=document.getElementsByClassName("item");
// console.log(el2[0]);
// let el3=document.getElementsByTagName("p");
// console.log(el3);
let el4=document.querySelectorAll("p");
console.log(el4[0]);
let el5=document.querySelectorAll(".item");
console.log(el5);
let el6=document.querySelectorAll(".item");
console.log(el6);
let ul=document.querySelector("#container");
//properties
/*
innerText
innerHTML
textContent
*/


let data=el4[0].innerText;
console.log(data);
el4[0].innerText="Hello World";
let data2=ul.innerHTML;
let data3=ul.innerText;
let data4=ul.textContent;
console.log(data3);
console.log(data2);
console.log(data4);
ul.innerHTML=`<li class="item">Item 1</li>
              <li class="item">Item 2</li>`;

/*
getAttribute
setAttribute
classList 
*/
//indexcontent mein space aat hai output par
el5.classList.ad("delete")
console.log(el5.classList.contains("delete"));
console.log(el5.classList);