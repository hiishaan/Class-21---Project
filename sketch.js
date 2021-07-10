
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground;
var left;
var right;
var button


function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;


	button = createImg('arrow.jpg')
  button. position(20,30)
  button.size(50,50)

  button.mouseClicked(Hforce)


	//Create the Bodies Here.



  ground =new Ground(200,390,800,20);
  right = new Ground(400,350,20,120);
  left = new Ground(600,350,20,120);

	var ball_option = {
		isStatic: false,
		friction:0,
		destiny:1.2,
    restitution:1
	}

	ball = Bodies.circle(200,100,20, ball_option)
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20)
 
}

function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }
  


