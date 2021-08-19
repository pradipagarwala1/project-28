
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ballImg, dustbinImg;

function preload(){
	ballImg = loadImage("ball.png");
    dustbinImg = loadImage("dustbin.png")
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paper = new Paper(100, 600, 10);
	paper = addImage("ballImg");

	ground = new Ground(400, 680, 800, 20);

	leftSide = new Dustbin(550, 620, 20, 100);
	bottom = new Dustbin(610, 660, 100, 20);
	rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  KeyPressed();

  drawSprites();
 
}

function KeyPressed(){
	if(KeyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15});
	}
}

