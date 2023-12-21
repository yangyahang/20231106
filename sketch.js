var sound1
function preload(){
  sound1=loadSound("Missing Persons - Jeremy Blake.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#240046") 
  analyzer=new p5.Amplitude();
  analyzer.setInput(sound1)
}

var fc
function draw() {
  background("#240046") 
  var a=60
  var b=50+fc
  if(sound1.isPlaying()){
    fc =map(analyzer.getLevel(),0,1,-10,100)
  }
  else{
    fc =map(mouseX,width/2,width,0,100)
  }

  for(var x=25;x<width;x=x+a){
    for(var y=25;y<height;y=y+a){
      if(random()<0.5){
        noFill()
        rectMode(CENTER)
        rect(x,y,b)
        ellipseMode(CENTER)
        ellipse(x+12.5,y-12.5,b/3)
        ellipse(x-12.5,y-12.5,b/3)
        ellipse(x,y+10,b/2)
        stroke(random(255,200),random(0,255),random(0,255))
      if(random()<0.1){
        fill(random(0,255),random(200,255),random(0,255))
        ellipse(x+12.5,y-12.5,b/3)
        ellipse(x-12.5,y-12.5,b/3)
        ellipse(x,y+10,b/2)
      if(mouseIsPressed){
        background("#ccdbfd")
        text("楊雅涵",windowWidth/2,windowHeight/2)
        textSize(100+fc)
          }
        }
      }
    }
  }
}

function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}
