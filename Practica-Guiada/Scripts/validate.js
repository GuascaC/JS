'use strict';
const validateString = (cad) => {
    //Ternario
    let response = (cad.length > 3) ? true : false ;
    return response;
}

const validateAverage = (value) => {
    let result = (value>=0 && value<=5) ? true : false
    return result;
}

export {validateString, validateAverage};