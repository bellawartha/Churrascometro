const divRegister = document.getElementById('register');

const divInput = document.createElement('div');
const h2Register = document.createElement('h2');

const btnRegister = document.createElement('button');
const linkRegister = document.createElement('a');

h2Register.innerText = 'Quer receber o orçamento completo do seu churrasco de forma descomplicada?';
btnRegister.innerText = 'Fazer meu orçamento';

// Nome
const inputName = document.createElement('input');
const labelName = document.createElement('label');

labelName.innerText = 'Nome';

inputName.setAttribute('id', 'name');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Insira aqui seu nome');

labelName.setAttribute('for', 'name');

// Email
const inputEmail = document.createElement('input');
const labelEmail = document.createElement('label');

inputEmail.setAttribute('id', 'email');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('placeholder', 'example@example.com');

labelEmail.innerText = 'Email';
labelEmail.setAttribute('for', 'email');

// CEP
const inputCep = document.createElement('input');
const labelCep = document.createElement('label');

labelCep.innerText = 'CEP';

inputCep.setAttribute('id', 'cep');
inputCep.setAttribute('type', 'text');
inputCep.setAttribute('placeholder', 'Insira seu CEP');
labelCep.setAttribute('for', 'cep');

// Checkbox
const divCheck = document.createElement('div');
const labelCheck = document.createElement('label');
const check = document.createElement('input');

labelCheck.innerText = 'Aceito receber e-mails com promoções'

divCheck.setAttribute('id', 'divCheck');

check.setAttribute('type', 'checkbox');
check.setAttribute('id', 'check');
check.setAttribute('checked', '');

labelCheck.setAttribute('for', 'check');



// Adicionar elementos
divRegister.appendChild(h2Register);

divRegister.appendChild(divInput);
divRegister.appendChild(divCheck);

divCheck.appendChild(labelCheck);
divCheck.appendChild(check);

divRegister.appendChild(linkRegister);
linkRegister.appendChild(btnRegister);

divInput.appendChild(labelName);
divInput.appendChild(inputName);
divInput.appendChild(labelEmail);
divInput.appendChild(inputEmail);
divInput.appendChild(labelCep);
divInput.appendChild(inputCep);



// Session Storage
// Event
const nameStorage = localStorage.getItem('nome');
const emailStorage = localStorage.getItem('email');
const enderecoStorage = localStorage.getItem('endereco');
const regexCEP = /^\d{8}$/;

if (typeof nameStorage === 'string' && typeof emailStorage === 'string' && typeof enderecoStorage === 'string') {
    window.location.href = './calculator.html';
    alert(`Olá ${nameStorage}! Seja bem vindo novamente!`);
} else {
    btnRegister.addEventListener('click', () => {
        if (inputName.value.trim() === '' || inputEmail.value.trim() === '' || inputCep.value.trim() === '') {
            alert('Por favor digite as informações necessárias');

        } else {

            if (regexCEP.test(inputCep.value)) {

                if (!inputEmail.value.includes('@')) {

                    alert('Coloque um email válido!');

                } else {

                    localStorage.setItem('nome', inputName.value);
                    localStorage.setItem('email', inputEmail.value);

                    api.getAddressByPostalCode(inputCep.value);

                    linkRegister.setAttribute('href', './calculator.html');
                }

            } else {
                alert('Cep inválido. Digite apenas os números, sem hífen');
            }
        }

    }
    )
};






