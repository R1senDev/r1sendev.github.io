let values = [0, 0];
let phone = 1;

function factorial(number) {
    let out = 1;
    for (let i = 2; i <= number; i++) out *= i;
    return out;
}

function update(btnId) {
    if (btnId == 0) phone *= values[0];
    else if (btnId == 1) phone = Math.round(phone / values[1]);
    else if (btnId == 2) phone = factorial(phone);
    else phone = 1;

    updateNumbers();
    document.getElementById('number').innerHTML = phone;
}

function updateNumbers() {
    values = [Math.floor(Math.random() * 8 + 2), Math.round(Math.random() * 11 + 1)];
    document.getElementById('value1').innerHTML = values[0];
    document.getElementById('value2').innerHTML = values[1];
}

updateNumbers();