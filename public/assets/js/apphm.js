function shrinkNav() {
  if (document.getElementById("content").scrollTop > 80) {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("logo").style.height = "40px";
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("logo").style.height = "80px";
  }
}
