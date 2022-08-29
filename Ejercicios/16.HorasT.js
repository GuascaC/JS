'use strict';
let horas = 0;
let paga = 0;
let total = 0;
horas = prompt("Ingrese la cantidad de horas trabajadas:");
paga = prompt("Ingrese el pago por hora: ");
let mensaje;
mensaje="";
total = parseFloat(horas)*parseFloat(paga);
switch(true){
    case horas < 38 :
        mensaje = `Horas trabajadas Insuficientes: ${horas}`;
        break;
    case horas > 56 :
        mensaje = `Demasiadas Horas Trabajadas: ${horas}`;
        break; 
    case horas >= 38 && horas <= 56 :
        console.log("Horas: "+horas);
        console.log("Paga: "+total);
        break;
    default:
        mensaje = `Error en las horas: ${horas}`;
        break;
}
console.log(mensaje);