//Riley Snook
//1-29-19

//this function takes in values from the html and calls add function
//after getting the result from the add function it puts the it on the html
function addButton() {
	var num1 = document.getElementById("first").value;
	var num2 = document.getElementById("second").value;
	var sum = addition(num1, num2);
	document.getElementById("additionResult").innerHTML = sum;
}