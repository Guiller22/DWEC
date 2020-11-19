var fecha = new Date();
var contadorMeses=0;
function finanzasPersonales(titular, saldo, sueldo, deuda) {
    this.titular = titular;
    this.saldo = saldo;
    this.sueldo = sueldo;
    this.deuda = deuda;
    this.fecha = fecha;

    this.ajusteMensual = function () {
        if ((this.fecha.getDate)=27) {
            saldo += sueldo;
            var gastosMensuales = Math.floor((Math.random() * (900 - 700 + 1)) + 700);
            this.saldo -= gastosMensuales;
            var amortizarDeduda = Math.floor((Math.random() * (400 - 100 + 1)) + 100);
            this.saldo -= amortizarDeduda;
            contadorMeses++;
        }
    }
}

var finanzasFamiliares = [];

finanzasFamiliares.push(new finanzasPersonales("Pepe", 2000, 2000, 10000));
finanzasFamiliares.push(new finanzasPersonales("Julia", 5000, 1100, 2700));
finanzasFamiliares.push(new finanzasPersonales("Julian", 1000, 900, 20000));
finanzasFamiliares.push(new finanzasPersonales("Margarita", 3000, 875, 2000));
finanzasFamiliares.push(new finanzasPersonales("Javier", 500, 1000, 600));

while (finanzasFamiliares.every(y => y.deuda <= 0)) {

    finanzasFamiliares.forEach(x => {x.ajusteMensual();});

    finanzasFamiliares.some(x => {
        if (x.deuda<=0) {
            x.fecha.setDate(27);
            }
    });
}
    

//Mostrar resultados
finanzasFamiliares.forEach(x => console.table(x.titular + " --> " + x.meses + " --> " + x.amortizarDeduda + " --> " + x.gastosMensuales+ " --> " + x.saldo+ "--> " + x.sueldo ));