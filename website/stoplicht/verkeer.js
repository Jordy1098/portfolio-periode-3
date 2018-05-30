var werken;
var buitenwerking;
var stoplicht = document.getElementById('stoplicht');
var stoplicht2 = document.getElementById('stoplicht2');
var stoplicht3 = document.getElementById('stoplicht3');
var stoplicht4 = document.getElementById('stoplicht4');
var auto = document.getElementById('auto');
var auto2 = document.getElementById('auto2');
var auto3 = document.getElementById('auto3');
var auto4 = document.getElementById('auto4');
var rijden;
var slir_lr = false;
var slir_bb = false;
auto.style.top = '800px';
auto2.style.left = '1440px';
auto3.style.bottom = '800px';
auto4.style.right = '1440px';

function aanzetten() {
    clearTimeout(buitenwerking);
    maakRoodGroen();
    werken = setTimeout(maakRoodGeel, 4000);
    werken = setTimeout(maakRoodRood, 6000);
    werken = setTimeout(maakGroenRood, 8000);
    werken = setTimeout(maakGeelRood, 12000);
    werken = setTimeout(maakRoodRood, 15000);
    werken = setTimeout(aanzetten, 17000);
}

function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
    slir_bb = false;
    slir_lr = false;
}

function uitzetten() {
    zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakGeel() {
    stoplicht.src = "verkeer/stoplichtgeel.png";
    stoplicht2.src = "verkeer/stoplichtgeel2.png";
    stoplicht3.src = "verkeer/stoplichtgeel3.png";
    stoplicht4.src = "verkeer/stoplichtgeel4.png";
}

function zetUit() {
    stoplicht.src = "verkeer/stoplichtuit.png";
    stoplicht2.src = "verkeer/stoplichtuit2.png";
    stoplicht3.src = "verkeer/stoplichtuit3.png";
    stoplicht4.src = "verkeer/stoplichtuit4.png";
}

function starten() {
    /*auto onder*/
    rijden = setTimeout(starten, 10);
    if (parseInt(auto.style.top) < -80) {
        auto.style.top = '900px';
    }
    if (slir_lr === true && auto.style.top === 590 + 'px') {
        auto.style.top = parseInt(auto.style.top) + 'px';
    } else {
        auto.style.top = parseInt(auto.style.top) - 5 + 'px';
    }

    /*auto rechts*/
    if (parseInt(auto2.style.left) < -80) {
        auto2.style.left = '1540px';
    }

    if (slir_bb === true && auto2.style.left === 800 + 'px') {
        auto2.style.left = parseInt(auto2.style.left) + 'px';

    } else {
        auto2.style.left = parseInt(auto2.style.left) - 5 + 'px';
    }

    /*auto boven*/
    if (parseInt(auto3.style.bottom) < -80) {
        auto3.style.bottom = '900px';
    }
    if (slir_lr === true && auto3.style.bottom === 470 + 'px') {
        auto3.style.bottom = parseInt(auto3.style.bottom) + 'px';
    } else {
        auto3.style.bottom = parseInt(auto3.style.bottom) - 5 + 'px';
    }

    /*auto links*/
    if (parseInt(auto4.style.right) < -80) {
        auto4.style.right = '1540px';
    }
    if (slir_bb === true && auto4.style.right === 980 + 'px') {
        auto4.style.right = parseInt(auto4.style.right) + 'px';
    } else {
        auto4.style.right = parseInt(auto4.style.right) - 5 + 'px';
    }

}

function opnieuw() {
    clearTimeout(rijden);
    auto.style.top = '800px';
    auto2.style.left = '1440px';
    auto3.style.bottom = '800px';
    auto4.style.right = '1440px';
}

function stop() {
    clearTimeout(rijden);
}


function maakRoodGroen() {
    stoplicht.src = "verkeer/stoplichtrood.png";
    stoplicht2.src = "verkeer/stoplichtrood2.png";
    stoplicht3.src = "verkeer/stoplichtgroen3.png";
    stoplicht4.src = "verkeer/stoplichtgroen4.png";
    slir_lr = true;
    slir_bb = false;
}

function maakRoodGeel() {
    stoplicht.src = "verkeer/stoplichtrood.png";
    stoplicht2.src = "verkeer/stoplichtrood2.png";
    stoplicht3.src = "verkeer/stoplichtgeel3.png";
    stoplicht4.src = "verkeer/stoplichtgeel4.png";
    slir_lr = true;
    slir_bb = false;
}

function maakRoodRood() {
    stoplicht.src = "verkeer/stoplichtrood.png";
    stoplicht2.src = "verkeer/stoplichtrood2.png";
    stoplicht3.src = "verkeer/stoplichtrood3.png";
    stoplicht4.src = "verkeer/stoplichtrood4.png";
    slir_lr = true;
    slir_bb = true;
}

function maakGroenRood() {
    stoplicht.src = "verkeer/stoplichtgroen.png";
    stoplicht2.src = "verkeer/stoplichtgroen2.png";
    stoplicht3.src = "verkeer/stoplichtrood3.png";
    stoplicht4.src = "verkeer/stoplichtrood4.png";
    slir_lr = false;
    slir_bb = true;
}

function maakGeelRood() {
    stoplicht.src = "verkeer/stoplichtgeel.png";
    stoplicht2.src = "verkeer/stoplichtgeel2.png";
    stoplicht3.src = "verkeer/stoplichtrood3.png";
    stoplicht4.src = "verkeer/stoplichtrood4.png";
    slir_lr = false;
    slir_bb = true;
}