'use strict';
let radio = 0;
let area = 0;
let perimetro = 0;
radio=prompt("Ingrese el radio");
area = Math.PI * Math.pow(radio,2);
perimetro = 2*Math.PI*parseFloat(radio);
console.log(area);
console.log(perimetro);