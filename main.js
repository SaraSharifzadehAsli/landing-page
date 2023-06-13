const errorMsg = document.querySelector(".contact__input__error-msg");
const emailInput = document.querySelector(".contact__input__email");
const submitEmail = document.querySelector(".contact__button");
const errorBackground = document.querySelector(".contact__input--red");
const errorIcon = document.querySelector(".contact__input__error-img");

submitEmail.addEventListener("click", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  errorMsg.style.display = "none";
  errorBackground.style.border = "none";
  errorIcon.style.display = "none";
  const emailValue = emailInput.value;
  let ifSendData = true;
  if (
    emailValue.length === 0 ||
    emailValue.indexOf("@") === -1 ||
    emailValue.indexOf(".") === -1
  ) {
    errorMsg.style.display = "inline-block";
    errorBackground.style.border = "2px solid var(--soft-red)";
    errorIcon.style.display = "inline-block";
    ifSendData = false;
  }
  if (ifSendData) {
  }
}

// const test = document.querySelectorAll(".tabs a");
// console.log(test);
const tabButton = document.querySelectorAll(".tabs a");
const tab = document.getElementsByClassName("tab");
// tabButton.forEach((item, index, array) => item.addEventListener('click', openTabHandler(index)) {tab[i].style.display='inline-block'});

// function openTabHandler (index) {

// }

for (let i = 0; i < tab.length; i++) {
  tabButton[i].addEventListener("click", (e) => {
    e.preventDefault();
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (width > 1000) {
      tab[i].style.display = "flex";
    } else {
      tab[i].style.display = "block";
    }

    tabButton[i].style.borderBottom = "3px solid var(--soft-red)";
    for (let z = 0; z < tab.length; z++) {
      if (z !== i) {
        tab[z].style.display = "none";
        tabButton[z].style.borderBottom = "none";
      }
    }
  });
}

const faqQuestion = document.querySelectorAll(".faq__question__box");
const faqAnswer = document.querySelectorAll(".faq__answer");
const arrow = document.querySelectorAll(".faq__question__arrow");
const arrowStyle = [];

for (let i = 0; i < faqQuestion.length; i++) {
  arrowStyle[i] = getComputedStyle(arrow[i]);
  faqQuestion[i].addEventListener("click", (e) => {
    e.preventDefault();
    faqAnswer[i].classList.toggle("hidden");
    arrow[i].classList.toggle("arrow--up");
    if (arrowStyle[i].color === "rgb(83, 104, 223)") {
      arrow[i].style.color = "var(--soft-red)";
    } else {
      arrow[i].style.color = "var(--soft-blue)";
    }
  });
}
