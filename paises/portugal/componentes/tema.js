/* Tema exclusivo das páginas de Portugal. Não depende dos componentes compartilhados. */
(() => {
    "use strict";

    const chave = "turismo.portugal.tema";
    const raiz = document.documentElement;

    function temaEscuroAtivo() {
        return raiz.dataset.portugalTema === "escuro";
    }

    function salvarTema(escuro) {
        try {
            localStorage.setItem(chave, escuro ? "escuro" : "claro");
        } catch (_) {
            // O botão continua funcionando quando o armazenamento está bloqueado.
        }
    }

    function aplicarTema(escuro, botao) {
        if (escuro) raiz.dataset.portugalTema = "escuro";
        else delete raiz.dataset.portugalTema;

        botao.setAttribute("aria-pressed", String(escuro));
        botao.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
        botao.title = escuro ? "Ativar tema claro" : "Ativar tema escuro";
    }

    function criarBotao() {
        const botao = document.createElement("button");
        botao.className = "portugal-tema-alternancia";
        botao.type = "button";
        botao.innerHTML = `
            <svg class="portugal-tema-icone portugal-tema-icone-sol" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
            </svg>
            <svg class="portugal-tema-icone portugal-tema-icone-lua" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M20.4 14.6A8.5 8.5 0 0 1 9.4 3.6 8.5 8.5 0 1 0 20.4 14.6Z"></path>
            </svg>`;
        aplicarTema(temaEscuroAtivo(), botao);
        botao.addEventListener("click", () => {
            const escuro = !temaEscuroAtivo();
            aplicarTema(escuro, botao);
            salvarTema(escuro);
        });
        return botao;
    }

    function inserirBotao() {
        const cabecalho = document.querySelector("header[data-portugal-navegacao]");
        if (!cabecalho || cabecalho.querySelector(".portugal-tema-alternancia")) return;

        const barra = cabecalho.querySelector(":scope > .barra-cabecalho, :scope > .tc-container.tc-barra-cabecalho");
        if (!barra) return;

        const botao = criarBotao();
        const controleMenu = barra.querySelector(":scope > .botao-menu, :scope > .tc-botao-menu");
        if (controleMenu) barra.insertBefore(botao, controleMenu);
        else barra.append(botao);
    }

    inserirBotao();
})();
