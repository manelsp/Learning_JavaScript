//var contenido = document.getElementById("contenido");
var contenido = document.querySelector('#contenido');

function generarPersonas() {
    fetch('https://randomuser.me/api/?results=3')
    .then (res => res.json())
    .then (data => {
        console.log(data.results['0'])        
    })
}