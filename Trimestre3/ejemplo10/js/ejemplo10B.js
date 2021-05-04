/*window.addEventListener("storage",function (){
document.getElementById("comprobarNum2").addEventListener("click", function () {
    
    window.addEventListener("storage", function () {
        var numeroB = document.getElementById("numeroProbarB");
        parseInt(numeroB);
        var turno = localStorage.getItem("turno");
        if(localStorage.getItem("turno")==1) {
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
*/
var turno = 0;
window.addEventListener("storage",function (){
    document.getElementById("comprobarNum2").addEventListener("click", function () {
        var numero = window.localStorage.getItem("clave");
        console.log(numero);
        var numeroB = document.getElementById("numeroProbarB");
        parseInt(numeroB);
        if(localStorage.getItem("turno")==0) {
            document.getElementById("numeroProbarB").removeAttribute("disabled");
            if(parseInt(numeroB)=parseInt(numero)){
                alert("has acertado el numero")
            }else{
                alert("has fallado pasa el turno a b")
                turno++;
            }
        }else{
            document.getElementById("numeroProbarB").setAttribute("disabled","disabled");
            alert("no es tu turno")
        }
        
        
    }
    )
    
    });