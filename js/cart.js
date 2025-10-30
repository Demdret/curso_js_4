const cartContainer = document.querySelector("#cartContainer");

const cartItems = JSON.parse(localStorage.getItem("cart"));

console.log(cartItems);
cartContainer.innerHTML = "";

cartContainer.innerHTML += cartItems.map(({ item, quantity }) => {
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
});

document.querySelector("#totalBill").innerText =
  "$ " +
  cartItems.reduce(
    (acum, { item, quantity }) => acum + Number(item.precio) * Number(quantity),
    0
  );
