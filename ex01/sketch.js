let wordBall;
let writeForce;
let poetry;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> >></a> 쿵쿵짝쿵");
  title.position(10, 10);

  canvas = createCanvas(300, 100);
  canvas.position(0, 100);
  canvas.class("artwork");

  poetry = "";
  text = createDiv(poetry);
  text.position(300, 110);
  text.style("font-family", "monospace");
  text.style("font-size", "50pt");

  wordBall = new Mover();
  writeForce = createVector(2, 0);

  userStartAudio();
}

function draw() {
  background(0);

  wordBall.applyForce(writeForce);
  wordBall.update();
  if (wordBall.hitEdge()) {
    writePoetry();
  }
  wordBall.show();

}


function writePoetry() {
  randomWord = random(['쿵', '짝']);
  poetry = randomWord + poetry;
  text.html(poetry);
  if (randomWord == '쿵') wordBall.kung();
  else wordBall.zzak();
}


class Mover {
  constructor() {
    this.pos = createVector(50, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 25;
    this.synth = new p5.MonoSynth();
  }

  applyForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0);
  }

  hitEdge() {
    if (this.pos.x+this.r > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width-this.r;
      return true;
    }
    return false;
  }

  kung() {
    this.synth.triggerAttack("C3");
    this.synth.triggerRelease(0.1);
  }

  zzak() {
    this.synth.triggerAttack("F3");
    this.synth.triggerRelease(0.1);
  }


  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2);
  }
}
