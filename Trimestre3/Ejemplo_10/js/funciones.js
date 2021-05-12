document.getElementById("generar").addEventListener("click",function () {
	var numero = Math.floor(Math.random()*25 + 1);
	document.getElementById("numero").innerText = numero;
	localStorage.setItem("turno","A");
	localStorage.setItem("numero",numero.toString());
	localStorage.setItem("ganador","");
});