//Allows for the buttons to appear in the box 
document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("click", function () {
    document.getElementById("fname").value += this.innerText; 
  });
}); 

//Event Listener for enter button 
btnEntr.addEventListener("click", buttonentr) 

//Evaluates expressions using eval()
function buttonentr() {
  eval(document.getElementById("fname").value)
  document.getElementById("fname").value = eval(document.getElementById("fname").value);
}



//Fun Element; changes shell color when equal button is pressed 
let div = document.getElementsByClassName('shell')[0];

function RBC (e) {
  div.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

btnEntr.addEventListener("click", RBC);
window.onload = RBC;



//Returns shell color to gray when clear button is pressed 
btnClr.addEventListener("click", returncolor) 

function returncolor() {
  div.style.background = "rgb(166, 166, 166)"; 
}