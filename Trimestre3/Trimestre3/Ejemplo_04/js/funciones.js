document.getElementById("procesar").addEventListener("click",function () {
    Array.from(document.getElementsByTagName("img"), elemento => {
        if(elemento.hasAttribute("alt")) {
            elemento.setAttribute("border","4");
        }
    });
});