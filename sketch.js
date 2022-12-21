//modules 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//varibales
var engine, world,ground,tower;
var cannon, angle;


//to load pictures 
function preload() {
  backgroundImg=loadImage("assets/background.gif");
  towerImg=loadImage("assets/tower.png")
}


function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();  //engine created
  world = engine.world;      //world created 
  
  //ground property
  options={
  isStatic:true
  }
  //making the ground
  ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground); //adding into the world 
  //tower
  tower=Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);

  //code to create cannon object
  angle=20;
  cannon = new Cannon (180,110,130,100,angle);
 
}

function draw() {
  background(189);
  //displaying background theme
  image(backgroundImg,0,0,1200,600);
  Engine.update(engine);
  //to display ground
  rect(ground.position.x, ground.position.y,width*2,1);
  //to display tower
  push();
  imageMode(CENTER);
  image(towerImg,tower.position.x, tower.position.y,160,310);
  pop();
   
  cannon.display();
}
