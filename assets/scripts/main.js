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

fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let evening = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      evening += `
  
  <li>
  <p> <span>${data["أذكار المساء"][i].content}</span> <span>${data["أذكار المساء"][i].count}</span></p>
  <p class="description">${data["أذكار المساء"][i].description}</p>
  </li>`;
    }
    document.getElementById("evening-remembrances").innerHTML = evening;
  });

fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let afterPrayer = "";
    for (let i = 0; i < data["أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      afterPrayer += `
  
  <li>
  <p> <span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].content}</span> <span>${data["أذكار بعد السلام من الصلاة المفروضة"][i].count}</span></p>
  <p class="description">${data["أذكار بعد السلام من الصلاة المفروضة"][i].description}</p>
  </li>`;
    }
    document.getElementById("after-prayer-remembrances").innerHTML = afterPrayer;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let rosaries = "";
    for (let i = 0; i < data["تسابيح"].length; i++) {
      rosaries += `
  
  <li>
  <p> <span>${data["تسابيح"][i].content}</span> <span>${data["تسابيح"][i].count}</span></p>
  <p class="description">${data["تسابيح"][i].description}</p>
  </li>`;
    }
    document.getElementById("rosaries-remembrances").innerHTML = rosaries;
  });
  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let sleeping = "";
    for (let i = 0; i < data["أذكار النوم"].length; i++) {
      sleeping += `
  
  <li>
  <p> <span>${data["أذكار النوم"][i].content}</span> <span>${data["أذكار النوم"][i].count}</span></p>
  <p class="description">${data["أذكار النوم"][i].description}</p>
  </li>`;
    }
    document.getElementById("sleeping-remembrances").innerHTML = sleeping;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let wakeUp = "";
    for (let i = 0; i < data["أذكار الاستيقاظ"].length; i++) {
      wakeUp += `
  
  <li>
  <p> <span>${data["أذكار الاستيقاظ"][i].content}</span> <span>${data["أذكار الاستيقاظ"][i].count}</span></p>
  <p class="description">${data["أذكار الاستيقاظ"][i].description}</p>
  </li>`;
    }
    document.getElementById("wake-up-remembrances").innerHTML = wakeUp;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let quran = "";
    for (let i = 0; i < data["أدعية قرآنية"].length; i++) {
      quran += `
  
  <li>
  <p> <span>${data["أدعية قرآنية"][i].content}</span> <span>${data["أدعية قرآنية"][i].count}</span></p>
  <p class="description">${data["أدعية قرآنية"][i].description}</p>
  </li>`;
    }
    document.getElementById("quran-supplications").innerHTML = quran;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let prophets = "";
    for (let i = 0; i < data["أدعية الأنبياء"].length; i++) {
      prophets += `
  
  <li>
  <p> <span>${data["أدعية الأنبياء"][i].content}</span> <span>${data["أدعية الأنبياء"][i].count}</span></p>
  <p class="description">${data["أدعية الأنبياء"][i].description}</p>
  </li>`;
    }
    document.getElementById("prophets-supplications").innerHTML = prophets;
  });