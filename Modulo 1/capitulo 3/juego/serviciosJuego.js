obtenerAleatorio = function () {
  let numero = Math.floor(Math.random() * 3) + 1;
  return numero;
};

generarElemento = function () {
  let numero = obtenerAleatorio();
  if (numero === 1) {
    return "piedra";
  } else if (numero === 2) {
    return "papel";
  } else {
    return "tijera";
  }
};

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
  if (eleccionJugador1 === eleccionJugador2) {
    return 0; // Empate
  }

  if (
    (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
    (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
    (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
  ) {
    return 1; // Gana jugador 1
  } else {
    return 2; // Gana jugador 2
  }
};

generarRuta = function (nombre) {
  let ruta = "./img/" + nombre + ".png";
  return ruta;
};
