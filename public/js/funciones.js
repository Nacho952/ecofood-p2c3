const frasesMotivadoras=[
    "Gracias por pensar en Todos, en ti y en tu propio planeta!"
    "No eres tu, somos todos ;)"
    "Dificil motivarte cuando no gano mucho en este trabajo... pero lo haces bien."
];

function cargarFraseMotivadora() {
    const fraseDiv = document.getElementById('fraseMotivadora');
    if (fraseDiv) {
        const fraseAleatoria = frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
        fraseDiv.textContent = fraseAleatoria;
    }
}

function redirigirRegistro() {
    window.location.href = "registro.html";
}

function redirigirLogin() {
    window.location.href = "login.html";
}


