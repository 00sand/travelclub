let isMenuOpen = false;
let burger = document.getElementsByClassName('toggle-button')[0];
let ul = document.getElementsByClassName('mobile-menu')[0];
let hamburger = document.querySelector('.hamburger');

burger.addEventListener('click', () => {
    ul.classList.toggle('active')
    console.log('hi');
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        hamburger.classList.add('open')
    } else {
        hamburger.classList.remove('open')
    }
})

