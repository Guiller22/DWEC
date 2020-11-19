Coche.potencia = '15';
Coche.combustible = '20';

const distanciaVuelta = 7000;
const vueltasTotales = 8;


function Coche(nombre, potencia, combustible) {
    this.nombre = nombre;
    this.potencia = potencia;
    this.combustible = combustible;
    this.tiempo = 0;
    this.vueltas = 0;
    this.recorrido = 0;

    this.acelerar = function () {
        if (this.combustible > 0) {
            var acelerado = Math.floor(Math.random() * this.potencia)
            this.recorrido += acelerado;
            this.tiempo++;
            this.combustible = this.combustible - acelerado * 0.000999;
        }
    }

    var carrera = [];

    carrera.push(new Coche("c1", 110, 60));
    carrera.push(new Coche("c2", 100, 60));
    carrera.push(new Coche("c3", 120, 60));
    carrera.push(new Coche("c4", 130, 60));
    carrera.push(new Coche("c5", 115, 60));
    carrera.push(new Coche("c6", 110, 60));

    while (carrera.every(y => y.vueltas < vueltasTotales)) {
        if (carrera.every(x => x.combustible <= 0)) {
            console.log("TODOS SIN GASOLINA");
            break;
        }
        carrera.forEach(x => {
            x.acelerar();
        });
        carrera.some(x => {
            if (x.recorrido >= distanciaVuelta) {
                x.vueltas++;
                x.recorrido = x.recorrido - distanciaVuelta;
            }
        });
    }
}




carrera.forEach(x => console.log(x.nombre + "-->" + x.vueltas + "-->" + x.recorrido + "-->" + x.combustible + "-->" + x.tiempo));
carrera.forEach(x => {
    if (x.vueltas == vueltasTotales) {
        console.log("GANADOR" + x.nombre);
    }
});