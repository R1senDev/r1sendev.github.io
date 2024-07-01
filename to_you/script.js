let counter = 50;

let counterElem = document.getElementById('counter');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');


document.addEventListener('DOMContentLoaded', function() {
    counterElem = document.getElementById('counter');
    box1 = document.getElementById('box1');
    box2 = document.getElementById('box2');
    box2.style.transition = 'opacity cubic-bezier(0.075, 0.82, 0.165, 1) 1.5s';
});


document.addEventListener('click', function() {
    if (counter > 0) counter--;
    counterElem.innerHTML = String(counter);
    if (counter == 0) {
        box1.style.opacity = '0%';
        setTimeout(function() {
            box2.style.opacity = '100%';
        }, 1500);
    }
});