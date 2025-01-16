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

fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let morning = "";
    for (let i = 0; i < data["أذكار الصباح"].length; i++) {
      morning += `
  
  <li>
  <p> <span>${data["أذكار الصباح"][i].content}</span> <span>${data["أذكار الصباح"][i].count}</span></p>
  <p class="description">${data["أذكار الصباح"][i].description}</p>
  </li>`;
    }
    document.getElementById("morning-remembrances").innerHTML = morning;
  });

