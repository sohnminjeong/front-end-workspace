const images = document.querySelectorAll(".images img");
const span = document.querySelector("#click span");
let count = 0;

click.addEventListener("click", clickHandler);
// click에 이벤트이름 "click", clickHandler라는 함수 이벤트를 걸겠음을 의미

function clickHandler() {
  // 이벤트추가에서 말한 clickHandler함수
  span.innerHTML = ++count;
  //  누르면 바로 1,2 표시되기 때문에 ++가 count 앞으로 와야 함
  // click 버튼 클릭 시 click 뒤에 들어갈 카운트 표시 (count가 0임을 선언해야 함)

  const random = [
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
    // 1부터 시작해서 3까지 나오는 랜덤의 소숫점 버림(숫자가 정수로 나와야 하기 때문)
    // random을 돌려야 하는 갯수가 3개이기 때문에 Math.floor 3개 필요
  ];

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../../resources/spy${random[i]}.jpg`);
    // 속성 변경 : image의 속성 src의 값을 random 사진으로 바꾼다는 뜻
  }
  if (random[0] === random[1] && random[1] === random[2]) {
    result.innerHTML = "Congratulation!! Press restart to play again~!!";
    // 랜덤을 돌려 나온 사진이 모두 같을 때 문장 출력
    click.setAttribute("disabled", "disabled");
    //"disabled"를 통해 조건 만족 시 더 이상 click 버튼이 눌리지 X
    // "disabled" : 버튼의 on/off 중 off를 뜻함
  }
}

restart.addEventListener("click", restartHandler);
// restart에 이벤트이름 "click", restartHandler라는 함수 이벤트를 걸겠음을 의미

function restartHandler() {
  // restartHandler라는 함수 선언
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../../resources/spy${i + 1}.jpg`);
  }
  // 해당 반복을 통해 restart 버튼 클릭 시 사진도 다시 기존 설정 사진으로 돌아감
  // 사진 명이 spy 1,2,3이기 때문에 i+1 해야 함(i는 0부터 시작)
  click.removeAttribute("disabled");
  // click.setAttribute를 off 한다는 뜻 -> 즉, click 버튼이 눌리게 만들어줌
  count = 0;
  // click 옆 count는 0으로 돌아감
  span.innerHTML = "";
  result.innerHTML = "";
  // span과 result의 innterHTML도 사라짐
}
