var button = document.getElementById("button");
var number = document.getElementById("number");
var count = 0;

button.addEventListener("click", acrescentar);

function acrescentar(){
 count++;
 number.innerHTML = count;
}