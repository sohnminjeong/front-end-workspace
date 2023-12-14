// laod : 모든 로드가 다 끝나고 실행시킨다는 의미!
// DOMContentLoaded : DOM 구조를 로드 (load보다 실행 시점이 더 빠름)
/*window.addEventListener("DOMContentLoaded", function () {   //window 대신 document를 적을 수 있음
  const h1 = document.querySelector("h1");
  console.log(h1);
});*/
function btn1() {
  console.log(document.head); //head 태그에 적힌 모든 내용
  console.log(document.title); //Document
  console.log(document.body);
  console.log(document.h1); //undefined
  const h1 = document.getElementsByTagName("h1");
  console.log(h1);
  console.log(h1[0]);

  // 동일한 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]); //<div>Hello, World!</div>
  console.log(div[1]); //<div>Hello, JavaScript!</div>
}

function btn2() {
  const div = document.getElementById("testId");
  console.log(div); //Hello, World!(id는 고유명으로 처음 지정된 것 하나만 불러옴)
}

function btn3() {
  // 동일한 class 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByClassName("testClass");
  console.log(div); //태그로 가져왔을 때처럼 안에 있는 걸 다 가져옴
  console.log(div[0]); //<div id="testId" class="testClass">Hello, World!</div>
  console.log(div[1]);
}

function btn4() {
  // 동일한 name 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByName("testName");
  console.log(div); //console에 리스트로 정보를 가져옴
  console.log(document.testName); //오류 - name은 form 태그를 name으로 부르면 바로 뜨지만 일반적으로는 x
  console.log(document.frm); //form 태그는 name으로 부르면 console에 바로 뜸
}

function btn5() {
  let div = document.querySelector("#testId"); //선택자를 id로
  console.log(div); //#testId에 해당되는 값 도출
  div = document.querySelectorAll(".testClass"); //선택자를 class로
  console.log(div); //리스트로 도출
  console.log(div[0]); //Hello, World!
}

function btn6() {
  const div = document.querySelectorAll(".testClass"); //클래스명이 testClass인 내용 (전부)가져오기
  div[0].textContent = "<span>안녕하세요</span>"; // 브라우저에서 Hello, World!가 '<span>안녕하세요</span>'으로 바뀜
  div[1].innerHTML = "<span>안녕하세요</span>"; //브라우저에서 Hello, JavaScript!가 '안녕하세요'로 바뀜
}

function btn7() {
  const div = document.querySelector("#testId");
  div.setAttribute("data-test", "테스트"); //console이 아닌elements에서 확인해야 함 / data-test라는 속성이 추가되며 그 값은 '테스트'
  div.setAttribute("data-test", "테스트2"); //이미 있는 속성일 경우 그 값이 변경됨 / 테스트 -> 테스트2
  console.log(div.getAttribute("class")); //console에서 확인 : testClass
}

function btn8() {
  const div = document.querySelector("#testId"); //브라우저에서 해당 문장이 바뀜
  div.style.color = "orange";
  div.style.backgroundColor = "yellow";
}

const div2 = document.querySelector("#testId2");

function btn9() {
  div2.classList.add("black");
}
function btn10() {
  div2.classList.remove("black");
}
function btn11() {
  const check = div2.classList.contains("black");
  console.log(check);
  if (check) {
    div2.classList.remove("black");
    div2.classList.add("white");
  } else {
    div2.classList.add("black");
  }
}
function btn12() {
  div2.classList.toggle("black");
}

function btn13() {
  // 자식 객체 생성
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum";
  // 부모 객체에 추가
  div2.appendChild(p); //Elements, 브라우저에서 확인 - div2밑에 p태그 생성됨
}

function btn14() {
  const p = document.querySelector("p");
  //   div2.removeChild(p); 와 밑에 문장 같은 뜻
  p.parentNode.removeChild(p); //elements, 브라우저에서 확인
}
