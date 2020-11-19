function acentosFuera(texto){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return texto.split('').map( letra => acentos[letra] || letra).join('').toString();	
}
var texto=acentosFuera("ÉLITE Quitar tildes del texto solución , día , andrés , ramón, baúl");
console.log(texto);
var expresion = /la*/;
console.log(expresion.test("Hola")); //true
console.log(expresion.test("Julian"));
console.log(expresion.test("pele"));
console.log(expresion.test("pea"));

