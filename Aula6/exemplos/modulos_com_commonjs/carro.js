function Carro(placa){

    this.placa = placa;
    this.ligar = function(){
        console.log("Ligando carro: " + this.placa);
    }
    this.desligar = function(){
        console.log("Desligando carro: " + this.placa);
    }
}

module.exports = Carro;
