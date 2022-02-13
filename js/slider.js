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
  });
};
slider();
