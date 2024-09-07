// Capturar el formulario por su ID
const form = document.getElementById('salesForm');

// Añadir un evento de envío de formulario
form.addEventListener('submit', function(event) {
    // Evitar que la página se recargue
    event.preventDefault();
    
    // Capturar los valores ingresados en el formulario
    const client = document.getElementById('client').value;
    const operation = document.querySelector('input[name="operation"]:checked').value;
    const product = document.getElementById('product').value;
    const totalQty = document.getElementById('totalQty').value;
    const reportedQty = document.getElementById('reportedQty').value;
    
    // Mostrar los valores en la consola del navegador
    console.log('Cliente:', client);
    console.log('Operación:', operation);
    console.log('Producto:', product);
    console.log('Cantidad Total:', totalQty);
    console.log('Cantidad Reportada:', reportedQty);
    
    // Aquí más adelante podrás añadir más lógica (como calcular el volumen restante)
});
