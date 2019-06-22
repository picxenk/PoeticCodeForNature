## 접속 주소
 : <http://midmost.github.io/PoeticCodeForNature/>

## 이름과 학번
조희진 1523009

## 작업
 * [첫번째 작업](https://editor.p5js.org/midmost44@gmail.com/sketches/FgHx1hfAA)

 * [저널링](https://docs.google.com/document/d/1mI_O3ngH3qMoo_IIoacBd1v7_klgDVoLe9o-YCFbb88/edit)

  ![첫 번째 작업 이미지](/untitled.png)

 * [두번째 작업 스케치01](https://editor.p5js.org/midmost44@gmail.com/sketches/Y1isIPn9O)

 마우스가 움직임에 따라 심장이 뜯겨지게 만들고 싶어서 고민하던 중 코드 트레인의 2.4강에서 마우스의
 움직임에 따라 배경의 색이 바뀌는 코드를 했던 것을 기억했다.

  ![두 번째 작업 이미지](/heart.jpeg)

  ```javascript
  var heart = {
x: 0,
y: 100,
diameter: 50
 };

var r = 0;
var b = 0;


function setup() {

  createCanvas(600, 400);

  loadImage('assets/laDefense.jpg', img => {
  image(img, 0, 0);
  }

}

function draw() {
  background(heart.x);

  fill(200, 30, 70);
  noStroke();
  ellipse(mouseX, 200, 40, 40);

  //color.x = mouseX;
  heart.x = map(mouseX, 0, 600, 0, 255);
  // g = map(mouseX, 0, 600, 255, 255);
  b = map(mouseX, 0, 600, 255, 0);

}

```
* [세번째 작업 중간](https://editor.p5js.org/midmost44@gmail.com/sketches/T2ccGG0Dp)

* [저널링](https://docs.google.com/document/d/1ZzEerRII834xolKxFP0t5h1i4KKMqU7HvLwX-WiIdIY/edit?usp=sharing)

 ![세 번째 작업 이미지](/what.png)
