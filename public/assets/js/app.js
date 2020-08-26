/* Please ❤ this if you like it! */

// (function ($) {
//   "use strict";

//   $(function () {
//     var header = $(".start-style");
//     $(window).scroll(function () {
//       var scroll = $(window).scrollTop();
//       if (scroll >= 10) {
//         header.removeClass("start-style").addClass("scroll-on");
//       } else {
//         header.removeClass("scroll-on").addClass("start-style");
//       }
//     });
//   });

//   //Menu On Hover

//   $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
//     if ($(window).width() > 750) {
//       var _d = $(e.target).closest(".nav-item");
//       _d.addClass("show");
//       setTimeout(function () {
//         _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
//       }, 1);
//     }
//   });

//   //Switch light/dark

//   $("#darkmode").on("click", function () {
//     if ($("body").hasClass("dark")) {
//       $("body").removeClass("dark");
//       $("#switch").removeClass("switched");
//     } else {
//       $("body").addClass("dark");
//       $("#switch").addClass("switched");
//     }
//   });
// })(jQuery);

window.onscroll = function () {
  shrinkScroll();
};

function shrinkScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log("shrink");
    document.getElementsByClassName("navbar").style.height = "50px";
    document.getElementById("logo").style.height = "40px";
  } else {
    console.log("unshrink");
    document.getElementsByClassName("navbar").style.height = "100px";
    document.getElementById("logo").style.height = "80px";
  }
}

// window.addEventListener("scroll", function () {
//   var header = document.querySelector(".main");
//   var scroll = header.scrollTop;

//   if (scroll >= 10) {
//     console.log(scroll);
//     // header.removeClass("start-style").addClass("scroll-on");
//   } else {
//     console.log("scroll value:", scroll);

//     // header.removeClass("scroll-on").addClass("start-style");
//   }
// });

// window.addEventListener("load", function () {
//   var delayInMilliseconds = 3000;
//   setTimeout(function () {
//     console.log("loaded");
//     document.querySelector("body").classList.add("loaded");
//     document.querySelector("preloader").remove();
//   }, delayInMilliseconds);
// });

/*-----------------------------------------------
|   Pre-loader
-----------------------------------------------*

$.holdReady(true);
$($('main section')[0]).imagesLoaded({
  background: '.bg-holder'
}, function () {
  $.holdReady(false);
});
spUtils.$document.ready(function () {
  var $preloader = $('#preloader');
  $preloader.addClass('loaded');
  setTimeout(function () {
    $preloader.remove();
  }, 800);
});



*/

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }
