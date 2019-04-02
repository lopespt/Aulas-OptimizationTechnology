function Campo(obj){
    this.obj = obj;
    this.set = function(value){
        if(this.obj.hasAttribute("value") )
            this.obj.value = value;
        else
            this.obj.innerText = value;
    };
    this.get = function(value){
        if(this.obj.hasAttribute("value") )
            return this.obj.value;
        else
            return this.obj.innerText;
    };
    this.onClick = undefined;
    var self = this;
    this.obj.addEventListener("click", function(){
        if(self.onClick)
            self.onClick();
    });
    return this;
}

var display = {
    nome: new Campo(document.getElementById("cmpNome")),
    tel: new Campo(document.getElementById("cmdTel")),
    idade: new Campo(document.getElementById("cmdIdade")),
    anterior: new Campo(document.getElementById("btAnt" )),
    proximo: new Campo(document.getElementById("btProx" )),
    adicionar: new Campo(document.getElementById("btAdicionar" )),
    remover: new Campo(document.getElementById("brRemover" )),
    atual: new Campo(document.getElementById("atual" )),
    total: new Campo(document.getElementById("total" )),
};

function Pessoa(nome, telefone, idade){
    this.nome = nome;
    this.telefone = telefone;
    this.idade = idade;
}

var agenda = {
    lista: [],
    idxAtual: -1,
    proximo: function(){
        if(this.idxAtual < this.lista.length-1)
            this.idxAtual++;
        this.exibeAtual();
    },
    anterior: function(){
        if(this.idxAtual > 0)
            this.idxAtual--;
        this.exibeAtual();
    },
    adicionaPessoa: function(p){
        this.lista.push(p);
        this.idxAtual = this.lista.length-1;
        this.exibeAtual();
    },
    removePorNome: function(nome){
        for(var i in this.lista){
            if(this.lista[i].nome == nome)
                this.lista.splice(i,1);
        }
    },
    removePorId: function(id){
        lista.splice(i,1);
    },
    exibeAtual: function(){
        display.atual.set(this.idxAtual+1);
        display.total.set(this.lista.length);
        if(this.idxAtual > -1 && this.idxAtual < this.lista.length)
            display.nome.set(this.lista[this.idxAtual].nome);
    }
};



display.adicionar.onClick = function(){
    agenda.adicionaPessoa(new Pessoa(display.nome.get(), display.tel.get(), display.idade.get()));
};

display.proximo.obj.onClick = function(){
    agenda.proximo();
    agenda.exibeAtual();
};

display.anterior.obj.onClick = function(){
    agenda.anterior();
    agenda.exibeAtual();
};
