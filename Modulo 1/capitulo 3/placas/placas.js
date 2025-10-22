validarPlaca = function() {

    let placa = recuperarTexto("txtPlaca");
    
    let erroresEstructura = validarEstructura(placa);
    let placaProvincia = obtenerProvincia(placa);
    let tipoVehiculo = obtenerTipoVehiculo(placa);
    let picoYPLaca = obtenerDiaPicoYPlaca(placa)

    if (erroresEstructura == null) {
        mostrarTexto("lblValido","VALIDO")
        mostrarTexto("lblError","")

        if (placaProvincia !== null) {
            mostrarTexto("lblProvincia", placaProvincia);
            mostrarTexto("lblValido", "VALIDO");
            mostrarTexto("lblError", "");
        } else {
            mostrarTexto("lblError", "Provincia incorrecta");
            mostrarTexto("lblValido", "");
            mostrarTexto("lblProvincia", "-");
        }

        if (picoYPLaca !== null) {
            mostrarTexto("lblPicoYPlca", picoYPLaca);
            mostrarTexto("lblValido", "VALIDO");
            mostrarTexto("lblError", "");
        } else {
            mostrarTexto("lblError", "Ultimo caracter invalido para pico y placa");
            mostrarTexto("lblValido", "");
            mostrarTexto("lblTipoVehiculo", "-");
        }

        if (tipoVehiculo !== null) {
            mostrarTexto("lblTipoVehiculo", tipoVehiculo);
            mostrarTexto("lblValido", "VALIDO");
            mostrarTexto("lblError", "");
        } else {
            mostrarTexto("lblError", "Tipo de vahiculo incorrecto");
            mostrarTexto("lblValido", "");
            mostrarTexto("lblTipoVehiculo", "-");
        }

    } else {
        mostrarTexto("lblError", erroresEstructura)
        mostrarTexto("lblValido","")
    } 
}

limpiar = function(){
    mostrarTextoEnCaja("txtPlaca","")

    mostrarTexto("lblProvincia", "-")
    mostrarTexto("lblError", "")
    mostrarTexto("lblValido", "")

    mostrarTexto("lblTipoVehiculo", "-")
    mostrarTexto("lblPicoYPlca", "-")
}