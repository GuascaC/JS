'use strict';
let miarreglo = [2,4,2,5,45,true,'78',"Hola Mundo"];
let miarreglo2 = new Array (1,2,3,4);
miarreglo.push(56);

for(let i=0;i>miarreglo.length;i++){
    console.log(miarreglo[i]);
}
//variaciones del for
;
let j;
for(let j of miarreglo2){
   // console.log(j);
}
for(let j of miarreglo2){
   // console.log(miarreglo2[j]);
}
miarreglo2.forEach((e)=>{
    //console.log(e)
});

miarreglo2.forEach(function(e){
    console.log(e)
});