//Ejemplo_06.js - Simular una partida de parchís

const CASILLASTOTALES = 60;

function Ficha(color,casilla) {
    this.color = color;
    this.casilla = casilla;
    this.seguidos6 = 0;
    this.acabado = false;
    this.listaTiradas = new Array();;
    this.listaCasillas = new Array();;

    this.tirarDado = function() {
        if(!this.acabado) {
            var tirada = Math.floor(Math.random()*6+1);
            this.listaTiradas.push(tirada);
            this.casilla += tirada;
            this.listaCasillas.push(this.casilla);

            if(tirada == 6) {
                this.seguidos6++;
            } else {
                this.seguidos6 = 0;
            }
            
            if(this.seguidos6 == 3) {
                this.casilla = 0;
                this.seguidos6 = 0;
            } else {
                if(this.casilla >= CASILLASTOTALES) {
                    this.acabado = true;
                }
            }
            
        }
    }

}

var partida = [];

partida.push(new Ficha("amarillo",0));
partida.push(new Ficha("azul",0));
partida.push(new Ficha("rojo",0));
partida.push(new Ficha("verde",0));

while (partida.some(y => !y.acabado)) {
    partida.forEach(x => {x.tirarDado();});
}

//RESULTADOS DE LA PARTIDA
//partida.sort((a, b) => a.listaTiradas.length - b.listaTiradas.length);
partida.sort(function(a,b) {
    return a.listaTiradas.length - b.listaTiradas.length;
});

partida.forEach(x => {
    console.table(x);
});