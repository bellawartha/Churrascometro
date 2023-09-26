function calc() {
    response.style.visibility = 'visible';
    calcMeat();
    calcBevarage();
};

function calcMeat() {
    const valueAdult = inputAdult.value;
    const valueChild = inputChild.value;
    const meat = (valueAdult * 300) + (valueChild * 100);
    pPremium.innerText = `O recomendado neste caso é ${meat} gramas de picanha`
    pComum.innerText = `O recomendado neste caso é ${meat} gramas de fraldinha`
};

function calcBevarage() {
    const valueAdult = inputAdult.value;
    if (checkBevarage.checked) {
        const beer = valueAdult * 4;
        const caipirinha = valueAdult * 2;
    };
};