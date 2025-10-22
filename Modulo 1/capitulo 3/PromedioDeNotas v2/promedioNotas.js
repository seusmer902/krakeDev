calcular = function(){
    let nota1
    let nota2
    let nota3

    let nota1Float
    let nota2Float
    let nota3Float

    let promedio

    nota1 = recuperarTexto("nota1");
    nota2 = recuperarTexto("nota2");
    nota3 = recuperarTexto("nota3");

    nota1Float = recuperarFlotante("nota1")
    nota2Float = recuperarFlotante("nota2")
    nota3Float = recuperarFlotante("nota3")

    promedio = calcularPromedio(nota1Float, nota2Float, nota3Float)
    cambiarTexto("lblResultado", promedio)

    if(promedio > 8 && promedio <= 10){

        cambiarImagen("imagenResultado","./gif/que-bien.gif")

    }else if(promedio >= 5 && promedio <= 8){

        cambiarImagen("imagenResultado","./gif/aplausoss.gif")

    }else if(promedio > 0 && promedio < 5){

        cambiarImagen("imagenResultado","./gif/que-mal.gif")
    }
}