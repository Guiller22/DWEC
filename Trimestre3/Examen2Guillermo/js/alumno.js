var c = "";
window.addEventListener("storage", function (event) {
    var preguntaJson = localStorage.getItem("pregunta");

    var pregunta = JSON.parse(preguntaJson);

    document.getElementById("preguntaAlumno").innerHTML = pregunta;

    
    var result = localStorage.getItem("resultados");

    document.getElementById("nota").innerHTML = result;

    
   
    

});
document.getElementById("botonResponder").addEventListener("click", function () {
    var respuesta = document.getElementById("respuestaAlumno").value;

    var respuestaJSON = JSON.stringify(respuesta);

    localStorage.setItem("respuesta", respuestaJSON);
    
    var preguntaJson = localStorage.getItem("pregunta");
    var respuestaJson = localStorage.getItem("respuesta");
    c+="<br> Pregunta:"+preguntaJson;
    c+="<br> Respuesta:"+respuestaJson;
    document.getElementById("historico").innerHTML =c;
    document.getElementById("respuestaAlumno").value ="";
    
})
