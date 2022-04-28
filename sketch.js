var bg,bgimage
var mcharacter
var thief
var police
var level
var invisibleground
function preload(){
  bgimage = loadImage("city.jpg")
  bgimage1 = loadImage("jungle.jpg")
  bgimage2 = loadImage("savana.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2, windowHeight/2-100, width, height);
  bg.addImage(bgimage)
  bg.scale = 2.2
  invisibleground = createSprite(windowWidth/2, height-10, width, 5);
  mcharacter = createSprite(width/2,height - 50,50,50)
  thief = createSprite(width/4,height - 50,50,50)
  police = createSprite(50,height - 50,50,50)


  
}

function draw() {
  background(255,255,255);
  if(keyDown("space")&&mcharacter.y > height - 100) {
    mcharacter.velocityY = -10;
  }
  
  mcharacter.velocityY = mcharacter.velocityY + 0.8

  mcharacter.collide(invisibleground)
  

  drawSprites();
  spawnClouds()
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(width,100,40,10);
    cloud.y = Math.round(random(100,height - 100))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    
    //adjust the depth
    cloud.depth = mcharacter.depth
    mcharacter.depth = mcharacter.depth + 1;
    }
}



  
  