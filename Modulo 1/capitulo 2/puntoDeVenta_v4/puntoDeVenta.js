calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    let resumen

    nombreProducto = recuperarTexto("txtProducto");
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");
    porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);

    valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento);

    valorIVA = calcularIVA(valorSubtotal, valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA);

    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal);

    resumen = "Valor a pagar por " + cantidad + " " + nombreProducto +" con " + porcentajeDescuento + "% de descuento: USD "+valorTotal;
    mostrarTexto("lblResumen", resumen);
}

limpiar = function(){

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", " ");
    mostrarTextoEnCaja("txtCantidad", " ");
    mostrarTextoEnCaja("txtPorcentajeDescuento", " ");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "Valor a pagar por --- --- con --% de descuento: USD --.--");
}