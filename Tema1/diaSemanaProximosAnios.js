var dia=22;
var mes=00;
var anyo=2001;
var cumples = new Date(anyo ,mes,dia);
var semana = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]

for (var i = 0; i<5 ; i++){
    cumples.setFullYear(anyo + i);
    console.log(cumples.getFullYear() + " mi cumpleaños " +semana[cumples.getDay()])
}