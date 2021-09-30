const headerLangSelect = document.querySelector('.header__langSelect');
const langContentCloseModal = document.querySelector('.langContent__closeModal');
const langModal = document.querySelector('.langOverlay');

headerLangSelect.addEventListener('click', openCloseModal);
langContentCloseModal.addEventListener('click', openCloseModal);

window.onclick = function(event) {
    if (event.target == langModal) {
        openCloseModal();
    }
}

function openCloseModal() {
    langModal.classList.toggle('openModal');
}