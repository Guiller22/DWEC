$(document).ready(function () {
	//drag and drop
	$("select").addClass("seleccionar");
	function iniciar() {

		origen1 = document.getElementById('nombre');
		origen1.addEventListener('dragstart', arrastrado, false);
		destino = document.getElementById('lista');
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
	  $(".imagenSecundaria").on("error", function () {
        $(this).attr('src', 'img/default.png');
        //$(this).attr('width', '1000');
      });
	$(iniciar).on( "load" );
	
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
	$("#botonCargar").click(function(){
		refrescarLista();
	})
	//Contar
	$("#botonContar").click(function () {

		if (window.indexedDB) {
			peticion = window.indexedDB.open("Planetas");


			peticion.onsuccess = function (evento) {
				console.log("Success");

				bd = evento.target.result;
				
				transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
				almacen = transaccion.objectStore("Planetas");
				
				var contadorRegistros = almacen.count();

				//var rango = IDBKeyRange.bound(7,34);
				//var contadorRegistros = store.count(rango);

				contadorRegistros.onsuccess = function () {
					alert("Hay " + contadorRegistros.result + " planetas");
				}

			}
		}
	})
	function insertarElementoControlLista(_planeta) {
		var htmlTexto = _planeta.nombre;
		var listaItem = document.createElement("option");
		listaItem.setAttribute("value",_planeta.id);
		listaItem.textContent = htmlTexto;
		

		var lista = document.getElementById("listaPlanetas");
		lista.appendChild(listaItem);
		$("select").children('*').addClass("prueba");

		listaItem.onclick = function () {
			var id = lista.options[lista.selectedIndex].value;
			var transaccionEvento = bd.transaction(bd.objectStoreNames, "readwrite");
			var almacenEvento = transaccionEvento.objectStore("Planetas");
			var registroEvento = almacenEvento.get(id);
			

			registroEvento.onsuccess = function(evento) {
				document.getElementById("id").value = registroEvento.result.id;
				document.getElementById("nombre").value = registroEvento.result.nombre;
				document.getElementById("anyo").value = registroEvento.result.anyo;
				document.getElementById("desc").value = registroEvento.result.desc;
			}
		}
	
	}

	//Insertar
	$("#botonInsertar").click(function () {
		var transaccionInsertar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenInsertar = transaccionInsertar.objectStore("Planetas");
		var nuevoPlaneta = {};
		nuevoPlaneta.id = $('#id').val();
		nuevoPlaneta.anyo = $('#anyo').val();
		nuevoPlaneta.nombre = $('#nombre').val();
		nuevoPlaneta.desc = $('#desc').val();
		

		almacenInsertar.add(nuevoPlaneta);
		refrescarLista();
	})

	//Modificar
	$("#botonModificar").click(function () {
		var transaccionModificar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenModificar = transaccionModificar.objectStore("Planetas");
		var nuevoPlaneta = {};

		nuevoPlaneta.id = $('#id').val();
		nuevoPlaneta.anyo = $('#anyo').val();
		nuevoPlaneta.nombre = $('#nombre').val();
		nuevoPlaneta.desc = $('#desc').val();
		almacenModificar.put(nuevoPlaneta);
		refrescarLista();
	})

	//Eliminar
	$("#botonEliminar").click(function () {
		var transaccionEliminar = bd.transaction(bd.objectStoreNames,"readwrite");
		var almacenEliminar = transaccionEliminar.objectStore("Planetas");

		idElim = $('#id').val();
		peticionEliminacion = almacenEliminar.delete($('#id').val());
		peticionEliminacion.onsuccess = function () {
			alert("Planeta eliminado "+idElim)
		}
		refrescarLista();
	})
}
)