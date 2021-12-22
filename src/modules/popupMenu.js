import util from './util';

export default () => {
    util.hamburger.addEventListener('click', () => {
        util.popupMenu.classList.add('is-active');
        util.toggleScroll();
    });

    document.querySelector('.popup-menu__btn-close').addEventListener('click', () => {
        util.closePopup();
        util.toggleScroll(); 
    });

    util.popupMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-menu')) {
            util.closePopup();
            util.toggleScroll();
        }
    });

    util.body.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
    
        util.closePopup();
        util.toggleScroll();
    });    
}