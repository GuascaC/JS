'use strict';
import { validateString, validateAverage } from "./validate.js";
import { 

const btnAgregar = document.querySelector("#btn");
const btnMostrar = document.querySelector("#btnMostrar");

//Propiedad y .addEventListener
btnAgregar.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const promedio = document.querySelector("#promedio").value;
    const opcion = document.querySelector("#opcion").value;

    if (validateString(nombre) && validateString(apellido) && opcion != "0"){
        if (!isNaN(parseFloat(promedio)) && (validateAverage(promedio))){
            agregarEstudiante(promedio, apellido, apellido);
        }else{
            console.log("Error Promedio");
        } 
    }else{
        console.log("Error datos");

    }
});

