'use strict';
//Crear la vista del getListStudent()
const studentViewList = (resp) =>{
    const lista = document.getElementById('listStudents');
    const fragment = new DocumentFragment();
    const tem = document.getElementById('templateList').contentEditable;
    resp.forEach(e => {
        tem.querySelector("li").textContent = e;
        const miElement = tem.cloneNode(true);
        fragment.appendChild(miElement);
    });
    lista.appendChild(fragment);
}

const insertTitleList = () =>{
    const listado = document.getElementById('listDataStudent');
    const title = document.createElement("h2");
    title.innerHTML = "<strong> Listado de Estudiantes</strong>";
    listado.insertAdjacentElement*("afterbegin",title);
};
export { studentViewList, insertTitleList}