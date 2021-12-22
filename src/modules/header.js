export default () => {
    const header = document.querySelector('.header__bottom');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    });
}