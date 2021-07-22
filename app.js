function setup() {
    createCanvas(660, 500);
    angleMode(DEGREES)
  }
  
  function draw() {
    background(0);
  let x=width/2;
    let y=height/2;
    let angle=0;
    while(angle<1000){
      //draw point in the x,y co-ordinates
      let r=20;
      let a=map(mouseY,0,500,0,5)
      push()
      translate(0,200);
      stroke(255);
      point(angle,r*sin(a*angle));
      //increase the value of angle
      angle+=0.1;
      pop()
    } 
    // creatP("y=sin(x)")
  }