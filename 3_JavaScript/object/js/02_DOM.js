/*
    open(첫번째, 두번째, 세번째)
    - 첫번째 : 새창에서 열고자하는 url 주소
    - 두번째 : 창이름, 창이름이 같은게 이미 열려 있을 경우 새로 열리지 않고 이미 열려있는 곳에서 새로고침
    - 세번째 : 새창의 특성 (브라우저마다 적용범위 다름)
               width : 창의 너비(px), height : 창의 높이(px),
               resizable : 창 크기 조절 가능 여부,
               location : 주소창, menubar : 메뉴바,
               scrollbars : 스크롤바, status : 상태표시줄,
               toolbar : 도구모음
*/

function btn1() {
  window.open(
    "https://www.naver.com",
    "네이버",
    "whidh=500, height=600, resizable=no, location=no, menubar=no, scrollbars=no, status=no, toolbar=no"
  );
}

function btn2() {
  let newWindow = open();
  newWindow.alert("3초 후에 페이지가 종료됩니다.");
  setTimeout(() => {
    console.log("3초 후 실행!");
    newWindow.close(); // 버튼 클릭 시 뜨는 팝업 확인 누를 경우 해당 창이 3초 후에 닫아짐
  }, 3000);
  /*
  (함수형식, 시간) 시간에는 초 단위*1000으로 넣어야 함 
   -> 버튼 클릭 시 console에 "3초 후 실행!"문장이 바로가 아닌 3초 뒤에 나타남
*/
}

function btn3() {
  //한번 버튼 클릭스 console에 1초, 2초, 3초, ... 가 계속 보임
  let second = 0;
  setInterval(() => {
    console.log(`${++second}초!`);
  }, 1000); //1초 기준 (1*1000으로 대입)
}

function btn4() {
  console.log(location); //console에 정보 나옴
  console.log(location.href); // 전체 URL
  console.log(location.hostname); // 도메인 이름
  console.log(location.pathname); // 경로

  // location.reload();
  //새로고침 -> 이거때문에 실행 확인 눌러도 자동 새로고침 돼서 console값이 보이지 않음

  // location.href = "https://www.naver.com";
  //해당 브라우저 탭이 바로 연결된 링크(네이버)로 바뀜
}
