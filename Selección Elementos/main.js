'use strict';
//seleccionar por id
const parrafo1 = document.getElementById('parrafo1');

//console.log(parrafo1);

//Seleccion por atributo name

let nameParrafo = document.getElementsByName('parra2');
//console.log(nameParrafo);

//Seleccion por clase
let elemento = document.getElementsByClassName("parrafo");
//console.log(elemento);
//Query selector por id #
const parrafoUno = document.querySelector('#parrafo1');
const elementEtiqueta = document.querySelector("h1");
const elementClass = document.querySelector(".ejemplo")
//Selecciono todos los elementos p
const todosP = document.querySelectorAll("p")
//console.log(todosP);
/*function print(){
    const valor = document.getElementById("edad").value;
    alert("La edad es :"+valor);
}*/
const print = () => {
    const valor = document.getElementById("edad").value;
    alert("La edad es :"+valor);
}