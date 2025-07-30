//1. create a new element using createElement function 
//2. insert the data using innerText or innerHTML
//3. insert new element in parent container using appendchild or append

let todos={
    id:1,
    title:"game playing at 7:00pm"
}
let todocontainer=document.querySelector('.todocontainer');
function addtodo(todo){
    let li=document.createElement("li");
    li.innerHTML=` <div>
                <input type ="checkbox" name="" id="">
                <h1>${todo.title}</h1>
            </div>
            <div>
                <button>❌</button>
                <button>✅</button>
                <br>
            </div>`;
            todocontainer.appendChild(li);
}
addtodo(todos);