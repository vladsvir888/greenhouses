export default () => {
    const menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const href = link.getAttribute('href').slice(1);

            const scrollToSectionClass = document.querySelector(`.${href}`);

            if (scrollToSectionClass === null) return;

            scrollToSectionClass.scrollIntoView({
                block: 'start', 
                behavior: 'smooth',
            });

            const activePopup = document.querySelector('.popup-menu.is-active');

            if (activePopup) {
                activePopup.classList.remove('is-active');
                document.body.classList.remove('no-scroll');
            }
        });
    })
}