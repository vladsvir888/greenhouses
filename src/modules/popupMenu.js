import util from './util';

export default () => {
    util.hamburger.addEventListener('click', () => {
        const popupMenu = document.querySelector('.popup-menu');

        if (popupMenu === null) return;

        popupMenu.classList.add('is-active');
        util.toggleScroll();
    });

    document.querySelector('.popup-menu__btn-close').addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('popup-menu__btn-close')) {
            util.closePopup();
            util.toggleScroll(); 
        }
    });

    document.querySelector('.popup-menu').addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-menu')) {
            util.closePopup();
            util.toggleScroll();
        }
    });
}