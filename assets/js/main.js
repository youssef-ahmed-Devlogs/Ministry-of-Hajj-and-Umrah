let s3Count = 3;
let s4Count = 3;

window.addEventListener("resize", () => {

    responsiveSwiperThree(".electronic__services-slider");
    responsiveSwiperFour(".apps-slider");
})

responsiveSwiperThree(".electronic__services-slider");
responsiveSwiperFour(".apps-slider");

function responsiveSwiperThree(target) {
    if(window.innerWidth <= 500) {
        s3Count = 1;
    } else if( window.innerWidth <= 1184) {
        s3Count = 2;
    } else {
        s3Count = 3;
    }

    
    var swiper = new Swiper(target, {

        slidesPerView: s3Count,
        spaceBetween: 20,
        slidesPerGroup: s3Count,
        loopFillGroupWithBlank: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
}

function responsiveSwiperFour(target) {
    if(window.innerWidth <= 500) {
        s4Count = 1;
    } else if( window.innerWidth <= 900) {
        s4Count = 2;
    } else if( window.innerWidth <= 1184) {
        s4Count = 3;
    } else {
        s4Count = 4;
    }

    
    var swiper = new Swiper(target, {

        slidesPerView: s4Count,
        spaceBetween: 20,
        slidesPerGroup: s4Count,
        loopFillGroupWithBlank: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
}

