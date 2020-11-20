
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ball1=new Ball(100,300,20)
ball2=new Ball(140,300,20)
ball3=new Ball(180,300,20)
ball4=new Ball(220,300,20)
ball5=new Ball(260,300,20)
	//Create the Bodies Here.

holder=new Ground(210,100,280,30)
sling1=new Slingshot(ball1.body,{x:100,y:100})
sling2=new Slingshot(ball2.body,{x:140,y:100})
sling3=new Slingshot(ball3.body,{x:180,y:100})
sling4=new Slingshot(ball4.body,{x:220,y:100})
sling5=new Slingshot(ball5.body,{x:260,y:100})
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  holder.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:50})
  }
}


