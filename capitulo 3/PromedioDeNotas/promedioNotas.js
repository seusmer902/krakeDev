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

    if(promedio > 7){

        cambiarImagen("imagenResultado","./gif/que-bien.gif")

    }else if(promedio < 7){
        cambiarImagen("imagenResultado","./gif/que-mal.gif")
    }
}