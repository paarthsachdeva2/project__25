const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;

var groundObject,paperObject,block1Object,block2Object,block3Object



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	groundObject = new Ground(800,645,width,20)
	paperObject = new Paper(200,320,70);
	block1Object = new Box(1200,660,180,20);
	block2Object = new Box(1100,580,20,200);
	block3Object = new Box(1300,580,20,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

 
 paperObject.display();
 groundObject.display();
 block1Object.display();
 block2Object.display();
 block3Object.display();
  
}

function keyPressed() {
if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145}); 
} 

}



