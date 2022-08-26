'use strict'
//Realizar un programa que cuente la cantidad de números positivos, negativos y 0

let cannum=0;
let canpos=0;
let canneg=0;
let cancer=0;
let num=0;
cannum=prompt("Introduzca la cantidad de números");
for(let i=0;i<cannum; i++){
    num=prompt("Introduzca un número(El total de números es igual a la cantidad seleccionada anteriormente)");
    if (num == 0){
     cancer++ }
    else{
        if (num > 0){
         canpos++ }
        else{
         canneg++ }
    }
}
console.log("Positivos:"+canpos);
alert("Positivos:"+canpos);
console.log("Negativos:"+canneg);
alert("Negativos:"+canneg);
console.log("Ceros:"+cancer);
alert("Ceros:"+cancer);