//crear tres paginas en la principal, en la principal al pulsar un boton numero aleat entre el 1 y el 25
// en la a y b segun un sistema de turnos tienen que ir diciendo numeros uno y el otro y decir si ha acertado
//o no



document.getElementById("generarNumero").addEventListener("click", function () {
    var numero = Math.floor(Math.random()*25+1);
    parseInt(numero);
    document.getElementById("numero").innerHTML = numero;
        var c = "clave";
        var v = numero;
        var c2 = "turno";
        var v2 = 0;
        localStorage.setItem(c,v);
        localStorage.setItem(c2,v2);
}
)
