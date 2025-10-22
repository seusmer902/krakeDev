calcularSubtotal = function(precioProducto, cantidad){
    let total;

    total = (precioProducto * cantidad);
    return total;
}

calcularValorDescuento = function(valorSubtotal, porcentajeDescuento){
    let total;
    
    total = (valorSubtotal * porcentajeDescuento / 100);
    return total;
}

calcularIVA = function(valorSubtotal, valorDescuento){
    let valorIva;
    let total;    
    
    valorIva =valorSubtotal - valorDescuento;
    total = valorIva * 0.12;
    return total;
}

calcularTotal = function (valorSubtotal, valorDescuento, valorIVA){
    let total
    
    total = (valorSubtotal - valorDescuento + valorIVA);
    return total;
}