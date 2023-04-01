let btnMobile = document.getElementById('btn-mobile');
let header = document.getElementById('header');
let linksMenu = document.querySelectorAll('#menu ul li a');

function toggleMenu(){
    header.classList.toggle('active');
}

linksMenu.forEach (link=>{
    link.addEventListener('click', toggleMenu);
})

btnMobile.addEventListener('click', toggleMenu);