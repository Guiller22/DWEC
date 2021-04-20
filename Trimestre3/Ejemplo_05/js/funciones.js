var turno = false;

Array.from(document.getElementsByTagName("li"),function (elemento) {
    elemento.addEventListener("click",function () {
        var clonado = elemento.cloneNode(true);
        if(turno) {
            document.getElementById("lista2").insertBefore(clonado,document.getElementById("lista2").children[0]);
        } else {
            document.getElementById("lista2").appendChild(clonado);
        }
        turno=!turno;
    });
});