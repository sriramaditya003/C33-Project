const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;

var maxSnow=100;
var snow=[];
var rand;

function preload(){
  bg=loadImage("snow3.jpg");

}

function setup(){

    createCanvas(800,400);

    engine=Engine.create();
    world= engine.world;
  
}

function draw(){
  background(bg);

  Engine.update(engine);
   
  rand = Math.round(random(1,4));

  if(frameCount%10===0) {
      snow.push(new Snow(random(0, 800), 20, 20))
    }
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }

  drawSprites();
}   