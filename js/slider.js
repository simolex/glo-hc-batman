const slider = () => {
  const hotelSlider = new Swiper(".main__slider", {
    // Optional parameters
    //direction: "vertical",
    loop: true,
    //effect: "flip",
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    slidesPerView: 2,
    spaceBetween: 28,
    // Navigation arrows
    navigation: {
      nextEl: ".main__button-next",
      //prevEl: ".hotel-slider__button--prev",
    },
  });
};
slider();
