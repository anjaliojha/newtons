
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//roofObject
	roofObject=new Roof(width/2,height/4,width/5,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;


	//craete the bob objects
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);




	//create the rope objects
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
	  roofObject.display();
	  	
	bobObject1.display();
	
	rope1.display();
}



