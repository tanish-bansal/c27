
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var ground
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(200,545,70);
bob2=new Bob(240,545,70);
bob3=new Bob(280,545,70);
bob4=new Bob(320,545,70);
bob5=new Bob(360,545,70);
ground=new Roof(290,275,400,20);
rope1=new Rope(bob1.body,ground.body)
rope2=new Rope(bob2.body,ground.body)
rope3=new Rope(bob3.body,ground.body)
rope4=new Rope(bob4.body,ground.body)
rope5=new Rope(bob5.body,ground.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
 bob3.display();
bob4.display();
bob5.display();
ground.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
  text(mouseX+":"+mouseY,mouseX,mouseY);

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
Matter.Body.applyForce(rope1.body,bob5.body.position,{x:480,y:-500});
Matter.Body.applyForce(rope5.body,bob1.body.position,{x:180,y:-500});
	}}
