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
    }

}

export default Jogo;
