const svgleft = document.querySelector(".svg__left");


const swiper = new Swiper("#testimonials", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
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
                delay: 6000,
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



// added scroll trigger on svg__left
window.addEventListener("scroll", () =>{
  if (window.scrollY > 100) {
    svgleft.classList.add("fixed");
    console.log("scroll");
  }
}
);




