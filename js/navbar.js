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

const dataUser = document.querySelector("#dataUser");
const email = localStorage.getItem("email");
const pathname = window.location.pathname.split("/")[1];
const search = new URLSearchParams(window.location.search).get("id");

console.log(search);
email
  ? (dataUser.innerHTML = `Hola! ${localStorage.getItem("email")}
      <button
          type="button"
          class="btn btn-danger"
          onclick="localStorage.removeItem('email'); window.location.reload();"
        >
          Cerrar Sesion
      </button>`)
  : (dataUser.innerHTML = `
      <button
          type="button"
          class="btn btn-primary"
          onclick="location.href = './login.html?redirect=${pathname}${
      search ? "&id=" + search : ""
    }'"
        >
          Iniciar Sesion
      </button>`);
