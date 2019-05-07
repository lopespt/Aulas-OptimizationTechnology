//Arquivo principal

import Componente from "./Componente";
import CaixaTexto from "./CaixaTexto.js";
import Botao from "./Botao.js";

let x = new CaixaTexto("txtNumero");
let b1 = new Botao("btnDivide");

let botoes = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]; 
botoes = [ ...botoes, "btnSoma", "btnDivide", "btnSubtrai", "btnMultiplica"];


function cliqueNumero(mensagem){
    alert(mensagem);
}

b1.setCallbackClique(cliqueNumero, "1");


