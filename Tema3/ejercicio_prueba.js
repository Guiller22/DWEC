var preguntas = `[
    {"codigo":0,"enunciado":La capital de España es...","respuesta1":"Madrid","respuesta2":"Barcelona","respuesta3":
    "Sevilla","correcta":"1"},\
    {"codigo":1,"enunciado":La suma de dos y dos son ...","respuesta1":"3","respuesta2":"4","respuesta3":,\
    "5","correcta":"2"},\
    {"codigo":2,"enunciado":El rio Pisuerga pasa por...","respuesta1":"Murcia","respuesta2":"Almería","respuesta3":,\
    "Valladolid","correcta":"3"},\
    {"codigo":3,"enunciado":El día de Navidad es el 25 de...","respuesta1":"Enero","respuesta2":"Noviembre","respuesta3":,\
    "Diciembre","correcta":"3"},\
    {"codigo":4,"enunciado":El número de módulos en segundo de DAW es...","respuesta1":"4","respuesta2":"5","respuesta3":,\
    "6","correcta":"2"}
    {"codigo":5,"enunciado":La suma de tres y tres es...","respuesta1":"9","respuesta2":"6","respuesta3":
    "5","correcta":"2"}
    {"codigo":6,"enunciado":El profesor de DWEC","respuesta1":"Juan","respuesta2":"Jesús","respuesta3":
    "El pepe","correcta":"2"}
    {"codigo":7,"enunciado":El numero de ordenadores totales es","respuesta1":"16","respuesta2":"Barcelona","17":
    "15","correcta":"2"},\
    {"codigo":8,"enunciado":La capital de CYL","respuesta1":"No hay","respuesta2":"Valladolid","respuesta3":
    "León","correcta":"2"},\
    {"codigo":9,"enunciado":3x3","respuesta1":"9","respuesta2":"6","respuesta3":
    "5","correcta":"1"}]`;

var examenes = {"examenes":'[\
        {"nombre":Marcos,"respuestas":[,\
            {"código":"0","respuesta":"2"},\
            {"código":"1","respuesta":"1"},\
            {"código":"2","respuesta":"2"},\
            {"código":"3","respuesta":"3"},\
            {"código":"4","respuesta":"1"},\
            {"código":"5","respuesta":"1"},\
            {"código":"6","respuesta":"3"},\
            {"código":"7","respuesta":"2"},\
            {"código":"8","respuesta":"1"},\
            {"código":"9","respuesta":"1"},],"puntuacion":"0"},\
        {"nombre":ana,"respuestas":[,\
            {"código":"0","respuesta":"2"},\
            {"código":"1","respuesta":"3"},\
            {"código":"2","respuesta":"2"},\
            {"código":"3","respuesta":"1"},\
            {"código":"4","respuesta":"2"},\
            {"código":"5","respuesta":"3"},\
            {"código":"6","respuesta":"1"},\
            {"código":"7","respuesta":"3"},\
            {"código":"8","respuesta":"2"},\
            {"código":"9","respuesta":"1"}],"puntuacion":"0"},\
        {"nombre":julian,"respuestas":[,\
            {"código":"0","respuesta":"2"},\
            {"código":"1","respuesta":"3"},\
            {"código":"2","respuesta":"1"},\
            {"código":"3","respuesta":"3"},\
            {"código":"4","respuesta":"2"},\
            {"código":"5","respuesta":"2"},\
            {"código":"6","respuesta":"1"},\
            {"código":"7","respuesta":"1"},\
            {"código":"8","respuesta":"3"},\
            {"código":"9","respuesta":"2"}],"puntuacion":"0"},\
        {"nombre":silvia,"respuestas":[,\
            {"código":"0","respuesta":"1"},\
            {"código":"1","respuesta":"2"},\
            {"código":"2","respuesta":"3"},\
            {"código":"3","respuesta":"2"},\
            {"código":"4","respuesta":"1"},\
            {"código":"5","respuesta":"1"},\
            {"código":"6","respuesta":"2"},\
            {"código":"7","respuesta":"3"},\
            {"código":"8","respuesta":"1"},\
            {"código":"9","respuesta":"2"}],"puntuacion":"0"},\
        {"nombre":pepe,"respuestas":[,\
            {"código":"0","respuesta":"3"},\
            {"código":"1","respuesta":"2"},\
            {"código":"2","respuesta":"1"},\
            {"código":"3","respuesta":"2"},\
            {"código":"4","respuesta":"3"},\
            {"código":"5","respuesta":"2"},\
            {"código":"6","respuesta":"3"},\
            {"código":"7","respuesta":"1"},\
            {"código":"8","respuesta":"1"},\
            {"código":"9","respuesta":"3"}],"puntuacion":"0"},\
        {"nombre":luis,"respuestas":[,\
            {"código":"0","respuesta":"2"},\
            {"código":"1","respuesta":"3"},\
            {"código":"2","respuesta":"3"},\
            {"código":"3","respuesta":"2"},\
            {"código":"4","respuesta":"1"},\
            {"código":"5","respuesta":"2"},\
            {"código":"6","respuesta":"3"},\
            {"código":"7","respuesta":"2"},\
            {"código":"8","respuesta":"1"},\
            {"código":"9","respuesta":"1"}],"puntuacion":"0"},\
        {"nombre":ruben,"respuestas":[,\
            {"código":"0","respuesta":"2"},\
            {"código":"1","respuesta":"1"},\
            {"código":"2","respuesta":"3"},\
            {"código":"3","respuesta":"2"},\
            {"código":"4","respuesta":"2"},\
            {"código":"5","respuesta":"1"},\
            {"código":"6","respuesta":"2"},\
            {"código":"7","respuesta":"1"},\
            {"código":"8","respuesta":"3"},\
            {"código":"9","respuesta":"2"}\],"puntuacion":"0"},\
        {"nombre":guille,"respuestas":[,\
            {"código":"0","respuesta":"2"},\
            {"código":"1","respuesta":"1"},\
            {"código":"2","respuesta":"3"},\
            {"código":"3","respuesta":"2"},\
            {"código":"4","respuesta":"2"},\
            {"código":"5","respuesta":"1"},\
            {"código":"6","respuesta":"3"},\
            {"código":"7","respuesta":"2"},\
            {"código":"8","respuesta":"2"},\
            {"código":"9","respuesta":"3"}],"puntuacion":"0"},]'};

/*var examenesParseados =  JSON.parse(examenes);
var preguntasParseadas = JSON.parse(preguntas);
*/

var preguntasParseadas =  JSON.parse(preguntas);
var preguntas=[];

/*for(var i =0; i<examenesA.length;i++){
    examenesA[i].nombre=examenesParseados[i].nombre;
    examenesA[i].respuesta=examenesParseados[i].respuesta;
}*/

for(var i =0; i<preguntasParseadas.length;i++){
    preguntas[i]={};
    preguntas[i].codigo=preguntasParseadas[i].codigo;
    preguntas[i].correcta=new String(fechasParseadas[i].correcta);
}


/*for(var i =0;i<examenesA.length;i++){
    if(examenesA[i].respuesta==preguntasA[i].correcta){
        preguntasA[i].puntuacion+=1;
    }
    else{
        preguntasA[i].puntuacion=preguntasA[i].puntuacion;
    }
}*/