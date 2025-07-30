//make a button that on click change the colour of the another box using html and javascript
function changeColor() {
  const box = document.getElementById('colorBox');
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow','pink','grey','saffron','black'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
}
//now set the interval of the colour
let interval=setInterval(changeColor,1000);
function stop(){
    clearInterval(interval);
}