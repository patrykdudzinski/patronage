function ScoreCounter(selector, l, begin){
    this.selector=selector;
    this.l=l;
    this.begin=begin;
}

var scoreCounter = new ScoreCounter(    
    document.querySelector("counter"), 4, 0 ) 

var val=scoreCounter.begin;

ScoreCounter.prototype.up = function(){
alert("guwno");
}