var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var score=0;
var turn=0;
var gamestate="play";
var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for(var k=0;k <=width;k=k+80){
    divisions.push(new Divisions(k,height-divisions/2,10,divisionHeight));
  }
for(var j=40;j<=width;j=j+50){ 
  plinkos.push(new Plinko (j,75))
}
for(var j=15;j<=width-10;j=j+50){ 
  plinkos.push(new Plinko (j,175))
}
for(var j=40;j<=width;j=j+50){ 
  plinkos.push(new Plinko (j,275))
}
for(var j=15;j<=width-10;j=j+50){ 
  plinkos.push(new Plinko (j,375))
}

}
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();






  



  if ( turn>= 5) {
    gamestate ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
  }
            for (var i = 0; i < plinkos.length; i++) {
              plinkos[i].display();
            }
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
    
    
    if(particle!=null){
     if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
      score=score+500;
      particles.pop();
      }  }

      if(particle!=null){
        if (particles[i].body.position.x < 600 && particles[i].body.position.x>301 && particles[i].body.position.y>760) {
         score=score+100;
         particles.pop();
         }  }
 


         if(particle!=null){
          if (particles[i].body.position.x < 900 && particles[i].body.position.x>601 && particles[i].body.position.y>760) {
           score=score+200;
           particles.pop();
           }  }


   }
            for (var k = 0; k < divisions.length; k++) {
              
              divisions[k].display();
            }
}
function mousPressed(){
if (gamestate!==end){
  turn++;
  particle=new Partlicle (mouseX,10,10,10)
}


}