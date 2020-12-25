var boardI;
var board;
var form;
var player;
var allPlayers;
var game;
var gameState=0;
var playerCount=0;

var dice;
var d1,d2,d3,d4,d5,d6;
var dI1,dI2,dI3,dI4,dI5,dI6;

var r1,r2,r3,r4;
var b1,b2,b3,b4;
var g1,g2,g3,g4;
var y1,y2,y3,y4;

var sel;
var database;

function preload(){
  boardI=loadImage("ludo 2-4.png")

  dI1=loadImage("d1.png")
  dI2=loadImage("d2.png")
  dI3=loadImage("d3.png")
  dI4=loadImage("d4.png")
  dI5=loadImage("d5.png")
  dI6=loadImage("d6.png")
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-150);
  //console.log(displayHeight)
  //console.log(displayWidth)
  
  database=firebase.database()

  game=new Game()
  game.getState()
  game.start()
  //console.log(player)

  textAlign(CENTER);
  //background("white");

}

function draw() {
  //background(boardI); 
  background("lightblue");
  

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState==1){
    game.play()
  }
  //form.mySelectEvent()
  

  drawSprites();
}