var catImg,catImage,catPng,cat,back,backgroundImg,edges,mouse,mousGroup,mouseImage,mouseImg,gamestate,mouseSound,catSound

function preload() {
catImg=loadAnimation("cat1.png")
catImage=loadAnimation("cat2.png","cat3.png")
catPng=loadAnimation("cat4.png")
backgroundImg=loadImage("garden.png")
mouseImage=loadAnimation("mouse1.png","mouse3.png","mouse4.png")
mouseImg=loadAnimation("mouse2.png")

   
 }
 
function setup(){
createCanvas(1000,800);



back=createSprite(500,400,50,50)
back.addImage(backgroundImg)
back.scale=1
cat=createSprite(800,500,70,70)
cat.addAnimation("cat image",catImg)
cat.addAnimation("cat running",catImage)
cat.addAnimation("cat smile",catPng)
cat.scale=0.1
edges=createEdgeSprites()
mousGroup=createGroup()
gamestate="play"
mouse=createSprite(500,500,10,10)
mouse.addAnimation("mouse",mouseImage)
mouse.addAnimation("mouse2",mouseImg)
mouse.scale=0.1

mouse.setCollider("circle",0,0,200)
cat.setCollider("circle",0,0,500)
}

function draw() {
background("white");



if(gamestate==="play"){
if(cat.isTouching(edges)){
  cat.x=800
  cat.y=500
  cat.velocityY=0
  cat.velocityX=0
  cat.changeAnimation("cat image",catImg)
}
  if(frameCount%50===0){
    mouse.x=300
    mouse.y=400
  }
  if(frameCount%59===0){
    mouse.x=500
    mouse.y=200
  }
  if(frameCount%68===0){
    mouse.x=690
    mouse.y=290
  }
  if(frameCount%97===0){
    mouse.x=800
    mouse.y=693

  }

  
  keyPressed()
  if(cat.x-mouse.x<(mouse.width-cat.width)/2 && mouse.x-cat.x<(mouse.width-cat.width)/2&&cat.y-mouse.y<(mouse.height-cat.height)/2 && mouse.y-cat.y<(mouse.height-cat.height)/2){
    gamestate="end"
    
  }
  else{
    gamestate="play"
  }

    
  
  }
  if(gamestate==="end"){
    cat.velocityX=0
    cat.velocityY=0
    cat.changeAnimation("cat smile",catPng)
    mouse.changeAnimation("mouse2",mouseImg)
  
    
    }
  
  drawSprites();
  console.log(mouse.x-cat.x)
  }




function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    cat.changeAnimation("cat running",catImage)
    cat.velocityX=5
    cat.velocityY=0
   
  }
if(keyCode===LEFT_ARROW){
  cat.changeAnimation("cat running",catImage)
  cat.velocityX=-5
  cat.velocityY=0


}

if(keyCode===UP_ARROW){
  cat.changeAnimation("cat running",catImage)
  cat.velocityY=-5
  cat.velocityX=0
  
}
if(keyCode===DOWN_ARROW){
  cat.changeAnimation("cat running",catImage)
  cat.velocityY=5
  cat.velocityX=0
  
}


}


