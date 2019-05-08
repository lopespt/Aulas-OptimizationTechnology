//Arquivo principal
import Componente from "./Componente";
import CaixaTexto from "./CaixaTexto.js";
import Botao from "./Botao.js";

let cxTexto = new CaixaTexto("txtNumero");

//Criando lista de IDS (será utilizado para criar a interface com os botões)
let nomesBotoes = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]; 
nomesBotoes = [ ...nomesBotoes, "btnSoma", "btnDivide", "btnSubtrai", "btnMultiplica"];
nomesBotoes = [ ...nomesBotoes, "btnPonto", "btnIgual"];
nomesBotoes = [ ...nomesBotoes, "btnAc"];

let op1 = "";
let op2 = "";
let preenchendoOperando = 0;
let operacao = "";

//Preenche operandos
function cliqueNumero(mensagem){
    if(preenchendoOperando == 0){
        op1 = "" + op1 + String(mensagem);
        cxTexto.value = op1;
    }else{
        op2 = "" + op2 + String(mensagem);
        cxTexto.value = op2;
    }
}

//Trata o ponto
function cliquePonto(mensagem){
    //Só coloca o ponto caso já não tenha ponto nos operandos
    if(preenchendoOperando == 0){
        if(op1.indexOf(".") < 0){
            op1 = "" + op1 + String(mensagem);
            cxTexto.value = op1;
        }
    }else{
        if(op2.indexOf(".") < 0){
            op2 = "" + op2 + String(mensagem);
            cxTexto.value = op2;
        }
    }
}

// Configuramos a operação pelo id do botão pressionado e
// informamos que devemos preencher o operando 2
function cliqueOperacao(mensagem){
    operacao = mensagem;
    if(preenchendoOperando == 0)
        preenchendoOperando = 1;
}



//Faz a conta. Usamos os ids configurados na função anterior para
//detectar a conta. Note que, após fazer a conta, o resultado
//é armazenado no op1. Assim, a conta pode ser continuada pelo usuário.
let ultimoOp2;
function calcula(){
    if(op2 == "")
        op2 = ultimoOp2;
    else
        ultimoOp2 = op2;

    if(preenchendoOperando == 1){
        let x = parseFloat(op1);
        let y = parseFloat(op2);
        let resultado;
        if(operacao == "btnSoma"){
            resultado = x+y;
        }else if(operacao == "btnSubtrai"){
            resultado = x-y;
        }else if(operacao == "btnDivide"){
            resultado = x/y;
        }else if(operacao == "btnMultiplica"){
            resultado = x*y;
        }

        op1 = resultado;
        cxTexto.value = op1.toFixed(2);
        op2 = "";
    }
}

//Botão AC
function zera(){
    preenchendoOperando = 0;
    cxTexto.value = "";
    op1 = "";
    op2 = "";
}


//botoes é um vetor criado utilizando o callback.
//Esse calback testa o id (ou índice) para saber
//qual botão estamos criando. Dependendo do botão,
//registramos tarefas diferentes no clique.
let botoes = nomesBotoes.map( (id, indice) => {
    let btn =  new Botao(id);
    if (indice < 10){ //seta o callback dos botões numéricos
        btn.setCallbackClique(cliqueNumero, indice);
    }else if (id == "btnPonto"){ //seta callback do botao "ponto"
        btn.setCallbackClique(cliquePonto, ".")
    }else if (indice < 14){ //seta callback dos botões de operações
        btn.setCallbackClique(cliqueOperacao, id);
    }else if(id == "btnIgual"){
        btn.setCallbackClique(calcula);
    }else if(id == "btnAc"){
        btn.setCallbackClique(zera);
    }

    return btn;
});

