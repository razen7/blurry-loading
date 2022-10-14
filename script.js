const bg = document.querySelector('.bg');

const progress = document.querySelector('.loading');

let percent = 0;

let int = setInterval(blurring, 30);

function blurring() {
    percent++;

    if (percent > 99) {
        clearInterval(int);
    }
    progress.innerHTML = `${percent}%`;
    progress.style.opacity = scale(percent, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(percent, 0, 100, 70, 0)}px)`;
    console.log(`${scale(percent, 0, 100, 70, 0)}px`);

}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}