//Definir objeto de forma literal uno coche y otro moto , y despues construir un objeto
//con las propiedades de ambos llamado vehiculo

var coche = {
    marca:"opel",
    modelo:"corsa",

}
var moto = new Object();

moto.precio=15000;
moto.color="rojo";
moto.potencia=100;
moto.anyo=2018;


const vehiculos = Object.assign(coche, moto);
console.log(vehiculos);
