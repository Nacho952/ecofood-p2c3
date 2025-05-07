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
    window.location.href = "registro.html";
}

function redirigirLogin() {
    window.location.href = "login.html";
}

function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmPassword").value;
    const mensajeError = document.getElementById("mensajeError");

    mensajeError.innerHTML = "";
    mensajeError.className = "mt-3";

    if (!nombre || !email || !password || !confirmarPassword) {
        mensajeError.textContent = "Es obligatoio rellenar los todos los campos";
        mensajeError.className += " alert alert-danger";
        return false;
    }

    if (password !== confirmarPassword) {
        mensajeError.textContent = "Las contraseñas no son iguales, reintentar";
        mensajeError.className +=" alert alert-danger";
        return false;
    }

    mensajeError.textContent = "Registrado exitsoamente";
    mensajeError.className += " alert alert-success";
    
    setTimeout(() => {
        window.location.href = "home.html";
    }, 2000);
    
    return false; 
}


function validarLogin() {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    const mensajeLogin = document.getElementById("mensajeLogin");

    mensajeLogin.innerHTML = "";
    mensajeLogin.className = "mt-3";

    if (!email || !password) {
        mensajeLogin.textContent = "Es obligatoio rellenar los todos los campos";
        mensajeLogin.className += " alert alert-danger";
        return false;
    }

    mensajeLogin.textContent = "Se inbicio sesion con exito";
    mensajeLogin.className += " alert alert-success";
    
    setTimeout(() => {
        window.location.href = "home.html";
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

//FUNCIONANDO NO TOCAR

let comentarios = [
    {
        nombreUsuario: "Elironmano777",
        textoComentario: "Me gusta compar aca, 4.5/5."
    },
    {
        nombreUsuario: "CAlros11",
        textoComentario: "Me gusta pero hay muy pocos productos por el momento, 4/5."
    }

];

function agregarComentario() {
    const texto = document.getElementById('comentarioTexto').value;
    const listaComentarios = document.getElementById('listaComentarios');
    
    if (!texto) {
        alert('Por favor escribe un comentario');
        return;
    }

    const nuevoComentario = {
        nombreUsuario: "Usuario Actual",
        textoComentario: texto,
        fecha: new Date().toLocaleDateString()
    };

    comentarios.unshift(nuevoComentario);
    
    document.getElementById('comentarioTexto').value = '';
    
    const comentarioDiv = document.createElement('div');
    comentarioDiv.className = 'card mb-3';
    comentarioDiv.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5 class="card-title">${nuevoComentario.nombreUsuario}</h5>
                <small class="text-muted">${nuevoComentario.fecha}</small>
            </div>
            <p class="card-text">${nuevoComentario.textoComentario}</p>
        </div>
    `;
    
    if (listaComentarios.firstChild) {
        listaComentarios.insertBefore(comentarioDiv, listaComentarios.firstChild);
    } else {
        listaComentarios.appendChild(comentarioDiv);
    }
}

function cargarComentarios() {
    const lista = document.getElementById('listaComentarios');
    if (!lista) return;

    lista.innerHTML = '';
    
    comentarios.forEach(comentario => {
        const div = document.createElement('div');
        div.className = 'card mb-3';
        div.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">${comentario.nombreUsuario}</h5>
                    <small class="text-muted">${comentario.fecha || 'Hoy'}</small>
                </div>
                <p class="card-text">${comentario.textoComentario}</p>
            </div>
        `;
        lista.appendChild(div);
    });
}

//funciona (?)
function cargarFaqs() {
    const lista = document.getElementById('listaFaqs');
    if (!lista) return;

    lista.innerHTML = '';
    
    faqs.forEach((faq, index) => {
        const div = document.createElement('div');
        div.className = 'card mb-3';
        div.innerHTML = `
            <div class="card-header" id="heading${index}">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-bs-toggle="collapse" 
                            data-bs-target="#collapse${index}" aria-expanded="true" 
                            aria-controls="collapse${index}">
                        ${faq.pregunta}
                    </button>
                </h5>
            </div>
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}">
                <div class="card-body">
                    ${faq.respuesta}
                </div>
            </div>
        `;
        lista.appendChild(div);
    });
}

const faqs = [
    {
        pregunta: "Que es Eco-Food Community?",
        respuesta: "Somos un servicio de venta de productos que estaban destinados a ser desperdiciados, asi dandoles una ultima oportunidad a un precio reducido!"
    },
    {
        pregunta: "Porque querria comprar productos malos?",
        respuesta: "No estan exactamente malos, son productos que estan aun frescos pero cerca de su fecha de vencimiento o con daños cosmeticos, asi venderlos a un precio menor."
    },
    {
        pregunta: "Como me registro?",
        respuesta: "Puedes registrarte haciendo clic en el botón 'Registrarse' en la parte superior de la pantalla."
    }
];

//tambien sale en la pagina de los productos no tengo idea de porque :| (olvidalo ya lo arregle)
//por alguna razon no me deja meter mas de 3 cosas a la vez??? ni idea pero se queda asi :p