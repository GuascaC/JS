'Use strict'
let x=0;
let y=0;
x = prompt("Ingrese X");
y = prompt("Ingrese Y");
let mensaje;
mensaje="";

switch(true){
    case x > 0 && y > 0:
        mensaje = `El punto se encuentra en el primer cuadrante del plano cartesiano: ${x},${y}`;
        break;
    case x < 0 && y > 0:
        mensaje = `El punto se encuentra en el segundo cuadrante del plano cartesiano: ${x},${y}`;
        break;
    case x < 0 && y < 0:
        mensaje = `El punto se encuentra en el tercer cuadrante del plano cartesiano: ${x},${y}`;
        break;
    case x > 0 && y < 0:
        mensaje = `El punto se encuentra en el cuarto cuadrante del plano cartesiano: ${x},${y}`;
        break;
    case x == 0 && y==0:
        mensaje = `El punto se encuentra en el punto de origen: ${x},${y}`;
        break;
    default:
        mensaje = `Error: ${x},${y}`;
        break;
}
console.log(mensaje);