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
const changeThema = document.querySelectorAll('.header__changeThema');
changeThema.forEach(btn => {
  btn.addEventListener('click', (ev) => {
    ev.target.classList.toggle('header__changeThema--dark');
    bodyPage.classList.toggle('page__body--dark')
  });
});

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

let sliderWidth = slider.offsetWidth;

const slidersAll = 3;

let disabledPoint = sliderWidth * (slidersAll - 1) * -1;

let offsetSlider = 0;

const setDisabled = function() {
  if (offsetSlider === 0) {
    sliderPrev.setAttribute('disabled', true);
  } else if (offsetSlider === disabledPoint) {
    sliderNext.setAttribute('disabled', true);
  } else {
    sliderPrev.removeAttribute('disabled');
    sliderNext.removeAttribute('disabled');
  }
};

const setCount = function() {
  swiperPagination.textContent = sliderCounter;
};

sliderPrev.addEventListener('click', (ev) => {
  sliderImages.style.transform = `translateX(${offsetSlider + sliderWidth}px)`;
  offsetSlider += sliderWidth;
  sliderCounter--;
  setDisabled();
  setCount();
});

sliderNext.addEventListener('click', (ev) => {
  sliderImages.style.transform = `translateX(${offsetSlider - sliderWidth}px)`;
  offsetSlider -= sliderWidth;
  sliderCounter++;
  setDisabled();
  setCount();
});
