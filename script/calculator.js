btnResponse.addEventListener('click', () => {
    response.style.display = 'flex';
    divRegister.style.display = 'flex';
    calcMeat();
    calcGarlicBread();

    if (checkBevarage.checked) {
        bevarageResponse.innerHTML = ' ';
        calcBevarage();
    };

});

function calcMeat() {
    const valueAdult = inputAdult.value;
    const valueChild = inputChild.value;
    const meat = (valueAdult * 300) + (valueChild * 100);

    pPremium.innerText = `Picanha: ${meat} gramas.`;
    pComum.innerText = ` Fraldinha: ${meat / 2} gramas.
                         Linguiça: ${meat / 2} gramas.`;

};

function calcGarlicBread() {
    const valueAdult = inputAdult.value;
    const valueChild = inputChild.value;
    const garlicBread = (valueAdult * 2) + (valueChild * 1);

    pPremium.innerText += `
                            Pão de alho: ${garlicBread * 2} unidades.`;
    pComum.innerText += `
                            Pão de alho: ${garlicBread} unidades.`;
};

function calcBevarage() {
    const valueAdult = inputAdult.value;
    const beer = valueAdult * 4;

    divText.appendChild(bevarageResponse);

    bevarageResponse.innerHTML = `<h2> Bebidas </h2>
                                  <p>Cerveja: ${beer} unidades.</p>`
};