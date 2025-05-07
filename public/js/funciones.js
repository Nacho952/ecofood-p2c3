const fraseMotivadora=[
    "Gracias por pensar en Todos, en ti y en tu propio planeta!",
    "No eres tu, somos todos ;)",
    "Dificil motivarte cuando no gano mucho en este trabajo... pero lo haces bien."
];

function cargarFraseMotivadora() {
    const fraseDiv = document.getElementById("fraseMotivadora");
    if (fraseDiv) {
        const fraseAleatoria=fraseMotivadora[Math.floor(Math.random()*fraseMotivadora.length)];
        fraseDiv.textContent=fraseAleatoria;
    }
}

function redirigirRegistro() {
    window.location.href="registro.html";
}

function redirigirLogin() {
    window.location.href="login.html";
}

function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmPassword").value;
    const mensajeError = document.getElementById("mensajeError");

    mensajeError.innerHTML="";
    mensajeError.className="mt-3";

    if (!nombre || !email || !password || !confirmarPassword) {
        mensajeError.textContent="Es obligatoio rellenar los todos los campos";
        mensajeError.className+=" alert alert-danger";
        return false;
    }

    if (password !== confirmarPassword) {
        mensajeError.textContent="Las contraseñas no son iguales, reintentar";
        mensajeError.className+=" alert alert-danger";
        return false;
    }

    mensajeError.textContent="Registrado exitsoamente";
    mensajeError.className+=" alert alert-success";
    
    setTimeout(() => {
        window.location.href="home.html";
    }, 2000);
    
    return false; 
}

function validarLogin() {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    const mensajeLogin = document.getElementById("mensajeLogin");

    mensajeLogin.innerHTML="";
    mensajeLogin.className="mt-3";

    if (!email || !password) {
        mensajeLogin.textContent="Es obligatoio rellenar los todos los campos";
        mensajeLogin.className+=" alert alert-danger";
        return false;
    }

    mensajeLogin.textContent="Se inbicio sesion con exito";
    mensajeLogin.className+=" alert alert-success";
    
    setTimeout(() => {
        window.location.href="home.html";
    }, 2000);
    
    return false;
}

//NO SE COMO HACER QUE NO DEJE ENTRAR CON CUALQUIER CONTRASEÑA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

document.addEventListener("DOMContentLoaded", function() {
    cargarFraseMotivadora();
});

const productos=[
    {
        nombre: "Cereal 'Vivo' Costa",
        descripcion: "Cereal reconocido por ser el mejor en calidad/precio!",
        precio: "7.980CLP"
    },
    {
        nombre: "Yogurt 'Griego'",
        descripcion: "Perfecto para empezar una mañana lleno de energias",
        precio: "4.600CLP x 4 Unidades"
    },
    {
        nombre: "Malla de manzanas 'El Manzano'",
        descripcion: "Mejor que un cafe por la mañana, y bonus de menos visitas al doctor ;)",
        precio: "5.000CLP x Malla de 6 Manzanas"
    }
    {
        nombre: "",
        descripcion: "Mejor que un cafe por la mañana, y bonus de menos visitas al doctor ;)",
        precio: "5.000CLP x Malla de 6 Manzanas"
    }
];

function cargarProductos() {
    const contenedor = document.getElementById('contenedorProductos');
    if (!contenedor) return;

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="text-success fw-bold">${producto.precio}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}