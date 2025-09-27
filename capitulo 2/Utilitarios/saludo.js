saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenido = "Bienvenido "+nombre+" "+apellido;
        mostrarTexto("lblResultado",mensajeBienvenido);

        mostrarImagen("lblImagen","./imagenes/gif-para-saludar.gif");

        mostrarTextoEnCaja("txtNombre","")
}