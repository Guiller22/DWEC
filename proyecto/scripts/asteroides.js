$(document).ready(function () {
	$("select").addClass("seleccionar");
	function iniciar() {
		
		origen1 = document.getElementById('nombre');
		origen1.addEventListener('dragstart', arrastrado, false);
		destino =  document.getElementById('lista');
		destino.addEventListener('dragenter', function (e) {
		  e.preventDefault();
		}, false);
		destino.addEventListener('dragover', function (e) {
		  e.preventDefault();
		}, false);
		destino.addEventListener('drop', soltado, false);
	  }
  
	  function arrastrado(e) {
		let error = "default";
		var codigo = '<img id="prueba" src="img/' + origen1.value + '.png" class = imagenSecundaria onerror="this.onerror=null; this.src=\'img/default.png\'">';
		e.dataTransfer.setData('Text', codigo);
	  }
  
	  function soltado(e) {
		e.preventDefault();
		destino.innerHTML = e.dataTransfer.getData('Text');
	  }
	  window.addEventListener('load', iniciar, false);
	  $(".imagenSecundaria").on("error", function () {
        $(this).attr('src', 'img/default.png');
        //$(this).attr('width', '1000');
      });

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

						cursor.continue();
					} else {
						console.log("FIN");
					}
				}
				document.getElementById("id").value = "";
				document.getElementById("nombre").value = "";
				document.getElementById("dimensiones").value = "";
				document.getElementById("anyo").value = "";

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
	//Rellenar lista
	$("#botonCargar").click(function(){
		refrescarListas();
	})
	//Contar
	$("#botonContar").click(function () {

		if (window.indexedDB) {
			peticion = window.indexedDB.open("Planetas");


			peticion.onsuccess = function (evento) {
				console.log("Success");

				bd = evento.target.result;
				
				transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
				almacen = transaccion.objectStore("Asteroides");
				
				var contadorRegistros = almacen.count();

				//var rango = IDBKeyRange.bound(7,34);
				//var contadorRegistros = store.count(rango);

				contadorRegistros.onsuccess = function () {
					alert("Hay " + contadorRegistros.result + " asteroides");
				}

			}
		}
	})

	function insertarElementoControlLista(_asteroide) {
		var htmlTexto = _asteroide.nombre;
		var listaItem = document.createElement("option");
		listaItem.setAttribute("value",_asteroide.id);
		listaItem.textContent = htmlTexto;

		var lista = document.getElementById("listaAsteroides");
		lista.appendChild(listaItem);
		$("select").children('*').addClass("prueba");

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

	//Insertar
	$("#botonInsertar").click(function () {
		var transaccionInsertar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenInsertar = transaccionInsertar.objectStore("Asteroides");
		var nuevoAsteroide= {};

		nuevoAsteroide.id = $('#id').val();
		nuevoAsteroide.nombre = $('#nombre').val();
		nuevoAsteroide.dimensiones = $('#dimensiones').val();
		nuevoAsteroide.anyo_desc = $('#anyo').val();

		almacenInsertar.add(nuevoAsteroide);
		refrescarListas();
	})
	//Modificar
	$("#botonModificar").click(function () {
		var transaccionModificar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenModificar = transaccionModificar.objectStore("Asteroides");
		var nuevoAsteroide = {};

		nuevoAsteroide.id = $('#id').val();
		nuevoAsteroide.nombre = $('#nombre').val();
		nuevoAsteroide.dimensiones = $('#dimensiones').val();
		nuevoAsteroide.anyo_desc = $('#anyo').val();

		almacenModificar.put(nuevoAsteroide);
		refrescarListas();
	})

	//Eliminar
	$("#botonEliminar").click(function () {
		var transaccionEliminar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenEliminar = transaccionEliminar.objectStore("Asteroides");

		peticionEliminacion = almacenEliminar.delete($('#nombre').val());
		var valor = $('#id').val();
		var valor2 = $('#nombre').val();
		peticionEliminacion.onsuccess = function () {
			alert("El Asteroide con id "+valor+" y nombre "+valor2+" ha sido eliminado")
		}
		refrescarListas();
	})
	
	
});