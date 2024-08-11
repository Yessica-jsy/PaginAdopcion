document.addEventListener("DOMContentLoaded", function(){
    const perritos = [
        {
            nombre: "Luna",
            imagen: "/img/raccoon.png",
            caracteristicas: [
                {nombre: "Sociable", porcentaje: 40, color: "blue"},
                {nombre: "Leal", porcentaje: 100, color: "red"},
                {nombre: "Inteligencia", porcentaje: 70, color: "yellow"},
                {nombre: "Carinioso", porcentaje: 90, color: "green"},
                {nombre: "Dependiente", porcentaje: 90, color: "purple"}
            ]
        },
        {
            nombre: "Copi Copi",
            imagen: "/img/raccoon.png",
            caracteristicas: [
                {nombre: "Sociable", porcentaje: 100, color: "blue"},
                {nombre: "Leal", porcentaje: 100, color: "red"},
                {nombre: "Inteligencia", porcentaje: 90, color: "yellow"},
                {nombre: "Carinioso", porcentaje: 70, color: "green"},
                {nombre: "Dependiente", porcentaje: 50, color: "purple"}
            ]
        },
        {
            nombre: "Lucy",
            imagen: "/img/raccoon.png",
            caracteristicas: [
                {nombre: "Sociable", porcentaje: 100, color: "blue"},
                {nombre: "Leal", porcentaje: 50, color: "red"},
                {nombre: "Inteligencia", porcentaje: 30, color: "yellow"},
                {nombre: "Carinioso", porcentaje: 50, color: "green"},
                {nombre: "Dependiente", porcentaje: 100 , color: "purple"}
            ]
        },
        {
            nombre: "Mateo",
            imagen: "/img/raccoon.png",
            caracteristicas: [
                {nombre: "Sociable", porcentaje: 90 , color: "blue"},
                {nombre: "Leal", porcentaje: 100 , color: "red"},
                {nombre: "Inteligencia", porcentaje: 100, color: "yellow"},
                {nombre: "Carinioso", porcentaje:60 , color: "green"},
                {nombre: "Dependiente", porcentaje: 100, color: "purple"}
            ]
        }
    ];
    const container = document.getElementById('puppyGrid');
    perritos.forEach(perrito => {
        const card = document.createElement('div');
        card.classList.add('flip-card');
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front" style="background-image: url('${perrito.imagen}');"></div>
                <div class="flip-card-back">
                    <h2>${perrito.nombre}</h2>
                    ${perrito.caracteristicas.map(caracteristica => `
                        <div class="caracteriticas">
                            <p>${caracteristica.nombre}</p>
                            <div class="barra">
                                <div class="porcentaje" style="width: ${caracteristica.porcentaje}%; background-color: ${caracteristica.color};"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
});
