'Use strict'
let paga;
paga = 0;
let pension;
pension = 0;
let salud;
salud = 0;
let transporte;
transporte = 0;
let vida;
vida = 0;
let total;
total = 0;
let mensaje;
mensaje="";
paga=prompt("Ingrese la Paga");

switch(true){
    case paga <= 700000:
        pension = parseFloat(paga) * 0.02;
        salud = parseFloat(paga) * 0.04;
        transporte = parseFloat(paga) * 0.11;
        total = (parseFloat(paga)-(parseFloat(pension))-(parseFloat(salud))+(parseFloat(transporte)))
        mensaje = `Descuento Pensión: ${pension},Descuento salud: ${salud},Aux Transporte: ${transporte},Paga Final : ${total} `;
        break;
    case paga >= 741000 && paga < 999999:
        pension = parseFloat(paga) * 0.04;
        salud = parseFloat(paga) * 0.06;
        transporte = parseFloat(paga) * 0.09;
        total = (parseFloat(paga)-(parseFloat(pension))-(parseFloat(salud))+(parseFloat(transporte)))
        mensaje = `Descuento Pensión: ${pension},Descuento salud: ${salud},Aux Transporte: ${transporte},Paga Final : ${total} `;
     case paga >= 1000000 && paga < 1800000:
        pension = parseFloat(paga) * 0.02;
        salud = parseFloat(paga) * 0.04;
        transporte = parseFloat(paga) * 0.11;
        vida = parseFloat(paga) * 0.11;
        total = (parseFloat(paga)-(parseFloat(pension))-(parseFloat(vida))-(parseFloat(salud))+(parseFloat(transporte)))
        mensaje = `Descuento Pensión: ${pension},Descuento vida: ${salud},Descuento salud: ${salud},Aux Transporte: ${transporte},Paga Final : ${total} `;
    case paga >= 1800000 && paga < 2500000:
        mensaje = `Muy bien: ${nota}`;
        break;
        case paga < 2500000:
        mensaje = `Excelente: ${nota}`;
        break;
    default:
        mensaje = `Error en la Paga: ${paga}`;
        break;
}
console.log(mensaje);