window.addEventListener("storage",function () {
	var datos = JSON.parse(localStorage.getItem("datos"));

	document.getElementById("valorNombre").innerText = datos.nombre;
	document.getElementById("valorTelefono").innerText = datos.telefono;
	document.getElementById("valorCurso").innerText = datos.curso;
	document.getElementById("valorCodigoPostal").innerText = datos.cp;
	document.getElementById("valorEmail").innerText = datos.email;

	document.getElementById("corregir").disabled = false;
});


document.getElementById("corregir").addEventListener("click",function () {
	var correccion = {};
	correccion.nombre = document.getElementById("checkNombre").checked;
	correccion.telefono = document.getElementById("checkTelefono").checked;
	correccion.curso = document.getElementById("checkCurso").checked;
	correccion.cp = document.getElementById("checkCodigoPostal").checked;
	correccion.email = document.getElementById("checkEmail").checked;

	console.log(correccion);
	localStorage.setItem("correccion",JSON.stringify(correccion));
});