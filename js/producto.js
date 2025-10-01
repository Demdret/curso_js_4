const id = Number(location.search.split('=')[1]);

const main = document.querySelector('main section');

const guitarras = data.find((guitarras) => guitarras.id === id);

const productoMain = `<div class="card">
                <img src="${guitarras.imagen}" class="card-img-top" style ="width:300px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${guitarras.marca}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${guitarras.modelo} - $${guitarras.precio}</h6>
                    <p class="card-text">${guitarras.descripcion}</p>
                </div>
            </div>`;

main.innerHTML = productoMain;