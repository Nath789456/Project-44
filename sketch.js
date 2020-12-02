const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;







var x = 200;
var y = 200;
var harry, harryImg;
var backgroundImg, bg;
var drops = [];
var maxDrops = 100;


function preload(){
harryImg= loadImage("harryFly.png");
backgroundImg=loadImage("hogwarts1.jpg");
}

function setup() { 
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;



  bg=createSprite(400,400);
  bg.addImage(backgroundImg);
  bg.scale=0.9;
  harry= createSprite(x,y,20,20);
  harry.addImage(harryImg);
  harry.scale=0.6;


  if(frameCount % 150 === 0)
  {
for(var i = 0; i < maxDrops; i++)
      {
          drops.push(new Drop(random(0,400), random(0,400), 5));
      }
  }



} 

function draw() { 
  background(0);
  Engine.update(engine);
  fill(255);  
  if (x >= 400){
   x = 0; 
  }
  if (keyDown(UP_ARROW)) {
    harry.velocityX=0;
    harry.velocityY=-2;
  }
  if (keyDown(DOWN_ARROW)) {
     harry.velocityX=0;
     harry.velocityY=2;
   }
   for(var i = 0; i < maxDrops; i++)
   {
          drops[i].display();
       drops[i].updateY();
   }
 drawSprites();

}


/*function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y -20;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 20;
  }
  
  
}*/