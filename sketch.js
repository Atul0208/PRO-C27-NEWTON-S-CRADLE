
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(800,height/4,width/3,50)
bobDiameter=50;
// startBobPositionX=width/2;
// startBobPositionY=height/4+500;
//bobObjectx= new bob(200,200,200)
bobObject1=new bob(730,500,bobDiameter);
console.log(bobObject1)
bobObject2=new bob(760,500,bobDiameter)
bobObject3=new bob(820,500,bobDiameter)
bobObject4=new bob(880,500,bobDiameter)
bobObject5=new bob(940,500,bobDiameter)

// rope1 = new Chain(roofObject.body,bobObject1.body)
// World.add(world,rope1)
// rope2 = new Chain(roofObject.body,bobObject2.body)
// World.add(world,rope2)
// rope3 = new Chain(roofObject.body,bobObject3.body)
// World.add(world,rope3)
// rope4 = new Chain(roofObject.body,bobObject4.body)
// World.add(world,rope4)
// rope5 = new Chain(roofObject.body,bobObject5.body)
// World.add(world,rope5)
rope1 = new Chain(bobObject1.body,roofObject.body,-200,20)
rope2 = new Chain(bobObject2.body,roofObject.body,-110,20)
rope3 = new Chain(bobObject3.body,roofObject.body,0,20)
rope4 = new Chain(bobObject4.body,roofObject.body,80,20)
rope5 = new Chain(bobObject5.body,roofObject.body,200,20)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255,0,30);

  roofObject.display();
 // bobObjectx.display();
 

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();    
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:0 })
	}
}


