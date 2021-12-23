// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// vanilla-lazyload
import LazyLoad from "vanilla-lazyload";

// animate.css
import "animate.css";

// normalize.css
import "normalize.css";

// styles
import "./styles/style.scss";

// modules
import wow from "./modules/wow.js";
import form from "./modules/form";
import header from "./modules/header";
import topBtn from "./modules/topBtn";
import scrollToSection from "./modules/scrollToSection";
import popupMenu from "./modules/popupMenu";
import calculator from "./modules/calculator";

form();
document.addEventListener('DOMContentLoaded', () => {
  wow.init();
  header();
  topBtn();
  scrollToSection();
  popupMenu();
  calculator();

  // eslint-disable-next-line no-unused-vars
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });
});