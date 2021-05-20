function codigo() {
	var peticion, bd, transaccion, almacenPlanetas, almacenAsteroides;

	
	function refrescarListas() {
		if (window.indexedDB) {
			peticion = window.indexedDB.open("Planetas");

			peticion.onsuccess = function (evento) {
				bd = evento.target.result;
							
				transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
				almacen = transaccion.objectStore("Asteroides");

				document.getElementById("listaAsteroides").innerHTML = "";

				var peticionCursor = almacen.openCursor();
				peticionCursor.onsuccess = function (evento) {
					var cursor = peticionCursor.result;

					if(cursor) {
						insertarElementoControlLista(cursor.value);

						cursor.continue(); //continue incrementa el cursor una posición
					} else {
						console.log("FIN");
					}
				}
				document.getElementById("id").value = "";
				document.getElementById("nombre").value = "";
				document.getElementById("dimensiones").value = "";
				document.getElementById("anyo").value = "";

				//bd.close();
			};


			peticion.onerror = function (evento) {
				alert("No se ha creado la base de datos: " + evento.target.errorCode);
			};


			peticion.onupgradeneeded = function (evento) {
				console.log("Upgradeneeded");
			};

		} else {
			console.log("IndexedDB no está soportado");
		}

		document.getElementById("botonCargar").disabled = true;
	}


	function insertarElementoControlLista(_asteroide) {
		//var htmlTexto = libro.isbn + "  <----->  " + libro.titulo;
		var htmlTexto = _asteroide.nombre;
		var listaItem = document.createElement("option");
		listaItem.setAttribute("value",_asteroide.id);
		listaItem.textContent = htmlTexto;

		var lista = document.getElementById("listaAsteroides");
		lista.appendChild(listaItem);

		listaItem.onclick = function () {
			var id = lista.options[lista.selectedIndex].value;
			var transaccionEvento = bd.transaction(bd.objectStoreNames, "readwrite");
			var almacenEvento = transaccionEvento.objectStore("Asteroides");
			var registroEvento = almacenEvento.get((id));

			registroEvento.onsuccess = function(evento) {
				document.getElementById("id").value = registroEvento.result.id;
				document.getElementById("nombre").value = registroEvento.result.nombre;
				document.getElementById("dimensiones").value = registroEvento.result.dimensiones;
				document.getElementById("anyo").value = registroEvento.result.anyo_desc;
			}
		}
	}


	/*****INSERTAR ********************************************/
	document.getElementById("botonInsertar").onclick = function () {
		var transaccionInsertar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenInsertar = transaccionInsertar.objectStore("Asteroides");
		var nuevoAsteroide= {};

		nuevoAsteroide.id = document.getElementById("id").value;
		nuevoAsteroide.nombre = document.getElementById("nombre").value;
		nuevoAsteroide.dimensiones = document.getElementById("dimensiones").value;
		nuevoAsteroide.anyo_desc = document.getElementById("anyo").value;
		

		almacenInsertar.add(nuevoAsteroide);
		refrescarListas();
	}


	document.getElementById("botonModificar").onclick = function () {
		var transaccionModificar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenModificar = transaccionModificar.objectStore("Asteroides");
		var nuevoAsteroide = {};

		nuevoAsteroide.id = document.getElementById("id").value;
		nuevoAsteroide.nombre = document.getElementById("nombre").value;
		nuevoAsteroide.dimensiones = document.getElementById("dimensiones").value;
		nuevoAsteroide.anyo_desc = document.getElementById("anyo").value;
		almacenModificar.put(nuevoAsteroide);
		refrescarListas();
	}

	/***************************************************************
	 * ELIMINAR ****************************************************
	 **************************************************************/
	document.getElementById("botonEliminar").onclick = function () {
		var transaccionEliminar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenEliminar = transaccionEliminar.objectStore("Asteroides");

		peticionEliminacion = almacenEliminar.delete(document.getElementById("id").value);
		peticionEliminacion.onsuccess = function () {
			alert("Asteroide eliminado")
		}
		refrescarListas();
	}

	document.getElementById("botonCargar").onclick = refrescarListas;
}

window.onload = codigo;
$(function (){
	


	
	$("*").css("fontFamily","arial");				
});