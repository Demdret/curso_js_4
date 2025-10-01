const main = document.querySelector('main section');

const dataMain = data.map(productos => {
    return `<div class="card p-4" style="width: 18rem;">
                <img src="${productos.imagen}" class="card-img-top h-50 w-100" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${productos.marca}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${productos.modelo} - $${productos.precio}</h6>
                    <p class="card-text">${productos.descripcion}</p>
                    <a href="./producto.html?id=${productos.id}" class="btn btn-primary">Ver más...</a>
                </div>
            </div>`;
});

main.innerHTML = dataMain.join('');