document.querySelector("header").innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">E-Commerce</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav"></ul>
          </div>
          <div id="cartContainerNavBar"></div>
        </div>
        <div id="dataUser">
          <button
            type="button"
            class="btn btn-primary"
            onclick="location.href = './login.html'"
          >
            Iniciar Sesion
          </button>
        </div>
      </nav>
`;

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

// buttons or show data user and button for logout
const dataUser = document.querySelector("#dataUser");
const email = localStorage.getItem("email");
const pathname = window.location.pathname.split("/")[1];
const search = new URLSearchParams(window.location.search).get("id");

const cartContainerNavBar = document.querySelector("#cartContainerNavBar");

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainerNavBar.innerHTML = `
    <a href="cart.html">
      <img
        src="./assets/cart-icon.png"
        alt="Carrito de Compras"
        width="32"
        height="32"
      />
      <span>${JSON.parse(localStorage.getItem("cart")).length}</span>
    </a>
    <span>|</span>
  `;
}

const renderLoggedInUser = () => {
  dataUser.innerHTML = `Hola! ${email}
          <button
              type="button"
              class="btn btn-danger"
              onclick="localStorage.removeItem('email'); window.location.reload();"
            >
              Cerrar Sesion
          </button>`;

  updateCartCount();
};

const renderLoggedOutUser = () => {
  dataUser.innerHTML = `
          <button
              type="button"
              class="btn btn-primary"
              onclick="location.href = './login.html?redirect=${pathname}${
    search ? "&id=" + search : ""
  }'"
            >
              Iniciar Sesion
          </button>`;
};
email ? renderLoggedInUser(email) : renderLoggedOutUser(pathname, search);
