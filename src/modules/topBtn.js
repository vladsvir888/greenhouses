export default () => {
    const topBtn = document.querySelector('.top-btn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 800) {
            topBtn.classList.add('is-active');
        } else {
            topBtn.classList.remove('is-active');
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}