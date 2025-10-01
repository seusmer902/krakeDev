calcularTasaInteres = function(ingresoAnual) {

    if (ingresoAnual < 300000){return 0.16;

    }else if(ingresoAnual < 500000){return 0.15;

    }else if(ingresoAnual < 1000000){return 0.14;

    }else if(ingresoAnual < 2000000){return 0.13}

    return 0.12;
}

calcularCapacidadPago = function(edad, ingresos, egresos) {
    
    let sobrante = ingresos - egresos;

    if (edad > 50) {
        return sobrante * 0.30;
    } 
    else {
        return sobrante * 0.40;
    }
}

calcularDescuento = function(precio, cantidad) {
    
    let total = precio * cantidad;
    let descuento = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.02;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.03;
    } else if (cantidad >= 12) {
        descuento = 0.04; 
    }

    let totalConDescuento = total - (total * descuento);

    return totalConDescuento;
}

determinarColesterolLDL = function(nivelColesterol) {

    if (nivelColesterol < 100){"Óptimo";

    }else if(nivelColesterol < 130){return "Casi óptimo";

    }else if(nivelColesterol < 160){return "Límite alto";

    }else if(nivelColesterol < 190){return "Alto"}

    return "Muy alto";

}

validarClave = function(clave) {

    if (clave.length >= 8 && clave.length <= 16) {
        return true;
    } else {
        return false;
    }
}

esMayuscula = function(caracter) {

    let codigo = caracter.charCodeAt(0);

    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}

esMinuscula = function(caracter) {

    let codigo = caracter.charCodeAt(0);

    if (codigo >= 97 && codigo <= 122) {
        return true;
    }

    if (/^[áéíóúñ]$/.test(caracter)) {
        return true;
    }

    return false;
}

esDigito = function(caracter) {

    let codigo = caracter.charCodeAt(0);

    if (codigo >= 48 && codigo <= 57) {
        return true;
    } else {
        return false;
    }
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria) {

    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true;
    } else {
        return false;
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria) {

    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    } else {
        return false;
    }
}

/**
 * dejarSalir
 * Permiso si (alguna de las 3 > 90) Y además Física > Matemática.
 */
dejarSalir = function(notaMatematica, notaFisica, notaGeometria) {

    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)) {
        return true;
    } else {
        return false;
    }
}