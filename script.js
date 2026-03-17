const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu"); 
 
// Al hacer clic, activamos el menú y la animación del icono 
hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
}); 
 
// Opcional: Cerrar el menú cuando se hace clic en un enlace 
document.querySelectorAll(".nav-link").forEach(n => 
n.addEventListener("click", () => { 
    hamburger.classList.remove("active"); 
    navMenu.classList.remove("active"); 
}));
// ===== BLOQUE NUEVO: LÓGICA DE LOGIN Y REGISTRO =====
document.addEventListener('DOMContentLoaded', function() {

    // --- Elementos del DOM ---
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');

    // --- Función para cambiar entre pestañas ---
    if (loginTab && registerTab && loginForm && registerForm) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
            // Limpiar mensajes al cambiar de pestaña
            if (loginMessage) loginMessage.textContent = '';
            if (registerMessage) registerMessage.textContent = '';
        });

        registerTab.addEventListener('click', () => {
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
            if (loginMessage) loginMessage.textContent = '';
            if (registerMessage) registerMessage.textContent = '';
        });
    }

    // --- Simulación de Login ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevenir envío real del formulario

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Validación básica de campos no vacíos
            if (!email || !password) {
                loginMessage.textContent = 'Por favor, completa todos los campos.';
                loginMessage.style.color = 'red';
                return;
            }

            // Simulación de éxito (aquí se conectaría con el backend)
            loginMessage.textContent = 'Inicio de sesión simulado con éxito. (Backend pendiente)';
            loginMessage.style.color = 'green';
            console.log('Login simulado:', { email, password });

            // Opcional: limpiar campos después del éxito
            // loginForm.reset();
        });
    }

    // --- Simulación de Registro ---
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;

            // Validaciones básicas del lado del cliente
            if (!name || !email || !password || !confirm) {
                registerMessage.textContent = 'Todos los campos son obligatorios.';
                registerMessage.style.color = 'red';
                return;
            }

            if (password.length < 6) {
                registerMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
                registerMessage.style.color = 'red';
                return;
            }

            if (password !== confirm) {
                registerMessage.textContent = 'Las contraseñas no coinciden.';
                registerMessage.style.color = 'red';
                return;
            }

            // Simulación de registro exitoso
            registerMessage.textContent = 'Registro simulado con éxito. (Backend pendiente)';
            registerMessage.style.color = 'green';
            console.log('Registro simulado:', { name, email, password });

            // Opcional: cambiar a la pestaña de login después de un registro exitoso
            // setTimeout(() => registerTab.click(), 2000);
        });
    }

});