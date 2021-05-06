document.getElementById("devolverDatos").setAttribute("disabled", "disabled");
window.addEventListener("storage", function (event) {
    document.getElementById("devolverDatos").removeAttribute("disabled");
    var personaJSON = localStorage.getItem("persona");
    var personaInfo = JSON.parse(personaJSON);

    var c = "";
    c += "<br />Nombre: " + personaInfo.name;
    c += "<br />Fecha de nacimiento: " + personaInfo.age;
    c += "<br />Domicilio:" + personaInfo.telefono;
    c += "<br />Curso: " + personaInfo.curso;
    c += "<br />Codigo postal" + personaInfo.pc;
    c += "<br />Email: " + personaInfo.email;

    document.getElementById("visualizar").innerHTML = c;

    

});