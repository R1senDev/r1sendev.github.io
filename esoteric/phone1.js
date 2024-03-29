let phone = 0

function update(digit) {
    phone += (document.getElementById(String(digit)).checked * 2 - 1) * Math.pow(2, digit);
    document.getElementById('number').innerHTML = phone;
}

for (let i = 47; i >= 0; i--) {
    elem = document.createElement('input');
    elem.type = 'checkbox';
    elem.onchange = function() {update(i)}
    elem.id = i;

    document.body.append(elem);
}