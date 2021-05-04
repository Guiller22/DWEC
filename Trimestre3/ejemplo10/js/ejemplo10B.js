window.addEventListener("storage",function (){
document.getElementById("comprobarNum2").addEventListener("click", function () {
    
    window.addEventListener("storage", function () {
        var numeroB = document.getElementById("numeroProbarB");
        parseInt(numeroB);
        var turno = localStorage.getItem("turno");
        if (turno == 1) {
            document.getElementById("numeroProbarB").removeAttribute("disabled");
            if (numeroB == numero) {
                alert("has acertado el numero")
            } else {
                alert("has fallado pasa el turno a a")
                turno--;
            }
        } else {
            document.getElementById("numeroB").setAttribute("disabled", "disabled");
            alert("no es tu turno")
        }


    }
    )
}
)

});
