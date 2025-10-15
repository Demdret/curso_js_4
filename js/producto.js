const id = Number(location.search.split('=')[1]);

const main = document.querySelector('main section');

const guitarras = data.find((guitarras) => guitarras.id === id);

const productoMain = `
                <div id="height-img" class="card ms-5 me-4 mb-5 mt-5">
                    <img src="${guitarras.imagen}" class="card-img-top" style ="width:300px;" alt="${guitarras.descripcion}">
                </div>
                <div class="card container-product mb-5 mt-5">
                    <div class="container-product-info">
                        <h5 class="card-title">${guitarras.marca}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${guitarras.modelo}</h6>
                        <p class="card-text">${guitarras.descripcion}</p>
                        <a href="#" class="btn btn-success">$${guitarras.precio}</a>
                    </div>
                </div>
                `;

main.innerHTML = productoMain;

