var jsonPreguntas = '{"preguntas":[\
{"codigo":0,"enunciado":"P1...","respuesta1":"Madrid","respuesta2":"Barcelona","respuesta3":"Sevilla","correcta":"1"},\
{"codigo":1,"enunciado":"P2...","respuesta1":"3","respuesta2":"4","respuesta3":"5","correcta":"2"},\
{"codigo":2,"enunciado":"P3...","respuesta1":"Murcia","respuesta2":"Almería","respuesta3":"Valladolid","correcta":"3"},\
{"codigo":4,"enunciado":"P5...","respuesta1":"4","respuesta2":"5","respuesta3":"6","correcta":"2"},\
{"codigo":5,"enunciado":"P6...","respuesta1":"Blanco","respuesta2":"Rojo","respuesta3":"Azul","correcta":"1"},\
{"codigo":6,"enunciado":"P7...","respuesta1":"Coche","respuesta2":"Agua","respuesta3":"Gato","correcta":"3"},\
{"codigo":7,"enunciado":"P8...","respuesta1":"700","respuesta2":"800","respuesta3":"900","correcta":"1"},\
{"codigo":3,"enunciado":"P4...","respuesta1":"Enero","respuesta2":"Noviembre","respuesta3":"Diciembre","correcta":"3"},\
{"codigo":8,"enunciado":"P9...","respuesta1":"metros","respuesta2":"centímetros","respuesta3":"kilómetros","correcta":"2"},\
{"codigo":9,"enunciado":"P10...","respuesta1":"Piguerga","respuesta2":"Ebro","respuesta3":"Duero","correcta":"2"}\
]}';

var jsonRepuestas = '{"examenes":[\
{"nombre":"ALUMNO1","respuestas":[{"codigo":"0","respuesta":"2"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"2"},{"codigo":"3","respuesta":"3"},{"codigo":"4","respuesta":"1"},\
{"codigo":"5","respuesta":"2"},{"codigo":"6","respuesta":"3"},{"codigo":"7","respuesta":"1"},\
{"codigo":"8","respuesta":"2"},{"codigo":"9","respuesta":"3"}],"puntuacion":"0"},\
{"nombre":"ALUMNO2","respuestas":[{"codigo":"0","respuesta":"1"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"3"},{"codigo":"3","respuesta":"3"},{"codigo":"4","respuesta":"2"},\
{"codigo":"5","respuesta":"1"},{"codigo":"6","respuesta":"3"},{"codigo":"7","respuesta":"1"},\
{"codigo":"8","respuesta":"2"},{"codigo":"9","respuesta":"2"}],"puntuacion":"0"},\
{"nombre":"ALUMNO3","respuestas":[{"codigo":"0","respuesta":"2"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"2"},{"codigo":"3","respuesta":"3"},{"codigo":"4","respuesta":"1"},\
{"codigo":"5","respuesta":"2"},{"codigo":"6","respuesta":"3"},{"codigo":"7","respuesta":"1"},\
{"codigo":"8","respuesta":"2"},{"codigo":"9","respuesta":"3"}],"puntuacion":"0"},\
{"nombre":"ALUMNO4","respuestas":[{"codigo":"0","respuesta":"2"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"2"},{"codigo":"3","respuesta":"3"},{"codigo":"4","respuesta":"1"},\
{"codigo":"5","respuesta":"2"},{"codigo":"6","respuesta":"3"},{"codigo":"7","respuesta":"1"},\
{"codigo":"8","respuesta":"2"},{"codigo":"9","respuesta":"3"}],"puntuacion":"0"},\
{"nombre":"ALUMNO5","respuestas":[{"codigo":"0","respuesta":"2"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"2"},{"codigo":"3","respuesta":"3"},{"codigo":"4","respuesta":"1"},\
{"codigo":"5","respuesta":"2"},{"codigo":"6","respuesta":"3"},{"codigo":"7","respuesta":"1"},\
{"codigo":"8","respuesta":"2"},{"codigo":"9","respuesta":"3"}],"puntuacion":"0"},\
{"nombre":"ALUMNO6","respuestas":[{"codigo":"0","respuesta":"2"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"2"},{"codigo":"3","respuesta":"3"},{"codigo":"4","respuesta":"1"},\
{"codigo":"5","respuesta":"2"},{"codigo":"6","respuesta":"3"},{"codigo":"7","respuesta":"1"},\
{"codigo":"8","respuesta":"2"},{"codigo":"9","respuesta":"3"}],"puntuacion":"0"},\
{"nombre":"ALUMNO7","respuestas":[{"codigo":"0","respuesta":"3"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"3"},{"codigo":"3","respuesta":"1"},{"codigo":"4","respuesta":"3"},\
{"codigo":"5","respuesta":"1"},{"codigo":"6","respuesta":"1"},{"codigo":"7","respuesta":"2"},\
{"codigo":"8","respuesta":"3"},{"codigo":"9","respuesta":"1"}],"puntuacion":"0"},\
{"nombre":"ALUMNO8","respuestas":[{"codigo":"0","respuesta":"2"},{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"2"},{"codigo":"3","respuesta":"3"},{"codigo":"4","respuesta":"1"},\
{"codigo":"5","respuesta":"2"},{"codigo":"6","respuesta":"3"},{"codigo":"7","respuesta":"1"},\
{"codigo":"8","respuesta":"2"},{"codigo":"9","respuesta":"3"}],"puntuacion":"0"}\
]}';


var plantilla = []; //Plantilla de corrección: array donde el índice es el código de pregunta y el valor la respuesta
var estadisticas = {aprobados:0, suspensos:0};

var objPreguntas = JSON.parse(jsonPreguntas,function (k,v) {
    if(k=="codigo")
        plantilla[v]=this.correcta;
    return v;
});

var objRespuestas = JSON.parse(jsonRepuestas,function (k,v) {
    if(k=="respuestas")
        this.puntuacion=corregir(plantilla,v);
    return v;
});

function corregir(_plantilla,_respuestas) {
    var puntos = 0;
    _respuestas.forEach( (x) => {
         x.respuesta == _plantilla[x.codigo] ? puntos++ : puntos=puntos;
    });
    return puntos;
}

var jsonCorregido = JSON.stringify(objRespuestas,function (k,v){
    if(k=="puntuacion")
        (v>=5)?estadisticas.aprobados++:estadisticas.suspensos++;
    return v;
},7);

console.log(jsonCorregido); //RESULTADO FINAL
console.log("APROBADOS: " + estadisticas.aprobados + "\tSUSPENSOS: " + estadisticas.suspensos);