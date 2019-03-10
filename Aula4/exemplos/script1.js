svg="http://www.w3.org/2000/svg";
function Circle(x,y,r){
    var c = document.createElementNS(svg,"circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    this.element = c;
    document.getElementById("tela").appendChild(this.element);

    this.changeX = function(x){
        this.element.setAttribute("cx", x);
    };
    
    return this;
}

window.addEventListener("load", executa());

function executa(){
    var c = new Circle(200,80,60);
    c.changeX(40);
}
