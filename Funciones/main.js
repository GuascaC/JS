'use strict';
//Función clasica en javascript
/**
function nombrefuncion(/**recibo de parámetros){
    //*Cuerpo de la Función
    return 0;
}*/

//Invocación de la función
//nombrefuncion();

function suma(num1, num2){
    return num1+num2;
}

let result = 0;
result = suma(3,5);
//console.log(result);

//Función tipo flecha
const resta = (num1=1, num2=1) => {
    return num1 - num2
}

console.log(resta(12,67));