const swiperTop = new Swiper('.top__swiper', {
    effect: 'fade',
    autoplay: {
        delay:3500,
        disableOnIneraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperAbout = new Swiper(".about__slider", {
    sliderPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});