calcularValorTotal = function () {

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    let nombreProducto = recuperarTexto("txtProducto");    
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidadPrducto = recuperarInt("txtCantidad");

    let productoValido = esProductoValido(nombreProducto, "lblError1")
    let precioValido = esPrecioValido(precioProducto, "lblError2")
    let cantidadValida = esCantidadValida(cantidadPrducto, "lblError3")

    if(productoValido && precioValido && cantidadValida){

        valorSubtotal = calcularSubtotal(precioProducto, cantidadPrducto);
        mostrarTexto("lblSubtotal", valorSubtotal);

        valorDescuento = calcularValorDescuento(valorSubtotal, cantidadPrducto);
        mostrarTexto("lblDescuento", valorDescuento);

        valorIVA = calcularIVA(valorSubtotal, valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);

        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);
    }

}

limpiar = function(){

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", " ");
    mostrarTextoEnCaja("txtCantidad", " ");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}