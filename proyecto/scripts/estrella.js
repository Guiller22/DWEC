$(document).ready(function () {
    $('#enviar').css({
        width: '30%'
    })
    $("#enviar").click(function () {
        var nombre = $('input[name=nombre]').val();
        var poseedorAp = $('input[name=apellido]').val();
        var doc = new jsPDF();
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${"usuario"}=`);
        if (parts.length === 2)
            var prueba = parts.pop().split(';').shift();
        if (prueba == nombre) {
            
            
            doc.setFont("helvetica", "normal");
            doc.setTextColor(255, 0, 0);
            doc.text(20, 20, "CERTIFICADO ESTRELLA");
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0);
            doc.text(20, 30, "Enhorabuena en tu nueva estrella " + nombre + " " + poseedorAp + ".");

            doc.addImage(imgData, 'JPEG', 10, 40, 180, 180);
            doc.save('CertificadoEstrella.pdf');

            var recordar = $('#recordar').is(':checked');
            if (recordar = 'true') {
                var name = $('input[name=usuario]').val();
                var apell = $('input[name=apellido]').val();
                window.localStorage.setItem(name, apell);
                localStorage.setItem(name, apell);
                window.sessionStorage.setItem(name, apell);
                sessionStorage.setItem(name, apell);
            }
        }else{
            alert("El usuario no puede hacer eso")
        }

    })
})