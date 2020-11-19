//json_11.js --> Ejercicio: Cambiar el año de una fecha (++ o --) dependiendo si el día es par o impar.

var personasCadena = '[\
	{"nombre":"pepe","fechanac":"1980-04-08"},\
	{"nombre":"ana","fechanac":"1978-04-08"},\
	{"nombre":"juan","fechanac":"1983-05-09"},\
	{"nombre":"maria","fechanac":"1985-04-10"},\
	{"nombre":"alfonso","fechanac":"1983-04-11"},\
	{"nombre":"luis","fechanac":"1984-04-12"}\
	]';


//Se transforma el json a objeto y la fecha se devuelve en milisegundos desde el 1-1-1970
var objeto = JSON.parse(personasCadena,function (key,value) {
    var fecha,anno,mes,dia;
    if(key=="fechanac") {
		fecha = new Date(value);
		anno = fecha.getFullYear().toString();;
		mes = fecha.getMonth()+1;
		dia = fecha.getDate();
		(dia%2==0) ? anno++ : anno--;

		if(fecha.getMonth()<10)
            mes = "0" + mes;
		
		if(fecha.getDate()<10)
			dia = "0" + dia;

			return anno + "-" + mes + "-" + dia;
    } else {
        return value;
    }
});

var textoFinal = JSON.stringify(objeto);

console.log(textoFinal);