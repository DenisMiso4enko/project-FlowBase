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



const btnYearly = document.querySelector('.choose-btn--1')
const btnMonthly = document.querySelector('.choose-btn')
btnYearly.addEventListener('click', changeBtns)
btnMonthly.addEventListener('click', changeBtns)


function changeBtns() {
    btnYearly.classList.toggle('active')
    btnMonthly.classList.toggle('active')
}

// scroll
const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('.menu__link')
const menuList = document.querySelector('.menu__list')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            links.forEach((link) => {
                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('active')
                } else {
                    link.classList.remove('active')
                }
               
            })
        }
    })
}, {
    threshold: 0.1,
})
sections.forEach((section) => observer.observe(section))

menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link')) {
        e.preventDefault()
        const id = e.target.getAttribute('href').replace('#', '')
        window.scrollTo({
            top: document.getElementById(id).offsetTop,
            behavior: "smooth",
        })
    }
})

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