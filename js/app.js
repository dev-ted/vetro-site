const swiper = new Swiper("#testimonials", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const facts = new Swiper("#facts", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
        centeredSlides: true,
        autoplay: {
                delay: 3000,
                disableOnInteraction: false,
        },

 

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

 
});


const caseStudy = new Swiper("#case_study", {
  slidesPerView: 1,
        loop: false,
  autoplay : false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
  
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
   
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
facts.init();
caseStudy.init();
swiper.init();