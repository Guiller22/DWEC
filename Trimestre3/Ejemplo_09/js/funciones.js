document.getElementById("logeo").addEventListener("click", function () {
        var u = document.getElementById("usuario").value;
        var c = document.getElementById("clave").value;
    
        var listCookies = document.cookie.split(';');
        var par = "";
        var busqueda = u + "=" + c;
        for (var i = 0; i < listCookies.length; i++) {
            par = listCookies[i];
            //Se quitan los espacios en blanco 
            while (par.charAt(0) == ' ') {
                par = par.substring(1);
            }

            //Se compara los que buscamos con el elemento del array. Si devuelve como índice 0 se ha encontrado
            if (par.indexOf(u) == 0 && par.indexOf(c) == 0) {
                alert("Loggeo correcto")
            } else {
                ponerUnaCookie(u,c);
                alert("Registro correcto");
            }
            
        }
        function ponerUnaCookie(clave, valor, dias=7) {
            var miCookie = "";
                var fecha = new Date();
                fecha.setTime(fecha.getTime() + (dias*24*60*60*1000));
                var expires = "expires="+ fecha.toUTCString();
                miCookie = clave + "=" + valor + ";" + expires; //PERMANENTE
           
            document.cookie = miCookie;
        }
        

});