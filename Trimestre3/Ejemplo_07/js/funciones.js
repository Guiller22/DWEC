document.getElementById("procesar").addEventListener("click",function () {
 
    var listadoJSON = '{"elementos":[\
        {"etiqueta":"img","atributos":{"src":"recursos/imagen2.png","alt":"Es la imagen 1"},"contenido":""},\
        {"etiqueta":"h3","atributos":{"class":"cabecera"},"contenido":"Esto es una cabecera H3"},\
        {"etiqueta":"input","atributos":{"type":"text","value":"nombre"},"contenido":""},\
        {"etiqueta":"hr","atributos":{"style":"width: 50%"},"contenido":""}\
    ]}';

    objetos = JSON.parse(listadoJSON);

    objetos.elementos.forEach(function (x){
        var item = document.createElement(x.etiqueta);

        if(x.contenido.length>0) {
            item.textContent = x.contenido;
        }

        for(y in x.atributos) {
            item.setAttribute(y,x.atributos[y]);
        }

        document.getElementById("caja").appendChild(item);
    });
});

