var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul =document.querySelector("ul");
var btapple = document.getElementById("apple");
var btorange = document.getElementById("orange");
var btpeople = document.getElementById("people");
var btdragon = document.getElementById("dragon");



function inputClear(){
	return input.value.length >0;
} //return space bool.

function afterClick(){
if (inputClear()) {
	createNewList();
}
}

function afterPress(code){
if (inputClear() && code.keyCode === 13 ) {
	createNewList();// keyCode get the code ,13 is the code for enter
}
}
function goDelete() {
 	 this.parentNode.parentNode.removeChild(this.parentElement);
     } //delete function ul> li >bt ul remove bt's parent not ul's childs!!

function done() {
	this.parentElement.className = "done";
} //cross line;

function createNewList(){
	var li =document.createElement("li");//newli
	var bt = document.createElement("button");//new button
	var btDone = document.createElement("button");//new button for done.
	btDone.appendChild(document.createTextNode("done"))//give button text done
	bt.appendChild(document.createTextNode("delete"))//give button text delete
	li.appendChild(document.createTextNode(input.value + "  "));
	//newli add text
	li.appendChild(btDone);
	li.appendChild(bt);
	//put new button in newli
	ul.appendChild(li);
	//put newli with text in ul
	input.value=""; //clean input
	btDone.addEventListener("click",done);
	bt.addEventListener("click", goDelete);

	};

	btapple.addEventListener("click",goDelete);
	btorange.addEventListener("click",goDelete);
  	btpeople.addEventListener("click",goDelete);
	btdragon.addEventListener("click",goDelete);
	input.addEventListener("keypress", afterPress);
	button.addEventListener("click", afterClick);