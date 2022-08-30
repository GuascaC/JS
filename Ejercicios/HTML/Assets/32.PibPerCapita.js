'use strict';
let pib = 0;
let habits = 0;
let pibPer = 0;
pib = prompt("Ingrese el Producto Interno Bruto: ");
habits = prompt("Ingrese Cantidad de Habitantes: ");
pibPer = parseFloat(pib)/parseFloat(habits);
console.log("Pib Per Capita: "+pibPer);
