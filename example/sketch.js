function setup() {
  title = createElement('h2', "작품 제목");
  title.position(20, 0);

  canvas = createCanvas(300, 300);
  canvas.position(20, 60);
  canvas.class("artwork");

  description = "\
  작품에 대한 설명이 들어갑니다. <br/>
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다.
  ";
  text = createDiv(description);
  text.position(350, 60);
  text.style("font-family", "monospace");
  text.style("font-size", "16pt");

}

function draw() {
  background(0);
  fill(255);
  ellipse(width/2, height/2, 50);
}
