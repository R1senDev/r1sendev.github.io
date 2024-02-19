let latch = false;
let timeoutId = 0;

function vocbtn() {
    if (latch) location.href = 'cringe.html';
    else {
        latch = true;
        document.getElementById('vocbtntext').innerHTML = 'Sure?';
        document.getElementById('vocbtn').style.backgroundColor = '#ff0000';
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            latch = false;
            document.getElementById('vocbtntext').innerHTML = 'Enter';
            document.getElementById('vocbtn').style.backgroundColor = null;
        }, 3000);
    }
}