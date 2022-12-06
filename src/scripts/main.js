'use strict';
import './news';

const bodyPage = document.querySelector('.page__body');
const menuOpen = document.querySelector('.menu');
const wrapper = document.querySelector('.page__wrapper');

function menuActivate() {
  menuOpen.classList.add('menu-page--active');
  wrapper.classList.add('page__wrapper--background');
  bodyPage.classList.add('page__no-scroll');
}

function menuReactivate() {
  menuOpen.classList.remove('menu-page--active');
  wrapper.classList.remove('page__wrapper--background');
  bodyPage.classList.remove('page__no-scroll');
}

// about section //
const sectionTitles = document.querySelectorAll('.about__section-title');

sectionTitles.forEach(title => {
  title.addEventListener('click', (ev) => {
    ev.target.classList.toggle('about__section-title--active');
    ev.target.nextElementSibling.classList.toggle('about__section-info--active');
  });
});

// change thema //
// отримуємо збережену тему //
const saveUserTheme = localStorage.getItem('user-theme');
let userTheme;

if(window.matchMedia) {
  userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  !saveUserTheme ? changeTheme() : null;
});

const changeThemaBtn = document.querySelectorAll('.header__changeThema');

changeThemaBtn.forEach(btn => {
  btn.addEventListener('click', (ev) => {
    changeTheme(true);
    ev.target.classList.toggle('header__changeThema--dark');
    // bodyPage.classList.toggle('page__body--dark')
  });
});

// Функція додавання класу теми
function setThemeClass() {
  if (saveUserTheme) {
    bodyPage.classList.add(saveUserTheme)
  } else {
    bodyPage.classList.add(userTheme);
  }
}

// Додаємо клас теми
setThemeClass();

// Функція зміни теми
function changeTheme(saveTheme = false) {
  let currentTheme = bodyPage.classList.contains('light') ? 'light' : 'dark';
  let newTheme;

  if (currentTheme === 'light') {
    newTheme = 'dark';
  } else if (currentTheme === 'dark') {
    newTheme = 'light';
  }

  bodyPage.classList.remove(currentTheme);
  bodyPage.classList.toggle(newTheme);
  saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
}

// menu //
const menuIcon = document.querySelector('.header__menu-icon');

const menuClose = document.querySelector('.menu__close');
const menuItems = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', (ev) => {
  menuActivate();
});

menuClose.addEventListener('click', (ev) => {
  menuReactivate();
});

menuItems.forEach(item => {
  item.addEventListener('click', (ev) => {
    menuReactivate();
  });
});

// slider about
const sliderPrev = document.querySelector('.swiper__control--prev');
const sliderNext = document.querySelector('.swiper__control--next');
const sliderImages = document.querySelector('.swiper__wrapper');
const swiperPagination = document.querySelector('.swiper__pagination');
const slider = document.querySelector('.swiper');

let sliderCounter = 1;

let sliderWidth = 0;

const slidersAll = 3;

let disabledPoint = 0;

let offsetSlider = 0;

function calcSliderWidth() {
  sliderWidth = slider.offsetWidth;
  disabledPoint = sliderWidth * (slidersAll - 1) * -1;
};

calcSliderWidth();

const setDisabled = function() {
  if (offsetSlider === 0) {
    sliderPrev.setAttribute('disabled', true);
  } else if (offsetSlider === disabledPoint) {
    sliderNext.setAttribute('disabled', true);
  } else {
    sliderPrev.removeAttribute('disabled');
    sliderNext.removeAttribute('disabled');
  };
};

const setCount = function() {
  swiperPagination.textContent = sliderCounter;
};

sliderPrev.addEventListener('click', (ev) => {
  calcSliderWidth();
  sliderImages.style.transform = `translateX(${offsetSlider + sliderWidth}px)`;
  offsetSlider += sliderWidth;
  sliderCounter--;
  setDisabled();
  setCount();
});

sliderNext.addEventListener('click', (ev) => {
  calcSliderWidth();
  sliderImages.style.transform = `translateX(${offsetSlider - sliderWidth}px)`;
  offsetSlider -= sliderWidth;
  sliderCounter++;
  setDisabled();
  setCount();
});
