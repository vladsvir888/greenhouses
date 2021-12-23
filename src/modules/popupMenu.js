
export default () => {
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('.popup-menu__btn-close');
    const mobileMenu = document.querySelector('.popup-menu');
    const overlay = document.querySelector('.overlay');

    if (hamburger) {
        hamburger.addEventListener('click', ()=> {      
            openMenu();
        });  
    }  

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            closeMenu();      
        });
    }  
    
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target.classList.contains('overlay')) {
                closeMenu();
            }
        });
    }

    function openMenu(){
        mobileMenu.classList.add('is-active');
        document.body.classList.add('no-scroll');
        window.addEventListener('keydown', pressedEscHandler);
    }

    function closeMenu() {
        mobileMenu.classList.remove('is-active');
        document.body.classList.remove('no-scroll');
        window.removeEventListener('keydown', pressedEscHandler);     
    }

    function pressedEscHandler(e) {
        if(e.key === 'Escape'){
            closeMenu();
        }
    }
}