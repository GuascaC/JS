let miarreglo2=[];
for(let i=0; i<25; i++){
    miarreglo2[i] = i + 2;
}
//console.log(miarreglo2);
//Spread Operator...
//console.log(...miarreglo2);
//Agregar elementos a un arreglo
miarreglo2.push(3,78,900,1200);
//console.log(...miarreglo2);
let miarreglo3=[...miarreglo2,34,88,3450];
//console.log(...miarreglo3);
//let result = miarreglo2.concat(miarreglo3);
//console.log(...result);
//let arreglofinal = [...miarreglo2, ... miarreglo3, ...result];
//console.log(...arreglofinal);
//Propagación en funciones


let Lenguajes = ['PHP','Java','JS','Ruby','C#','C++']
const printLenguajes = (len1,len2,len3="Assembler",...len4) => {
    console.log(`*** Los Lenguajes Top ***
                ${len1}, ${len2}, ${len3}, ${len4}
                ****************************`);
}
printLenguajes(...Lenguajes, 'Cobol', 'F#')