let bubbles = [];

let easing = 0.1;
let target = 200;
let start = -200;
//let x = -200;
//let y = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = width*1/11; x <= width*10/11; x += 10) {
    for (let y = height*1/11;  y <= height*10/11; y += 10) {
    let r = random(1, 1);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
    }
  }
  /*
  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(50, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
  */
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

/*
function mouseOver(){
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].hover(mouseX, mouseY);
  }
}
*/

function draw() {
  background (0);
  for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].move();
    bubbles[i].checkHover(mouseX, mouseY);
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    this.r = r;
    this.dr = this.r + 10;
    this.brightness = 70; 
    this.color = 255;
    this.hover = false;

      /*
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  */
  }

  clicked(px, py) {
    /*
    let d = dist (px, py, this.x, this.y);
    if (d < this.dr){
      this.dr = this.dr + 30;
      //this.brightness = this.brightness + 50;
      
    }
    */
  
    if (this.dr > 600){
      this.dr = 10;
    } else {
        this.dr = this.dr + 100;
    }
    //this.brightness = this.brightness + 50;
    /*
    this.brightness = this.brightness + 10;
    if (d > 255){
      this.brightness = 0;
    }
    */
  }

  checkHover(px, py) {
    let d = dist (px, py, this.x, this.y);
    if (d < this.dr){
      this.hover = true;
    }
    else {
      this.hover = false;
    }

  }

  move() {
  //this.x + 5;
  //this.y + 5;
  this.x = this.x - random(1,20) * easing;
  this.y = this.y - random(1,20) * easing;
  //this.x = mouseX - 5;
  //this.y = mouseY + 5;
  }

  show() {
    stroke(this.brightness);
    strokeWeight(4);
    if(this.hover == true){
      this.brightness = this.brightness + 7;
      this.move();
      //this.x + 5;
      //this.y + 5;
    }
    else{
      this.x = this.ox;
      this.y = this.oy;
      //this.move();
      //this.setup();
      //this.x - 5;
      //this.y - 5;
      //this.x = this.x - 5;
      //this.y = this.y - 5;
    }

    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}


/*
let cnv;
let d;
let x;
let y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cnv = ellipse(x, y, d, d);
  cnv.mouseOver(changeGray);
  d = 100;
  x = 10;
  y = 10;
}

//function draw() {
   //ellipse(x, y, d, d);
 //}

function mousePressed() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

function changeGray() {
  x = x + 10;
  if (x > 100) {
    x = 0;
  }
 }
 */