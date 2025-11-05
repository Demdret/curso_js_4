const id = Number(new URLSearchParams(window.location.search).get("id"));

const main = document.querySelector("main section");

const guitarra = data.find((guitarras) => guitarras.id === id);

const showData = () => {
  const email = localStorage.getItem("email");
  if (!email) {
    return `<span class="text-danger">Debes tener una sesion iniciada. Por favor inicia sesion</span>`;
  }
  return `
  <div class ="d-flex align-items-center">
    <button class ="rounded-1 me-2" onClick="updateQuantity('-')">-</button>
    <input class ="rounded-1" type="number" id="quantity" min="1" value="1"></input>
    <button class ="rounded-1 ms-2" onClick="updateQuantity('+')">+</button>
    <button class="btn btn-primary ms-3 d-flex align-items-center justify-content-center" onClick="addToCart()">
      <span class="material-symbols-outlined me-2">
      shopping_cart
      </span>Agregar al carrito</button>
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
  function add() {
    const email = localStorage.getItem("email");
    if (!email) {
      alert("Debes iniciar sesión para agregar productos al carrito");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const inputQuantity = document.querySelector("#quantity");
    const quantity = Number(inputQuantity.value);

    const productInCart = cart.findIndex(({ item }) => item.id === guitarra.id);
    let message = "";

    if (productInCart === -1) {
      // Producto nuevo
      cart.push({ item: { ...guitarra }, quantity });
      message = "Producto agregado al carrito";
    } else {
      // Producto existente
      const newQuantity = cart[productInCart].quantity + quantity;
      if (newQuantity > guitarra.stock) {
        alert("No puedes superar el stock disponible");
        return;
      }
      cart[productInCart].quantity = newQuantity;
      message = "Cantidad actualizada en el carrito";
    }

    // Guardar carrito actualizado
    localStorage.setItem("cart", JSON.stringify(cart));

    // Mostrar notificación Toastify
    Toastify({
      text: message,
      duration: 1500,
      gravity: "top",
      position: "right",
      style: {
        background: "#1e2064ff",
        color: "#fff",
        borderRadius: "6px"
      },
    }).showToast();
    updateCartCount();
  }


  Swal.fire({
    text: "¿Estás seguro que deseas añadir el producto al carrito?",
    confirmButtonText: "Si",
    cancelButtonText: "Cancelar",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result => {
    if (result.isConfirmed) {
      //Ejecutamos la funcion añadir al carrito
      add();
    }
  }))
};
