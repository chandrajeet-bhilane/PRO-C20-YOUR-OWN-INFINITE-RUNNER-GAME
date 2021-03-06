const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArchery,playerBow,angle;

function setup() {
  createCanvas(1500,600)
  //canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angle = PI / 4;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player=new Player(285,playerBase.body.position.y-153,50,180);


  computerBase = new ComputerBase(1200, random(450, height - 300), 180, 150);
  computer=new Computer(1200,computerBase.body.position.y-153,50,180);

  playerArchery =new PlayerArchery(180,110,110,50,angle);

  
}

function draw() {
  background(189);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();

  player.display();
  playerArchery.display();

  computerBase.display();
  computer.display();
  
}
