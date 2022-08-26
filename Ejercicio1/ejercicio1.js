'use strict';//directiva indica modo estricto
/**
 * Comentarios de Bloque

//Declaración de Contenedores(Variables)
var variable1 = 10; //Caracter Global
let variable2 = 23; //De ambito local
const constante1 = 3.14; //Declarar cosntantes
console.log(variable2);
var variable1 = 0;

if (true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2);
}

console.log(variable2);*/

//Realizar un programa que lea 2 números y los sume e imprimir el resultado

let num1=12;
let num2=23;
num1=prompt("Introduzca un número");
num2=prompt("Introduzca otro número");
let suma=0;
suma = parseFloat(num1) + parseFloat(num2); 
console.log("El resultado de la suma es:"+suma);
alert("la suma es:"+suma);

