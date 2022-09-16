import { students } from "../Model/modelStudents.js";
import { studentViewList,insertTitleList } from "../View/viewStudents.js";

const btnCall = document.getElementById("btnListar")

//Obteniendo el modelo
const getListStudent = (students) =>{
    let datos = [];
    for (let s of students){
        let dataTemplate = `${s.name} ${s.lastName} ${s.age}`;
        datos.push(dataTemplate);
    }
    return datos;
};

//Asociando el evento al Boton
btnCall.addEventListener("click",()=>{
    const response = getListStudent(students);
    studentViewList(response);
    insertTitleList();
});