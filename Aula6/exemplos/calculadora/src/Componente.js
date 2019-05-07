class Componente{
    constructor(id){
        this.id = id;
        this.elem = document.getElementById(this.id);
    }

    get Elemento(){
        return this.elem;
    }

}

export default Componente;
