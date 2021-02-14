'use strict';

const navbar =document.querySelector('#navbar')
const home =document.querySelector('.home-container')
const homeBtn = document.querySelector('.home__btn');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarHeight = navbar.getBoundingClientRect().height;
const homeHeight = home.getBoundingClientRect().height;
const arrowBtn = document.querySelector('.arrow__btn');
const workCategoriesBtn = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project');

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


document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    if(window.scrollY > homeHeight/2){
        arrowBtn.classList.add('visible');
    }else{
        arrowBtn.classList.remove('visible');
    }
} ) 

arrowBtn.addEventListener('click', () => {
    scrollIntoView('#home');
})




workCategoriesBtn.addEventListener('click', (event) => {
    const target = event.target;
    const filter = target.dataset.filter || target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }
    
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            const type = project.dataset.type
            if(filter === type || filter == '*'){
                project.classList.remove('invisible');
            }else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});


function scrollIntoView(selector) {
    const scrollTo =document.querySelector(selector);
scrollTo.scrollIntoView({behavior:'smooth'});
}