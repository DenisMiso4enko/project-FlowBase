// burger
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav')
const body = document.body
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('stopscroll')
})
document.querySelectorAll('.menu__list').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
    body.classList.remove('stopscroll')
}))


// scroll
const btnYearly = document.querySelector('.choose-btn--1')
const btnMonthly = document.querySelector('.choose-btn')
btnYearly.addEventListener('click', changeBtns)
btnMonthly.addEventListener('click', changeBtns)


function changeBtns() {
    btnYearly.classList.toggle('active')
    btnMonthly.classList.toggle('active')
}
//
const links = document.querySelectorAll('nav li a')
const sec = document.querySelectorAll('section')
const header = document.querySelector('header')

function activeMenu() {
    let lenght = sec.length
    while(--lenght && window.scrollY + 97 < sec[lenght].offsetTop){}
    links.forEach(link => link.classList.remove('active'))
    links[lenght].classList.add('active')
}
activeMenu()
window.addEventListener('scroll', activeMenu)

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset =  80 //document.querySelector('header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


//slider
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    // Optional parameters
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    clickable: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 0,
            slideToClickedSlide: true,
        }
    }

  });