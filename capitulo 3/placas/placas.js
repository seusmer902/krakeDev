validarPlaca = function() {

    let placa = recuperarTexto("txtPlaca");
    
    let erroresEstructura = validarEstructura(placa);
    let placaProvincia = obtenerProvincia(placa);

    mostrarTexto("lblProvincia", placaProvincia)

    if (erroresEstructura == null) {
        mostrarTexto("lblValido","VALIDO")
        mostrarTexto("lblError","")
    } else {
        mostrarTexto("lblError", erroresEstructura)
        mostrarTexto("lblValido","")
    }

    
}