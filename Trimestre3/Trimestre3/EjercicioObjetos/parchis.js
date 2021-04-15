//simular partida de parches 1 ficha cuatro jugaddores color tiradas num aleat 1/6 verde azul amarillo rojo
//posicion inicial celda 0 pos actual sin sacar 5 para salir , tres 6 seguidos volver a empezar todos terminan la partida
//una vez alguno acabe deja de tirar , variable seguidosseis

tableroCompleto = 90;

function ficha(color, posicionActual) {
    this.color = color;
    this.posicionActual = 0;
    this.numTiradas = 0;

    this.mover = function () {
        while (this.posicionActual < tableroCompleto) {
            var dado = Math.round(Math.random() * 6 + 1);
            this.posicionActual += dado;
            this.numTiradas++;
            var seguidosSeis;
            if (dado == 6) {
                seguidosSeis++;
                if (seguidosSeis == 3) {
                    this.posicionActual = 0;
                } else {
                    seguidosSeis = 0;
                }

            }
        }
    }
}



var tablero = [];

tablero.push(new ficha("verde", 0));
tablero.push(new ficha("azul", 0));
tablero.push(new ficha("amarillo", 0));
tablero.push(new ficha("rojo", 0));

while (!tablero.every(y => y.posicionActual >= tableroCompleto)) {
    tablero.forEach(x => {
        x.mover();
    });
}
tablero.forEach(x => console.log(x.color + " --> " + x.posicionActual + " -->" + x.numTiradas));