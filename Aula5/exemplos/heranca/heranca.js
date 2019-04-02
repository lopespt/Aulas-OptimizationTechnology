function Pessoa(nome){
    this.nome = nome;
}

function Professor(nome){
    Pessoa.call(this, nome);
    this.imprime = function(){
        console.log("Professor ", this.nome);
    };
}


function Aluno(nome){
    Pessoa.call(this, nome);
    this.imprime = function(){
        console.log("Aluno ", this.nome);
    };
}
Professor.prototype= new Pessoa();

var p1 = new Professor("Guilherme");
p1.imprime();


var a1 = new Aluno("Guilherme");
a1.imprime();
