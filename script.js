// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para validar las credenciales
    // Por ejemplo, podrías hacer una llamada a tu servidor para verificar las credenciales
    // Para este ejemplo, asumiremos que el usuario y la contraseña son correctos si son "admin"

    if (username === "juan" && password === "admin") {
        // Redirigir a la página de gestión
        window.location.href = "admin.html";
    } else {
        alert('Credenciales incorrectas. Intenta nuevamente.');
    }
});