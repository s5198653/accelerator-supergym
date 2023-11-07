const initSwiper = () => {
  return new window.Swiper('[data-swiper="swiper"]', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '[data-button="next"]',
      prevEl: '[data-button="prev"]',
    },
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
};

export { initSwiper };
