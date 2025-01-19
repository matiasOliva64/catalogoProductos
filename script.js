// Obtener todas las tarjetas de productos
const products = document.querySelectorAll('.product-card');

let currentCategoryFilter = 'all'; // Filtro actual de categoría
let currentBrandFilter = 'all'; // Filtro actual de marca

// Función para filtrar por categoría
function filterProducts(category) {
    currentCategoryFilter = category; // Actualiza el filtro de categoría

    // Si se selecciona "all", también restablece el filtro de marca
    if (category === 'all') {
        currentBrandFilter = 'all';
        document.getElementById('brandFilter').value = 'all'; // Restablece el select de marcas
    }

    applyFilters(); // Aplica los filtros
}

// Función para filtrar por marca
function filterByBrand() {
    const brandSelect = document.getElementById('brandFilter');
    currentBrandFilter = brandSelect.value; // Actualiza el filtro de marca
    applyFilters(); // Aplica los filtros
}

// Función para aplicar los filtros combinados
function applyFilters() {
    products.forEach(product => {
        const matchesCategory =
            currentCategoryFilter === 'all' || product.classList.contains(currentCategoryFilter);
        const matchesBrand =
            currentBrandFilter === 'all' || product.classList.contains(currentBrandFilter);

        if (matchesCategory && matchesBrand) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Mostrar todos los productos por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => filterProducts('all'));



