var canvas;
var canvasContext;
var ballX= 50;
var ballY= 50;
var ballSpeedX = 10;
var ballSpeedY = 4; 

var paddle1Y= 250;
var paddle2Y= 250;
const PADDLE_HEIGHT=100;
const PADDLE_THICKNESS = 10;  

var player1score = 0;
var cpuScore = 0;
const WINNER = 3;

var showingWinScreen= false;



function calculateMousePos(evt){
    var rect=canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX- rect.left - root.scrollLeft;
    var mouseY = evt.clientY- rect.top -  root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    }


} 
function handleMouseClick (){
    if(showingWinScreen){
        player1score =0;
        cpuScore =0;
        showingWinScreen =false
    }

}
window.onload= function(){
    canvas = document.getElementById('gameCanvas');
    canvas.style = "position:absolute; left: 50%; margin-right: -400px; margin-left: -400px;";

    canvasContext = canvas.getContext('2d');
    
    var framesPerSecond=30;
    setInterval(function(){
      moveEverything();
      drawEverything();},1000/framesPerSecond);

      canvas.addEventListener('mousedown',handleMouseClick);
      canvas.addEventListener('mousemove',
      function(evt){
          var mousePos = calculateMousePos(evt);
          paddle1Y= mousePos.y-(PADDLE_HEIGHT/2); 

      });
      
      
      }
function ballReset(){
    if (player1score >= WINNER || cpuScore >= WINNER){
        
        showingWinScreen = true;
    }
    ballSpeedX = -ballSpeedX;  
    ballX = canvas.width/2;
    ballY = canvas.height/2
}      

function computerMovement(){
   var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2)
    if (paddle2YCenter < ballY-35){
        paddle2Y += 6;
    }else if (paddle2YCenter > ballY+35){
        paddle2Y -= 6;
    }

}


function moveEverything(){ 
    if(showingWinScreen){
        showingWinScreen = true;
        return;
    }
    computerMovement();
    ballX += ballSpeedX; 
    ballY += ballSpeedY; 

    if (ballX < 0){
    if(ballY > paddle1Y &&
       ballY < paddle1Y+PADDLE_HEIGHT){
        ballSpeedX = -ballSpeedX;
        var deltaY= ballY -(paddle1Y+PADDLE_HEIGHT/2);
        ballSpeedY = deltaY*0.35;  
       }else { 
           
           cpuScore++;
           ballReset();
           
       }       

    }
    if (ballX > canvas.width){
        if(ballY > paddle2Y &&
       ballY < paddle2Y+PADDLE_HEIGHT){
        ballSpeedX = -ballSpeedX;
        
        var deltaY= ballY -(paddle2Y+PADDLE_HEIGHT/2);
        ballSpeedY = deltaY*0.35;
       }else { 

           player1score++;
           ballReset();
           
       }       

    } 
    if (ballY < 0){
       ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.height){
       ballSpeedY = -ballSpeedY;  
    }
}
function drawNet(){
    for(var i=0;i<canvas.height;i+=40){
        colorRect(canvas.width/2-1,i,2,20,'white');
    }
}

function drawEverything(){
    canvasContext.fillStyle='white';
    canvasContext.font="30px Arial"

    if(showingWinScreen){
       if(player1score >= WINNER){
        canvasContext.font="30px Arial"
        canvasContext.fillText('YOU WIN',350,200);


       }   
       else if(cpuScore >= WINNER){
        canvasContext.fillText('YOU LOSE',350,200);


       }
       
       
       
       
        canvasContext.fillText('click to restart',350,500);
        return;
    }
    
    colorRect(0,0,canvas.width,canvas.height,'black');        
    
    drawNet();
    //paddle 1
    colorRect(0,paddle1Y,PADDLE_THICKNESS,100,'white');

    //paddle 2
    colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,10,100,'white');

    //ball  
    colorCircle(ballX,ballY,10,'white');

    canvasContext.fillText(player1score,100,100);
    canvasContext.fillText(cpuScore ,canvas.width-100,100);

}

function colorCircle(centerX,centerY,radius,color){
    canvasContext.fillStyle=color;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
    canvasContext.fill();
}

function colorRect(leftX,topY,width,height,drawColor){
    canvasContext.fillStyle= drawColor;
    canvasContext.fillRect(leftX,topY,width,height);
}