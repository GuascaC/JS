'use strict';

let num1;
let num2;
num1=9; //Número
num2 = '9'; //Caracter

if(num1 < 0){

}else if (num1 > 0){
    if ((num1 % 3 === 0 ) && (parseInt(num2)>0)){
        console.log("num1 Es multiplo de 3 y num2 > 0");
    }else{
        if(num1 % 2 === 0) console.log("num1 es multiplo de 2");

    }
}
//switch
let opcion;
opcion = prompt("Introduzca una opción 1-4")

switch(opcion){
    case '1':
        alert("Seleccióno la opción 1");
        break;
    case '2':
        alert("Seleccióno la opción 2");
        break;
    case '3':
        alert("Seleccióno la opción 3");
        break;
    case '4':
        alert("Seleccióno la opción 4");
        break;
    default:
        alert("Selecciono Una opción Invalida");
        break;
}
