calcularValorTotal = function () {

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");

    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);

    valorDescuento = calcularValorDescuento(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento);

    valorIVA = calcularIVA(valorSubtotal, valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA);

    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal);
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