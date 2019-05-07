import Componente from "./Componente.js";

class Botao extends Componente{
    constructor(id){
        super(id);
        this.callback_click = undefined;
        this.mensagem_clique = undefined;
        this.clicou = this.clicou.bind(this);
        this.Elemento.addEventListener("click", this.clicou);
    }

    clicou(){
        if(this.callback_click)
            this.callback_click(this.mensagem_clique);
    }

    setCallbackClique(func, mensagem=undefined){
        this.callback_click=func;
        this.mensagem_clique = mensagem;
    }

}

export default Botao;
