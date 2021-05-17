
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg1=loadImage("images/cat1.png")
    mouseImg1=loadImage("images/mouse1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat2.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,500,30,30)
    mouse=createSprite(200,500,20,20)

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        mouse.addImage(mouseImg1)
        cat.collide 
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 25
      mouse.scale=0.20
      cat .velocityX=-2
  }
  if(keyCode === RIGHT_ARROW){
      cat.addAnimation("catTeasing",catImg2)
      cat.changeAnimation("catTeasing")
      cat.frameDelay = 25
      cat.scale=0.25
  }


}
