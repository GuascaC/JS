'use strict'
//Realizar un programa que lea 2 números y los sume e imprimir el resultado si ambos son Positivos

let num1=12;
let num2=23;
num1=prompt("Introduzca un número");
num2=prompt("Introduzca otro número");
let suma=0;
if ((num1 > 0) && (num2 > 0))
{
    suma = parseFloat(num1) + parseFloat(num2); 
}
console.log("El resultado de la suma es:"+suma);
alert("la suma es:"+suma);
