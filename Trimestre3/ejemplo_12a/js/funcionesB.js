document.getElementById("formulario2").addEventListener("change", function () {

    if (document.getElementById('multip').checked) {
        var operador = document.getElementById('multip').value;
    }
    if (document.getElementById('division').checked) {
        var operador = document.getElementById('division').value;
    }
    if (document.getElementById('suma').checked) {
        var operador = document.getElementById('suma').value;
    }
    if (document.getElementById('resta').checked) {
        var operador = document.getElementById('resta').value;
    }
    localStorage.setItem("operando", operador);



});