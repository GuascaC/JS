'use strict';
let cant = 0;
let appl = 0;
let total = 0;
cant=prompt("Ingrese la Cantidad de Manzanas: ");
appl=prompt("Ingrese El precio de Manzanas: ");
total = parseFloat(cant)*parseFloat(appl);
if (total<=3000){
    console.log("Dentro de Presupuesto: "+total);
}
else{
    console.log("Fuera de Presupuesto: "+total);
}
