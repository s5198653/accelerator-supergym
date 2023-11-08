const initReviewsSwiper = () => {
  return new window.Swiper('[data-swiper="reviews-swiper"]', {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '[data-button="reviews-next"]',
      prevEl: '[data-button="reviews-prev"]',
    },
    breakpoints: {
      1366: {
        allowTouchMove: false,
      },
      320: {
        allowTouchMove: true,
      },
    },
  });
};

export { initReviewsSwiper };
