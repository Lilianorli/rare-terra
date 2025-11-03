const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

    // Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());



const learnButton = document.querySelector(".learn-button");
const modal = document.getElementById("learnModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
learnButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("show");
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Close when clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});


// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 1.9,

  // Pagination setup
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 4
    }
  }
});

openButton.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.classList.add("modal-open"); // add this
  document.body.style.overflow = "hidden";
});

closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open"); // remove this
    document.body.style.overflow = "";
  });
});


