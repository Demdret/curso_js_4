/* guitarras.js  Esto fue sacado con IA de ChatGPT con el siguiente prompt:
  hazme un archivo js de 6 objetos de guitarras electricas con imagenes reales y otros atributos para unas cards
*/
const data = [
  {
    id: 1,
    marca: "Fender",
    modelo: "Stratocaster",
    precio: 1200,
    color: "Sunburst",
    imagen: "./img/fender.jpg",
    descripcion: "La icónica Fender Stratocaster con acabado Sunburst, popular en blues y rock."
  },
  {
    id: 2,
    marca: "Gibson",
    modelo: "Les Paul Standard",
    precio: 2500,
    color: "Cherry Sunburst",
    imagen: "./img/gibson.jpg",
    descripcion: "La Gibson Les Paul Standard ofrece un tono cálido y sustain legendario."
  },
  {
    id: 3,
    marca: "Ibanez",
    modelo: "RG550",
    precio: 1000,
    color: "Neon Yellow",
    imagen: "./img/ibanez.jpg",
    descripcion: "Una guitarra veloz y moderna, favorita para metal y shredding."
  },
  {
    id: 4,
    marca: "PRS",
    modelo: "Custom 24",
    precio: 3200,
    color: "Whale Blue",
    imagen: "./img/prs.jpg",
    descripcion: "La PRS Custom 24 combina diseño elegante con gran versatilidad sonora."
  },
  {
    id: 5,
    marca: "Jackson",
    modelo: "Soloist SL1",
    precio: 1500,
    color: "Black",
    imagen: "./img/jackson.jpg",
    descripcion: "Jackson Soloist, diseñada para velocidad y riffs pesados, clásica del metal."
  },
  {
    id: 6,
    marca: "ESP",
    modelo: "LTD EC-1000",
    precio: 1200,
    color: "See Thru Black",
    imagen: "./img/esp.jpg",
    descripcion: "La ESP LTD EC-1000 ofrece potencia y estilo para rock y metal moderno."
  }
];

const contenedorProductos = document.getElementById('lista-productos');
const contenedorBotones = document.getElementById('botones-categorias');

function mostrarProductos(guitarrasAMostrar) {
    contenedorProductos.innerHTML = '';
    guitarrasAMostrar.forEach(guitarra => {
        const productoCard = document.createElement('div');
        productoCard.classList.add('producto-card');

        productoCard.innerHTML = `<img src="${guitarra.imagen}" alt="${guitarra.marca} ${guitarra.modelo}">
            <h3>${guitarra.marca} ${guitarra.modelo}</h3>
            <p class="descripcion">${guitarra.descripcion}</p>
            <p class="precio">$${guitarra.precio}</p>`;
        contenedorProductos.appendChild(productoCard);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const marcasUnicas = ['todos'];
    data.forEach(guitarra => {
        if (!marcasUnicas.includes(guitarra.marca)) {
            marcasUnicas.push(guitarra.marca);
        }
    });

    marcasUnicas.forEach(marca => {
        const boton = document.createElement('button');
        boton.classList.add('filtro-btn');
        boton.textContent = marca.charAt(0).toUpperCase() + marca.slice(1);
        boton.dataset.marca = marca; 
        if (marca === 'todos') {
            boton.classList.add('active');
        }
        contenedorBotones.appendChild(boton);
    });
  
    const botonesFiltro = document.querySelectorAll('.filtro-btn');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            const marcaSeleccionada = boton.dataset.marca;
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');

            let guitarrasFiltradas;
            if (marcaSeleccionada === 'todos') {
                guitarrasFiltradas = data;
            } else {
                guitarrasFiltradas = data.filter(guitarra => guitarra.marca === marcaSeleccionada);
            }
            mostrarProductos(guitarrasFiltradas);
        });
    });
    mostrarProductos(data);
});