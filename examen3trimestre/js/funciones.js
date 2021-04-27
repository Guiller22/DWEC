document.getElementById("procesar").addEventListener("click", function () {
    var elementos = document.getElementById("caja1").getElementsByTagName("*");
    console.log(elementos);

    //objeto a meter los datos
    var cadenaJson = {};

    cadenaJson.elementos = ":[";
    //recorro los elementos para añadir su nombre de etiqueta al json
    for (i = 0; i < elementos.length; i++) {
        elementos[i].etiqueta = elementos[i].tagName;
    }


    
    //recorro los elementos para añadir los atributos 
    console.log(cadenaJson.etiqueta);
    for (i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);
        if (elementos[i].hasAttributes()) {
            for (j = 0; j < elementos[i].attributes.length; j++) {
                elementos[i].atributos = elementos[i].attributes[j].name + " - " + elementos[i].attributes[j].value;
            }
        }
        else {
            elementos.atributos = "";
        }
    }
    
    //recorro los elementos para añadir el contenido
    for (i = 0; i < elementos.length; i++) {
        if (elementos[i].textContent != "") {
            elementos[i].contenido = elementos[i].textContent;
            
        } else {
            elementos[i].contenido = "";
        }
    }
    cadenaJson.etiqueta = elementos;
    var objetoParseado = JSON.stringify(cadenaJson);
    console.log(objetoParseado);
    document.getElementById("visualizacionTexto").innerHTML = objetoParseado;
    
})