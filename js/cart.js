const cartContainer = document.querySelector("#cartContainer");

const cartItems = JSON.parse(localStorage.getItem("cart"));

const getTotal = (data) => {
  const total = data.reduce(
    (acum, { item, quantity }) => acum + Number(item.precio) * Number(quantity),
    0
  );
  // Redondear a 2 decimales para evitar problemas de precisión
  return Math.round(total * 100) / 100;
};

const updateCartContainer = (data) => {
  console.log("data: ", data);

  cartContainer.innerHTML = data
    .map(({ item, quantity }) => {
      return `<div class="card-body">
              <div class="d-flex align-items-start border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="${item.imagen}"
                    alt="${item.marca} - ${item.modelo}"
                    class="avatar-lg rounded"
                  />
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="text-truncate font-size-18">
                    ${item.marca} - ${item.modelo}
                  </h5>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Precio</p>
                        <h5 class="mb-0 mt-2">$${item.precio}</h5>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Cantidad</p>
                        <h5 class="mb-0 mt-2">${quantity}</h5>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Total</p>
                        <h5>$${item.precio * quantity}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
    })
    .join("");

  document.querySelector("#totalBill").innerText = "$ " + getTotal(data);
};

console.log(cartItems);
cartContainer.innerHTML = "";

updateCartContainer(cartItems);

const buttonCheckout = document.querySelector("#btn-checkout");

buttonCheckout.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart || cart.length === 0) {
    Swal.fire({
      title: "Fallido",
      icon: "error",
      text: `Primero debes agregar productos al carrito`,
    });
    return;
  }
  // Formatear productos según el formato de MockAPI (price y quantity)
  const productsSimplified = cartItems.map(({ item, quantity }) => ({
    id: String(item.id),
    marca: item.marca,
    modelo: item.modelo,
    price: String(item.precio),
    quantity: quantity,
  }));

  const body = {
    emailUser: localStorage.getItem("email"),
    products: productsSimplified,
    total: getTotal(cart),
  };

  console.log("Datos a enviar:", body);

  // Deshabilitar el botón mientras se procesa
  buttonCheckout.disabled = true;
  buttonCheckout.textContent = "Procesando...";

  fetch(URL_BASE + "/chekout", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) throw Error("Ocurrio Un Error");
      return response.json();
    })
    .then((data) => {
      Swal.fire({
        title: "Hecho",
        icon: "success",
        html: `<strong>Se ha registrado tu compra</strong><br>
        <span>Con los siguientes datos:</span>
        <p><b>Email: </b>${localStorage.getItem("email")} <br>
        <b>Num de Orden: </b>${data.id}</p>
        `,
      });

      localStorage.setItem("cart", JSON.stringify([]));
      updateCartContainer([]);
    })
    .catch((error) => {
      console.error("ha ocurrido un error", error);
      Swal.fire({
        title: "Fallido",
        icon: "error",
        text: `Ha ocurrido un error creando tu factura.`,
      });
    })
    .finally(() => {
      buttonCheckout.disabled = false;
      buttonCheckout.textContent = "Checkout";
    });
});
