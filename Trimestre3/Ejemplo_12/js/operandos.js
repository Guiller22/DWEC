document.getElementById("operando1").addEventListener("change",function () {
	var op1 = document.getElementById("operando1").value;

	localStorage.setItem("operando1",op1.toString());
});

document.getElementById("operando2").addEventListener("change",function () {
	var op2 = document.getElementById("operando2").value;

	localStorage.setItem("operando2",op2.toString());
});