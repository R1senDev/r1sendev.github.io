let weights = new Map();
weights.set('q1', -5)
    .set('q2', -5)
    .set('q3', -5)
    .set('q4', -10)
    .set('q5', -10)
    .set('q6', -2)
    .set('q7', -2)
    .set('q8', -2)
    .set('q9', -5)
    .set('q10', 10)
    .set('q11', -10)
    .set('q12', 10)
    .set('q13', -5)
    .set('q14', -10)
    .set('q15', -10)
    .set('q16', -15)
    .set('q17', -5)
    .set('q18', -15)
    .set('q19', -64);

function push_results() {
    if (!document.getElementById('qea').checked) {
        alert('Ты не отметил обязательный пункт! (Такие отмечены красной звёздочкой.)');
        return null;
    }

    let points = 180;
    for (let box of weights.keys()) {
        if (document.getElementById(box).checked) points += weights.get(box);
    }

    let result = String(points);
    if (document.getElementById('q20a').checked) result = 'Никита';
    if (document.getElementById('q20b').checked) result = 'Лёша';

    console.log(result);
    location.href = `testresults.html?points=${result}&midget=${Number(document.getElementById('q5').checked)}`;
}

function get_results() {
    let params = new URLSearchParams(window.location.search);
    let points = String(params.get('points'));
    console.log(points);
    document.getElementById('pointsamount').innerHTML = points;

    if (points.match(/(никита)/i)) document.getElementById('detailinfo').innerHTML = 'Ты правда решил, что, будучи Никитой, ты получишь хоть сколько-нибудь баллов в этом тесте? Пфф. Наивный.';
    if (points.match(/(л[её][шх]а)/i)) document.getElementById('detailinfo').innerHTML = 'Ты правда решил, что, будучи Лёшей, ты получишь хоть сколько-нибудь баллов в этом тесте? Пфф. Наивный.';
    
    points = Number(points);
    let details = '...';

    if (points <= 0) details = `Это полный ######.`;
    else if (points < 150) details = `Как бы начать... Надо издалека... Погода сегодня хорошая, да?<br>Шансов у тебя мало. Они есть, но их мало. Это всё, что я могу сказать. Серьёзно, то, что я увидел от тебя в моём бинго, даже не прокомментировать нормально. Я понимаю, ты думаешь о чём-то вроде &#171;Вау, аж ${points} из 200 возможных. Так много&#187;.<br>Не хочу тебя расстраивать, но нет. Это мало. Не крайне мало; не так, как могло бы быть; но всё же не обольщайся, мы оба понимаем, что такое ${points} из 200.`;
    else if (points > 150 && points < 200) details = `Хм, всё не так уж и плохо. Под &#171;не так уж и плохо&#187; я подразумеваю &#171;не так плохо, как могло бы быть&#187;. Ты определённо способен на большее, но что имеем, то имеем. Удачи тебе с этой тянкой. Надеюсь, ты действительно не сжульничал в этом бинго.`;
    else if (points >= 200) {
        details = `Да ладно, тебя просто не существует, я уверен в этом. Или ты наврал с три короба. Признайся, всё же на &#171;Экономе&#187; ездишь, да ведь? (&#65506;_&#65506;)`;
        document.getElementById('backbtntext').innerHTML = 'Перепройти, но честно';
        document.getElementById('backbtn').onclick = back_as_cheater;
    }
    
    if (Number(params.get('midget'))) details += '<br><br>А ещё ты гном.';
    document.getElementById('detailinfo').innerHTML = details;
}

function back_as_cheater() {
    location.href = 'test.html?cheater=1';
}

function init_test() {
    if (window.screen.width < window.screen.height) location.href = 'mobile.html';

    let params = new URLSearchParams(window.location.search);
    if (Number(params.get('cheater'))) {
        document.getElementById('qea').checked = false;
        document.getElementById('qea').hidden = false;
        document.getElementById('qeal').hidden = false;
    } else document.getElementById('qea').checked = true;
}