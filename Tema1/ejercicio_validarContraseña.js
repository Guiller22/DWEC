var login = "valladolid";
var password = "a12345F"

var expMayus = /[A-Z]/;
var expMayus = /[A-Z]/;
var expM = /[A-Z]/;
var expEspecial = /[A-Z]/;
var expBlancos = /\s/;

var errores ="";
var prohibidos = [];
for(let i=0; i<login.length ; i++){
    if(login.slice(i, i+3).length>=3)
    prohibidos.push(login.slice(i,i+3));
}

if(prohibidos.some(x => password.indexOf(x)!=-1)){
    errores += "Parte de la clave este en el login\n";
}