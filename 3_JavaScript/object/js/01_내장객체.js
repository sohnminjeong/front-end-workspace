function btn1() {
  console.log("최소값 : ", Math.min(5, 9, 7, -3)); //-3
  console.log("최대값 : ", Math.max(5, 9, 7, -3)); //9
  console.log("절대값 : ", Math.max(-8.8888)); //8.8888
}

function btn2() {
  const number = 2.725;
  console.log("반올림 : ", Math.round(number)); //3
  console.log("버림 : ", Math.floor(number)); //2
  console.log("올림 : ", Math.ceil(number)); //3
}

function btn3() {
  console.log(Math.random());
  // 0~1 숫자 중 무작위 출력
  //실행 확인 버튼 클릭 할때마다 숫자가 다름

  //11~100 중 랜덤값 아무거나
  let result = Math.floor(Math.random() * 90 + 11);
  //11~100(n1~n2)의 임의수 : (n2-n1)+1이 *뒤에 위치 / + 뒤는 시작점인 n1
  //앞이 갯수, 뒤가 시작수 이므로 -> 11부터 90개가 오겠다는 의미
  console.log(result);

  /*
  Math.random() * n + m이면 m부터 n까지의 숫자 랜덤 
  -> 소숫점도 나오기 때문에 Math.floor로 감싸주기
  */
}
function btn4() {
  const now = new Date();
  console.log(now); //오늘 시간이 날짜와 시간이 뜸
  console.log("년 : ", now.getFullYear()); //년 : 2023
  console.log("월 : ", now.getMonth()); //0~11로 계산하기 때문에 월 : 11로 출력됨
  console.log("월 : ", now.getMonth() + 1); //월은 0~11까지 이므로 제대로 확인하려면 +1해줘야함
  console.log("일 : ", now.getDate()); //14
  console.log("시 : ", now.getHours()); //11
  console.log("분 : ", now.getMinutes()); //43
  console.log("초 : ", now.getSeconds()); //초는 클릭할 때마다 계속 바뀜
}
function btn5() {
  //년, 월, 일, 시, 분, 초
  const a = new Date(2025, 0, 5, 11, 50, 20); //1월로 지정하고 싶으면 -1해서 넣어줘야 함
  console.log(a);

  //년, 월, 일, 시, 분
  const b = new Date(2025, 0, 5, 11, 50);
  console.log(b);

  const c = new Date(2024, 4, 16); //2024-05-16 (월은 원하는 값-1해줘야 함 : 컴퓨터가 0~11로 계산하기 때문)
  console.log(c);
}
