const id = Number(new URLSearchParams(window.location.search).get("id"));

const main = document.querySelector("main section");

const guitarras = data.find((guitarras) => guitarras.id === id);

const showData = () => {
  const email = localStorage.getItem("email");
  if (!email) {
    return `<span class="text-danger">Debes tener una sesion iniciada. Por favor inicia sesion</span>`;
  }
  return `
  <div>
    <button onClick="updateQuantity('-')">-</button>
    <span id="quantity">1</span>
    <button onClick="updateQuantity('+')">+</button>
  </div>`;
};

if (guitarras) {
  const productoMain = `
                <div id="height-img" class="card ms-5 me-4 mb-5 mt-5">
                    <img src="${
                      guitarras.imagen
                    }" class="card-img-top" style ="width:300px;" alt="${
    guitarras.descripcionLarga
  }">
                </div>
                <div class="card container-product mb-5 mt-5">
                    <div class="container-product-info">
                        <h5 class="card-title">${guitarras.marca}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${
                          guitarras.modelo
                        }</h6>
                        <p class="card-text">${guitarras.descripcionLarga}</p>
                        <span style="color: green; font-weight: bold;">$${
                          guitarras.precio
                        }</a>
                    </div>
                    ${showData()}
                </div>
                `;
  main.innerHTML = productoMain;
} else {
  window.location.href = "index.html";
}

const updateQuantity = (option) => {
  const spanQuantity = document.querySelector("#quantity");
  const quantity = Number(spanQuantity.innerText);
  switch (option) {
    case "+":
      spanQuantity.innerText = quantity + 1;
      break;
    default:
      quantity === 1
        ? alert("No puedes tener una cantidad de 0 o menos")
        : (spanQuantity.innerText = quantity - 1);
      break;
  }
};
