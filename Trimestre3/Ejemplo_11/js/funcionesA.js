document.getElementById("validar").addEventListener("click",function () {
	var datos = {};
	datos.nombre = document.getElementById("nombre").value;
	datos.telefono = document.getElementById("telefono").value;
	datos.curso = document.getElementById("curso").value;
	datos.cp = document.getElementById("cp").value;
	datos.email = document.getElementById("email").value;

	localStorage.setItem("datos",JSON.stringify(datos));
});


window.addEventListener("storage",function () {
	var correccion = JSON.parse(localStorage.getItem("correccion"));

	document.getElementById("nombre").disabled = correccion.nombre;
	document.getElementById("telefono").disabled = correccion.telefono;
	document.getElementById("curso").disabled = correccion.curso;
	document.getElementById("cp").disabled = correccion.cp;
	document.getElementById("email").disabled = correccion.email;

});