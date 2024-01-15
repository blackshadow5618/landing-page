const navBtn = document.querySelector('.navbar-btn');
const navbar = document.querySelector('.navbar .navbar-links');

navBtn.addEventListener('click', ()=>{
    console.log(navbar);
    navBtn.classList.toggle('toggle');
})