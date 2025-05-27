// -- Form Toggle Animation Logic --
document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signup-form');
  const signinForm = document.getElementById('signin-form');
  const showSignin = document.getElementById('show-signin');
  const showSignup = document.getElementById('show-signup');
  // Animate form transitions
  function showForm(formToShow, formToHide) {
    formToShow.classList.add('active');
    formToHide.classList.remove('active');
  }
  if (showSignin) {
    showSignin.addEventListener('click', function(e) {
      e.preventDefault();
      showForm(signinForm, signupForm);
    });
  }
  if (showSignup) {
    showSignup.addEventListener('click', function(e) {
      e.preventDefault();
      showForm(signupForm, signinForm);
    });
  }

  // -- Swiper Pause/Resume Logic on Form Hover/Focus --
  // Replace 'banner-slider' with your actual Swiper instance variable name if different
  let swiperInstance;
  // Try to detect the Swiper instance
  if (window.bannerSlider) {
    swiperInstance = window.bannerSlider;
  } else if (window.swiper) {
    swiperInstance = window.swiper;
  } else if (window.Swiper && document.querySelector('.banner-slider') && document.querySelector('.banner-slider').swiper) {
    swiperInstance = document.querySelector('.banner-slider').swiper;
  }

  const formAnimWrapper = document.getElementById('form-toggle-anim');
  if (swiperInstance && swiperInstance.autoplay && formAnimWrapper) {
    // Pause on mouseenter or focusin, resume on mouseleave or focusout
    formAnimWrapper.addEventListener('mouseenter', function() {
      swiperInstance.autoplay.stop();
    });
    formAnimWrapper.addEventListener('mouseleave', function() {
      swiperInstance.autoplay.start();
    });
    formAnimWrapper.addEventListener('focusin', function() {
      swiperInstance.autoplay.stop();
    });
    formAnimWrapper.addEventListener('focusout', function() {
      swiperInstance.autoplay.start();
    });
  }
});