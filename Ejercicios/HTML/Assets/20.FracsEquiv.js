'use strict';
let num1 = 0;
let num2 = 0;
let deno1 = 0;
let deno2 = 0;
let res1 = 0;
let res2 = 0;
num1=prompt("Ingrese el primer numerador: ");
deno1=prompt("Ingrese el primer denominador : ");
num2=prompt("Ingrese el segundo numerador: ");
deno2=prompt("Ingrese el segundo denominador: ");
res1 = parseFloat(num1) % parseFloat(deno1)
res2 = parseFloat(num2) % parseFloat(deno2)
if (res1 == res2){
    alert("Fracciones Equivalentes: "+res1)
}
else{
    alert("Fracciones no Equivalentes: "+res1,""+res2)
}