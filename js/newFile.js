document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav(e.target)) {
    navbarNav.classList.remove("active");
  }
});
