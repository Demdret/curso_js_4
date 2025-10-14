const contenedorProductos = document.getElementById("lista-productos");
const contenedorBotones = document.getElementById("botones-categorias");

function mostrarProductos(guitarrasAMostrar) {
  contenedorProductos.innerHTML = "";
  guitarrasAMostrar.forEach((guitarra) => {
    const productoCard = document.createElement("div");
    productoCard.classList.add("producto-card");

    productoCard.innerHTML = `<img src="${guitarra.imagen}" alt="${guitarra.marca} ${guitarra.modelo}">
            <h3>${guitarra.marca} ${guitarra.modelo}</h3>
            <p class="descripcion">${guitarra.descripcion}</p>
            <p class="precio">$${guitarra.precio}</p>
            <a href="./producto.html?id=${guitarra.id}" class="btn btn-primary">Ver más</a>`;
    contenedorProductos.appendChild(productoCard);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const marcasUnicas = ["todos"];
  data.forEach((guitarra) => {
    if (!marcasUnicas.includes(guitarra.marca)) {
      marcasUnicas.push(guitarra.marca);
    }
  });

  marcasUnicas.forEach((marca) => {
    const boton = document.createElement("button");
    boton.classList.add("filtro-btn");
    boton.textContent = marca.charAt(0).toUpperCase() + marca.slice(1);
    boton.dataset.marca = marca;
    if (marca === "todos") {
      boton.classList.add("active");
    }
    contenedorBotones.appendChild(boton);
  });

  const botonesFiltro = document.querySelectorAll(".filtro-btn");

  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      const marcaSeleccionada = boton.dataset.marca;
      botonesFiltro.forEach((btn) => btn.classList.remove("active"));
      boton.classList.add("active");

      let guitarrasFiltradas;
      if (marcaSeleccionada === "todos") {
        guitarrasFiltradas = data;
      } else {
        guitarrasFiltradas = data.filter(
          (guitarra) => guitarra.marca === marcaSeleccionada
        );
      }
      mostrarProductos(guitarrasFiltradas);
    });
  });
  mostrarProductos(data);
});
