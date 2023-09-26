const valueAdult = inputAdult.value;
const valueChild = inputChild.value;

function calc() {
    response.style.visibility = 'visible';
    calcMeat();
    calcBevarage();
};

function calcMeat() {
    const meat = (valueAdult * 250) + (valueChild * 100);
    console.log(meat);
};

function calcBevarage() {

    if (checkBevarage.checked) {
        const beer = valueAdult * 4;
        const caipirinha = valueAdult * 2;

    };
};