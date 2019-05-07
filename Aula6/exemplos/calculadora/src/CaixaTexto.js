import Componente from "./Componente.js";

class CaixaTexto extends Componente{
    constructor(id){
        super(id);
    }


    get value(){
        return this.Elemento.value;
    }

    set value(value){
        this.Elemento.value = value;
    }

}

export default CaixaTexto;
