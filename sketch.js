
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas (400,400)  
monkey = createSprite(50,300,10,10);
  monkey.addAnimation("abc",monkey_running)
monkey.scale = 0.2

ground = createSprite(200,380,400,20)
bananaGroup=new Group();
obstcalesGroup = new Group();

}


function draw() {
background("lightblue")
 if(keyDown("space")){
   monkey.velocityY = -10
 }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  ground.velocityX=-3
  if(ground.x  > 0){
  ground.x = ground.width/2
  }
  spawnObstcales();
  spawnBanana();
  drawSprites();
  
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(30,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    //adding cloud to the group
   bananaGroup.add(banana);
    }
}
function spawnObstcales() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
     obstcales = createSprite(600,350,40,10);
    obstcales.addImage(obstacleImage);
    obstcales.scale = 0.2;
    obstcales.velocityX = -3;
    
     //assign lifetime to the variable
    obstcales.lifetime = 134;
    
  
    //adding cloud to the group
   obstcalesGroup.add(obstcales);
    }
}



