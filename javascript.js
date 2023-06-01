
let immagine1 = document.querySelector(".left > img:nth-child(1)");
let immagine2 = document.querySelector(".left > img:nth-child(2)");
let immagine3 = document.querySelector(".left > img:nth-child(3)");
let immagine4 = document.querySelector(".left > img:nth-child(4)");
console.log(immagine1);


const array = [immagine1, immagine2 , immagine3 , immagine4];



function cambia2() {
  if (immagine1.className.includes("active")) {
    immagine1.classList.remove("active");
    immagine2.classList.add("active");
  } else {
    immagine2.classList.add("active");
  }
}

function cambia3() {
  if (immagine2.className.includes("active")) {
    immagine2.classList.remove("active");
    immagine3.classList.add("active");
  } else {
    immagine3.classList.add("active");
  }
}

function cambia4() {
  if (immagine3.className.includes("active")) {
    immagine3.classList.remove("active");
    immagine4.classList.add("active");
  } else {
    immagine4.classList.add("active");
  }
}
function cambia5() {
  if (immagine4.className.includes("active")) {
    immagine4.classList.remove("active");
    immagine1.classList.add("active");
  } else {
    immagine1.classList.remove("active");
  }
}

function ripeti() {
  setTimeout(cambia2, 3000);
  setTimeout(cambia3, 6000);
  setTimeout(cambia4, 9000);
  setTimeout(cambia5, 12000);
}

ripeti();

setInterval(ripeti, 12000);
