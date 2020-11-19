var text='{"texto":"hola"}';
var objeto = JSON.parse(text, function (key,value) {
    if(typeof value==="string")
        return value.toUpperCase();
    return value;
});

var textoFinal=JSON.stringify(objeto);
console.log(textoFinal);