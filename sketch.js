var gameState=0;
var player,playerimg;
var ground,bullet,enemy,npcimg;
var bgimg;
var count=0;
var bulletsGroup,npcGroup;
var rightWall,leftWall;

function preload(){
  bgimg=loadImage("sprites/bg-c41.jpg");
  playerimg=loadImage("sprites/player.png");
  npcimg=loadImage("sprites/enemy.png");



}



function setup() {
  createCanvas(400, 400);
 player=createSprite(200,350,20,20);
 ground=createSprite(200,390,400,20)
 rightWall=createSprite(390,200,20,400);
 leftWall=createSprite(10,200,20,400);
 bulletsGroup=new Group;
 npcGroup=new Group;

}

function draw() {
  background(bgimg);
  if(gameState===0){
  player.addImage("player",playerimg);


  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+10;
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-10;
  }
  if(keyWentDown("SPACE")){
    bullet=createSprite(player.x,player.y-20,2,30);
    bullet.velocityY=-15;
    bullet.shapeColor=("yellow");
    bulletsGroup.add(bullet);
  }
  if(frameCount%60===0){
    enemy=createSprite(random(20,380),0,30,30);
    enemy.velocityY=8;
    enemy.shapeColor=("red");
    npcGroup.add(enemy);
    enemy.addImage("enemy",npcimg);
    enemy.scale=0.5

  }
  
  
  if(bulletsGroup.isTouching(enemy)){
    enemy.destroy();
    bullet.destroy();
    count=count+100;
  }

ground.shapeColor=("brown");
rightWall.visible=false;
leftWall.visible=false;

player.collide(rightWall);
player.collide(leftWall);

if(npcGroup.isTouching(ground)){
  gameState=1;
}


}
if(gameState===1){
  score=0;
  textSize(30);
  textFont("Georgia");
  textStyle(BOLD);
  
  fill("white");
  text("GAME OVER!!",50,200);
  player.destroy();
  enemy.destroy();
}
  drawSprites();
  textSize(20);
  textFont("Georgia");
  textStyle(BOLD);
  
  fill("white");

  text("score:"+count,10,50);
 



}