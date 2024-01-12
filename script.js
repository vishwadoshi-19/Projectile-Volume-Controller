

let line = document.querySelector('hr');

let maxVolume = line.offsetWidth;

// for default value at 0
const dot = document.querySelector('.circle')
const rand = Math.floor((Math.random()*(maxVolume+1)))
dot.style.transform = 'translateX(' + 0 + 'px)';

console.log("Max Volume:", maxVolume);

function moveDot() {
    const dot = document.querySelector('.circle')
    const rand = Math.floor((Math.random()*(maxVolume+1)))
    dot.style.transform = 'translateX(' + rand + 'px)';

    let audio = new Audio('sound2.mp3');
    audio.play();

    let volume = document.querySelector('.percent');
    volume.textContent = Math.round((rand/maxVolume)*100) + '%';
}