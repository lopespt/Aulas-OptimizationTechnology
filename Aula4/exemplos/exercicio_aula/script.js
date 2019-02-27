var svg = "http://www.w3.org/2000/svg";
var tela = document.getElementById("tela");

function Circulo(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    var novoCircle = document.createElementNS(svg, "circle");
    novoCircle.setAttribute("cx", x);
    novoCircle.setAttribute("cy", y);
    novoCircle.setAttribute("r", r);
    var self = this;
    this.click = undefined;

    novoCircle.addEventListener("click", function(){
        if( self.click != undefined && self.click!=null )
            self.click();
    });

    novoCircle.addEventListener("mousedown", function(){
        self.movendo = true;
    });    
    novoCircle.addEventListener("mousemove", function(ev){
        if(self.movendo){
            self.setPos(ev.x, ev.y);
        }
    });

    novoCircle.addEventListener("mouseup", function(){
        self.movendo = false;
    });

    this.element = novoCircle;
    tela.appendChild(this.element);
    this.setPos = function(x, y){
        this.element.setAttribute("cx", x);
        this.element.setAttribute("cy", y);
        this.x = x;
        this.y = y;
    }
}

var c1 = new Circulo(200,100, 20);
c1.click = function(){
    alert("cliquei");
}






