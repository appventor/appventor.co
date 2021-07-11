// let imgs = document.querySelectorAll(".img-parallax");
// imgs.forEach((img)=>{
//     let imgParent = img.parentElement;
//
//     function  parallaxImg(){
//         let speed = img.getAttribute('data-speed');
//         let imgY = imgParent.offsetTop;
//         let winY = document.body.scrollTop;
//         let winH = img.clientHeight;
//         let parentH = imgParent.offsetHeight;
//         console.log('imgY: '+imgY,'winY: '+ winY, 'winH: '+ winH, 'parentH: '+ parentH);
//
//         let winBottom = winY + winH;
//         if(winBottom > imgY && winY< imgY+ parentH) {
//             let imgBottom = ((winBottom - imgY) * speed);
//             let imgTop = winH + parentH;
//             var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
//         }
//         // console.log(imgPercent);
//         img.setAttribute('top', imgPercent + '%');
//         img.setAttribute('transform', 'translate(-50%, -' + imgPercent + '%)')
//     }
//     document.addEventListener('scroll', function(e) {
//         parallaxImg();
//     });
// });

$('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
        var speed = img.data('speed');
        var imgY = imgParent.offset().top;
        var winY = $(this).scrollTop();
        var winH = $(this).height();
        var parentH = imgParent.innerHeight();

        console.log('imgY: '+imgY,' winY: '+ winY, ' winH: '+ winH+ ' parentH: '+ parentH);
        // The next pixel to show on screen
        var winBottom = winY + winH;

        // If block is shown on screen
        if (winBottom > imgY && winY < imgY + parentH) {
            // Number of pixels shown after block appear
            let imgBottom = ((winBottom - imgY) * speed);
            // Max number of pixels until block disappear
            var imgTop = winH + parentH;
            // Porcentage between start showing until disappearing
            var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        }
        console.log(imgPercent);
        img.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
        });
    }
    $(document).on({
        scroll: function () {
            parallaxImg();
        }, ready: function () {
            parallaxImg();
        }
    });
});
