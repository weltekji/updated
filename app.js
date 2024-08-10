const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__links'); // Select all the links in the navbar

menu.addEventListener('click', function() {
   menu.classList.toggle('is-active');
   menuLinks.classList.toggle('active');
});

// Close the mobile menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});
