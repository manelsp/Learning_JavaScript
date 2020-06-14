window.onload = crearPartida;

function crearPartida() {
    console.log("Nueva partida creada!");

    let jugador = document.getElementById("jugadores");
    let baraja = document.getElementById("baraja");
    jugador.innerHTML = ""; 
    baraja.innerHTML = "";

    //jugadores
    fetch('https://randomuser.me/api/?results=4')
    .then(response => response.json())
    .then(dataJugadores => crearJugadores(dataJugadores.results, jugador))

    //cartas
    for (let i = 0; i < 4; i++) {
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4')
        .then(response => response.json())
        // .then(dataCartas => repartirCartas(dataCartas.results, baraja))
        .then(function(json) {
            console.log(json);
            repartirCartas(json.cards, baraja);
        }) 
    }
}

function repartirCartas(datosCartas, baraja) {
    for (let datos of datosCartas) {
        baraja.innerHTML += crearBaraja(
           //console.log(datos.image),
            datos.image,
        ) + '<br>'
        console.log("cartas creada");
    }
}

function crearBaraja(imagen) {
    let baraja = '<div class="card" style="width:110px"><img class="card-img-top" src="' + imagen + '" alt"Card image" style="width:100%">'

    return baraja; 
}

function crearJugadores(datosJugador, jugador) {
    for (let datos of datosJugador) {
        jugador.innerHTML += crearJugador(
            datos.picture.large,
            datos.name.title + " " + datos.name.first,
        )
    }
}

function crearJugador (imagen, nombre) {
    let carta = '<div class="card" style="width:110px"><img class="card-img-top" src="' + imagen + '" alt="Card image" style="width:100%">' //TODO: Hacer esto mas leíble
    carta += '<div class="card-body"><h6 class="card-title">' + nombre + '</h6>';

    return carta; 
}