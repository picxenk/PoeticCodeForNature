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

# Gentle Monster

예상 질문
- 로봇팔 작업은 어떻게 하게 되었고 어디까지 다룰 수 있는지?
- 3d 툴 작업한 거 볼 수 있나?
- 아두이노로 작업한 다른 것들

내가 하고 싶은 질문
- 대체 왜 키네틱에 집착하는지?
- 모바일 앱에서 선글라스 자동 매치하여 판매하는 것에 대해서 어떻게 생각하는지
- 순운전자본이 46억원으로 부담이 큰 거 같은데 어디까지 공간 마케팅에 지출을 하려하는지

## 요즘 트렌드에 대한 내 생각
 아마존의 0.1세그먼트
 팬슈머 공략
 _업사이클_
 매장인앱 판매
 _쉬코노미 공략_
 _카멜레존_
 후렌드

이 중에서 업사이클, 쉬코노미를 집중 공략하는 서비스가 필요하다고 느낌
카멜레존은 이미 공간디자인으로 진행하고 있는 상태 하지만
* 서울 계동의 어니언
* 띵굴 스토어
* 성수연방
* 천상가옥
* 나우하우스
* 수트서플라이

이러한 마케팅을 하는 그룹이 점차 늘고 있기에 경쟁력이 떨어질 수 있다.
이러한 카멜레존에서 가장 필요한 전략은 독보적인 컨셉과 더불어 _공동성장_이 필요.

뿐만 아니라 온라인이 아닌 오프라인에서만 할 수 있는 무언가가 필요하다. 오롯이 직접적으로 체험할 수 있는
무언가가 필요한데 그저 키네틱으로는 부족하다.
그렇기에 나는 인터랙션이 어느정도 필요하다고 판단한다.

인공지능, 가상현실과 함께 바뀌어 가는 사회 추세에서 젠틀몬스터같은 업체는
Augmented Human 을 가장 중점적으로 살펴야 할 기업이라고 생각한다. 그와 더불어
Sensing and Mobility가 합쳐진다면 더(내가 생각하기엔 인터랙션)이 필요

## 좋아하는 작가와 작품
 _미디어 아트 - 설치:_
* [Random International](https://vimeo.com/376351028)
* [Lab212](https://lab212.org/oeuvres/2:art/17/Portee)
* [김윤철](https://youtu.be/geypSqyGZ0Y)
* [팀보이드]()  

![김윤철 개인전 포스터](/kim.jpg)


 _미디어 아트 - 디지털 아트:_
 * [Robert Henke](https://youtu.be/zMHb5ft_P6Q)
 * [Robert Henke](https://youtu.be/WrVsj3xN3E4)  
 * [남궁원](https://youtu.be/JvH0ukNCYeo)

 _독보적인 특색 가진 설치미술 작가_
 * [이불](https://youtu.be/WhyeyI3fKY8)
 * [Janet Echelman](https://youtu.be/l3rIW9nJw3Y)
    * [Hans Haacke](https://youtu.be/tOmesd5aHIk)
    * [Hans Haacke at Paula Cooper, New York (Jan 2008)](https://youtu.be/ffpvKOm2WIE)
    * [Vija Celmins](https://www.sfmoma.org/watch/vija-celmins-saying-the-unsayable/)
    * [Matthew Ronay](https://youtu.be/CXapwtxencw)
    * [Tomás Saraceno](https://youtu.be/05rgQUFPTjc)
    * [joana vasconcelos]
    ![joana vasconcelos](/pinkHeli.jpg)



     ![월간미술](/20200629_120329.jpg)
     ![월간미술](/20200629_120336.jpg)
     ![월간미술](/20200629_120837.jpg)
     ![월간미술](/20200629_120904.jpg)
     ![월간미술](/20200629_121046.jpg)
     ![완벽한기술](/20200629_132505.jpg)


     *[내가 생각한 쇼윈도 전시]
     ![쇼](쇼.png)
     ![쇼](쇼2.png)
     ![내가생각한쇼윈도](/20200629_133501.jpg)

     ![mmic 오진다](/20200629_133543.jpg)
     ![mmic 오진다](/20200629_133720.jpg)
     ![mmic 오진다](/20200629_133739.jpg)
     ![mmic 오진다](/20200629_133810.jpg)
     ![mmic 오진다](/20200629_133950.jpg)
     ![mmic](/20200629_133617812.jpg)



     ![바](/20200629_134025.jpg)
     ![바](/20200629_134032.jpg)  


     ![월간미술](/20200629_120904.jpg)
     ![월간미술](/20200629_121046.jpg)
     ![월간미술](/20200629_120329.jpg)
     ![월간미술](/20200629_120336.jpg)
     ![월간미술](/20200629_120837.jpg)
     ![월간미술](/20200629_120904.jpg)
     ![월간미술](/20200629_121046.jpg)

## 좋아하는 공간

![Interiers](/20200629_132315458.jpg)
![AI와공간](/20200629_132436255.jpg)
![에르메스](/20200629_133347.jpg)
![에르메스](/20200629_133351.jpg)
![올해의 디자인](/20200629_133351.jpg)

### 내가 좋아했지만 한 물 간 듯 한 디자인

![인테리어스2019](20200629_135230310.jpg)
![인테리어스2019](20200629_135241693.jpg)
