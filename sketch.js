const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5;
var polygon; 
var ss;
var ground2;
var score=0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



  block1 = new Box(260,300,10,50)
	block2 = new Box(290,300,10,50)
	block3 = new Box(320,300,10,50)
	block4 = new Box(350,300,10,50)
	block5 = new Box(380,300,10,50)

  block6 = new Box(275,250,10,50)
  block7 = new Box(305,250,10,50)
  block8 = new Box(335,250,10,50)
  block9 = new Box(365,250,10,50)

  block10 = new Box(290,200,10,50)
  block11 = new Box(320,200,10,50)
  block12 = new Box(350,200,10,50)

  block13 = new Box(300,150,10,50)
  block14 = new Box(330,150,10,50)

  block15 = new Box(315,100,10,50)

	ground = new Ground(320,335,170,20) 
  ground2 = new Ground(530,405,140,20) 
  ground3 = createSprite(400,650,900,20)

  block160 = new Box(500,380,30,50)
  block17 = new Box(530,380,30,50)
  block18 = new Box(560,380,30,50)

  block19 = new Box(515,330,30,50)
  block20 = new Box(545,330,30,50)

  block21 = new Box(530,280,30,50)

 polygon = new Circle(50,200,20)

 ss = new Slingshot(polygon.body,{x:200,y:100})

	Engine.run(engine);
  
}


function draw() {

  background(180,150);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();


  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

  block15.display();
  block160.display();
  block17.display(); 

  block18.display();
  block19.display(); 
  block20.display();
  
  block21.display();

  ground.display();
  ground2.display();
  ground3.display();
 

  polygon.display();

  ss.display();
  text("drag the polygon to destroy the blocks",500,600)
  text("SCORE : "+score,740,60)
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  ss.fly();
}

function keyPressed(){
  if ( keyCode === 32){
  ss.attach(polygon.body);
    }
}
block1.score1();
block2.score1();
block3.score1();
block4.score1();
block5.score1();
block6.score1();
block7.score1();
block8.score1();
block9.score1();
block10.score1();
block11.score1();
block12.score1();
block13.score1();
block14.score1();
block15.score1();
block16.score1();
block17.score1();
block18.score1();
block19.score1();
block20.score1();
block21.score1();