document.onload = loadPage();

let textName = document.getElementById("textboxName");
let textNota = document.getElementById("textboxNota");

let buttonAdd = document.getElementById("buttonSave");
buttonAdd.addEventListener("click", newElement);

//funcion al cargar la pagina
function loadPage() {
    Load_Info();
}

//Cargar información alumnos
function Load_Info() {
    fetch("http://localhost:65181/api/Alumnoes")
        .then(resp => resp.json())
        .then(data => {
            for (alumno of data) {

                let newAlumno = document.createElement("tr");
                newAlumno.id = "newRow" + alumno.id;

                let columnaName = document.createElement("td");
                columnaName.innerHTML = alumno.nombre;
                newAlumno.appendChild(columnaName);

                let columnaNota = document.createElement("td");
                columnaNota.innerHTML = alumno.nota;
                newAlumno.appendChild(columnaNota);

                let columnaBotones = document.createElement("td");

                //Creamos los botones
                Create_EditButton(alumno.id, columnaBotones);
                Create_DeleteButton(alumno.id, columnaBotones);
                
                newAlumno.appendChild(columnaBotones);

                document.getElementById("contenidoAlumnos").appendChild(newAlumno)
            }
        }
    )
}

//funcion crear
function newElement() {

    let alumno = {
        nombre: textName.value,
        nota: textNota.value
    };
    let params = {
        method: 'POST',
        body: JSON.stringify(alumno),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };
    fetch('http://localhost:65181//api/Alumnoes', params)
        .then(response => response.json())
        .then(json => { console.log(json); AlumnoCreado(); location.reload();})
}

//alerta funcion alumno editado correctamente 
function AlumnoEditado() {
    let alerta = document.createElement("div")
    alerta.id = "alerta";
    alerta.className = "alert alert-warning mt-4";
    alerta.innerHTML = "Alumno creado correctamente";
    document.body.appendChild(alerta);
    setTimeout(() => document.body.removeChild(document.getElementById("alerta")), 1000);
}

//alerta funcion alumno creado correctamente
function AlumnoCreado() {
    let alerta = document.createElement("div")
    alerta.id = "alerta";
    alerta.className = "alert alert-success mt-4";
    alerta.innerHTML = "Alumno creado correctamente";
    document.body.appendChild(alerta);
    setTimeout(() => document.body.removeChild(document.getElementById("alerta")), 1000);
}

//alerta funcion alumno eliminado correctamente
function AlumnoEliminado() {
    let alerta = document.createElement("div")
    alerta.id = "alerta";
    alerta.className = "alert alert-danger mt-4";
    alerta.innerHTML = "Alumno eliminado correctamente";
    document.body.appendChild(alerta);
    setTimeout(() => document.body.removeChild(document.getElementById("alerta")), 1000);
}

//funcion editar
function editElement(id) {
    alumno = { id: id, nombre: textName.value, nota: textNota.value };
    params = {
        method: 'PUT',
        body: JSON.stringify(alumno),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    fetch('http://localhost:65181/api/Alumnoes/' + id, params)
        .then(response => response.json())
        .then(json => { console.log(json); AlumnoEditado();  location.reload();})
        .catch(error => console.log(error));
}

//fucion eliminar
function deleteElement(id) {
    params = {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    fetch('http://localhost:65181//api/Alumnoes/' + id, params)
        .then(response => response.json())
        .then(json => { console.log(json); AlumnoEliminado();  location.reload();})
        .catch(error => console.log(error));
}

//boton editar
function Create_EditButton(id, columnaBotones) {
    let button_edit = document.createElement("button");
    button_edit.className = "btn btn-primary mr-2";
    button_edit.value = id;
    columnaBotones.appendChild(button_edit);
    button_edit.innerHTML = "EDITAR";
    button_edit.addEventListener("click", function () { editElement(id) });
}

//boton detalles
function Create_DetailsButton() {
    let button_details = document.createElement("button");
    document.getElementById("container").appendChild(button_details);
    button_details.innerHTML = "DETALLES";
}

//boton eliminar
function Create_DeleteButton(id, columnaBotones) {
    let button_delete = document.createElement("button");
    button_delete.className = "btn btn-danger";
    columnaBotones.appendChild(button_delete);
    button_delete.innerHTML = "BORRAR";
    button_delete.addEventListener("click", function () { Confirmar_Delete(id) });
}

//funcion confirmacion eliminar
function Confirmar_Delete(id) {
    var opcion = confirm("¿Estas seguro?");
    if (opcion == true) {
        deleteElement(id);
	} 
}

