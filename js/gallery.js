document.addEventListener("DOMContentLoaded", function () {
  const perritos = [
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "14 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "8 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "15 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "13 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "9 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "5 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "11 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "13 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "7 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "3 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "7 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "4 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "8 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "7 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "5 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "1 año",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "4 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "1 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "7 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "8 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "2 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "8 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "10 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "12 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "6 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "3 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "2 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "1 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "2 años",
    },
    {
      nombre: "Copi Copi",
      imagen: "../img/raccoon.png",
      link: "generic.html",
      edad: "12 años",
    },
  ];
  const container = document.getElementById("dogList");
  perritos.forEach((perrito) => {
    const card = document.createElement("li");
    card.classList.add("flip-card");
    card.innerHTML = `
                <img class="picture" src="${perrito.imagen}" alt="">
                <a href="${perrito.link}" class="links"> <h2>${perrito.nombre}</h2><p>${perrito.edad}</p></a>
                </div>
        `;
    container.appendChild(card);
  });
});
