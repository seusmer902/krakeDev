let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function(seleccionado) {
    let eleccionComputador = generarElemento();
    let rutaComputador = generarRuta(eleccionComputador);

    document.getElementById("imgComputador").src = rutaComputador;

    let resultado = determinarGanador(seleccionado, eleccionComputador);
    let mensaje = "";

    if (resultado === 0) {
        mensaje = "¡EMPATE!";
    } else if (resultado === 1) {
        mensaje = "¡GANASTE LA PARTIDA!";
        puntosUsuario++;
    } else {
        mensaje = "PERDISTE LA PARTIDA";
        puntosComputador++;
    }

    document.getElementById("resultado").innerText = mensaje;
    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    document.getElementById("puntosComputador").innerText = puntosComputador;

    if (puntosUsuario === 5) {
        alert("🎉 HAS GANADO EL JUEGO 🎉");
    } else if (puntosComputador === 5) {
        alert("💻 EL COMPUTADOR TE HA VENCIDO 💻");
    }
}

limpiar = function() {
    puntosUsuario = 0;
    puntosComputador = 0;
    document.getElementById("imgComputador").src = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    document.getElementById("puntosComputador").innerText = puntosComputador;
}
