// Script da galeria de fotos da Grécia
// (filtros por destino + visualização ampliada)
// O menu, o dropdown e o botão de topo ficam no grecia-paginas.js

const filtros = document.querySelectorAll(".filtro");
const itens = Array.from(document.querySelectorAll(".galeria-item"));
const contagem = document.getElementById("galeria-contagem");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxLegenda = document.getElementById("lightbox-legenda");
const botaoFechar = document.getElementById("lightbox-fechar");
const botaoAnterior = document.getElementById("lightbox-anterior");
const botaoProxima = document.getElementById("lightbox-proxima");

let fotosAbertas = [];
let indiceAtual = 0;
let ultimoFocado = null;


// ===== Filtros por destino =====
function atualizarContagem(total, filtro) {
    if (!contagem) return;

    const palavra = total === 1 ? "foto" : "fotos";
    contagem.textContent = filtro === "todas"
        ? `Mostrando ${total} ${palavra}`
        : `Mostrando ${total} ${palavra} de ${filtro}`;
}

function aplicarFiltro(filtro) {
    let visiveis = 0;

    itens.forEach((item) => {
        const mostrar = filtro === "todas" || item.dataset.categoria === filtro;
        item.hidden = !mostrar;
        if (mostrar) visiveis++;
    });

    filtros.forEach((botao) => {
        const ativo = botao.dataset.filtro === filtro;
        botao.classList.toggle("ativo", ativo);
        botao.setAttribute("aria-pressed", ativo);
    });

    atualizarContagem(visiveis, filtro);
}

filtros.forEach((botao) => {
    botao.addEventListener("click", () => aplicarFiltro(botao.dataset.filtro));
});

aplicarFiltro("todas");


// ===== Visualização ampliada =====
function itensVisiveisComFoto() {
    return itens.filter((item) => {
        const slot = item.querySelector(".foto-slot");
        return !item.hidden && slot && !slot.classList.contains("sem-foto");
    });
}

function mostrarFoto(indice) {
    const total = fotosAbertas.length;
    indiceAtual = (indice + total) % total;

    const item = fotosAbertas[indiceAtual];
    const imagem = item.querySelector("img");
    const titulo = item.querySelector("figcaption strong");
    const descricao = item.querySelector(".galeria-desc");

    lightboxImg.src = imagem.currentSrc || imagem.src;
    lightboxImg.alt = imagem.alt;

    lightboxLegenda.innerHTML = "";

    if (titulo) {
        const strong = document.createElement("strong");
        strong.textContent = titulo.textContent;
        lightboxLegenda.appendChild(strong);
    }

    if (descricao) {
        lightboxLegenda.appendChild(document.createTextNode(descricao.textContent.trim()));
    }

    const varias = total > 1;
    botaoAnterior.hidden = !varias;
    botaoProxima.hidden = !varias;
}

function abrirLightbox(item) {
    fotosAbertas = itensVisiveisComFoto();
    const indice = fotosAbertas.indexOf(item);
    if (indice === -1) return;

    ultimoFocado = document.activeElement;
    mostrarFoto(indice);

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    botaoFechar.focus();
}

function fecharLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";

    if (ultimoFocado) ultimoFocado.focus();
}

// Clique na foto abre a visualização ampliada
itens.forEach((item) => {
    const slot = item.querySelector(".foto-slot");
    if (!slot) return;

    slot.addEventListener("click", () => {
        if (slot.classList.contains("sem-foto")) return;
        abrirLightbox(item);
    });
});

botaoFechar.addEventListener("click", fecharLightbox);
botaoAnterior.addEventListener("click", () => mostrarFoto(indiceAtual - 1));
botaoProxima.addEventListener("click", () => mostrarFoto(indiceAtual + 1));

// Clicar no fundo escuro também fecha
lightbox.addEventListener("click", (evento) => {
    if (evento.target === lightbox) fecharLightbox();
});

// Teclado: Esc fecha, setas navegam
document.addEventListener("keydown", (evento) => {
    if (lightbox.hidden) return;

    if (evento.key === "Escape") fecharLightbox();
    if (evento.key === "ArrowLeft") mostrarFoto(indiceAtual - 1);
    if (evento.key === "ArrowRight") mostrarFoto(indiceAtual + 1);
});