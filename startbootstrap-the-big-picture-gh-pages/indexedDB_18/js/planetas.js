function codigo() {
	var peticion, bd, transaccion, almacen;

	
	function refrescarLista() {
		if (window.indexedDB) {
			peticion = window.indexedDB.open("Planetas");

			peticion.onsuccess = function (evento) {
				bd = evento.target.result;
							
				transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
				almacen = transaccion.objectStore("Planetas");

				document.getElementById("listaPlanetas").innerHTML = "";

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
				document.getElementById("desc").value = "";
				document.getElementById("anyo").value = "";
				//bd.close();
			};


			peticion.onerror = function (evento) {
				alert("No se ha creado la base de datos: " + event.target.errorCode);
			};


			peticion.onupgradeneeded = function (evento) {
				console.log("Upgradeneeded");
			};

		} else {
			console.log("IndexedDB no está soportado");
		}

		document.getElementById("botonCargar").disabled = true;
	}


	function insertarElementoControlLista(_planeta) {
		//var htmlTexto = libro.isbn + "  <----->  " + libro.titulo;
		var htmlTexto = _planeta.nombre;
		var listaItem = document.createElement("option");
		listaItem.setAttribute("value",_planeta.id);
		listaItem.textContent = htmlTexto;

		var lista = document.getElementById("listaPlanetas");
		lista.appendChild(listaItem);

		listaItem.onclick = function () {
			var id = lista.options[lista.selectedIndex].value;
			var transaccionEvento = bd.transaction(bd.objectStoreNames, "readwrite");
			var almacenEvento = transaccionEvento.objectStore("Planetas");
			var registroEvento = almacenEvento.get(parseInt(id));

			registroEvento.onsuccess = function(evento) {
				document.getElementById("id").value = registroEvento.result.id;
				document.getElementById("nombre").value = registroEvento.result.nombre;
				document.getElementById("anyo").value = registroEvento.result.anyo;
				document.getElementById("desc").value = registroEvento.result.desc;
			}
		}
	}

	
	document.getElementById("botonInsertar").onclick = function () {
		var transaccionInsertar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenInsertar = transaccionInsertar.objectStore("Planetas");
		var nuevoPlaneta = {};

		nuevoPlaneta.id = parseInt(document.getElementById("id").value);
		nuevoPlaneta.anyo = document.getElementById("anyo").value;
		nuevoPlaneta.nombre = document.getElementById("nombre").value;
		nuevoPlaneta.desc = document.getElementById("desc").value;
		

		almacenInsertar.add(nuevoPlaneta);
		refrescarLista();
	}


	document.getElementById("botonModificar").onclick = function () {
		var transaccionModificar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenModificar = transaccionModificar.objectStore("Planetas");
		var nuevoPlaneta = {};

		nuevoPlaneta.id = parseInt(document.getElementById("id").value);
		nuevoPlaneta.anyo = document.getElementById("anyo").value;
		nuevoPlaneta.nombre = document.getElementById("nombre").value;
		nuevoPlaneta.desc = document.getElementById("desc").value;
		almacenModificar.put(nuevoPlaneta);
		refrescarLista();
	}

	/***************************************************************
	 * ELIMINAR ****************************************************
	 **************************************************************/
	document.getElementById("botonEliminar").onclick = function () {
		var transaccionEliminar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenEliminar = transaccionEliminar.objectStore("Planetas");

		peticionEliminacion = almacenEliminar.delete(parseInt(document.getElementById("id").value));
		peticionEliminacion.onsuccess = function () {
			alert("Planeta eliminado")
		}
		refrescarLista();
	}

	document.getElementById("botonCargar").onclick = refrescarLista;
}

window.onload = codigo;