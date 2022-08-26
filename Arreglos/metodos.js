'use strict'
//Volver una cadena a arreglo.
let cadenaDias = "lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let miarreglo = cadenaDias.split("_");
//console.log(miarreglo);
//2. Buscar 
//función anónima ()=>{}    Clasica Function(){}

const result = miarreglo.find((e)=>e === "viernes");
const index = miarreglo.findIndex((e)=>e === "domingo");
//console.log(index);

//3.Comprueba si existe un elemento dentro de un array true o false
//console.log(miarreglo.includes("viernes9"));

//4.Filtrar elementos
let miarreglo2=[];
for(let i=0; i<25; i++){
    miarreglo2[i] = i + 3;
}
console.log(miarreglo2);
const response = miarreglo2.filter((e)=>e % 2 ===0 );
console.log(response);

//map, some, every, reduce, concat