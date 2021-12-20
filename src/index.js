// bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"

// font-awesome
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'

// vanilla-lazyload
import LazyLoad from "vanilla-lazyload";

// animate.css
import "animate.css";

// normalize.css
import "normalize.css";

// swiper
// import Swiper from '../node_modules/swiper/swiper-bundle.min';
// import 'swiper/css/bundle';

// styles
import "./styles/style.scss";

// modules
import config from "./modules/config";
import wow from "./modules/wow.js";
import LightCountdown from "./modules/lightCountdown/lightCountdown";
import form from "./modules/form";

form();
document.addEventListener('DOMContentLoaded', () => {
  wow.init();
  new LightCountdown(config.lightCountdown).play();

  // eslint-disable-next-line no-unused-vars
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });

  const header = document.querySelector('.header__bottom');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
  })
});