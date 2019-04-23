function Interface(id){
    this.id = id;
    this.elemento = document.getElementById(this.id);
    return this;
}

function CaixaTexto(id){
    Interface.call(this, id);
    var self = this;
    this.evento_digitou = function(callback){
        self.elemento.addEventListener("change", callback);
    };
    this.getTexto = function(){
        return this.elemento.value;
    };
    this.setTexto = function(){
        this.elemento.value = "";
    };
}

function Display(id){
    Interface.call(this, id);
    var self = this;
    this.setTexto = function(text){
        self.elemento.innerText = text;
    };
}

function Botao(id){
    Interface.call(this, id);
    var self = this;
    this.evento_clicou = function(callback){
        self.elemento.addEventListener("click", callback);
    };
}



function Jogo(){
    this.aleatorio = parseInt(Math.random()*100);
    console.log("numero escolhido: " + this.aleatorio);
    this.rodadas = 0;

    this.checaValor = function(escolha){
        this.rodadas++;
        if(escolha < this.aleatorio){
            return "Tente um número maior";
        }else if(escolha > this.aleatorio){
            return "Tente um número menor";
        }else{
            return "Acertou!";
        }
    };
}


var jogo = new Jogo();
var txtEscolha = new CaixaTexto("txtEscolha");
var btnReseta = new Botao("btnReseta");
var display = new Display("display");

function checar(){ 
    var resposta = jogo.checaValor(txtEscolha.getTexto());
    display.setTexto(resposta);
}

txtEscolha.evento_digitou(function(){
    checar();
});

btnReseta.evento_clicou(function(){
    txtEscolha.setTexto("");
    display.setTexto("");
    jogo = new Jogo();
});


var btnCheca = new Botao("btnCheca");
btnCheca.evento_clicou(function(){
    checar();
});

