//Evento HTML
function notasPromedio(){
    promedio();
}

//Evento por propiedad
    const btnPropiedad = document.getElementById("btn2");
    btnPropiedad.onclick = function (){
        promedio();
    }

//Método .addEventListener
const btnAdd = document.getElementById("btn3");

btnAdd.addEventListener("click", function(){
    promedio();
});

// Método calculo promedio
const promedio  = () =>{
    let cantNotas = prompt(" Introduzca la cantidad de notas ");
    if (!isNaN(parseInt(cantNotas))){
        let nota = 0;
        let sumaNotas = 0;
        for (let i=1; i <= cantNotas; i++){
            nota = prompt("Introduzca la nota No: "+i);
            sumaNotas += (parseFloat(nota));
        }
        let promedio = sumaNotas/cantNotas;
        alert("El promedio es: "+promedio.toFixed(1));
    }else{
        alert("El valor es inválido");
    }
}