saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad")
    let estatura = recuperarFloat("txtEstatura")
    let mensajeBienvenido = "Bienvenido "+nombre+" "+apellido
        mostrarTexto("lblResultado",mensajeBienvenido)
}

mostrarImagen = function(idComponente, rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja;
    let valorEntero;
    valorCaja = recuperarTexto(idComponente);
    valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja;
    let valorFloat;
    valorCaja = recuperarTexto(idComponente);
    valorFloat = parseFloat(valorCaja);
    return valorFloat;
}