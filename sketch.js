const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,boyImg,happyBoy;
var userWorld,userEngine;
var ground;
var stone;
var gameState = 0;
var string;
var button,buttonImg,buttonPressedImg;
var dog,dogImg;
var wall,wall2,door;

function preload(){
  boyImg = loadImage("boy.png");
  happyBoy = loadImage("happyboy.png")
  buttonImg = loadImage("button.png");
  buttonPressedImg = loadImage("buttonPressed.png");
  dogImg = loadImage("Dog.png");
}
function setup() {
  createCanvas(800,400);

  userEngine = Engine.create();
  userWorld = userEngine.world;

  ground = new Ground(400,25,800,10);
  boy = createSprite(100,50,40,40);
  wall = new Ground(795,200,10,400);
  wall2 = new Ground(400,0,800,10);
  door = new Ground(400,125,10,150);
  button = createSprite(787,50,6,6);
  dog = createSprite(450,50,20,50);
  dog.addImage(dogImg);
  button.addImage(buttonImg);
  stone = new Stone(75,40,5);
  sling = new Sling(stone.body,{x:75,y:40});
}

function draw() {
  background(255,255,255);  
  Engine.update(userEngine);

  ground.display();
  stone.display();
  sling.display();
  wall.display();
  wall2.display();
  door.display();
  if(gameState === 0){
     door.display();
  }

  drawSprites();
}
function MouseDragged(){
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function MouseReleased(){
  sling.detach();
  if(stone.body.isTouching(button)){
    gameState = gameState+1;
    button.addImage(buttonPressedImg);
    boy.addImage(happyBoy);

  }
}