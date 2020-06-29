## 접속 주소
 : <http://midmost.github.io/PoeticCodeForNature/>

## Echec
Heejin Jo

## 작업
 * [첫번째 작업](https://editor.p5js.org/midmost44@gmail.com/sketches/FgHx1hfAA)

 * [저널링](https://docs.google.com/document/d/1mI_O3ngH3qMoo_IIoacBd1v7_klgDVoLe9o-YCFbb88/edit)

  ![첫 번째 작업 이미지](/untitled.png)
첫번째 작업은 이미지를 염두하고 만든 것이 아니라 손스케치가 없다.
소리에 반응하는 레졸룸 이펙터 같은 것을 파티클을 응용해서 만들고 싶었기 때문이다.

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

두번째 스케치는 답이 없다. 개인적으로 손 스케치라는 개념이 너무 불편하다. 초등학교 때 부터 타블렛과 아이패드를 썼기에 종이에 뭔가 그려서 사진 찍고 옮기는 게 더 오래 걸려서 생각도 같이 오래 걸리게 된다. 이러든 저러든 역시 막 생각한 아이디어는 구현이 힘들다는 것을 깨달았다. 빠르게 포기하고 이미지를 응용하는 것만 이용하여 다음 거로 넘어갔다. 세번째 작업의 저널링을 보면 알겠지만 여러 스케치가 있는데 그 중 봉지가 무언가를 가리고 있는 것에 약간 꽂혔다.
이번 제작에서도 집 안의 창문을 터치할 때 집 안에서 날 법한 소리가 나게 했었는데 그거 처럼 무언가 꽁꽁 싸메져 있는 봉지에 마우스가 다가가거나 누르면 글자들이 움직이게 하는 것이 재밌을 것 같았다. 원래는 파리들이 움직이게 하려고 했는데 막 poetic 이니까 약간 text를 응용하고 싶었다.


* [세번째 작업 중간](https://editor.p5js.org/midmost44@gmail.com/sketches/T2ccGG0Dp)
* [세번째 작업 최종](https://editor.p5js.org/midmost44@gmail.com/sketches/-_D8yrXoy)

* [저널링](https://docs.google.com/document/d/1ZzEerRII834xolKxFP0t5h1i4KKMqU7HvLwX-WiIdIY/edit?usp=sharing)

 ![세 번째 작업 스케치](/click.png)
 ![세 번째 작업 이미지](/what.png)

그래서 text particle을 하기 위해 대니얼의 coding challenge를 보면서 작업하였다.

---------

Gentle Monster

예상 질문
- 로봇팔 작업은 어떻게 하게 되었고 어디까지 다룰 수 있는지?
- 3d 툴 작업한 거 볼 수 있나?
- 아두이노로 작업한 다른 것들

내가 하고 싶은 질문
- 대체 왜 키네틱에 집착하는지?
- 모바일 앱에서 선글라스 자동 매치하여 판매하는 것에 대해서 어떻게 생각하는지
- 순운전자본이 46억원으로 부담이 큰 거 같은데 어디까지 공간 마케팅에 지출을 하려하는지


1. 좋아하는 작가와 작품, 그리고 공간
 * [Random International](https://vimeo.com/376351028)
2. 최근 이슈가 되는 트렌드와 서비스
