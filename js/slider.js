const slider = () => {
  const hotelSlider = new Swiper(".main__slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 28,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".main__button-next",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
    },
  });
};
slider();
