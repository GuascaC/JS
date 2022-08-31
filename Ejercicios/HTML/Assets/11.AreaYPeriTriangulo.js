'use strict';
let lado = 0;
let area = 0;
let perimetro = 0;
lado=prompt("Ingrese el lado del triangulo");
area = (Math.sqrt(3)*parseFloat(lado))/4;
perimetro = parseFloat(lado)*3
alert(area);
alert(perimetro);
