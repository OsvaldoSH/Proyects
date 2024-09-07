// Capturar el formulario y los campos por su ID
const form = document.getElementById('salesForm');
const totalQtyField = document.getElementById('totalQtyField');
const reportedQtyField = document.getElementById('reportedQtyField');

// Añadir un evento para los cambios en el tipo de operación
form.addEventListener('change', function() {
    const operation = document.querySelector('input[name="operation"]:checked').value;

    if (operation === 'entrada') {
        // Mostrar campo de Cantidad Total y ocultar Cantidad Reportada
        totalQtyField.classList.remove('hidden');
        reportedQtyField.classList.add('hidden');
    } else if (operation === 'salida') {
        // Mostrar campo de Cantidad Reportada y ocultar Cantidad Total
        reportedQtyField.classList.remove('hidden');
        totalQtyField.classList.add('hidden');
    }
});

// Añadir un evento para el envío del formulario
form.addEventListener('submit', function(event) {
    // Evitar que la página se recargue
    event.preventDefault();
    
    // Capturar los valores ingresados en el formulario
    const client = document.getElementById('client').value;
    const operation = document.querySelector('input[name="operation"]:checked').value;
    const product = document.getElementById('product').value;
    let totalQty = '';
    let reportedQty = '';

    // Solo capturar el valor correspondiente según la operación
    if (operation === 'entrada') {
        totalQty = document.getElementById('totalQty').value;
        console.log('Cantidad Total:', totalQty);
    } else if (operation === 'salida') {
        reportedQty = document.getElementById('reportedQty').value;
        console.log('Cantidad Reportada:', reportedQty);
    }

    // Mostrar los valores en la consola del navegador
    console.log('Cliente:', client);
    console.log('Operación:', operation);
    console.log('Producto:', product);
});
