export default () => {
    const targetElement = document.querySelector('.promo');
    const navigation = document.querySelector('.header__bottom');

    if (targetElement && navigation) {
        const callback = function (entries) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    navigation.classList.add('header__fixed');
                    document.querySelector('body').style.paddingTop = `${navigation.clientHeight}px`;
                } else {
                    navigation.classList.remove('header__fixed');
                    document.querySelector('body').style.paddingTop = '';
                }
            });
        };
        const observer = new IntersectionObserver(callback, {});
        observer.observe(targetElement);
    }
};