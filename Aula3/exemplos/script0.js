function movable(x) {
    this.myEl = document.getElementById(x);
}

function criaCirculo(x, y) {
    var s = '<circle cx="' +
        x + '" cy="' + y + '" r="5" fill="red"/>';
    return s;
}

var tela = document.getElementById("tela");
for (var i = 0; i < 10; i++) {
    var x = i;
    var y = x * x / 10.0 - 5 * x + 100;
    tela.innerHTML += criaCirculo(x * 10, y);
}

var bolinha = document.getElementById("bolinha");

var bx = 0;

function anima() {
    bolinha.setAttribute("cx", bx);
    bx = bx + 5;
    bx = bx % 800;
}
window.setInterval(
    anima,
    50
);

new movable("bolinha");
