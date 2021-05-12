window.addEventListener("storage",function () {
	var op1 = localStorage.getItem("operando1");
	var op2 = localStorage.getItem("operando2");
	var operador = localStorage.getItem("operador");
	var resultado;

	if(op1!="" && op2!="" && operador!="") {
		switch(operador) {
			case "suma":
				resultado = parseInt(op1)+parseInt(op2);
				break;
			case "resta":
				resultado = parseInt(op1)-parseInt(op2);
				break;
			case "multiplicacion":
				resultado = parseInt(op1)*parseInt(op2);
				break;
			case "division":
				resultado = parseInt(op1)/parseInt(op2);
				break;
		}

		document.getElementById("resultado").innerText = resultado.toString();
	}
});