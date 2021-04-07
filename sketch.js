
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var vb =25;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,50,400,20)
ball1 = new Ball(200,300,vb)
ball2 = new Ball(250,300,vb)
ball3 = new Ball(300,300,vb)
ball4 = new Ball(350,300,vb)
ball5 = new Ball(400,300,vb)
	
 
  
}

rope1 = new Rope( ball1.body, ground.body,-vb*2,0)
rope2 = new Rope( ball2.body, ground.body,-vb*1,0)
rope3 = new Rope( ball3.body, ground.body,0,0)
rope4 = new Rope( ball4.body, ground.body,vb*2,0)
rope5 = new Rope( ball5.body, ground.body,vb*1,0)

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  
  
  drawSprites();
 
}



