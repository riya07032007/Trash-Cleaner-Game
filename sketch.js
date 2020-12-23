
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground = new Ground(600,height,1200,20)
	paper = new Paper(70,300,40)
	trash1 = new Trash(600,680,200,20)
	trash2 = new Trash(500,640,20,100)
	trash3 = new Trash(700,640,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  paper.display()
  trash1.display()
  trash2.display()
  trash3.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)

	Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})
}



