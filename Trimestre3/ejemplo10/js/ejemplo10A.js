window.addEventListener("storage", function () {
    document.getElementById("comprobarNum1").addEventListener("click", function () {
        var numero = window.localStorage.getItem("clave");
        console.log(numero);
        parseInt(numero);
        var numeroA = document.getElementById("numeroProbarA").value;
        parseInt(numeroA);
        if (localStorage.getItem("turno") == 4) {
            alert("ha ganado ya el b")
        } else {
            if (localStorage.getItem("turno") == 0) {
                document.getElementById("numeroProbarA").removeAttribute("disabled");
                if (numeroA == numero) {
                    alert("has acertado el numero")
                    c2 = "turno";
                    localStorage.setItem(c2, 3);
                } else {
                    alert("has fallado pasa el turno a b")
                    c2 = "turno";
                    localStorage.setItem(c2, 1);
                    
                }
            } else {
                document.getElementById("numeroProbarA").setAttribute("disabled", "disabled");
                alert("no es tu turno")
            }
        }

    }
    )

});