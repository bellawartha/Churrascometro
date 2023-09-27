function darkTheme() {
    const img = document.getElementById('imgBarbecue');

    const dark = document.body.classList.toggle('dark');

    if (dark) {
        img.setAttribute('src', './image/barbecue.png');
    } else {
        img.setAttribute('src', './image/undraw_barbecue_3x93.png');
    };
};