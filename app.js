

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarCarrito = (e) => {
  
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1
    }

    if (carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad +1
    }

    carritoObjeto[producto.titulo] = producto;

    //console.log(carritoObjeto)
    pintarCarrito(producto);
}

const pintarCarrito = (producto) => {
   // console.log('pintar carrito',producto);
   carrito.textContent = "";

    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);
}

btnesBotones.forEach((btn) => btn.addEventListener('click',agregarCarrito))


