const colorPicker = document.getElementById('colorPicker');
const applyBtn = document.getElementById('applyBtn');
const randomBtn = document.getElementById('randomBtn');

applyBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = colorPicker.value;
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorPicker.value = randomColor;
});
