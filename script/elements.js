// Header
const header = document.getElementById('header');
const title = document.createElement('h1');
title.innerText = 'Churrascomêtro';
header.appendChild(title);

// Calculadora
const inputs = document.getElementById('inputs');
const calculator = document.getElementById('calculator');

// Adultos
const divAdult = document.createElement('div');
const labelAdult = document.createElement('label');
const inputAdult = document.createElement('input');
const divBtnAdult = document.createElement('div');
const btnPlusAdult = document.createElement('button');
const btnMinusAdult = document.createElement('button');

labelAdult.innerText = "Adultos";
btnPlusAdult.innerText = "+";
btnMinusAdult.innerText = "-";

inputAdult.setAttribute('id', 'adult');
labelAdult.setAttribute('for', 'adult');
inputAdult.setAttribute('type', 'number');
inputAdult.setAttribute('value', '0');
divAdult.setAttribute('class', 'input_group');

inputs.appendChild(divAdult);
divAdult.appendChild(labelAdult);
divAdult.appendChild(inputAdult);
divAdult.appendChild(divBtnAdult);
divBtnAdult.appendChild(btnMinusAdult);
divBtnAdult.appendChild(btnPlusAdult);

// Crianças
const divChild = document.createElement('div');
const labelChild = document.createElement('label');
const inputChild = document.createElement('input');
const divBtnChild = document.createElement('div');
const btnPlusChild = document.createElement('button');
const btnMinusChild = document.createElement('button');

labelChild.innerText = 'Crianças';
btnPlusChild.innerText = "+";
btnMinusChild.innerText = "-";

inputChild.setAttribute('id', 'child');
labelChild.setAttribute('for', 'child');
inputChild.setAttribute('type', 'number');
inputChild.setAttribute('value', '0');
divChild.setAttribute('class', 'input_group');

inputs.appendChild(divChild);
divChild.appendChild(labelChild);
divChild.appendChild(inputChild);
divChild.appendChild(divBtnChild);
divBtnChild.appendChild(btnMinusChild);
divBtnChild.appendChild(btnPlusChild);

// Bebidas
const divBevarage = document.createElement('div');
const labelBevarage = document.createElement('label');
const checkBevarage = document.createElement('input');

labelBevarage.innerText = 'Com bebidas alcoólicas?';

checkBevarage.setAttribute('type', 'checkbox');
divBevarage.setAttribute('id', 'bevarage');

calculator.appendChild(divBevarage);
divBevarage.appendChild(labelBevarage);
divBevarage.appendChild(checkBevarage);

// Botão
const btnResponse = document.createElement('a');

btnResponse.innerText = 'Calcular';

btnResponse.setAttribute('href', '#response');

calculator.appendChild(btnResponse);

