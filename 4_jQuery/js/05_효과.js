// 1. show(), hide(), toggle()
$("#show").click(() => {
  $("#img").show(3000);
});
$("#hide").click(() => {
  $("#img").hide(3000);
});
$("#toggle").click(() => {
  $("#img").toggle(1000);
});

// 2. fadeIn(), fadeOut(), fadeToggle()
$("#fadeIn").click(() => {
  $("#img").fadeIn(2000);
});
$("#fadeOut").click(() => {
  $("#img").fadeOut(2000);
});
$("#fadeToggle").click(() => {
  $("#img").fadeToggle(2000);
});
$("#img").hover(
  function () {
    // this : 본인
    $(this).fadeTo(500, 0.5);
  }, // mouseenter
  function () {
    $(this).fadeTo(500, 1);
  } // mouseleave
);

// 3. slideDown(), slideUp(), slideToggle()
$(".menu").click((e) => {
  let content = $(e.target).next();
  /*
  if (content.css("display") === "none") {
    content.slideDown(500);
  } else {
    content.slideUp(500);
  }*/
  // content.slideToggle(500);

  // 하나의 콘텐츠만 slideDown! (조건걸면 전부 닫는 것도 가능)
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    //!== "block"도 가능
    content.slideDown(500);
  }
});
