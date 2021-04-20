$(function (){
    $("#boton1").click(function(event) {
        //SOLUCIÓN 1
        $("#datos1").append("<tr><td>" + $("#nombreTitulo").text() + "</td><td>" + $("#nombreValor").val() + "</td></tr>");
        $("#datos1").append("<tr><td>" + $("#apellidosTitulo").text() + "</td><td>" + $("#apellidosValor").val() + "</td></tr>");
        $("#datos1").append("<tr><td>" + $("#edadTitulo").text() + "</td><td>" + $("#edadValor").val() + "</td></tr>");
        $("#datos1").append("<tr><td>" + $("#paisTitulo").text() + "</td><td>" + $("#paisValor").val() + "</td></tr>");

        //SOLUCIÓN 2
        $("div div input").each(function(index) {
            $("#datos2").append("<tr>");
            $("#datos2").append("<td>" + $(this).prev().text() + "</td>");
            $("#datos2").append("<td>" + $(this).val() + "</td>");
            $("#datos2").append("</tr>");
        });

        //SOLUCIÓN 3
        $("div div input").each(function(index) {
            $("#datos3").children().eq(index).children().eq(0).text($(this).prev().text());
            $("#datos3").children().eq(index).children().eq(1).text($(this).val());
        });
    });
});

