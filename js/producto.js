const id = new URLSearchParams(window.location.search).get("id");

const main = document.querySelector("main section");

let currentProduct;

const showData = () => {
  const email = localStorage.getItem("email");
  if (!email) {
    return `<span class="text-danger">Debes tener una sesion iniciada. Por favor inicia sesion</span>`;
  }
  return `
  <div class="d-flex align-items-center">
    <button onClick="updateQuantity('-')">-</button>
    <input type="number" style="border: 2px solid black" id="quantity" min="1" value="1"></input>
    <button onClick="updateQuantity('+')">+</button>
    <button class="btn btn-primary ms-3 d-flex align-items-center justify-content-center" onClick="addToCart()">
      <span class="material-symbols-outlined me-2">
      shopping_cart
      </span>Agregar al carrito</button>
  </div>`;
};

const initProducts = () => {
  fetch(`${URL_BASE}/guitars/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // throw new Error("xd");
      console.log(data);
      setTimeout(() => {
        main.classList.remove("loader");
        renderCard(data);
        currentProduct = data;
      }, 2000);
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "No se pudo cargar la informacion del producto",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    });
};

const renderCard = (guitarra) => {
  main.innerHTML = `
                <div id="height-img" class="">
                    <img src="${
                      guitarra.imagen
                    }" class="card-img-top" style ="height: 300px; width: 300px; object-fit: cover;" alt="${
    guitarra.descripcionLarga
  }">
                </div>
                <div class="container-product">
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
};

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

    const productInCart = cart.findIndex(
      ({ item }) => item.id === currentProduct.id
    );
    let message = "";

    if (productInCart === -1) {
      // Producto nuevo
      cart.push({ item: { ...currentProduct }, quantity });
      message = "Producto agregado al carrito";
    } else {
      // Producto existente
      const newQuantity = cart[productInCart].quantity + quantity;
      if (newQuantity > currentProduct.stock) {
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
        borderRadius: "6px",
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
  }).then((result) => {
    if (result.isConfirmed) {
      //Ejecutamos la funcion añadir al carrito
      add();
    }
  });
};

initProducts();
