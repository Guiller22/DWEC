var texto="Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismp usando métodos del objeto String";
var tFinal="";
var lista = texto.split(" ");

for(i=0;i<lista.length;i++){
    if(i%2==0)
    tFinal+=lista[i].toUpperCase() + " ";
    
}
console.log