'use strict';

const navbar =document.querySelector('#navbar')
const homeBtn = document.querySelector('.home__btn');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }

} ) 

homeBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
})

function scrollIntoView(selector) {
        const scrollTo =document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}