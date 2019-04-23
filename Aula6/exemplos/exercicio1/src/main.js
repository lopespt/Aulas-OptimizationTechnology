import Jogo from './jogo.js';


var txtEscolha = document.getElementById("txtEscolha")
var btnChecar = document.getElementById("btnChecar")
var btnReiniciar = document.getElementById("btnReiniciar")
var display = document.getElementById("display")
var rodadas = document.getElementById("rodadas")

var jogo;

function checar(){
    display.innerText = jogo.checaValor(txtEscolha.value);
    rodadas.innerText = jogo.rodadas;
}

function reiniciar(){
    jogo = new Jogo();
    rodadas.innerText = "0";
    display.innerText = "";
    txtEscolha.value= "";
}

btnChecar.addEventListener("click", checar);
txtEscolha.addEventListener("change", checar);
btnReiniciar.addEventListener("click", reiniciar);
reiniciar();


