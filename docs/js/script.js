let menuBurger = document.querySelector(".icon-menu");
let menu = document.querySelector(".menu__body");
let body = document.querySelector("body");


menuBurger.addEventListener("click", function (event) {
  menuBurger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
})

const allBtn = document.querySelector('.tabs__all');
const seoBtn = document.querySelector('.tabs__seo');
const devBtn = document.querySelector('.tabs__dev');
const designBtn = document.querySelector('.tabs__design');
const work = document.querySelectorAll(".work");
const tabs = document.querySelectorAll(".tabs__item");


console.log(seoBtn);

function filterSelection(c) {
  for (let i = 0; i < work.length; i++) {
    work[i].classList.add('hide')
    if (work[i].className.indexOf(c) > -1) work[i].classList.remove('hide');
  }
}

function resetTab() {
  tabs.forEach(element => {
    console.dir(element);
    element.classList.remove('tabs__item_active')
  });
}

allBtn.addEventListener('click', function (e) {
  work.forEach(element => {
    element.classList.remove('hide')
  });
  resetTab();
  this.classList.add('tabs__item_active');
});
seoBtn.addEventListener('click', function (e) {
  filterSelection('seo');
  resetTab();
  this.classList.add('tabs__item_active');
});
devBtn.addEventListener('click', function (e) {
  filterSelection('dev');
  resetTab();
  this.classList.add('tabs__item_active');
});
designBtn.addEventListener('click', function (e) {
  filterSelection('design');
  resetTab();
  this.classList.add('tabs__item_active');
});


// Slider
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 25
    }
  }
});
