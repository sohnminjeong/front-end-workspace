const h1 = document.querySelector("h1");
console.log(h1);
h1.onmouseenter = function () {
  h1.style.backgroundColor = "skyblue";
};
h1.onmouseleave = function () {
  h1.style.backgroundColor = "pink";
};

// h1.onclick = function () {
//   h1.style.backgroundColor = "purple";
// };

// h1.addEventListener(이벤트이름, 함수);
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "purple";
});

const container = document.querySelector(".container");
const img = document.querySelectorAll(".container img");
// removeHandler함수는 이벤트 객체가 숨어있음 - 발생한 이벤트에 대한 많은 정보를 담고 있는 애
function removeHandler(e) {
  // [방법1관련]  container.removeChild(this);
  //   console.log(this);
  console.log(e.currentTarget);
  console.log(e.target);
  if (e.target !== e.currentTarget) {
    // e.currentTarget.removeChild(e.target);
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler);

/* [방법1]
for (item of img) {
  item.addEventListener("click", removeHandler);
}
*/
