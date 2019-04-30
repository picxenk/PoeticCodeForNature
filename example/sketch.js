function setup() {
  title = createElement('h2', "작품 제목");
  title.position(20, 0);

  canvas = createCanvas(300, 300);
  canvas.position(20, 60);
  canvas.class("artwork");

}

function draw() {
  background(0);
  fill(255);
  ellipse(width/2, height/2, 50);
}
