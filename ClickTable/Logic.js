"use strict"
document.body.onload = NuevoCuadrado;

var setTimer = 240; 
var contador = 1; 
var numArray = new Array();

function NuevoCuadrado() 
{
    for (let i = 1; i <= 100; i++)
    {
        let randomNumber; 
        do 
        {
            randomNumber = [Math.floor(Math.random()*100)+1]
        } 
        while (numArray[randomNumber] != undefined)

        numArray[randomNumber] = i; 
    }

    for (let i = 1; i <= 100; i++)
    {
        // crea un nuevo div con la clase cuadrado
        // despues añadir el numero dentro del div
        var nuevoCuadrado = document.createElement("div");
        nuevoCuadrado.className = "cuadrado";
        nuevoCuadrado.innerText = numArray[i];
        document.body.appendChild(nuevoCuadrado);
    } 
   
    for (let cajas of document.getElementsByClassName("cuadrado")) 
    {
        cajas.addEventListener("click", comprovarNumero)    
    }

    function comprovarNumero () 
    { 
        if (this.innerText == contador)
        {
            this.style.backgroundColor = "green";
            contador++; 
        }
        else
        {
            this.style.backgroundColor = "red";

            for (let cajas of document.getElementsByClassName("cuadrado")) 
            {
                cajas.removeEventListener("click", comprovarNumero); 
            }
        }
    }
    StartTimer();
}

function StartTimer()
{
    document.getElementById("contador").innerHTML = setTimer;

    if(setTimer == 0)
    {
        alert("FIN DEL TIEMPO")
    }
    else
    {
        setTimer-=1;
        setTimeout("StartTimer()",1000);
    }
}