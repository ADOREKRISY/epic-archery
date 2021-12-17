const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload(){
  baseimage=loadImage("assets/base.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
playerBase=new PlayerBase(200,350,180,150)
playerArcher=new PlayerArcher(340,120,120,120)
player=new Player(120,120,200,300)


}

function draw() {


  Engine.update(engine);
playerBase.display()
playerArcher.display()
player.display()

}
