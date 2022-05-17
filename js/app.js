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
// caseStudy.init();
swiper.init();



// added scroll trigger on svg__left
window.addEventListener("scroll", () =>{
  if (window.scrollY > 100) {
    svgleft.classList.add("fixed");
  
  }
}
);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spots = [];
let hue = 10;

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", function (event) {
  // add z-index to canvas

  mouse.x = event.x;
  mouse.y = event.y;

  for (let i = 0; i < 3; i++) {
    spots.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 0.1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = `hsl(${hue}, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.1) {
      this.size -= 0.03;
    }
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

const handleParticle = () => {
  for (let i = 0; i < spots.length; i++) {
    spots[i].update();
    spots[i].draw();

    for (let j = 0; j < spots.length; j++) {
      const dx = spots[i].x - spots[j].x;
      const dy = spots[i].y - spots[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 90) {
        ctx.beginPath();
        ctx.strokeStyle = spots[i].color;
        ctx.lineWidth = spots[i].size / 10;
        ctx.moveTo(spots[i].x, spots[i].y);
        ctx.lineTo(spots[i].x, spots[i].y);
        ctx.stroke();
      }
    }
    if (spots[i].size <= 0.3) {
      spots.splice(i, 1);
      i--;
    }
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  hue++;
  requestAnimationFrame(animate);
};
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

animate();









