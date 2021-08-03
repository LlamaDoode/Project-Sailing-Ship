var ship,sailingShip ;
var sea,movingSea

function preload(){
  movingSea = loadImage("sea.png") ;
  sailingShip = loadAnimation("ship-2.png","ship-2.png","ship-2.png","ship-1.png",) ;
}

function setup(){
  createCanvas(1600,800);
  sea = createSprite(400,400) ;
  sea.addImage(movingSea) ;
  sea.velocityX = -10 ;

  ship = createSprite(1000,500) ;
  ship.addAnimation("sailngship",sailingShip)
  ship.scale = 0.5 ;  
}

function draw() {
  background("blue");

  if (sea.x<-550) {
    sea.x=1500;
  }

  console.log(sea.x) ;
  drawSprites() ;
}