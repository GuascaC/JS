'Use strict'
let num1=0;
let num2=0;
let num3=0;
num1=prompt("Introduzca un número");
num2=prompt("Introduzca un segundo número");
num3=prompt("Introduzca un tercer número");


switch(true){
    case num1>num2 && num1>num3:
        alert("El Mayor es el primero: "+num1) ;
        break;
    case num2>num1 && num2>num3:
        alert("El Mayor es el segundo: "+num4) ;
        break;
    case num3>num2 && num3>num1:
        alert("El Mayor es el tercero: "+num3) ;
        break;
    default:
        mensaje = `Error`;
        break;
}