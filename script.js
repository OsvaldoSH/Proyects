// Capturar el formulario por su ID
const form = document.getElementById('salesForm');

// Añadir un evento de envío de formulario
form.addEventListener('submit', function(event) {
    // Evitar que la página se recargue
    event.preventDefault();
    
    // Capturar los valores ingresados en el formulario
    const product = document.getElementById('product').value;
    const totalQty = document.getElementById('totalQty').value;
    const reportedQty = document.getElementById('reportedQty').value;
    
    // Mostrar los valores en la consola del navegador
    console.log('Producto:', product);
    console.log('Cantidad Total:', totalQty);
    console.log('Cantidad Reportada:', reportedQty);
    
    // Aquí más adelante podrás añadir más lógica (calcular el volumen restante, etc.)
});
