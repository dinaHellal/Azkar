document.getElementById("dark-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("dark-theme").src = "assets/icons/moon.png";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("dark-theme").src = "assets/icons/sun.png";
  }
};
document.getElementById("toggle-icon").onclick = () => {
  document.getElementById("nav-menu").classList.toggle("open");
};
