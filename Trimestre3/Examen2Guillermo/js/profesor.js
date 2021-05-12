var correctas =0;
var falladas =0 ;
var totales=0;
document.getElementById("botonPreguntar").addEventListener("click", function () {

    var pregunta = document.getElementById("preguntaProfesor").value;

    var preguntaJson = JSON.stringify(pregunta);

    localStorage.setItem("pregunta", preguntaJson);

})
window.addEventListener("storage", function (event) {
    var respuestaJSON = localStorage.getItem("respuesta");

    var respuesta = JSON.parse(respuestaJSON);

    document.getElementById("respuestaProfesor").innerHTML = respuesta;

});
document.getElementById("botonCorregir").addEventListener("click", function () {
    totales ++;
    if (document.getElementById("bien").checked){
        correctas ++;
        
    }
    else if (document.getElementById("mal").checked){
        falladas ++;
    }
    document.getElementById("preguntaProfesor").value ="";
})
document.getElementById("botonFinalizar").addEventListener("click", function () {
    var resultado = correctas+"/"+totales;
    localStorage.setItem("resultados", resultado);

})