const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
   var  canvas = createCanvas(600,600);

   engine = Engine.create;
   world = engine.world;

   box = new Box(400,400,20,20)

}

function draw() {
    background(rgb(169,169,169));
    Engine.update(engine);
   
    box.display();
   // drawSprites();
}