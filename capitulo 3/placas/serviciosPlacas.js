validarEstructura = function(placa){
    
    let longitud = placa.length

    if (longitud >= 7 && longitud <= 8){
        let errores = "";
        let c1 = placa[0];
        let c2 = placa[1];
        let c3 = placa[2];
        let c4 = placa[3];
        let c5 = placa[4];
        let c6 = placa[5];
        let c7 = placa[6];

        if (c1 < "A" || c1 > "Z") {
            errores += "El primer caracter debe ser una letra mayuscula.";
        }
        if (c2 < "A" || c2 > "Z") {
            errores += "El segundo caracter debe ser una letra mayuscula.";
        }
        if (c3 < "A" || c3 > "Z") {
            errores += "El tercer caracter debe ser una letra mayuscula.";
        }
        if (c4 != "-") {
            errores += "El cuarto caracter debe ser un guion (-).";
        }
        if (c5 < "0" || c5 > "9") {
            errores += "El quinto caracter debe ser un digito.";
        }
        if (c6 < "0" || c6 > "9") {
            errores += "El sexto caracter debe ser un digito.";
        }
        if (c7 < "0" || c7 > "9") {
            errores += "El septimo caracter debe ser un digito.";
        }
        if (longitud == 8) {
            let c8 = placa[7];

            if (c8 < "0" || c8 > "9") {
                errores += "El octavo caracter debe ser un digito.";
            }
        }

        if (errores == "") {
            return null;
        } else {
            return errores;
        }
    }
}