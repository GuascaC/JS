'Use strict'
let nota;
nota = 4.5
let mensaje;
mensaje="";

switch(true){
    case nota<3.0:
        mensaje = `La ponderación es insuficiente: ${nota}`;
        break;
    case nota>=3.0 && nota<=3.5:
        mensaje = `Ponderación es regular: ${nota}`;
        break;
    case nota>=3.6 && nota<=4.0:
        mensaje = `Ponderación es bien: ${nota}`;
        break;
    case nota>=4.1 && nota<=4.5:
        mensaje = `Muy bien: ${nota}`;
        break;
    case nota>=4.6 && nota<=5.0:
        mensaje = `Excelente: ${nota}`;
        break;
    default:
        mensaje = `La califiación no puede ser procesada: ${nota}`;
        break;
}
console.log(mensaje);