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
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const result = regex.test(emailValue);
  if (!result) {
    errorMsg.style.display = "inline-block";
    errorBackground.style.border = "2px solid var(--soft-red)";
    errorIcon.style.display = "inline-block";
    ifSendData = false;
  }
  if (ifSendData) {
    emailInput.value = "";
  }
}

const tabButton = document.querySelectorAll(".tabs a");
const tab = document.getElementsByClassName("tab");

function tabHandler() {
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
}

tabHandler();

const faqQuestion = document.querySelectorAll(".faq__question__box");
const faqAnswer = document.querySelectorAll(".faq__answer");
const arrow = document.querySelectorAll(".faq__question__arrow");

for (let i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].addEventListener("click", (e) => {
    faqAnswer[i].classList.toggle("hidden");
    arrow[i].classList.toggle("arrow--up");
  });
}

const closeIconNav = document.querySelector(".nav-modal__close-icon");
const navigationModal = document.querySelector(".nav-modal");
const hamburgerMenu = document.querySelector(".header__hamburger");

closeIconNav.addEventListener("click", (e) => {
  navigationModal.style.right = "-1000px";
  // navigationModal.style.visibility = "hidden";
});

hamburgerMenu.addEventListener("click", (e) => {
  navigationModal.style.right = "0";
  // navigationModal.style.visibility = "visible";
});
