// bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"

// vanilla-lazyload
import LazyLoad from "vanilla-lazyload";

// animate.css
import "animate.css";

// normalize.css
import "normalize.css";

// styles
import "./styles/style.scss";

// modules
import config from "./modules/config";
import wow from "./modules/wow.js";
import LightCountdown from "./modules/lightCountdown/lightCountdown";
import form from "./modules/form";
import header from "./modules/header";
import topBtn from "./modules/topBtn";
import scrollToAnchors from "./modules/scrollToAnchors";
import popupMenu from "./modules/popupMenu";

form();
document.addEventListener('DOMContentLoaded', () => {
  wow.init();
  new LightCountdown(config.lightCountdown).play();
  header();
  topBtn();
  scrollToAnchors();
  popupMenu();

  // eslint-disable-next-line no-unused-vars
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });
});