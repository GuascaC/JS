'use strict';
const nombres = document.querySelector("#inputNames");
const edad = document.querySelector("#inputAge");
const email = document.querySelector("#inputEmail");
const ciudad = document.querySelector("#inputCity");
const politicaData = document.querySelector("#checkPolitica");
const formulario = document.querySelector("#form");
//Validación de Formulario

formulario,addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validFieldsForm() === -1){ 
        alert("Good, Envaindo Formulario!");
    }else {
        alert("Error");
}

})

const validFieldsForm = () =>{
    const values = Object.values(validFields);
    let response = values.findIndex(e=> e === false);
    return response;
}

//Objeto de Validación

let validFields = {
    nom:false,
    edad:false,
    mail:false,
    ciud:false,
    politica:false
}
nombres.addEventListener('change',(event)=>{
    const inputNombre = event.target.value;
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    validFields.nom = inputNombre.match(patronNombres) ? true: false;
    console.log(Object.values(validFields));
});
edad.addEventListener('change', function(e){
    console.log("en edad");
    const patronedad = /(^[0-9]{1,2}$)/g;
    if (parseInt (edad.value) >= 18){
        if(edad.value.match(patronedad)){
            validFields.edad = true;
        }
    }else{
        alert("error en edad");
    }
    console.log(Object.values(validFields));
});
email.addEventListener('change', function(e) {
    const inputEmail = e.target.value;
    const patronEmail = /^(.)$/g
    validFields.mail = inputEmail.match(patronEmail) ? true: false;
    console.log(Object.values(validFields));

});
ciudad.addEventListener('change', function(e) {
    if(ciudad.value === "ok"){  
    validFields.ciud = ciudad.value ? true : false;
    console.log(Object.values(validFields));}
    else{  
    validFields.ciud = ciudad.value ? false : true;
    console.log(Object.values(validFields));}
});
politicaData.addEventListener('change', function(e){
    validFields.politica = politicaData.checked === true ? true : false;
    console.log(Object.values(validFields));
});