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

// main
const mainImg = document.querySelectorAll("main>img");

// 첫번째 이미지에 main-img-active 클래스가 추가되어 있어요!
setInterval(() => {
  const className = "main-img-active";
  for (let i = 0; i < mainImg.length; i++) {
    // 첫번째 이미지에서는 클래스 제거, 두번째 이미지에 클래스 추가
    // 두번째 이미지에서는 클래스 제거, 세번째 이미지에 클래스 추가
    // 마지막 이미지에서는 클래스 제거, 첫번째 이미지에 클래스 추가
    if (mainImg[i].classList.contains(className)) {
      mainImg[i].classList.remove(className);

      //마지막 번째만 예외로 처리!
      if (i === mainImg.length - 1) {
        mainImg[0].classList.add(className);
        break;
      }

      mainImg[i + 1].classList.add(className);
      break;
    }
  }
}, 2000);

// 사용자가 스크롤을 내리는 순간 어느 시점에 나타나고
// 다시 올리면 사라지는..!
const categoryMenu = document.querySelector(".category-menu");
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY >= 1300) {
    categoryMenu.style.display = "flex";
  } else {
    categoryMenu.style.display = "none";
  }
});
