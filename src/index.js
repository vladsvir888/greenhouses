// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// animate.css
import "animate.css";

// glightbox css
import 'glightbox/dist/css/glightbox.min.css';

// styles
import "./styles/style.scss";

// modules
import wow from "./modules/wow.js";
import glightbox from "./modules/glightbox";
import lazyLoad from "./modules/lazyLoad";
import form from "./modules/form";
import header from "./modules/header";
import topBtn from "./modules/topBtn";
import scrollToSection from "./modules/scrollToSection";
import popupMenu from "./modules/popupMenu";
import calc from "./modules/calc";
import slider from "./modules/slider";

form();
document.addEventListener('DOMContentLoaded', () => {
  wow.init();
  glightbox.init();
  lazyLoad.init();
  header();
  topBtn();
  scrollToSection();
  popupMenu();
  calc();
  slider();
});