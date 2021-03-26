const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var myengine,myworld,g1
var b1,b2,b3,b4,b5,b6,b7,b8,ball1,rope1
function setup() {
  createCanvas(1000,600);
  myengine=Engine.create();
  myworld=myengine.world; 
  g1=new ground(300,460,700,20)
  b1=new box(500,100)
  b2=new box(500,150)
  b3=new box(500,200)
  b4=new box(500,250)
  b5=new box(500,300)
  b6=new box(500,350)
  b7=new box(500,400)
  b8=new box(500,450)
  b9=new box(550,100)
  b10=new box(550,150)
  b11=new box(550,200)
  b12=new box(550,250)
  b13=new box(550,300)
  b14=new box(550,350)
  b15=new box(550,400)
  b16=new box(550,450)
  b17=new box(600,100)
  b18=new box(600,150)
  b19=new box(600,200)
  b20=new box(600,250)
  b21=new box(600,300)
  b22=new box(600,350)
  b23=new box(600,400)
  b24=new box(600,450)
  ball1=new ball(400,300,40)
  rope1=new rope(ball1.body,{x:400,y:200})
}

function draw() {
  background("black")
Engine.update(myengine)
g1.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()
b17.display()
b18.display()
b19.display()
b20.display()
b21.display()
b22.display()
b23.display()
b24.display()
ball1.display()
rope1.display()
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

