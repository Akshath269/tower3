const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform,ground,ground2,box1,box2,box3,box4,box5,box6;
var bird, slingShot,polygon1;
var score=0

function preload() {
  gettime()
}

function setup(){
    
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,400,200,20);
    ground2 = new Ground(800,200,200,20);
    ground3 = new Ground(600,780,1200,20);

    box1 = new Box(420,380,30,40);
    box2 = new Box(450,380,30,40);
   box3 = new Box(480,380,30,40);
   box4 = new Box(510,380,30,40);
   box5 = new Box(540,380,30,40);
   box6 = new Box(570,380,30,40);

   box7 = new Box(435,350,30,40);
   box8 = new Box(465,350,30,40);
   box9 = new Box(495,350,30,40);
   box10 = new Box(525,350,30,40);
    box11 = new Box(555,350,30,40);

   box12= new Box(450,320,30,40);
   box13= new Box(480,320,30,40);
   box14= new Box(510,320,30,40)
   box15 = new Box(540,320,30,40);
    
   box16= new Box(465,290,30,40);
   box17= new Box(495,290,30,40)
   box18 = new Box(525,290,30,40);


   box21 = new Box(720,180,30,40);
   box22 = new Box(750,180,30,40);
   box23 = new Box(780,180,30,40);
  box24 = new Box(810,180,30,40);
  box25 = new Box(840,180,30,40);
  box26 = new Box(870,180,30,40);

  box27 = new Box(735,150,30,40);
  box28 = new Box(765,150,30,40);
  box29 = new Box(795,150,30,40);
  box30 = new Box(825,150,30,40);
  box31 = new Box(855,150,30,40);

  box32 = new Box(750,120,30,40);
  box33 = new Box(780,120,30,40);
  box34 = new Box(810,120,30,40);
  box35 = new Box(840,120,30,40);

  polygon1 = new Polygon(200,200,30)

  slingshot = new SlingShot(polygon1.body,{x:200, y:200});
}

function draw(){
  //gettime()
    //background("blue");
    Engine.update(engine);
    //strokeWeight(4);
    polygon1.display()
    
    ground.display()
    ground2.display()
    ground3.display()
    box3.display()
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display()
   box10.display()
   box11.display()
   box12.display()
   box13.display()
   box14.display()
   box15.display()
   box16.display()
   box17.display()
   box18.display()
   

   box21.display()
   box22.display()
   box23.display()
   box24.display()
   box25.display()
   box26.display()

   box27.display()
   box28.display()
   box29.display()
   box30.display()
   box31.display()

   box32.display()
   box33.display()
   box34.display()
   box35.display()

   box1.score();
   box2.score();
   box3.score();
   box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score()
  box10.score()
  box11.score()
  box12.score()
  box13.score()
  box14.score()
  box15.score()
  box16.score()
  box17.score()
  box18.score()


  box21.score()
   box22.score()
   box23.score()
   box24.score()
   box25.score()
   box26.score()

   box27.score()
   box28.score()
   box29.score()
   box30.score()
   box31.score()

   box32.score()
   box33.score()
   box34.score()
   box35.score()

  text("score:"+score,750,40)
   slingshot.display();    
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(polygon1.body, {x:230, y:410})
		slingshot.attach(polygon1.body)
	}
}


async function gettime(){
  var response=await fetch("http://worldclockapi.com/api/json/cst/now")
  var datajson=await response.json()
  var daytime=datajson.currentDateTime
  var time=daytime.slice(11,13)
  console.log(time)
  if(time>=6&&time<=19){
    background("blue");
  
  
  }
  else{
    background("white");
  }
  //backgroundImg=loadImage(bg)
  }