var catalogSlider = new Swiper(".js-list-carousel", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    spaceBetween: 33,
    slidesPerView: 2,
    slideActiveClass: 'is-active',
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 33
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 33
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 33
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 33
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 43
      },
      // 1600: {
      //   slidesPerView: 5,
      //   freeMode: true,
      //   spaceBetween: 43
      // }
    }
});
