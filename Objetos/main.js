'use strict';
/*
Programación Orientada a Objetos
1.Abstracción(UML)--->Estructura Y Comportamiento--->Clases y Objetos
2.Encapsulación(Seguridad) Modificadores de Acceso -(Private) +(Public) #Herencia
3.Herencia Heredar Atributos o Propiedades 
4.Polimorfismo Diferentes Formas  
Clase: Plantilla de Objeto
Objeto: Instancia/Creación de una clase.
-> Atributo/Propiedades/caracteristicas.
-> Metodos (Comportamiento)
class Persona{
    -nombre: String
    -apellido: String
    -edad : Int
    +altura Double
    #peso: Double
    +caminar():_____
    -hablar():string
    +yoHablo()string
} */
//1.Objeto Literal de Javascript
let cristian = {
    nombre: 'Cristian',
    apellido: 'Guasca',
    edad: 17,
    altura: 1.63,
    peso: 65.2, //Sin necesidad de coma
    caminar: function (){
        return 'Yo Camino';
    },
    hablar: function (){
        return 'Yo Hbalo';
    }
}
/*console.log(cristian.nombre, cristian.apellido);
console.log(cristian.caminar());

for (i of cristian){
    console.log(i);
}*/
//values
Object.keys(cristian).forEach((e) => console.log(e));
/**
 * Tarea: Iterar el objeto con for
 * 
 */