import Swiper, { Pagination, Autoplay } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
