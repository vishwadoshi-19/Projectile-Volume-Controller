

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

var isMouseDown = false;
var initialAngle = 0;

var rotatableElement = document.querySelector('.icon');

rotatableElement.addEventListener('mousedown', function(event) {
  isMouseDown = true;
  initialAngle = getRotationAngle(event);
//   var currentAngle = getRotationAngle(event);
    var rotation = -10;

    // Apply rotation to the element
    rotatableElement.style.transform = 'rotate(' + rotation + 'deg)';
});

document.addEventListener('mouseup', function() {
  isMouseDown = false;
});

// document.addEventListener('mousemove', function(event) {
//   if (isMouseDown) {
//     var currentAngle = getRotationAngle(event);
//     var rotation = currentAngle - initialAngle;

//     // Apply rotation to the element
//     rotatableElement.style.transform = 'rotate(' + rotation + 'deg)';
//   }
// });

function getRotationAngle(event) {
  var rect = rotatableElement.getBoundingClientRect();
  var center = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };

  var angle = Math.atan2(event.clientY - center.y, event.clientX - center.x);
  angle = angle * (180 / Math.PI);

  return angle;
}
