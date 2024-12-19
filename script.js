function filterProducts(category) {
    // Obtener todas las tarjetas de productos
    const products = document.querySelectorAll('.product-card');
    
    // Si el filtro es 'all', se muestran todas las tarjetas
    if (category === 'all') {
        products.forEach(product => {
            product.style.display = 'block';
        });
    }
    // Si el filtro es 'hombre', solo se muestran las tarjetas de 'hombre'
    else if (category === 'hombre') {
        products.forEach(product => {
            if (product.classList.contains('hombre')) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    // Si el filtro es 'mujer', solo se muestran las tarjetas de 'mujer'
    else if (category === 'mujer') {
        products.forEach(product => {
            if (product.classList.contains('mujer')) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
}

// Mostrar todos los productos por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => filterProducts('all'));

