// Script compartilhado pelas páginas internas da Grécia
// (menu, dropdown de países, espaços de foto, animação de rolagem e botão de topo)

// ===== Menu em celulares e tablets =====
const botaoMenu = document.querySelector(".botao-menu");
const navegacao = document.querySelector(".navegacao");
const botaoPaises = document.querySelector(".botao-dropdown");
const grupoPaises = document.querySelector(".grupo-dropdown");

if (botaoMenu && navegacao) {
    botaoMenu.addEventListener("click", () => {
        const aberto = navegacao.classList.toggle("aberta");

        botaoMenu.setAttribute("aria-expanded", aberto);
        botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
}

// Abre e fecha a lista de países ao clicar
if (botaoPaises && grupoPaises) {
    botaoPaises.addEventListener("click", () => {
        const aberto = grupoPaises.classList.toggle("aberto");
        botaoPaises.setAttribute("aria-expanded", aberto);
    });
}


// ===== Espaços de foto =====
// Se a imagem não existir, o espaço mostra o nome do arquivo
// que deve ser colocado na pasta (veja o CSS .foto-slot.sem-foto).
document.querySelectorAll(".foto-slot").forEach((slot) => {
    const imagem = slot.querySelector("img");
    if (!imagem) return;

    const marcarSemFoto = () => slot.classList.add("sem-foto");

    // A imagem pode já ter falhado antes deste script rodar
    if (imagem.complete && imagem.naturalWidth === 0) {
        marcarSemFoto();
    }

    imagem.addEventListener("error", marcarSemFoto);
});


// ===== Animação suave ao rolar a página =====
const secoesParaRevelar = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("revelada");
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.12 });

    secoesParaRevelar.forEach((secao) => observador.observe(secao));
} else {
    secoesParaRevelar.forEach((secao) => secao.classList.add("revelada"));
}


// ===== Botão de voltar ao topo =====
const botaoTopo = document.getElementById("voltar-topo");

if (botaoTopo) {
    window.addEventListener("scroll", () => {
        botaoTopo.classList.toggle("visivel", window.scrollY > 700);
    });
}