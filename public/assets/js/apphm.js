function shrinkNav() {
  if (document.getElementById("content").scrollTop > 80) {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("logo").style.height = "40px";
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("logo").style.height = "80px";
  }
}

const preloader = document.querySelector('.preloader');
const pulse = document.querySelector('.pulsating-circle');
// const fadeEffect = setInterval(() => {
//   console.log("WHY");
//   // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
//   if (!preloader.style.opacity) {
//     preloader.style.opacity = 1;
//   }
//   if (preloader.style.opacity > 0) {
//     preloader.style.opacity -= 0.1;
//   } else {
//     clearInterval(fadeEffect);
//   }
// }, 200);

// window.addEventListener('load', fadeEffect);

window.addEventListener("load", function () {
	console.log("load fn");
	setTimeout(function(){
    console.log("timer loaded");
    preloader.style.opacity = 0;
    preloader.style.visibility = "hidden";
	}, 1500);
});


// window.addEventListener("load", function () {
// 	var body = document.body;
// 	console.log("load fn");
// 	setTimeout(function(){
// 		console.log("timer loaded");
// 		body.classList.add("loaded");
// 	}, 1500);
// });