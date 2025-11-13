//Cache the DOM

var body = document.querySelector("body");
var img = document.getElementById("png");
var ed = document.getElementById("edc");
var list = document.getElementById("lista");
var num = document.getElementById("nume");
var button = document.getElementById("change");
var an = document.getElementById("anNas");

//Add event listener

const d = new Date()
var year = d.getFullYear()

button.addEventListener("click",Change);
an.addEventListener("mouseover",MouseOver);

//Define function

function Change() {

	ed.innerHTML = "Experiente:";
	num.innerHTML = "Game developer/Musician<br>505games";
	lista.innerHTML = "<ul><li>Coduri scrise acasa</li><li>7 ani de scoala muzicala</li></ul>";
	img.src = "img/spiderman.png"

	body.style.color = "#4d4dff";
	body.style.fontFamily = "Times New Roman";
	body.style.backgroundColor = "#dddddd";

}

function MouseOver(){

	an.innerHTML = year - an.innerHTML

}