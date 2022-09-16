'use strict';
const main = document.querySelector('.main');
const btnBlue = document.querySelector('#azul');
const btnRed = document.querySelector('#rojo')
const btnBrown = document.querySelector('#marron')
const bntClear = document.querySelector('#clear')
const backgroundApp = localStorage.getItem("config");
btnBlue.addEventListener('click', () => {
    //Tema Azul
    localStorage.setItem('background', 'blue');
    main.setAttribute("class","mainBlue");
    document.body.className = "bodyBlue"
});

btnRed,addEventListener('click', () => {
    localStorage.setItem('background', 'red');
    main.setAttribute("class","mainRed");
    document.body.className = "bodyRed"
})
btnRed,addEventListener('click', () => {
    localStorage.setItem('background', 'brown');
    main.setAttribute("class","mainBrown");
    document.body.className = "bodyBrown"
})

bntClear.onClick = function (){
    localStorage.removeItem("background");
};