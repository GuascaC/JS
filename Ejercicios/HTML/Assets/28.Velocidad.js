'use strict';
let dist = 0;
let time = 0;
dist=prompt("Ingrese la distancia:");
time=prompt("Ingrese el tiempo: ");
vel =  parseFloat(dist) / parseFloat(time); 
console.log("La velocidad es :"+vel);
