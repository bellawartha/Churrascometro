// Header

const header = document.getElementById ('header');
const title = document.createElement ('h1');
title.innerText = 'Churrascomêtro';
header.appendChild (title);

// Calculadora

const calculator = document.getElementById ('calculator');

// Adultos

const divAdult = document.createElement ('div');
const labelAdult = document.createElement ('label');
const inputAdult = document.createElement ('input');
inputAdult.setAttribute ('id', 'adult');
labelAdult.setAttribute ('for', 'adult');
labelAdult.

innerText = "Adulto";

inputAdult.setAttribute('type', 'number');

calculator.appendChild (divAdult);
divAdult.appendChild (labelAdult);
divAdult.appendChild(inputAdult);

// Crianças

const divChild = document.createElement('div');
const labelChild = document.createElement ('label');
const inputChild = document.createElement ('input');

labelChild.innerText = 'Criança';

inputChild.setAttribute('type', 'number');

calculator.appendChild (divChild);
divChild.appendChild(labelChild);
divChild.appendChild(inputChild);

// Bebidas

const divBevarage = document.createElement ('div');
const labelBevarage = document.createElement
('label');
const checkBevarage = document.createElement ('input');

labelBevarage.innerText = 'Com bebidas alcoólicas ?';

checkBevarage.setAttribute('type', 'checkbox');
checkBevarage.setAttribute('id', 'bevarage');

calculator.appendChild (divBevarage);
divBevarage.appendChild (labelBevarage);
divBevarage.appendChild (checkBevarage);

// Botão
const btnCalc = document.createElement ('button');
btnCalc.innerText = 'Calcular'
btnCalc.setAttribute ('onclick', 'calc()');
calculator.appendChild (btnCalc);

