var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Left, Right, Bottom;
var left, right, bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.02, isStatic:true, friction:20});
	World.add(world, packageBody);
	
	Bottom= Bodies.rectangle(380, 650,200, 20, {isStatic: true} );
	//Bottom. shapeColor= "red";	
	World. add(world, Bottom);
	Left = Bodies.rectangle(270, 610, 20, 100, {isStatic: true} );
	//Left. shapeColor = "red";
	World.add(world, Left);
	Right =Bodies.rectangle(470, 610, 20, 100,{isStatic: true} );
	//Right.shapeColor = "red";
	World.add(world, Right);

	bottom = createSprite(380, 650, 200, 20);
	bottom. shapeColor = "red";
	left = createSprite(270, 610, 20, 100);
	left.shapeColor = "red";
	right = createSprite(470, 610, 20, 100);
	right.shapeColor = "red";
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	 helicopterSprite=createSprite(packageBody.position.x, packageBody.position.y, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
  //keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.


	Matter.Body.setStatic(packageBody, false);

	
	

    
  }
}



