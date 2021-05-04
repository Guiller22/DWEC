var turno = 0;
window.addEventListener("storage",function (){
document.getElementById("comprobarNum1").addEventListener("click", function () {
    var numero = window.localStorage.getItem("clave");
    var numeroA = document.getElementById("numeroProbarA");
    parseInt(numeroA);
    if(localStorage.getItem("turno")==0) {
        document.getElementById("numeroProbarA").removeAttribute("disabled");
        if(numeroA==numero){
            alert("has acertado el numero")
        }else{
            alert("has fallado pasa el turno a b")
            turno++;
        }
    }else{
        document.getElementById("numeroProbarA").setAttribute("disabled","disabled");
        alert("no es tu turno")
    }
    
    
}
)

});