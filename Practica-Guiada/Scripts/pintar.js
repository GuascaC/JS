'use strict';
const cardsEstudiantes = document.querySelectorAll("#cardsEstudiantes");
const estudiantes = [];

const pintaCard = (tipo) => {
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateEstudiante = document.querySelector("#templateEstudiante").textContent;
    if (tipo ==="ESTUDIANTE") {
        for (let i of estudiantes){
            const cloneTemp = templateEstudiante.cloneNode(true)
            cloneTemp.querySelector("title-card").innerHTML = "<strong>DATOS DEL ESTUDIANTE </strong>" 
            cloneTemp.querySelector("data-card").innerHTML =  ` NOMBRES: ${i.nombre.toUpperCase()}
            APELLIDOS: ${i.apellidos.toUpperCase()}`;
            cloneTemp.querySelector("text-promedio").innerHTML = ` ${i.promedio}`;
            cloneTemp.querySelector("text-aprobado").innerHTML = ` ${aprobar(i.promedio)}`;
            fragmento.appendChild(cloneTemp);
        }
    }
    cardsEstudiantes.appendChild(fragmento);
}
const aprobar = (nota) => {
    let result = (nota >=3 && nota <=5) ? "Aprobado" : "Reprobado";
    return result;
}

const agregarEstudiante = (name, lastName, avg) => {
    let persona = {
        nombre: name,
        apellidos: lastName,
        promedio: avg
    };
    estudiantes.push(persona);
}
 export {pintaCard,agregarEstudiante};
