validarPlaca = function() {
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura == null) {
        console.log("ESTRUCTURA VÁLIDA");
    } else {
        console.log("ESTRUCTURA INCORRECTA");
        console.log(erroresEstructura);
    }
}
