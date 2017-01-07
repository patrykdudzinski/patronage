function ScoreCounter(selector, l, begin){
    this.selector=selector;
    this.l=l;
    this.begin=begin;
}


var scoreCounter = new ScoreCounter(    
    document.querySelector("counter"), 4, 0 )  ;
    
    var value = scoreCounter.value;


scoreCounter.up(this,value);
scoreCounter.down(this,value);
scoreCounter.value(this,value);    
scoreCounter.value(34);  
scoreCounter.reset(this,begin);   
 
