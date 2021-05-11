var numero=0;
var turno,inicio,ganador;

window.addEventListener("storage",function() {
	numero = localStorage.getItem("numero");
	turno = localStorage.getItem("turno");
	inicio = localStorage.getItem("inicio");
	ganador = localStorage.getItem("ganador");
	document.getElementById("turnoA").innerText = turno;
	if(inicio=="si") {
		localStorage.removeItem("inicio");
	}
	if(ganador=="A") {
		document.getElementById("resultadoA").innerText = "Has ganado";
	}
	if(ganador=="B") {
		document.getElementById("resultadoA").innerText = "Has perdido";
	}
});



document.getElementById("jugarA").addEventListener("click",function () {
	var numeroA = document.getElementById("numeroA").value;
	turno = localStorage.getItem("turno");

	if(turno == "A") {
		if(numeroA == numero) {
			document.getElementById("resultadoA").innerText = "Has ganado";
			localStorage.setItem("ganador","A");
		} else {
			localStorage.setItem("turno","B");
			document.getElementById("turnoA").innerText = "B";
		}
	} else {
		alert("No es tu turno");
	}
});