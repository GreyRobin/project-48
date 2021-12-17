var guy, guyimg
var cloud, cloudimg
var ground, groundimg
var bg, bgimg
var spike, spikeimg
var spike2, spike3
var monster, monsterimg
var coin, coinimg
var apple, appleimg
var portal, portalimg
var coin2, coin3
var score
var health
var pinkninjaimg
var apple2, apple3
var die
var magic

function preload(){
  guyimg = loadAnimation("guy.png")
  cloudimg = loadImage("cloud.png")
  groundimg = loadImage("groundimg.png")
  bgimg = loadImage("bg.png")
  spikeimg = loadImage("spike_top.png")
  monsterimg = loadImage("monster.png")
  appleimg = loadImage("red_apple.png")
  coinimg = loadImage("coin_gold.png")
  portalimg = loadImage("portal_yellow.png")
  pinkninjaimg = loadAnimation("pinkninja3.png")
  die = loadSound("die.mp3")
  magic = loadSound("magic.mp3")
}

function setup() {
  createCanvas(1365, 650)
  guy = createSprite(50,530,50,50)
  guy.addAnimation("run",guyimg)
  guy.addAnimation("win",pinkninjaimg)

  guy.scale = 0.4
  ground = createSprite(50,600,420,50)
  ground.addImage(groundimg)
  monster = createSprite(900,200,50,50)
  monster.addImage(monsterimg)
  monster.scale = 0.25
  spike = createSprite(500,600,50,50)
  spike.addImage(spikeimg)
  spike.scale = 1
  spike2 = createSprite(900,600,50,50)
  spike2.addImage(spikeimg)
  spike2.scale = 0.5
  spike3 = createSprite(500,225,50,50)
  spike3.addImage(spikeimg)
  spike3.scale = 0.5
  portal = createSprite(1300,150,50,50)
  portal.addImage(portalimg)
  portal.scale = 0.5
  coin = createSprite(200,400,50,50)
  coin.addImage(coinimg)
  coin.scale = 0.75
  coin2 = createSprite(200,550,50,50)
  coin2.addImage(coinimg)
  coin2.scale = 0.75
  coin3 = createSprite(700,200,50,50)
  coin3.addImage(coinimg)
  coin3.scale = 0.75
  apple = createSprite(900,400,50,50)
  apple.addImage(appleimg)
  apple.scale = 0.15
  apple2 = createSprite(1000,550,50,50)
  apple2.addImage(appleimg)
  apple2.scale = 0.15
  apple3 =  createSprite(400,200,50,50)
  apple3.addImage(appleimg)
  apple3.scale = 0.15
  score = 0
  health = 1
  wall1 = createSprite(250,620,200,20)
  wall1.shapeColor="red"
  wall2 = createSprite(450,620,200,20)
  wall2.shapeColor="blue"
  wall3 = createSprite(650,620,200,20)
  wall3.shapeColor="green"
  wall4 = createSprite(850,620,200,20)
  wall4.shapeColor=rgb(142,50,19)
  wall5 = createSprite(1050,620,200,20)
  wall5.shapeColor="cyan"
  wall6 = createSprite(1250,620,200,20)
  wall6.shapeColor="yellow"
  wall7 = createSprite(250,450,200,20)
  wall7.shapeColor="orange"
  wall8= createSprite(550,450,200,20)
  wall8.shapeColor="brown"
  wall9 = createSprite(650,450,200,20)
  wall9.shapeColor="black"
  wall10 = createSprite(950,450,200,20)
  wall10.shapeColor="maroon"

  wall11= createSprite(1050,450,200,20)
  wall11.shapeColor="purple"

  wall12= createSprite(1200,450,100,20)
  wall12.shapeColor= rgb(12,15,80)

  wall13= createSprite(400,250,200,20)
  wall13.shapeColor="pink"
  wall14 = createSprite(150,350,20,200)
  wall14.shapeColor= rgb(43,43,76)
  wall15= createSprite(600,250,200,20)
  wall15.shapeColor="black"
  wall16= createSprite(800,250,200,20)
  wall16.shapeColor="red"
  wall17= createSprite(1000,250,200,20)
  wall17.shapeColor="purple"
  wall18= createSprite(1200,200,200,20)
  wall18.shapeColor="lime"


}

function draw() {
  background(bgimg);
  textSize(50)
  fill("red")
  text("health:"+health,500,50)
  text("score:"+score,1000,50)
  if(keyDown(RIGHT_ARROW)){
    guy.x = guy.x+5
  }
  if(keyDown(UP_ARROW)&&guy.y>=100){
    guy.y = guy.y-10
  }
  if(keyDown(LEFT_ARROW)){
    guy.x = guy.x-5
  }
  if(keyDown(DOWN_ARROW)){
    guy.y = guy.y+5
  }
  //if(guy.isTouching(wall1)){
    //console.log("collide")
  //}
  guy.collide(wall1)
  guy.collide(wall2)
  guy.collide(wall3)
  guy.collide(wall4)
  guy.collide(wall5)
  guy.collide(wall6)
  guy.collide(wall7)
  guy.collide(wall8)
  guy.collide(wall9)
  guy.collide(wall10)
  guy.collide(wall11)
  guy.collide(wall12)
  guy.collide(wall13)
  guy.collide(wall14)
  guy.collide(wall15)
  guy.collide(wall16)
  guy.collide(wall17)
  guy.collide(wall18)
  if(guy.isTouching(coin)){
    score = score+5
    guy.scale = 0.3
    magic.play()
    coin.destroy()
  }
  if(guy.isTouching(coin2)){
    score = score+1
    guy.scale = 0.3
    magic.play()
    coin2.destroy()
  }
  if(guy.isTouching(coin3)){
    score = score+10
    guy.scale = 0.3
    magic.play()
    coin3.destroy()
  }
  if(guy.isTouching(spike)){
    guy.x = 50
    guy.y = 530
    guy.scale = 0.4
    score = score/2
    die.play()
  }
  if(guy.isTouching(spike2)){
    guy.x = 50
    guy.y = 530
    guy.scale = 0.4
    score = score/2
    spike2.scale = 2
    die.play()
  }
  if(guy.isTouching(spike3)){
    guy.x = 50
    guy.y = 530
    guy.scale = 0.4
    score = score/2
    spike3.scale = 3
    die.play()
  }
  if(guy.isTouching(apple)){
    health = health + 10
    score = score+100
    magic.play()
    apple.destroy()
  }
  if(guy.isTouching(apple2)){
    health = health + 10
    score = score+100
    magic.play()
    apple2.destroy()
  }
  if(guy.isTouching(apple3)){
    health = health + 10
    score = score+100
    magic.play()
    apple3.destroy()
  }

  spawnClouds()
  if(guy.isTouching(wall18)){

    console.log("die")    
    guy.changeAnimation("win",pinkninjaimg)
    magic.play()
  }
  if(guy.isTouching(monster)){ 
    guy.x = 50 
    guy.y = 530 
    guy.scale = 0.4 
    score = 0 
    guy.changeAnimation("win") 
    die.play() 
  }
  drawSprites()
}

function spawnClouds(){
  if(frameCount%120===0){
    cloud = createSprite(1365,100,50,50)
    cloud.addImage(cloudimg)
    cloud.scale = 0.2
    cloud.velocityX = -5
    cloud.y = Math.round(random(35,80))
    cloud.lifetime = 250
  }
}