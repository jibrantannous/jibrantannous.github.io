
// MOBILE NAV BUTTON & ITEMS EVENT
const headerMobOpenButton = document.querySelector('.header__mobOpenButton');
const headerMobCloseButton = document.querySelector('.header__mobCloseButton');
const headerNavItem = document.querySelectorAll('.header__navItem');

headerMobOpenButton.addEventListener('click', openCloseModal);
headerMobCloseButton.addEventListener('click', openCloseModal);

for (let i = 0; i < headerNavItem.length; i++) {
    headerNavItem[i].addEventListener('click', openCloseModal);
}

function openCloseModal() {
    document.querySelector('.header__navBox').classList.toggle('openModal');
}

// STICKY HEADER
window.onscroll = () => {
    stickyNavBar();
};

function stickyNavBar() {

    const header = document.querySelector('#header');

    if (window.pageYOffset > 0) {
        header.classList.add('hdsticky');
    } else {
        setTimeout( () => {
            header.classList.remove('hdsticky');
        }, 100);
    }
}