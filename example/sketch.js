let x = 0;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목");
  title.position(20, 0);

/*캔버스를 객체 만들었어 */
  canvas = createCanvas(300, 300);
/*그런 다음 위치를 설정해줌*/
  canvas.position(x, 60);
  canvas.class("artwork");

  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

}

function draw() {
  background(0);
  fill(255);
  ellipse(width/2, height/2, 50);
    canvas.position(x, 60);
  x++;
}
