'use strict';
const cardsEstudiantes = document.querySelectorAll("#cardsEstudiantes");
const estudiantes = [];

const pintaCard = (tipo) => {
    tipo = tipo.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateEstudiante = document.querySelector("#templateEstudiante").textContent;
    if (tipo ==="ESTUDIANTE") {
        for (let i of estudiantes){

        }
    }
}

const agregarEstudiante = (name, lastName, avg) => {
    let persona = {
        nombre: name,
        apellidos: lastName,
        promedio: avg
    };
    estudiantes.push(persona);
}

