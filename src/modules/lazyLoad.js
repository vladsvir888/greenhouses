import LazyLoad from "vanilla-lazyload";

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    const lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazy',
    });
  }
}