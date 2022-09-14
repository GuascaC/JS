'use strict';
class Datos{
    constructor() {
        this.Datos = [];
        this.getDatos();
    }
    getDatos() { 
        return this.Datos;
    }

   async getApi(){
        this.Datos = await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(respuesta => respuesta.json())
            .then((response) => {
                for(let i of response){
                    this.Datos.push(i.title);
                }
                return this.Datos;
            })
            .catch((error)=>(console.log(error)))
            .finally(console.log("Ha finalizado al petición"));
    }
}
export{Datos};