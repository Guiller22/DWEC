window.addEventListener("storage", function () {
    document.getElementById("numeroProbarB").setAttribute("disabled", "disabled");
    document.getElementById("comprobarNum2").addEventListener("click", function () {
        var numero = window.localStorage.getItem("clave");
        console.log(numero);
        var numeroB = document.getElementById("numeroProbarB").value;
        parseInt(numeroB);
        if (localStorage.getItem("turno") == 3) {
            alert("ha ganado ya el a")
        } else {

            if (localStorage.getItem("turno") == 1) {
                document.getElementById("numeroProbarB").removeAttribute("disabled");
                if (numeroB == numero) {
                    alert("has acertado el numero")
                    c2 = "turno";
                    localStorage.setItem(c2, 4);
                } else {
                    alert("has fallado pasa el turno al a")
                    c2 = "turno";
                    localStorage.setItem(c2, 0);

                }

            } else {
                document.getElementById("numeroProbarB").setAttribute("disabled", "disabled");
                alert("no es tu turno");
            }
        }
    }

    )
});

