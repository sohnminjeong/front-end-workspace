// 1. 이벤트 연결
/*
$("#area1").on("mouseenter", (event) => {
  $(event.target).css("background-color", "beige").text("마우스가 올라감");
});
// 마우스가 내려갈 때(mouseleave) -> 배경 색상 : hotpink, 글자는 '마우스가 내려감'
$("#area1").on("mouseleave", (event) => {
  $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
});*/
/*
$("#area1").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    // mouseenter인 경우
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  } else if (event.type === "mouseleave") {
    // mouseleave인 경우
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  }
});
*/
/*
$("#area1").on("click", (event) => {
  // 배경 색상은 white, 텍스트는 ''
  // mouseenter, mouseleave 이벤트 제거(전에 있떤 이벤트)
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave");
});
*/

// .on() : 이벤트 여러개일 때 사용 편함
$("#area1").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2) one : 딱 한번 실행 (on으로 할 경우 할 때마다 실행됨)
$("#area2").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
/*
$("#textarea1").keydown((e) => {
  console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keypress : 글자가 입력될 때
$("#textarea1").keypress((e) => {
  console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keyup : 키보드가 떼어질 때
$("#textarea1").keyup((e) => {
  console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
*/
// on을 이용해서 한꺼번에~
$("#textarea1").on({
  keydown: (e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  lkeyup: (e) => {
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

$("#textarea2").keyup((e) => {
  let target = $(e.target);
  //console.log($(e.target).val().length);
  let currentLength = target.val().length;
  // 그냥 $("#maxLength").text()는 string이기 때문에 parseInt()처리하여 int로 변경
  //console.log(typeof maxLength); typeof : 형 확인
  let maxLength = parseInt($("#maxLength").text());

  if (currentLength > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(currentLength);
  }
});

// 동적으로 아이디 조건 확인
$("#userId").keyup((e) => {
  //let userId = $("#userId").text();
  let id = $(e.target).val(); // 제이쿼리 방식
  //id = e.target.value;   // 자바 스크립트 방식

  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  if (regExp.test(id)) {
    $("#idCheck").text("사용 가능한 아이디입니다.").css("color", "green");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "red");
  }
});

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let currentCount = parseInt(counter.text());
  counter.text(++currentCount);
});
$("#btn").click(() => {
  $("#area3").trigger("click");
});
