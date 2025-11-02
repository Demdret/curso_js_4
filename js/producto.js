const id = Number(new URLSearchParams(window.location.search).get("id"));

const main = document.querySelector("main section");

const guitarra = data.find((guitarras) => guitarras.id === id);

const showData = () => {
  const email = localStorage.getItem("email");
  if (!email) {
    return `<span class="text-danger">Debes tener una sesion iniciada. Por favor inicia sesion</span>`;
  }
  return `
  <div>
    <button onClick="updateQuantity('-')">-</button>
    <input type="number" id="quantity" min="1" value="1"></input>
    <button onClick="updateQuantity('+')">+</button>
    <button class="btn btn-primary ms-3" onClick="addToCart()">Agregar al carrito</button>
  </div>`;
};

if (guitarra) {
  const productoMain = `
                <div id="height-img" class="card ms-5 me-4 mb-5 mt-5">
                    <img src="${
                      guitarra.imagen
                    }" class="card-img-top" style ="width:300px;" alt="${
    guitarra.descripcionLarga
  }">
                </div>
                <div class="card container-product mb-5 mt-5">
                    <div class="container-product-info">
                        <h5 class="card-title">${guitarra.marca}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${
                          guitarra.modelo
                        }</h6>
                        <p class="card-text">${guitarra.descripcionLarga}</p>
                        <span style="color: green; font-weight: bold;">$${
                          guitarra.precio
                        }</span>
                        <p class="card-text"><strong>Stock:</strong><span id="stock">${
                          guitarra.stock
                        }</span></p>
                    </div>
                    ${showData()}
                </div>
                `;
  main.innerHTML = productoMain;
} else {
  window.location.href = "index.html";
}

const updateQuantity = (option) => {
  const inputQuantity = document.querySelector("#quantity");
  const stock = Number(document.querySelector("#stock").textContent);
  const quantity = Number(inputQuantity.value);
  switch (option) {
    case "+":
      quantity >= stock
        ? alert("No puedes superar el stock disponible")
        : (inputQuantity.value = quantity + 1);
      break;
    default:
      quantity === 1
        ? alert("No puedes tener una cantidad de 0 o menos")
        : (inputQuantity.value = quantity - 1);
      break;
  }
};

const addToCart = () => {
  const email = localStorage.getItem("email");
  if (!email) {
    alert("Debes iniciar sesion para agregar productos al carrito");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const inputQuantity = document.querySelector("#quantity");
  const quantity = Number(inputQuantity.value);

  const productInCart = cart.findIndex(({ item }) => item.id === guitarra.id);

  // product dont exist in cart
  if (productInCart === -1) {
    cart.push({ item: { ...guitarra }, quantity: quantity });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito");

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
    return;
  }

  // product exist in cart
  const newQuantity = cart[productInCart].quantity + quantity;

  // validate if new quantity exceed stock
  if (newQuantity > guitarra.stock) {
    alert("No puedes superar el stock disponible");
    return;
  }

  cart[productInCart].quantity = newQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Producto agregado al carrito");
};
