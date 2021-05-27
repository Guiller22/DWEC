/*function notificacion() {
    if (document.getElementById("recordar").checked) {
        var name = document.getElementById("fname").value;
        var apellido = document.getElementById("apellido").value;
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var caduca = "expires=" + d.toUTCString();
        document.cookie ="name=" + name + ";" + caduca;
        alert("Hola\n" + document.cookie + "");
        }
        
    }
    */
    $(document).ready(function () {
        $("#login").click(function () {
            var recordar = $('#recordar').is(':checked');
            if(recordar='true'){
            var valor = $('input[name=nombre]').val();
                $.cookie('usuario', valor);
                var prueba= $.cookie('usuario');
                alert("Hola"+prueba)
                
            }
        })
    })