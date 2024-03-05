// 1. Content 설정
// 1) html()
// content 영역의 태그와 텍스트를 모두 가져온다.
console.log($("#content1").html());
// content1의 내용(태그 + 텍스트)을 content2에 추가
// html로 할 경우 a태그는 태그로 인식
$("#content2").html($("#content1").html());
// text로 할 경우 a태그까지 text로 인식
$("#content2").text($("#content1").html());

// 2) text()
// content 영역의 텍스트만 가져온다.
console.log($("#content3").text());
// content3의 내용(텍스트)을 content4에 추가
// .text나 .html이나 어떤 것 사용해도 무방
$("#content4").text($("#content3").text());

// 2. 요소 추가
// 1) 자바스크립트와 제이쿼리
// p태그 만들기
// (1) 자바스크립트 방식
const p = document.createElement("p");
p.innerHTML = "자바스크립트로 추가";
// p태그를 자식으로 추가
document.querySelector("#area1").appendChild(p);
// (2) 제이쿼리 방식
const p2 = $("<p>").html("제이쿼리로 추가");
// .html()로 할경우 위에서 만든 자바스크립트 방식없어지고 그 자리에 들어감
// .append()로 할 경우 기존에 만든 것은 지워지지않고 아래에 생성
$("#area1").append(p2);

// 2) 요소 추가 1
// $(A).appned(B) : A 요소의 자식 요소로 B 요소를 뒷부분에 추가한다.
$("#area1").append("<span>B</span>");

// $(A).prepend(B) : A 요소의 자식 요소로 C 요소를 앞부분에 추가한다.
$("#area1").prepend("<span>C</span>");

// $(A).after(D) : A 요소의 형제 요소로 D 요소를 뒷부분에 추가한다.
$("#area1").after("<span>D</span>");

// $(A).before(E) : A 요소의 형제 요소로 E 요소를 앞부분에 추가한다.
$("#area1").before("<span>E</span>");

// 3) 요소 추가 2
// $(B).appendTo(A) : B 요소를 A 요소의 자식 요소로 뒷 부분에 추가한다.
// 위와의 차이 : 자식이 주체
$("<span>B</span>").appendTo("#area2");

// $(C).appendTo(A) : C 요소를 A 요소의 자식 요소로 앞 부분에 추가한다.
$("<span>C</span>").prependTo("#area2");

// $(D).insertAfter(A) : D 요소를 A 요소의 형제 요소로 뒷 부분에 추가한다.
$("<span>D</span>").insertAfter("#area2");

// $(E).insertBefore(A) : E 요소를 A 요소의 형제 요소로 앞 부분에 추가한다.
$("<span>E</span>").insertBefore("#area2");

// 3. 요소 복제
/*
    만일 한 개의 이벤트 핸들러가 설정되면 두 이벤트 모두 한 곳에서 적용 
    2개 이상이 되면 해당 이벤트 핸들러의 이벤트가 분리 
*/

$(".item").hover(
  /*(event) => {
    console.log("event1 : " + event.type); // mouseenter
    console.log(event.target);
    $(event.target).addClass("bg-hotpink"); // css에 class 만들어 놓은 것 추가
  },
  (event) => {
    console.log("event2 : " + event.type); // mouseleave
    console.log(event.target);
    $(event.target).removeClass("bg-hotpink"); // css에 class 만들어 추가한 것 빼기
  }*/
  (event) => {
    $(event.target).toggleClass("bg-hotpink");
  }
);

$("#btn1").click(() => {
  // .clone() 사용
  // 이벤트까지 복제하려면 매개값으로 true를 전달한다.(생략시 false)
  let item = $("#item1").clone(true);
  $("#clone-result").html(item);
});

// 4. 요소 제거
// 1) remove - 선택된 요소의 이벤트까지 삭제
$("#remove").click(() => {
  let item = $("#item2").remove();
  $("#remove-result").append(item);
});
// 2) detach - 선택된 요소만 삭제(이벤트는 삭제X)
$("#detach").click(() => {
  let item = $("#item2").detach();
  $("#remove-result").append(item);
});
// 3) empty : empty로 지정한 안의 부분이 삭제됨
$("#empty").click(() => {
  $("#remove-test").empty();
});

// 5. 배열 관리
let array = [
  { name: "구글", link: "https://google.com" },
  { name: "네이버", link: "https://naver.com" },
  { name: "다음", link: "https://daum.net" },
];

// 자바스크립트
array.forEach((element, index, origin) => {
  console.log(element);
  console.log(index);
  console.log(origin);
  console.log("-----------");
});

// 제이쿼리
$(array).each((index, element) => {
  console.log(index);
  console.log(element.name);
  console.log(element.link);
  console.log("jQuery---------------");
});

let output = "";
$(array).each((index, element) => {
  /* 
  // 템플릿 문자열 사용 x - append 방식
  const result =
    "<h4><a href=" + element.link + ">" + element.name + "</a></h4>";
  $("#each-test").append(result);
  
  // 템플릿 문자열 사용 - append 방식 
  $("#each-test").append(
    `<h4><a href='${element.link}'>${element.name}</a></h4>`
  );
    */
  // 템플릿 문자열 사용 - html 방식
  // 반복 밖에서 output 선언 -> 반복 안에서 output 지정 -> 반복 밖에서 #each-test에 output 추가
  output += `<h4><a href='${element.link}'>${element.name}</a></h4>`;
});
$("#each-test").html(output);
