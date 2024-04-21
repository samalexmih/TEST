const menu = document.querySelector('.menu');
const navBtn = document.querySelector('.navigation')
const summary = document.querySelector('.summary');

const collapseBtn = document.querySelectorAll('.collapse');
const list = document.querySelectorAll('.list-content');

navBtn.addEventListener('click',()=> {
    menu.classList.toggle('active');
})

collapseBtn.addEventListener('click',()=> {
    list.classList.add('inactive');
})




