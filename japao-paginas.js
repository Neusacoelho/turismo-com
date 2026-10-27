// Scripts compartilhados das subpáginas do Japão (cultura, gastronomia, pontos turísticos, curiosidades)
(function () {
    "use strict";
 
    // Menu em celulares e tablets
    var botaoMenu = document.querySelector(".botao-menu");
    var navegacao = document.querySelector(".navegacao");
 
    if (botaoMenu && navegacao) {
        botaoMenu.addEventListener("click", function () {
            var aberto = navegacao.classList.toggle("aberta");
            botaoMenu.setAttribute("aria-expanded", aberto);
            botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
        });
    }
 
    // Lista de países (e qualquer outro dropdown) ao clicar
    document.querySelectorAll(".grupo-dropdown").forEach(function (grupo) {
        var botao = grupo.querySelector(".botao-dropdown");
        if (!botao) return;
        botao.addEventListener("click", function () {
            var aberto = grupo.classList.toggle("aberto");
            botao.setAttribute("aria-expanded", aberto);
        });
    });
 
    // Seções com animação suave ao rolar a página
    var secoes = document.querySelectorAll(".revelar");
 
    if ("IntersectionObserver" in window) {
        var observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("revelada");
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.12 });
 
        secoes.forEach(function (secao) { observador.observe(secao); });
    } else {
        secoes.forEach(function (secao) { secao.classList.add("revelada"); });
    }
 
    // Botão de voltar ao topo
    var botaoTopo = document.getElementById("voltar-topo");
 
    if (botaoTopo) {
        window.addEventListener("scroll", function () {
            botaoTopo.classList.toggle("visivel", window.scrollY > 700);
        });
    }
})();
 