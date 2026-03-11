function ocultarTodo(){

let secciones=document.querySelectorAll(".seccion");

secciones.forEach(sec=>sec.style.display="none");

}

function mostrar(id){

ocultarTodo();

document.getElementById(id).style.display="block";

}