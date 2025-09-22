const ul = document.querySelector("nav ul");

const routes = [
  {
    path: "/ecommerce",
    name: "Inicio",
  },
  {
    path: "/about",
    name: "Sobre Nosotros",
  },
  {
    path: "/pants",
    name: "Pantalones",
  },
  {
    path: "/shoes",
    name: "Zapatos",
  },
  {
    path: "/accessories",
    name: "Accesorios",
  },
];

for (const route of routes) {
  ul.innerHTML += `<li><a href="${route.path}.html">${route.name}</a></li>`;
}
