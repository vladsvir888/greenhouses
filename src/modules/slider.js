import Swiper, { Thumbs, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Thumbs, Navigation]);

export default () => {
  const myCustomSlider = document.querySelectorAll('.gallery-top');
  const myCustomGalleryThumbs = document.querySelectorAll('.thumbs-class');

  for (let i = 0; i < myCustomSlider.length; i++) {
    myCustomSlider[i].classList.add('gallery-top-' + i);
    myCustomGalleryThumbs[i].classList.add('thumbs-class-' + i);

    const galleryThumbs = new Swiper('.thumbs-class-' + i , {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // eslint-disable-next-line no-unused-vars
    const galleryTop = new Swiper('.gallery-top-' + i, {
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs
      }
    }); 
  }
}