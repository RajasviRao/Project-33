const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var bg
 var kid

function preload(){
  bg=loadImage("snow2.jpg")
  

}
function setup() {
  engine=Engine.create()
  world=engine.world;
  createCanvas(800,400);

}

function draw() {
  Engine.update(engine)
  background(bg);  
  drawSprites();
}