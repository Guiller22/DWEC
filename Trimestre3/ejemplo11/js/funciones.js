document.getElementById("enviar").addEventListener("click", function () {

    var persona = {};

    persona.name = document.getElementById("nombre").value;

    persona.phone = document.getElementById("telefono").value;

    persona.age = document.getElementById("edad").value;

    var e = document.getElementById("cursos");
    var value = e.options[e.selectedIndex].value;
    persona.curso = e.options[e.selectedIndex].text;

    persona.pc = document.getElementById("cp").value;

    persona.email = document.getElementById("email").value;

    var infoPersona = JSON.stringify(persona);

    localStorage.setItem("persona", infoPersona);


})