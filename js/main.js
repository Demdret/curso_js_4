const main = document.querySelector('main section');

const buttomSearch = document.querySelector('#btnSearch');
const buttomClean = document.querySelector('#btnClean');

const input = document.querySelector('#Searching');

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

main.innerHTML = dataMain.join("");

function filterData() {
    const filter = input.value.trim().toLowerCase();
    const filterData = data.filter(guitarras => guitarras.marca.toLowerCase() === filter);

    // Generar HTML de todas las cards filtradas
    main.innerHTML = "";

    for (const producto of filterData) {
        main.innerHTML = `<div class="card p-4" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top h-50 w-100" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.marca}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${producto.modelo} - $${producto.precio}</h6>
                <p class="card-text">${producto.descripcion}</p>
                <a href="./producto.html?id=${producto.id}" class="btn btn-primary">Ver más...</a>
            </div>
        </div>`
    }  
}

function mostrarCards(){
    main.innerHTML = "";
    main.innerHTML = dataMain.join("");
}

buttomSearch.addEventListener("click", filterData);
buttomClean.addEventListener("click", mostrarCards);




