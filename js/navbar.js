const ul = document.querySelector("nav ul.navbar-nav");

const routes = [
  {
    path: "noticias",
    name: "Noticias",
  },
  {
    path: "catalogo",
    name: "Tienda",
  },
  {
    path: "ofertas",
    name: "Ofertas",
  },
  {
    path: "marcas",
    name: "Marcas",
  },
  {
    path: "accesorios",
    name: "Accesorios",
  },
];

for (const route of routes) {
  ul.innerHTML += `<li class="nav-item">
  <a class="nav-link active" href="${route.path}.html">${route.name}</a></li>`;
}