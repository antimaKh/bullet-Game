var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1000,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet= createSprite(50, 200, 50, 50);
  wall= createSprite(900, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  
  bullet.velocityX=speed;
}

function draw() {
  background(0); 
  bullet.shapecolor = "white";
  
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);

    if(damage >10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage <10){
      wall.shapeColor = color(0,255,0);
    }
  }
  
  

 drawSprites();
}
function hascollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(wallLeftEdge <= bulletRightEdge){
    return true;
  }
  return false;
}