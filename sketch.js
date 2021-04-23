const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ball; 
var ground; 
var dustbinside1, dustbinside2, dustbinside3; 

function preload(){
	bg = loadImage("bg.jpg")
}

function setup() {
	
	createCanvas(1300, 600);
	
	engine = Engine.create();
	world = engine.world;

	

	dustbinside1 = new Dustbin(1000,495,10,100)
	
	dustbinside2 = new Dustbin(900,540,200,10)
	
	dustbinside3 = new Dustbin(800,495,10,100)

	ground = new Ground(360, 540, 1900, 10 )
	ball = new Paper(200,300,30,30)

	Engine.run(engine);
}


function draw() {

  rectMode(CENTER);
  background(bg);
  
  
  
  ball.display()
  ground.display()
  dustbinside1.display()
  dustbinside2.display()
  dustbinside3.display()
  
}

function keyPressed(){
  
	if (keyCode === UP_ARROW){
       
		Matter.Body.applyForce(ball.body, ball.body.position, {x:20, y:-10});

	}
}



