validarPlaca = function() {
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura == null) {
        console.log("ESTRUCTURA VALIDA");
        mostrarTexto("lblValido","VALIDO")
        mostrarTexto("lblError","")
    } else {
        mostrarTexto("lblError", erroresEstructura)
        mostrarTexto("lblValido","")
    }
}