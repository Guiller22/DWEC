var numero=0;
var turno,inicio,ganador;

window.addEventListener("storage",function() {
	numero = localStorage.getItem("numero");
	turno = localStorage.getItem("turno");
	inicio = localStorage.getItem("inicio");
	ganador = localStorage.getItem("ganador");
	document.getElementById("turnoB").innerText = turno;
	if(inicio=="si") {
		localStorage.removeItem("inicio");
	}
	if(ganador=="B") {
		document.getElementById("resultadoA").innerText = "Has ganado";
	}
	if(ganador=="A") {
		document.getElementById("resultadoA").innerText = "Has perdido";
	}
});



document.getElementById("jugarB").addEventListener("click",function () {
	var numeroB = document.getElementById("numeroB").value;
	turno = localStorage.getItem("turno");

	if(turno == "B") {
		if(numeroB == numero) {
			document.getElementById("resultadoB").innerText = "Has ganado";
			localStorage.setItem("ganador","B");
		} else {
			localStorage.setItem("turno","A");
			document.getElementById("turnoB").innerText = "A";
		}
	} else {
		alert("No es tu turno");
	}
});