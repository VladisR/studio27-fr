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
        spaceBetween: 17
      },
      375: {
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
    }
});


var catalogSlider2 = new Swiper(".js-list-carousel2", {
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
        spaceBetween: 17
      },
      375: {
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
        slidesPerView: 3,
        spaceBetween: 43
      },
    }
});


$('.js-list-carousel4').each(function(){
  var slider = this;
  var catalogSlider4 = new Swiper(slider, {
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
      spaceBetween: 20,
      slidesPerView: 2,
      slideActiveClass: 'is-active',
      freeMode: false,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        660: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1921: {
          slidesPerView: 4,
          spaceBetween: 30
        },
      }
  });
});
