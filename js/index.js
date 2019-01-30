function addButton() {
	var num1 = document.getElementById("first").value;
	var num2 = document.getElementById("second").value;
	var sum = addition(num1, num2);
	document.getElementById("additionResult").innerHTML = sum;
}