// last - work slider
$(document).ready(function () {
  $('.last-works__slider').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1236,
        settings: {
          slidesToShow: 3,
        }
      }
    ],
    mobileFirst: true,
  });
});

// feedback slider
$(document).ready(function () {
  $('.feedback-slider').slick({
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,

        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1236,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 2984,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      }
    ],
    mobileFirst: true,
  });
});


// footer - dropdown
$(document).ready(function () {
  $('.details__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  })
});


//показ суб-меню
let menuArrows = document.querySelectorAll('.nav__arrow')
if (menuArrows.length > 0) {
  for (let i = 0; i < menuArrows.length; i++) {
    const menuArrow = menuArrows[i];
    menuArrow.addEventListener("click", function (e) {
      menuArrow.parentElement.classList.toggle('._active');
    });
  }
}

// бургер меню
const iconMenu = document.querySelector('.burger');
if (iconMenu) {
  const nav = document.querySelector('.nav')
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('._active');
    nav.classList.toggle('._active');
  })
}

// Звичfйне меню

// popup
const popupLink = document.querySelector('.popup-link');
const closeIcon = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup__body');
const popupContent = document.querySelector('.popup__content');

// openPopup
function openPopup() {
  popup.classList.add('open')
}
popupLink.addEventListener('click', openPopup);

// Close popup
function closePopup() {
  popup.classList.remove('open')
}
closeIcon.addEventListener('click', closePopup);


