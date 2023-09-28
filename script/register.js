const divRegister = document.getElementById('register');

const divInput = document.createElement('div');
const h2Register = document.createElement('h2');

const inputName = document.createElement('input');
const labelName = document.createElement('label');

const inputEmail = document.createElement('input');
const labelEmail = document.createElement('label');

const btnRegister = document.createElement('button');

h2Register.innerText = 'Quer receber o orçamento completo do seu churrasco de forma descomplicada?'
labelName.innerText = 'Nome';
labelEmail.innerText = 'Email';
btnRegister.innerText = 'Quero receber meu orçamento';

inputName.setAttribute('id', 'name');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Insira aqui seu nome');

inputEmail.setAttribute('id', 'email');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('placeholder', 'example@example.com');

labelName.setAttribute('for', 'name');
labelEmail.setAttribute('for', 'email');

divRegister.appendChild(h2Register);
divRegister.appendChild(divInput);
divRegister.appendChild(btnRegister);

divInput.appendChild(labelName);
divInput.appendChild(inputName);
divInput.appendChild(labelEmail);
divInput.appendChild(inputEmail);

// Session Storage
const nameStorage = localStorage.getItem('nome');
const emailStorage = localStorage.getItem('email');

inputName.setAttribute('value', nameStorage);
inputEmail.setAttribute('value', emailStorage);

// Event
btnRegister.addEventListener('click', () => {
    alert('Dados cadastrados com sucesso! Enviamos para o seu email o orçamento!')
    
    localStorage.setItem('nome', inputName.value);
    localStorage.setItem('email', inputEmail.value);


    console.log(nameStorage);
    console.log(emailStorage);
});


