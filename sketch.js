const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine ,world

function setup(){
var canvas = createCanvas(1000,800)
engine = Engine.create();
world = engine.world;

ground = new Ground(500,700,1000,20);
ground1 = new Ground(390,300,250,20);
block1 = new Block(300,275,30,30);
block2 = new Block(330,275,30,30);
block3 = new Block(360,275,30,30);
block4 = new Block(390,275,30,30);
block5 = new Block(420,275,30,30);
block6 = new Block(450,275,30,30);
block7 = new Block(380,275,30,30);
block8 = new Block(330,275,30,30);
block9 = new Block(360,275,30,30);
block10 = new Block(390,275,30,30);
block11 = new Block(420,235,30,30);
block12 = new Block(450,235,30,30);
block13 = new Block(360,235,30,30);
block14 = new Block(390,195,30,30);
block15 = new Block(420,195,30,30);
block16 = new Block(390,155,30,30);
polygon = new Polygon(100,100,40);
chain = new Chain(polygon.body,{x:100,y:100})
}
function draw(){
background("white");
Engine.update(engine);

ground.display();
ground1.display();
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
block16.display();
polygon.display();
chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
chain.fly();
}