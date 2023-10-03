btnResponse.addEventListener('click', () => {
    const valueAdult = Number(inputAdult.value);
    const valueChild = Number(inputChild.value);

    if (valueAdult > 0 || valueChild > 0) {

        response.style.display = 'grid';

        calcMeat();
        calcGarlicBread();
        calcBevarage();

        if (checkBevarage.checked) {
            alcoholic();
        } else {
            divText.removeChild(alcoholicResponse);
        };

    } else {
        alert('Adicione pessoas ao seu churrasco para fazer o orçamento!')
    };

});

function calcMeat() {
    const valueAdult = Number(inputAdult.value);
    const valueChild = Number(inputChild.value);
    const total = valueAdult + valueChild;
    const salt = total * 400;
    const meat = (valueAdult * 400) + (valueChild * 200);

    pPremium.innerText = `Picanha: ${meat} gramas.
                          Carvão: ${total} kg.
                          Sal : ${salt} gramas.`;

    pComum.innerText = ` Fraldinha: ${meat / 2} gramas.
                         Linguiça: ${meat / 2} gramas.
                         Carvão: ${total} kg.
                         Sal : ${salt} gramas.`;

};

function calcGarlicBread() {
    const valueAdult = Number(inputAdult.value);
    const valueChild = Number(inputChild.value);
    const garlicBread = (valueAdult * 2) + (valueChild * 1);

    pPremium.innerText += `
                            Pão de alho: ${garlicBread * 2} unidades.`;
    pComum.innerText += `
                            Pão de alho: ${garlicBread} unidades.`;
};

function calcBevarage() {
    const valueAdult = Number(inputAdult.value);
    const valueChild = Number(inputChild.value);
    let total = valueAdult + valueChild;
    let soda = Math.ceil(total / 4);
    let ice = Math.ceil(total / 5);

    divText.appendChild(bevarageResponse);

    bevarageResponse.innerHTML = `<h2> Bebidas </h2>
                                  <p>Refrigerante: ${soda} unidades de 2L.<br>
                                  Água: ${total} unidade de 500ml.<br>
                                  Gelo: ${ice} unidades de 5kg</p> `
};

function alcoholic() {
    const valueAdult = Number(inputAdult.value);
    const beer = valueAdult * 3;

    divText.appendChild(alcoholicResponse);
    alcoholicResponse.innerHTML = `<h2> Bebidas alcoólicas</h2>
                                  <p>Cerveja: ${beer} unidades de 600ml.</p>`
};