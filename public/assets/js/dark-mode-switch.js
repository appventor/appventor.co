let darkSwitch = document.getElementById("dmtoggle");
window.addEventListener("load", function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("click", ev => resetTheme());
  }
});

function initTheme() {
  let darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  // darkSwitch.checked = darkThemeSelected;
  if(localStorage.getItem("darkSwitch") !== null)
  darkThemeSelected
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.removeAttribute("data-theme");
  else
    document.body.setAttribute("data-theme", "dark")
}

function resetTheme() {
  let dark = document.body.getAttribute("data-theme")
  if (dark === 'dark') {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  } else {
    console.log('its daark')
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  }
}
