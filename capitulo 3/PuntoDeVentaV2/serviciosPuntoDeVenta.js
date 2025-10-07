calcularSubtotal = function(precioProducto, cantidad){
    let total;

    total = (precioProducto * cantidad);
    return total;
}

calcularValorDescuento = function(subtotal,cantidad){
    let descuento;
    let valorDescuento;
    
    if(cantidad<3){
        descuento = 0
    }else if(cantidad>3 && cantidad<5){
        descuento = 0.03
    }else if(cantidad>6 && cantidad<11){
        descuento = 0.04
    } else{
        descuento = 0.05
    }
    valorDescuento = subtotal * descuento

    return valorDescuento
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

esPrecioValido = function (valor, idComponenteError) {
    let hayErrores = false
    if(isNaN(valor)){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO")
    }

}
