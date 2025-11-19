const main = document.querySelector("main section");

const input = document.querySelector("#Searching");
const buttomClean = document.querySelector("#btnClean");

// const spinnerHTML = `
//   <div class="d-flex justify-content-center mt-5">
//     <div class="spinner-border text-primary" role="status" style="width: 4rem; height: 4rem;">
//       <span class="visually-hidden">Cargando...</span>
//     </div>
//   </div>
// `;

function loadData() {
  //Crear clase para el spinner
  // main.classList.add("spinner-loading");

  // // Mostrar spinner
  // main.innerHTML = spinnerHTML;

  // Crear promesa simulando carga de 3 segundos
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data); // data viene del archivo productos.js
    }, 3000);
  }).then((productos) => {
    renderCards(productos);
  });
}

function renderCards(productos) {
  main.innerHTML = productos
    .map(
      (producto) => `
        <div class="producto-card p-1">
          <img src="${producto.imagen}" alt="${producto.marca} ${producto.modelo}">
          <h3>${producto.marca} ${producto.modelo}</h3>
          <p class="descripcion">${producto.descripcionCorta}</p>
          <p class="precio">$${producto.precio}</p>
          <a href="./producto.html?id=${producto.id}" class="btn btn-primary">Ver más</a>
        </div>`
    )
    .join("");
}

function filterData() {
  const filter = input.value.trim().toLowerCase();
  let cantidadLetras = input.value.length;
  if (cantidadLetras >= 3) {
    const filterData = data.filter(
      (guitarras) =>
        guitarras.marca.toLowerCase().includes(filter) ||
        guitarras.modelo.toLowerCase().includes(filter)
    );

    renderCards(filterData);
  } else {
    renderCards(data);
  }
}

function mostrarCards() {
  input.value = "";
  renderCards(data);
}

Searching.addEventListener("input", filterData);
buttomClean.addEventListener("click", mostrarCards);

loadData();
