document.getElementById("suma").addEventListener("change",function () {
	if(document.getElementById("suma").checked) {
		localStorage.setItem("operador","suma");
	}
});

document.getElementById("resta").addEventListener("change",function () {
	if(document.getElementById("resta").checked) {
		localStorage.setItem("operador","resta");
	}
});

document.getElementById("multiplicacion").addEventListener("change",function () {
	if(document.getElementById("multiplicacion").checked) {
		localStorage.setItem("operador","multiplicacion");
	}
});

document.getElementById("division").addEventListener("change",function () {
	if(document.getElementById("division").checked) {
		localStorage.setItem("operador","division");
	}
});