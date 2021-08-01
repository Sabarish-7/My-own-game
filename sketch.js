
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var ball;
var backGroundimage;
var woodImage;
var bulletImage;
var ground;

function preload()
{
backGroundimage=loadImage("scene.png")
woodImage=loadImage("wood.png")
bulletImage=loadImage("bullet.png")

}



function setup() {
	createCanvas(1350, 650);
	engine = Engine.create();
	world = engine.world;

  wood=createSprite(1100,1000);
 wood.addAnimation("wood",woodImage);
 wood.scale=0.3
 ground=createSprite(270,325,0.2,650)
	Engine.run(engine);

}


function draw() {

  background(backGroundimage);
    //Sethu Sabarish S


 spawnballs();



wood.position.x=mouseX;
wood.position.y=mouseY;


drawSprites();

}


  
  


function spawnballs(){
if(frameCount%40===0){
  fill("black")

  ball=createSprite(1350,Math.round(random(10,600)),10,10);
ball.scale=2
  ball.velocityX=-5
 
  if(ball.collide(ground)){
    console.log("if condition working")
    ball.destroy();
    text("You Lose")
    
  
  }
}
}
