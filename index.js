const input = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

input.addEventListener("input", _.debounce((e) => {
    const scale = e.target.value / 100;
    image.style.transform = `scale(${scale})`;
}, 200));


const box = document.querySelector("#box")
box.addEventListener("mousemove", _.debounce((e) => {
    box.style.left = `${e.clientX - 30}px`;
    box.style.top = `${e.clientY +- 30}px`;
}, 100))
