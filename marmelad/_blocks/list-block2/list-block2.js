var catalogSlider3 = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 992 && catalogSlider3 == undefined) {
        if(typeof(mySwiper) === "undefined" ) {
          catalogSlider3 = new Swiper(".js-list-carousel3", {
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
                575: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 37
                },
              }
          });
        }
    } else if (screenWidth > 991 && catalogSlider3 != undefined) {
        catalogSlider3.destroy();
        catalogSlider3 = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');
    }
}

//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
    initSwiper();
});


// var resolution = 1200;
// $(window).resize(function(){
//     if ($(window).width() > resolution) {
//         if(typeof(mySwiper) === "undefined" ) {
//           var catalogSlider3 = new Swiper(".js-list-carousel3", {
//               navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev"
//               },
//               scrollbar: {
//                 el: ".swiper-scrollbar",
//                 hide: false,
//                 draggable: true
//               },
//               pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true
//               },
//               spaceBetween: 20,
//               slidesPerView: 2,
//               slideActiveClass: 'is-active',
//               freeMode: true,
//               breakpoints: {
//                 0: {
//                   slidesPerView: 1,
//                   spaceBetween: 20
//                 },
//                 360: {
//                   slidesPerView: 1,
//                   spaceBetween: 20
//                 },
//                 575: {
//                   slidesPerView: 1,
//                   spaceBetween: 20
//                 },
//                 768: {
//                   slidesPerView: 2,
//                   spaceBetween: 20
//                 },
//                 992: {
//                   slidesPerView: 3,
//                   spaceBetween: 37
//                 },
//               }
//           });
//         }
//     } else {
//         if (typeof(catalogSlider3) !== "undefined" ) {
//             catalogSlider3.destroy();
//         }
//     }
// });
