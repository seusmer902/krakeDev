recuperarTexto = function (idComponente){
    let componente;
    let valorIngresado;

    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

mostrarTexto = function (idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarFloat = function (idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

recuperarInt = function (idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

mostrarTexto = function (idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}