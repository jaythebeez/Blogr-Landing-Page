const dropdowns = document.querySelectorAll('.dropdown-button');
const openNavButton = document.querySelector('.open-nav-button');
const navLinks = document.querySelector('.nav-links');
const navEnd = document.querySelector('.nav-end');


dropdowns.forEach(dropdown=>{
    dropdown.addEventListener('click',e=>{
        const menu = document.querySelector('.dropdown-menu');
        menu.classList.toggle('flex');
    })
});

openNavButton.addEventListener('click', (e)=>{
    navLinks.classList.toggle('flex');
    console.log(e);
});