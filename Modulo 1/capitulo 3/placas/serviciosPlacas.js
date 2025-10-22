validarEstructura = function(placa){
    let longitud = placa.length;
    let errores = "";

    let c1 = placa[0];
    let c2 = placa[1];
    let c3 = placa[2];
    let c4 = placa[3];
    let c5 = placa[4];
    let c6 = placa[5];
    let c7 = placa[6];

    if (longitud < 7 || longitud > 8) {
        errores += "Longitud debe ser de 7 u 8 caracteres.";
        return errores;
    }
    if (c1 < "A" || c1 > "Z") {
        errores += "El primer caracter debe ser una letra mayuscula. ";
    }
    if (c2 < "A" || c2 > "Z") {
        errores += "El segundo caracter debe ser una letra mayuscula. ";
    }
    if (c3 < "A" || c3 > "Z") {
        errores += "El tercer caracter debe ser una letra mayuscula. ";
    }
    if (c4 != "-") {
        errores += "El cuarto caracter debe ser un guion (-). ";
    }
    if (c5 < "0" || c5 > "9") {
        errores += "El quinto caracter debe ser un digito. ";
    }
    if (c6 < "0" || c6 > "9") {
        errores += "El sexto caracter debe ser un digito. ";
    }
    if (c7 < "0" || c7 > "9") {
        errores += "El septimo caracter debe ser un digito. ";
    }

    if (longitud == 8) {
        let c8 = placa[7];
        if (c8 < "0" || c8 > "9") {
            errores += "El octavo caracter debe ser un digito. ";
        }
    }

    if (errores == "") {
        return null;
    } else {
        return errores;
    }
}

obtenerProvincia = function(placa) {

    if (!placa || placa.length === 0) {
        return null;
    }

    let letra = placa.charAt(0);

    let provincias = {
        'A': 'Azuay',
        'B': 'Bolivar',
        'C': 'Carchi',
        'E': 'Esmeraldas',
        'G': 'Guayas',
        'H': 'Chimborazo',
        'I': 'Imbabura',
        'J': 'Loja',
        'K': 'Santo Domingo de los Tsachilas',
        'L': 'Los Rios',
        'M': 'Manabi',
        'N': 'Napo',
        'O': 'El Oro',
        'P': 'Pichincha',
        'Q': 'Orellana',
        'R': 'Morona Santiago',
        'S': 'Pastaza',
        'T': 'Tungurahua',
        'U': 'Sucumbíos',
        'V': 'Galapagos',
        'W': 'Cotopaxi',
        'X': 'Santa Elena',
        'Y': 'Zamora Chinchipe',
        'Z': 'Canar'
    };

  return provincias[letra] || null;
};

obtenerTipoVehiculo = function(placa) {

    if (!placa || placa.length < 2) {
        return null;
    }

    const letra = placa.charAt(1).toUpperCase();

    const tiposVehiculo = {
        'A': 'Vehiculo comercial o de alquiler',
        'E': 'Vehiculo del Estado',
        'M': 'Vehiculo municipal',
        'O': 'Vehiculo oficial',
        'P': 'Vehiculo particular',
        'S': 'Vehiculo del gobierno provincial',
        'T': 'Taxi o transporte publico',
        'U': 'Vehiculo de uso diplomatico',
    };

    return tiposVehiculo[letra] || null;
};

obtenerDiaPicoYPlaca = function(placa) {

    if (!placa || placa.length === 0) {
        return null;
    }

    const ultimoCaracter = placa.charAt(placa.length - 1);

    if (isNaN(ultimoCaracter)) {
     return null;
    }

    const numero = parseInt(ultimoCaracter);

    const diasPicoYPlaca = {
        1: "Lunes",
        2: "Lunes",
        3: "Martes",
        4: "Martes",
        5: "Miercoles",
        6: "Miercoles",
        7: "Jueves",
        8: "Jueves",
        9: "Viernes",
        0: "Viernes"
    };

    return diasPicoYPlaca[numero] || "Libre circulación";
};
