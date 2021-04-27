document.getElementById("procesar").addEventListener("click",function () {
    var elementos = document.getElementById("caja1").getElementsByTagName("*");
    var etiquetas = [];
    
    Array.from(elementos,x => {
        if(etiquetas.indexOf(x.tagName)==-1) {
            if(x.parentElement === document.getElementById("caja1")) {
                etiquetas.push(x.tagName);
                
            }
        }
    });

    etiquetas.forEach(x => {
        var serieElementos = document.getElementById("caja1").getElementsByTagName(x);

        Array.from(serieElementos,y => {
            document.getElementById("caja2").appendChild(y.cloneNode(true));
        });
    });

    document.getElementById("caja1").innerHTML = "";
});