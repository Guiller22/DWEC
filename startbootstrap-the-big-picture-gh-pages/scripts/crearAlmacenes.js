function accion() {
	var peticion, bd, almacenPersonas, almacenCoches, almacenCiudades;


	function mensaje(texto) {
		document.getElementById("info").value += "\n\n" + texto;
	}

	function crearIndicesBD() {
		var peticion, bd, almacenPlanetas, almacenAsteroides, almacenCiudades;

		if (window.indexedDB) {
			peticion = window.indexedDB.open("Planetas", 4);

			peticion.onsuccess = function (evento) {
				//Escribir el código para realizar consultas, inserciones, etc...(DML)
				mensaje("EVENTO: success\nSe ha abierto correctamente la base de datos: " + peticion.result.name + " con versión " + peticion.result.version);

				bd = peticion.result;
				var transaccion = bd.transaction(bd.objectStoreNames, "readwrite");

				almacenPlanetas = transaccion.objectStore("Planetas");
				almacenPlanetas.put({
					id: "1",
					desc: "Timocharis ",
					nombre: "Mercurio",
					anyo: "265 A.C"
				});
				almacenPlanetas.put({
					id: "2",
					desc: "general ",
					nombre: "Venus",
					anyo: "antigüedad"
				});
				almacenPlanetas.put({
					id: "3",
					desc: "general",
					nombre: "Tierra",
					anyo: "antigüedad"
				});
				almacenPlanetas.put({
					id: "4",
					desc: "general",
					nombre: "Marte",
					anyo: "antigüedad"
				});
				almacenPlanetas.put({
					id: "5",
					desc: "general",
					nombre: "Júpiter",
					anyo: "antigüedad"
				});
				almacenPlanetas.put({
					id: "6",
					desc: "general",
					nombre: "Saturno",
					anyo: "antigüedad"
				});
				almacenPlanetas.put({
					id: "7",
					desc: "William Herschel",
					nombre: "Urano",
					anyo: "13 de marzo de 1781"
				});
				almacenPlanetas.put({
					id: "8",
					desc: "Johann Gottfried Galle",
					nombre: "Neptuno",
					anyo: "23 de septiembre de 1846"
				});
				almacenPlanetas.put({
					id: "9",
					desc: "Clyde Tombaugh",
					nombre: "Plutón",
					anyo: "18 de febrero de 1930"
				});
				almacenPlanetas.put({
					id: "10",
					desc: "Mike Brown",
					nombre: "Haumea",
					anyo: "06 de mayo 2004"
				});
				almacenPlanetas.put({
					id: "11",
					desc: "Michael Brown Vicho Zepe, Chico Trujillo, David Rabinowitz",
					nombre: "Makemake",
					anyo: "29 de julio de 2005"
				});
				almacenPlanetas.put({
					id: "11",
					desc: "Eris",
					nombre: "Makemake",
					anyo: "29 de julio de 2005"
				});

				almacenAsteroides = transaccion.objectStore("Asteroides");
				almacenAsteroides.put({
					id: "1",
					nombre: "Ceres1",
					dimensiones: "974.6km",
					anyo_desc: 1801
				});
				almacenAsteroides.put({
					id: "2",
					nombre: "Pallas 2",
					dimensiones: "582×556×500 km",
					anyo_desc: 1802
				});
				almacenAsteroides.put({
					id: "3",
					nombre: "Vesta 4",
					dimensiones: "572.6x557.2x446 km",
					anyo_desc: 1802
				});
				almacenAsteroides.put({
					id: "4",
					nombre: "Hygiea 10",
					dimensiones: "530x407x370 km	",
					anyo_desc: 1807
				});
				almacenAsteroides.put({
					id: "5",
					nombre: "Hektor 624",
					dimensiones: "384x262x232 km",
					anyo_desc: 1849
				});
				almacenAsteroides.put({
					id: "6",
					nombre: "Davida 511",
					dimensiones: "370x195x195 km",
					anyo_desc: 1866
				});
				almacenAsteroides.put({
					id: "7",
					nombre: "Interamnia 704",
					dimensiones: "360x315x240 km",
					anyo_desc: 1907
				});
				almacenAsteroides.put({
					id: "8",
					nombre: "Camilla 107",
					dimensiones: "357x355x212 km",
					anyo_desc: 1858
				});
			};


			peticion.onerror = function (evento) {
				alert("No se ha creado la base de datos: " + event.target.errorCode);
			};


			peticion.onupgradeneeded = function (evento) {
				//Escribir el código para crear o modificar la estructura de la BD (DDL)
				//Recordatorio: Este evento sólo se ejecuta si se abre la base de datos con una versión nueva superior

				mensaje("EVENTO: upgradedneeded\nSe modifica la versión o es nueva");
				bd = peticion.result;

				almacenPlanetas = bd.createObjectStore("Planetas", {
					keyPath: "id"
				});
				almacenAsteroides = bd.createObjectStore("Asteroides", {
					keyPath: "id"
				});

				mensaje("SE CREAN LOS ÍNDICES");

				almacenPlanetas.createIndex("por_id", "id", {
					unique: true
				});
				almacenPlanetas.createIndex("por_nombre", "nombre");

				almacenAsteroides.createIndex("por_id", "id", {
					unique: true
				});
				almacenAsteroides.createIndex("por_nombre", "nombre");


			};
		} else {
			console.log("IndexedDB no está soportado");
		}
	}
}
window.onload = accion;