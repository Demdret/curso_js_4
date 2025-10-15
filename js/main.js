const main = document.querySelector("main section");

const input = document.querySelector("#Searching");
const buttomClean = document.querySelector("#btnClean");

const dataMain = data.map((productos) => {
  return `<div class="producto-card p-1">
                <img src="${productos.imagen}" alt="${productos.marca} ${productos.modelo}">
            <h3>${productos.marca} ${productos.modelo}</h3>
            <p class="descripcion">${productos.descripcionCorta}</p>
            <p class="precio">$${productos.precio}</p>
            <a href="./producto.html?id=${productos.id}" class="btn btn-primary">Ver más</a>
            </div>`;
});

main.innerHTML = dataMain.join("");

function filterData() {
  const filter = input.value.trim().toLowerCase();
  const filterData = data.filter(
    (guitarras) =>
      guitarras.marca.toLowerCase().includes(filter) ||
      guitarras.modelo.toLowerCase().includes(filter)
  );

  main.innerHTML = "";

  main.innerHTML = filterData
    .map(
      (producto) => `
            <div class="producto-card">
                <img src="${producto.imagen}" alt="${producto.marca} ${producto.modelo}">
            <h3>${producto.marca} ${producto.modelo}</h3>
            <p class="descripcion">${producto.descripcionCorta}</p>
            <p class="precio">$${producto.precio}</p>
            <a href="./producto.html?id=${producto.id}" class="btn btn-primary">Ver más</a>
            </div>`
    )
    .join("");
}

function mostrarCards() {
  input.value = "";
  main.innerHTML = dataMain.join("");
}

Searching.addEventListener("input", filterData);
buttomClean.addEventListener("click", mostrarCards);
