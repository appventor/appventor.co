const box = document.querySelector('.box');
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("navbar")[0].style.height = "50px";
        document.getElementById("logo").style.height = "40px";
    } else {
        document.getElementsByClassName("navbar")[0].style.height = "100px";
        document.getElementById("logo").style.height = "80px";
    }
    if(isInViewport(box)){
        console.log('true');
        box.style.overflowY = 'scroll'
    } else {
        console.log('false');
        box.style.overflowY = 'hidden'
    }
});

const preloader = document.querySelector('.preloader');
const pulse = document.querySelector('.pulsating-circle');

window.addEventListener("load", function () {
	// setTimeout(function(){
    preloader.style.opacity = '0';
    preloader.style.visibility = "hidden";
	// }, 450000);
});

// document.getElementById("dmtoggle").addEventListener("click", toggleDarkmode);

function toggleDarkmode() {
    var light = document.querySelectorAll('[class*="-light"]');
    var dark = document.querySelectorAll('[class*="-dark"]');
    light.forEach(xFunction);
    dark.forEach(xFunction);
    // document.body.classList.toggle('light dark');
}

function xFunction(element, index){
    console.log(element)
    element.classList.toggle('bg-light bg-dark')
    element.classList.toggle('text-light text-dark')
    element.classList.toggle('navbar-light navbar-dark')
}