$(function () {
    $("#boton").click(function (event) {
        //SOLUCIÓN 1
        $("#datos1").append("<tr><td>" + $("#nombreEtiqueta").text() + "</td><td>" + $("#nombre").val() + "</td></tr>");
        $("#datos1").append("<tr><td>" + $("#ciudadEtiqueta").text() + "</td><td>" + $("#ciudad").val() + "</td></tr>");
        $("#datos1").append("<tr><td>" + $("#edadEtiqueta").text() + "</td><td>" + $("#edad").val() + "</td></tr>");

        $("div div input").each(function (index) {
            $("#datos2").append("<tr>");
            $("#datos2").append("<td>" + $(this).prev().text() + "</td>");
            $("#datos2").append("<td>" + $(this).val() + "</td>");
            $("#datos2").append("</tr>");
        });
        $("form input").each(function (index) {
            $("#datos3").children().eq(index).children().eq(0).text($(this)
                .prev().text());
            $("#datos3").children().eq(index).children().eq(1).text($(this)
                .val());
        });
    });
});