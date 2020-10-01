//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld, ground;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;

  var options = { 
    isStatic:true  
  }
  ground = Bodies.rectangle(400,390,800,20,options);

  World.add(myWorld, ground);
  console.log(ground);

}

function draw() {
  background(255,255,255);  
  //drawSprites();
  Engine.update(myEngine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
}