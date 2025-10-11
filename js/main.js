const main = document.querySelector('main section');

const input = document.querySelector('#Searching');
const buttomClean = document.querySelector('#btnClean');

const dataMain = data.map(productos => {
    return `<div class="card p-4" style="width: 18rem;">
                <img src="${productos.imagen}" class="card-img-top h-50 w-100" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${productos.modelo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${productos.marca} - $${productos.precio}</h6>
                    <p class="card-text">${productos.descripcion}</p>
                    <a href="./producto.html?id=${productos.id}" class="btn btn-primary">Ver más...</a>
                </div>
            </div>`;
});

main.innerHTML = dataMain.join("");

function filterData() {
    const filter = input.value.trim().toLowerCase();
    const filterData = data.filter(guitarras => guitarras.marca.toLowerCase().includes(filter) ||
    guitarras.modelo.toLowerCase().includes(filter));

    main.innerHTML = "";

        main.innerHTML = filterData.map(producto => `
            <div class="card p-4" style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top h-50 w-100" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.modelo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${producto.marca} - $${producto.precio}</h6>
                    <p class="card-text">${producto.descripcion}</p>
                    <a href="./producto.html?id=${producto.id}" class="btn btn-primary">Ver más...</a>
                </div>
            </div>
        `).join("");
}

function mostrarCards(){
    input.value = "";
    main.innerHTML = dataMain.join("");
}

Searching.addEventListener("input", filterData);
buttomClean.addEventListener("click", mostrarCards);




