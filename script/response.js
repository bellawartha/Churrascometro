const response = document.getElementById('response');
const divText = document.getElementById('text');


// Premium
const divPremium = document.createElement('div');
const h2Premium = document.createElement('h2');
const pPremium = document.createElement('p');
h2Premium.innerText = 'Opção Premium';

divText.appendChild(divPremium);
divPremium.appendChild(h2Premium);
divPremium.appendChild(pPremium);

// Comum
const divComum = document.createElement('div');
const h2Comum = document.createElement('h2');
const pComum = document.createElement('p');
h2Comum.innerText = 'Opção Comum';

divText.appendChild(divComum);
divComum.appendChild(h2Comum);
divComum.appendChild(pComum);

// Bebidas
const bevarageResponse = document.createElement('div');
const alcoholicResponse = document.createElement('div');
