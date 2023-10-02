btnPlusAdult.addEventListener('click', () => {
    inputAdult.value++;
});

btnMinusAdult.addEventListener('click', () => {
    if (inputAdult.value > 0) {
        inputAdult.value--;
    };
});

btnPlusChild.addEventListener('click', () => {
    inputChild.value++;
});

btnMinusChild.addEventListener('click', () => {
    if (inputChild.value > 0) {
        inputChild.value--;
    };
});

