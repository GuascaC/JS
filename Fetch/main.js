'use strict';
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(respuesta => respuesta.json())
    .then((response) => {
        console.log(response);
    })
    .catch((error)=>(console.log(error)))
    .finally(console.log("Ha finalizado al petición"));