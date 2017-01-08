function ScoreUI(selector,l,begin){
this.selector=selector;
this.l=l;
this.begin=begin;
}


var score1 = new ScoreUI(document.getElementById("counter-1"), 4, 0); 
    
//var paras = score1.getElementByClassName('value');

function test(){
var counter = score1.selector.childNodes[5].value;
alert(counter);
}

test()

//scoreCounter.up() - wywołanie

