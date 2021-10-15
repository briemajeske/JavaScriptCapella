


 /*The script */

/* Function is invoked once the page has been fully loaded*/
window.onload = init;   
function init(){
var submit = document.getElementById("submit") 

/*Returns the html elements with id="name", and id="surname"*/
submit.onclick = function(){
	var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;

/*Outputted to the page*/
  document.getElementById("outputName").innerText = name;
  document.getElementById("outputSurname").innerText = surname;
}


}
