const response = document.getElementById ('response');

// Premium
const divPremium = document.createElement ('div');
const h2Premium = document.createElement ('h2');
h2Premium.innerText = 'Opção Premium';

response.appendChild (divPremium);
divPremium.appendChild(h2Premium);

// Comum
const divComum = document.createElement ('div');
const h2Comum = document.createElement ('h2');
h2Comum.innerText = 'Opção Comum';

response.appendChild(divComum);
divComum.appendChild(h2Comum);
