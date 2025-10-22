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
esProductoValido = function(nombre, idComponenteError) {
  let hayErrores = false;

    if(nombre.trim() == ""){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
        hayErrores = true;
    }

    if(nombre.length > 10){
        mostrarTexto(idComponenteError,"EL NOMBRE NO PUEDE TENER MAS DE 10 CARACTERES");
        hayErrores = true;
    }

    if(hayErrores == false){
        mostrarTexto(idComponenteError,"");
    }
    return !hayErrores;
}

esPrecioValido = function(precio, idComponenteError) {
  let hayErrores = false;

  if (isNaN(precio)) {
    mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
    hayErrores = true;
  }

  if(precio < 0 || precio > 50){
    mostrarTexto(idComponenteError,"EL PRECIO DEBE SER UN NUMERO ENTRE 0 y 50");
    hayErrores = true;
  }

  if(hayErrores == false){
    mostrarTexto(idComponenteError,"");
  }

  return !hayErrores;
}


esCantidadValida = function(cantidad, idComponenteError) {
  let hayErrores = false;

  if (isNaN(cantidad)) {
    mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
    hayErrores = true;
  }
  
  if(cantidad < 0 || cantidad > 100){
    mostrarTexto(idComponenteError,"LA CANTIDAD DEBE SER UN NUMERO ENTRE 0 y 100")
  }

  if(hayErrores == false){
    mostrarTexto(idComponenteError,"")
  }

  return !hayErrores;
}