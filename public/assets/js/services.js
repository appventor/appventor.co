const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
const sticky = document.querySelector('.sticky');

const cards =  document.querySelectorAll('.service-card');
const card_overlay = document.querySelectorAll('.service-card__overlay');
const card_title = document.querySelectorAll('.service-card__title');
const card_cta = document.querySelectorAll('.service-card__cta');

function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

let locked = false;

window.addEventListener('scroll',()=> runOnScroll());

let runOnScroll =  function() {
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    if(locked) return;
    cards.forEach((card, index)=>{
        if(card.getBoundingClientRect().left < window.innerWidth / 3){
            locked = true;
            if(index > 0){
                card_overlay[index - 1].style.opacity = '0';
                cards[index -1].style.transform = 'scale(1)';
                cards[index -1].style.boxShadow = '2px 2px 16px 0px rgba(0,0,0,0.375);';
                cards[index -1].style.borderRadius = '2px';
                card_title[index -1].style.opacity = '0';
                card_title[index - 1].style.transform = 'scale(.875) perspective(512px) translate3d(0, 64px, 64px)';
                card_cta[index -1].style.opacity = '0';
                card_cta[index - 1].style.transform = 'scale(.875) perspective(512px) translate3d(0, 64px, 64px)';
            }
            card.style.transform = 'scale(1.2)';
            card.style.boxShadow = '4px 4px 24px 0px rgba(0,0,0,0.25)';
            card.style.borderRadius = '4px';
            card_overlay[index].style.opacity = '.625';
            card_title[index].style.opacity = '1';
            card_title[index].style.transform = 'scale(1) perspective(512px) translate3d(0, -32px, 64px)';
            card_cta[index].style.opacity = '1';
            card_cta[index].style.transform = 'scale(1) perspective(512px) translate3d(0, -32px, 64px)';
        } else {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '2px 2px 16px 0px rgba(0,0,0,0.375);';
            card.style.borderRadius = '2px';
            card_overlay[index].style.opacity = '0';
            card_title[index].style.opacity = '0';
            card_title[index].style.transform = 'scale(.875) perspective(512px) translate3d(0, 64px, 64px)';
            card_cta[index].style.opacity = '0';
            card_cta[index].style.transform = 'scale(.875) perspective(512px) translate3d(0, 64px, 64px)';
        }
        setTimeout(()=> locked = false, 200);


    });
};

// window.addEventListener('resize', () => {
//     spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
// });