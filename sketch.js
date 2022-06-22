const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg
var tower,towerImg
var angle = 20
var cannon




function preload() {
  backgroundImg = loadImage("./assets/background.gif")
  towerImg = loadImage("./assets/tower.png")
 

 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  options={
  isStatic:true
  }
  
  ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);

  tower = Bodies.rectangle(160,360,150,310,options)
  World.add(world,tower)

  cannon = new Cannon(180,120,130,100,angle)


 
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  
  Engine.update(engine);
 
  rect(ground.position.x, ground.position.y,width*2,1);

  push()
 // rectMode(CENTER)
  //rect(tower.position.x,tower.position.y,150,310)
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,150,310)
  pop()

  cannon.display()

 


  
   
}
