window.addEventListener("storage", function () {
    var numer1 = JSON.parse(localStorage.getItem("numero1"));
    var numer2 = JSON.parse(localStorage.getItem("numero2"));
    var operador = localStorage.getItem("operando");
    var resultado = 0;
    if (operador == "sum") {
        resultado = numer1+numer2;
    } else {
        if (operador == "res") {
            resultado = numer1 - numer2;

        } else {
            if (operador == "por") {
                resultado = numer1 * numer2;
            }
            else {
                if (operador == "div") {
                    resultado = numer1 / numer2;
                }
            }
        }
    }
    document.getElementById("visualizar").innerHTML = resultado;

});
