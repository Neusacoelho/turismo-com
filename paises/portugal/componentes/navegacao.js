/* Apenas Portugal. Carregar com defer, depois de site.js quando ele existir.
   Não gera cabeçalhos nem rodapés e não vincula eventos aos controles centrais. */
(() => {
    "use strict";

    const cabecalho = document.querySelector("header[data-portugal-navegacao]");
    if (!cabecalho || cabecalho.hasAttribute("data-portugal-navegacao-pronta")) return;
    const portugal = new URL("../../../portugal.html", document.currentScript.src);
    const paginaExata = url => url.origin === location.origin && url.pathname === location.pathname;
    const principal = paginaExata(portugal);

    cabecalho.querySelectorAll("a[href]").forEach(link => {
        const destino = new URL(link.href);
        if (paginaExata(destino)) link.setAttribute("aria-current", "page");
        else if (link.getAttribute("aria-current") === "page") link.removeAttribute("aria-current");
        link.toggleAttribute("data-portugal-contexto", !principal && destino.href === portugal.href);
    });
     const botaoPaises = cabecalho.querySelector(".botao-dropdown, .tc-botao-paises");
    // if (botaoPaises && !principal) {
    //     botaoPaises.setAttribute("data-portugal-contexto", "");
    //     botaoPaises.setAttribute("aria-label", "Países — contexto: Portugal");
    //  }

    // Os quatro cabeçalhos gerados continuam sob controle exclusivo de site.js.
    if (cabecalho.classList.contains("cabecalho-principal")) iniciarMenuLocal();
    cabecalho.setAttribute("data-portugal-navegacao-pronta", "");

    function iniciarMenuLocal() {
        const botaoMenu = cabecalho.querySelector(".botao-menu");
        const navegacao = cabecalho.querySelector(".navegacao");
        const grupoPaises = cabecalho.querySelector(".grupo-dropdown");
        const listaPaises = cabecalho.querySelector(".menu-dropdown");
        if (!botaoMenu || !navegacao || !grupoPaises || !botaoPaises || !listaPaises) return;
        const telaCompacta = matchMedia("(max-width: 980px)");
        const permiteHover = matchMedia("(hover: hover) and (pointer: fine)");
        let modoAnterior = telaCompacta.matches;
        let focoAntesDaMudanca = null;
        let paisesPorHover = false;

        // Reordena o controle existente de Cultura; não cria outro botão.
        navegacao.before(botaoMenu);

        function definirPaises(aberto, porHover = false) {
            paisesPorHover = aberto && porHover;
            grupoPaises.classList.toggle("aberto", aberto);
            botaoPaises.setAttribute("aria-expanded", String(aberto));
        }
        function definirMenu(aberto) {
            const expandido = aberto && telaCompacta.matches;
            navegacao.classList.toggle("aberta", expandido);
            botaoMenu.setAttribute("aria-expanded", String(expandido));
            botaoMenu.setAttribute("aria-label", expandido ? "Fechar menu" : "Abrir menu");
            if (!expandido) definirPaises(false);
        }

        botaoMenu.addEventListener("click", () => definirMenu(botaoMenu.getAttribute("aria-expanded") !== "true"));
        botaoPaises.addEventListener("click", () => definirPaises(paisesPorHover || botaoPaises.getAttribute("aria-expanded") !== "true"));
        grupoPaises.addEventListener("pointerenter", evento => {
            if (permiteHover.matches && evento.pointerType === "mouse" &&
                botaoPaises.getAttribute("aria-expanded") !== "true") definirPaises(true, true);
        });
        grupoPaises.addEventListener("pointerleave", () => {
            if (!grupoPaises.contains(document.activeElement)) definirPaises(false);
        });
        cabecalho.addEventListener("keydown", evento => {
            if (evento.key !== "Escape") return;
            if (botaoPaises.getAttribute("aria-expanded") === "true") {
                definirPaises(false);
                botaoPaises.focus();
            } else if (telaCompacta.matches && botaoMenu.getAttribute("aria-expanded") === "true") {
                definirMenu(false);
                botaoMenu.focus();
            } else return;
            evento.preventDefault();
            evento.stopPropagation();
        });
        document.addEventListener("click", evento => {
            if (!cabecalho.contains(evento.target)) {
                const focoNoMenu = telaCompacta.matches && navegacao.contains(document.activeElement);
                const focoNosPaises = listaPaises.contains(document.activeElement);
                definirMenu(false);
                if (focoNoMenu) botaoMenu.focus();
                else if (focoNosPaises) botaoPaises.focus();
            } else if (!grupoPaises.contains(evento.target)) definirPaises(false);
        });
        grupoPaises.addEventListener("focusout", evento => {
            if (!grupoPaises.contains(evento.relatedTarget)) definirPaises(false);
        });
        cabecalho.addEventListener("focusout", evento => {
            if (telaCompacta.matches !== modoAnterior && evento.relatedTarget === null) focoAntesDaMudanca = evento.target;
            if (!cabecalho.contains(evento.relatedTarget)) definirMenu(false);
        });
        navegacao.addEventListener("click", evento => {
            if (!evento.target.closest("a")) return;
            const focoNoMenu = telaCompacta.matches && navegacao.contains(document.activeElement);
            const focoNosPaises = listaPaises.contains(document.activeElement);
            definirMenu(false);
            if (focoNoMenu) botaoMenu.focus();
            else if (focoNosPaises) botaoPaises.focus();
        });
        telaCompacta.addEventListener("change", () => {
            const foco = focoAntesDaMudanca || document.activeElement;
            focoAntesDaMudanca = null;
            modoAnterior = telaCompacta.matches;
            definirMenu(false);
            if (telaCompacta.matches && navegacao.contains(foco)) botaoMenu.focus();
            else if (!telaCompacta.matches && (foco === botaoMenu || listaPaises.contains(foco))) navegacao.querySelector("a").focus();
        });

        botaoMenu.disabled = false;
        botaoPaises.disabled = false;
        definirMenu(false);
        cabecalho.setAttribute("data-portugal-menu-pronto", "");
        document.body.classList.add("menu-pronto");
    }
})();
