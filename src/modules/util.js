export default {
  body: document.querySelector('body'),

  toggleScroll() {
      this.body.classList.toggle('no-scroll');
  },

  closePopup() {
    document.querySelector('.popup-menu.is-active').classList.remove('is-active');
  },

  hamburger: document.querySelector('.hamburger'),

  popupMenu: document.querySelector('.popup-menu'),
};