/*
* File: app.js
* Author: Laczkó Bálint
* Copyright: 2023, Laczkó Bálint
* Group: Szoft I-2-N
* Date: 2021-02-23
* Github: https://github.com/Balint0429/
* Licenc: GNU GPL
*/
var hosszInput = document.querySelector('#hossz');
var areaInput = document.querySelector('#eredmeny');
var calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {
    inputCon();
});

function inputCon() {
    let hossz = Number(hosszInput.value);
    let area = calcArea(hossz);
    areaInput.value = area + " cm²";
}

function calcArea(hossz) {
    let T = (3/2) * Math.pow(hossz, 2) * Math.sqrt(3);
    let roundedT = Math.round(T);
    return roundedT;
}