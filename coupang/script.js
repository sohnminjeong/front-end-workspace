const navIcons = document.querySelectorAll(".header-main-bottom i");
const aList = document.querySelectorAll(".header-main-bottom a");

navIcons[0].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.remove("header-main-bottom-right");
    // a태그에 header-main-bottom-right 클래스 삭제
  });
  //왼쪽 화살표 누르면 원래대로 돌아옴 transform : translateX(30px)상태로 돌아온다는 뜻
});
navIcons[1].addEventListener("click", function () {
  aList.forEach((a) => {
    a.classList.add("header-main-bottom-right");
    // a태그들 마다 붙이겠다는 의미
    // add뒤 괄호에는 클래스 명만 들어와야 함(.은 들어가면 안됨)
  });
  //  오른쪽 화살표 누르면 x좌표 기준 -375px로 이동하겠다는 의미
});

// category
const categoryBtn = document.querySelector(".category-btn");
const category = document.querySelector(".category");

categoryBtn.addEventListener("mouseenter", function () {
  category.style.display = "flex";
});
// .addEventListener(이벤트명, 함수) : 객체에 이벤트 추가하겠다는 의미
category.addEventListener("mouseleave", function () {
  category.style.display = "none";
});

const categoryItems = document.querySelectorAll(".category-item");
const categorySub = document.querySelector(".category-sub");
const categorySubItems = document.querySelectorAll(".category-sub-item");

categoryItems.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    categorySub.style.display = "block";
    categorySubItems[index].style.display = "block";
  });
  item.addEventListener("mouseleave", function () {
    categorySubItems[index].style.display = "none";
  });
});
