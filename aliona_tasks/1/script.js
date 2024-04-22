CORRECT_ANSWER = 'ебаться хочется, просто умираю';

function check() {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (!answer) return;
    if (answer == CORRECT_ANSWER) {
        document.getElementById('title').style.color = '#00ff00';
        document.getElementById('result').innerHTML = 'Верно :)';
    } else {
        document.getElementById('title').style.color = '#ff0000';
        document.getElementById('result').innerHTML = 'Пока неверно';
    }
}