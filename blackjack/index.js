 //Get Player Number
 var n= Math.random();
 n=n*10;
 n=Math.floor(n)+1;
 document.getElementById("playerNum").innerHTML= n; 

 document.getElementById("retryBtn").disabled=true;

 //get cpus number
 var u= Math.random();
 u = u*10;
 u = Math.floor(n)+1;

 var l= Math.random();
 l = l*10;
 l = Math.floor(n);

 c= u+l;

function hitMe(){
 var f= Math.random();
 f=f*10;
 f=Math.floor(f)+1;
 n= n+f
 document.getElementById("playerNum").innerHTML= n;
 
 if(n > 21){
  document.getElementById("results").innerHTML="You Lose";
  document.getElementById("hitMe").disabled=true;
  document.getElementById("playBtn").disabled=true;
  document.getElementById("opponentsNum").innerHTML=c;
  document.getElementById("retryBtn").disabled=false;

}
} 

function play(){
  document.getElementById("opponentsNum").innerHTML=c;
  document.getElementById("retryBtn").disabled=false;

  if (n === c){
    document.getElementById("results").innerHTML="Draw";
    document.getElementById("hitMe").disabled=true;
    document.getElementById("playBtn").disabled=true;
    }
  if (n > c){
    document.getElementById("results").innerHTML="You Win";
    document.getElementById("hitMe").disabled=true;
    document.getElementById("playBtn").disabled=true;
    
  }
  if(n < c){
    document.getElementById("results").innerHTML="You Lose";
    document.getElementById("hitMe").disabled=true;
    document.getElementById("playBtn").disabled=true;
  }
    
}

function retry(){
  document.location.reload(true);
  document.getElementById("retryBtn").disabled=true;

}







  