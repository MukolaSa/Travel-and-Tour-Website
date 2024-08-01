// ==============================HEADER=============================
var swiper = new Swiper(".header-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// ==============================SERVICES=============================


var swiper = new Swiper(".services-content", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
  });

// ==============================REVIEWS=============================


var swiper = new Swiper(".reviews-content", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
  });

// =============================NAVBAR=============================

const navList = document.querySelector('.navlist');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', ()=>{
    navList.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    menuBtn.style.display = 'none'
})
closeBtn.addEventListener('click', ()=>{
    navList.style.display = 'none'
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'inline-block'
})