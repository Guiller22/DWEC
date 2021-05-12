document.getElementById("formulario").addEventListener("change", function () {

    numero1 = document.getElementById("numero1").value;

    numero2 = document.getElementById("numero2").value;

    var num1 = JSON.stringify(numero1);

    var num2 = JSON.stringify(numero2);

    localStorage.setItem("numero1", num1);

    localStorage.setItem("numero2", num2);


})