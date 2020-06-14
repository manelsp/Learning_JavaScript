//variables
let ColecionTareas = []

if (localStorage.ColecionTareas != "") 
{
    ColecionTareas = JSON.parse(localStorage.getItem("Tareas"));
    MostrarLista();
}
else 
{
    localStorage.setItem("Tareas", JSON.stringify(ColecionTareas));
    MostrarLista();
}

//AgregarTareas
let BotonAgregar = document.getElementById("AgregarTarea");
BotonAgregar.addEventListener("click", AgregarNuevaTarea );

function AgregarNuevaTarea() 
{
    let nombre = document.getElementById("Tarea").value;
    let prioridad = document.getElementById("Prioridad").value;
    let fecha = document.getElementById("Fecha").value;

    let Tarea = 
    {
        TareaNombre : nombre,
        TareaPrioridad : prioridad,
        TareaFecha : fecha        
    }

    ColecionTareas.push(Tarea);
    localStorage.ColecionTareas = JSON.stringify(ColecionTareas);

    console.log(typeof ColecionTareas); //object
    console.log(ColecionTareas); 

    MostrarLista()
}

function MostrarLista()
{
    document.getElementById("ListaTareas").innerHTML = "";

    for (let i = 0; i < ColecionTareas.length; i++) 
    {
        let nuevaTarea = document.getElementById("ListaTareas");    
        let nuevaFila = document.createElement('li');

        nuevaFila.appendChild(document.createTextNode
        (
            ColecionTareas[i].TareaNombre + " / " + 
            ColecionTareas[i].TareaPrioridad + " / " + 
            ColecionTareas[i].TareaFecha)
        );

        let botonEliminarTarea = document.createElement("button"); 

        botonEliminarTarea.innerHTML = "Eliminar";

        botonEliminarTarea.addEventListener("click", function(){borrarTarea(i)})

        nuevaTarea.appendChild(nuevaFila);
        nuevaTarea.appendChild(botonEliminarTarea);
    }
}

function borrarTarea(i)
{
    ColecionTareas.splice(i, 1); //TODO: Mirar esto
    localStorage.ColecionTareas = JSON.stringify(ColecionTareas);

    MostrarLista();
}