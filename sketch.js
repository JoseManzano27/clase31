const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, pig1;
var fondo;
var plataforma, constrainedlog,chain;

// ejemplos de diferentes tipos de variables
// cadena
var string="consuelo"
console.log(string);
//numerico
var num=100;
console.log(num);
//booleano
var bool=true;
console.log(bool);
//indefinido
var object;
console.log(object);
//nulo
object=null;
console.log(object)

//ejemplos de matriz que contiene el mismo tipo de daro
var arr1=[1,2,3,4,5];
console.log(arr1)
//matriz que contiene diferentes tipos de datos
var arr2=["jose",15,true];
console.log(arr2)
//matriz que contiene otras matrices
var arr3=[[1,2],[2,3],[3,4]];
console.log(arr3)
console.log(arr3[1][1])
//agregar datos al arrgelo con el push
arr3.push("consuelo")
console.log(arr3)
//extraer numeros con el pop
arr3.pop();
console.log(arr3)



function preload(){
    fondo=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
	plataforma=new Ground(150,320,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    

    bird = new Bird(200,50);
   constrainedlog=new Log(230,180,80,PI/4)
    sling=new Slingshot(bird.body,({x:200,y:50}));


}

function draw(){
    background(fondo);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
	plataforma.display();
 //constrainedlog.display();
    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(bird.body)
    }
}