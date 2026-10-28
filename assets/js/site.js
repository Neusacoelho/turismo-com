/*
 * Componentes do TURISMO.COM, sem bibliotecas e sem fetch.
 * Ordem: ler configuração -> montar header/footer -> ativar menu.
 * Carregar uma única vez com defer. O conteúdo do país permanece no HTML.
 */
(() => {
    "use strict";

    const pagina = document.body;
    if (!pagina || !pagina.classList.contains("tc-site")) return;

    // Distância do HTML até a raiz: "../" nos modelos, "../../" em paises/egito/.
    const caminhoRaiz = pagina.dataset.raiz;
    if (!caminhoRaiz || !/^(?:\.\/|(?:\.\.\/)+)$/.test(caminhoRaiz)) {
        console.warn("TURISMO.COM: confira data-raiz; os links básicos foram mantidos.");
        return;
    }
    const raiz = new URL(caminhoRaiz, document.baseURI);

    // Só incluir páginas existentes. Não deduzir URLs a partir do nome do país.
    const paises = [
        ["Brasil", "brasil.html"],
        ["Portugal", "portugal.html"],
        ["França", "franca.html"],
        ["Espanha", "espanha.html"],
        ["Itália", "italia.html"],
        ["Japão", "japao.html"],
        ["China", "china.html"]
    ];
    const paisesPortugal = [
        ["Brasil", "brasil.html"],
        ["Portugal", "portugal.html"],
        ["Grécia", "grecia.html"],
        ["França", "franca.html"],
        ["Espanha", "espanha.html"],
        ["Itália", "italia.html"],
        ["Japão", "japao.html"],
        ["México", "mexico.html"],
        ["China", "china.html"],
        ["Estados Unidos", "estados-unidos.html"],
        ["República Dominicana", "paises/republica-dominicana/republica-dominicana.html"]
    ];
    const servicos = [
        ["Hospedagem", pagina.classList.contains("pais-portugal") ? "paises/portugal/hospedagem.html" : "hospedagem.html"],
        ["Alimentação", pagina.classList.contains("pais-portugal") ? "paises/portugal/alimentacao.html" : "alimentacao.html"],
        ["Compras", pagina.classList.contains("pais-portugal") ? "paises/portugal/compras.html" : "compras.html"],
        ["Contato", pagina.classList.contains("pais-portugal") ? "paises/portugal/contato.html" : "contato.html"]
    ];

    function criarLink(texto, caminho) {
        const link = document.createElement("a");
        const destino = new URL(caminho, raiz);
        link.href = destino.href;
        link.textContent = texto;
        // Compara a página exata; uma página interna não marca a principal como atual.
        if (destino.origin === location.origin && destino.pathname === location.pathname) {
            link.setAttribute("aria-current", "page");
        }
        return link;
    }

    function preencherLinks(elemento, itens) {
        itens.forEach(([texto, caminho]) => elemento.append(criarLink(texto, caminho)));
    }

    // Configurações de página aceitam apenas caminhos HTML internos relativos à raiz.
    function caminhoHtmlValido(caminho) {
        return typeof caminho === "string" &&
            /^(?:[a-z0-9_-]+\/)*[a-z0-9_-]+\.html$/.test(caminho);
    }

    function montarCabecalho(cabecalho) {
        const modelo = document.createElement("template");
        // HTML fixo do componente. Nomes e caminhos variáveis entram por APIs do DOM.
        modelo.innerHTML = `
            <div class="tc-container tc-barra-cabecalho">
                <a class="tc-marca" data-tc-marca>
                    <span class="tc-marca-simbolo" aria-hidden="true">✈</span>
                    <span class="tc-marca-texto">
                        <strong>TURISMO<span>.COM</span></strong>
                        <small>DESCUBRA O MUNDO</small>
                    </span>
                </a>
                <button class="tc-botao-menu" type="button"
                        aria-label="Abrir menu principal" aria-expanded="false"
                        aria-controls="tc-navegacao-principal">
                    <span aria-hidden="true">☰</span> Menu
                </button>
                <nav class="tc-navegacao" id="tc-navegacao-principal" aria-label="Menu principal">
                    <div class="tc-grupo-paises">
                        <button class="tc-botao-paises" type="button"
                                aria-expanded="false" aria-controls="tc-lista-paises">
                            Países <span aria-hidden="true">⌄</span>
                        </button>
                        <div class="tc-lista-paises" id="tc-lista-paises"></div>
                    </div>
                </nav>
            </div>`;
        const conteudo = modelo.content;
        conteudo.querySelector("[data-tc-marca]").href = new URL("index.html", raiz).href;
        const navegacao = conteudo.querySelector(".tc-navegacao");
        navegacao.prepend(criarLink("Início", "index.html"));
        preencherLinks(conteudo.querySelector(".tc-lista-paises"), pagina.classList.contains("pais-portugal") ? paisesPortugal : paises);
        preencherLinks(navegacao, servicos);
        cabecalho.replaceChildren(conteudo);
    }

    function montarRodape(rodape) {
        const modelo = document.createElement("template");
        modelo.innerHTML = `
            <div class="tc-container">
                <div class="tc-rodape-grade">
                    <div class="tc-fluxo">
                        <h2>✈ TURISMO<span>.COM</span></h2>
                        <p>Descubra destinos, culturas e experiências ao redor do mundo.</p>
                    </div>
                    <nav class="tc-rodape-coluna" aria-label="Explorar no rodapé">
                        <h3>Explorar</h3>
                    </nav>
                    <nav class="tc-rodape-coluna" aria-label="Serviços no rodapé">
                        <h3>Serviços</h3>
                    </nav>
                    <nav class="tc-rodape-coluna" aria-label="Informações no rodapé">
                        <h3>Informações</h3>
                    </nav>
                </div>
                <div class="tc-rodape-inferior"><p></p><p>Projeto acadêmico desenvolvido em equipe.</p></div>
            </div>`;
        const conteudo = modelo.content;
        const explorar = conteudo.querySelector('[aria-label="Explorar no rodapé"]');
        explorar.append(criarLink("Início", "index.html"));
        if (pagina.dataset.paisNome && caminhoHtmlValido(pagina.dataset.paisUrl)) {
            explorar.append(criarLink(pagina.dataset.paisNome, pagina.dataset.paisUrl));
        }
        if (caminhoHtmlValido(pagina.dataset.galeriaUrl)) {
            explorar.append(criarLink("Galeria do país", pagina.dataset.galeriaUrl));
        }
        // Separa os grupos só no rodapé. A lista do cabeçalho mantém Contato.
        preencherLinks(conteudo.querySelector('[aria-label="Serviços no rodapé"]'),
            servicos.filter(([, caminho]) => !caminho.endsWith("contato.html")));
        preencherLinks(conteudo.querySelector('[aria-label="Informações no rodapé"]'),
            servicos.filter(([, caminho]) => caminho.endsWith("contato.html")));
        conteudo.querySelector(".tc-rodape-inferior p").textContent =
            `© ${new Date().getFullYear()} Turismo.com`;
        rodape.replaceChildren(conteudo);
    }

    function iniciarMenu(cabecalho) {
        const botaoMenu = cabecalho.querySelector(".tc-botao-menu");
        const navegacao = cabecalho.querySelector(".tc-navegacao");
        const grupoPaises = cabecalho.querySelector(".tc-grupo-paises");
        const botaoPaises = cabecalho.querySelector(".tc-botao-paises");
        const listaPaises = cabecalho.querySelector(".tc-lista-paises");
        const telaCompacta = window.matchMedia("(max-width: 980px)");
        if (!botaoMenu || !navegacao || !grupoPaises || !botaoPaises || !listaPaises) return;
        let modoCompactoAnterior = telaCompacta.matches;
        let focoAntesDaMudanca = null;

        function definirPaises(aberto) {
            cabecalho.dataset.paisesAberto = String(aberto);
            botaoPaises.setAttribute("aria-expanded", String(aberto));
        }

        function definirMenu(aberto) {
            const expandido = aberto && telaCompacta.matches;
            cabecalho.dataset.menuAberto = String(expandido);
            botaoMenu.setAttribute("aria-expanded", String(expandido));
            botaoMenu.setAttribute("aria-label", expandido ? "Fechar menu principal" : "Abrir menu principal");
            if (!expandido) definirPaises(false);
        }

        botaoMenu.addEventListener("click", () => {
            definirMenu(botaoMenu.getAttribute("aria-expanded") !== "true");
            // O botão precede os links: Tab continua naturalmente pela navegação.
        });
        botaoPaises.addEventListener("click", () => {
            definirPaises(botaoPaises.getAttribute("aria-expanded") !== "true");
        });

        cabecalho.addEventListener("keydown", (evento) => {
            if (evento.key !== "Escape") return;
            if (botaoPaises.getAttribute("aria-expanded") === "true") {
                definirPaises(false);
                botaoPaises.focus();
            } else if (telaCompacta.matches && botaoMenu.getAttribute("aria-expanded") === "true") {
                definirMenu(false);
                botaoMenu.focus();
            } else {
                return;
            }
            evento.preventDefault();
            evento.stopPropagation();
        });

        document.addEventListener("click", (evento) => {
            if (!cabecalho.contains(evento.target)) {
                const focoNoMenu = telaCompacta.matches && navegacao.contains(document.activeElement);
                const focoNosPaises = listaPaises.contains(document.activeElement);
                definirMenu(false);
                if (focoNoMenu) botaoMenu.focus();
                else if (focoNosPaises) botaoPaises.focus();
            } else if (!grupoPaises.contains(evento.target)) {
                definirPaises(false);
            }
        });

        grupoPaises.addEventListener("focusout", (evento) => {
            if (!grupoPaises.contains(evento.relatedTarget)) definirPaises(false);
        });
        cabecalho.addEventListener("focusout", (evento) => {
            // O navegador pode desfocar um elemento ocultado pelo CSS antes de
            // avisar o matchMedia. Guarda esse foco só durante a troca de modo.
            if (telaCompacta.matches !== modoCompactoAnterior && evento.relatedTarget === null) {
                focoAntesDaMudanca = evento.target;
            }
            // Tab para fora fecha o painel sem puxar o foco de volta.
            if (!cabecalho.contains(evento.relatedTarget)) definirMenu(false);
        });
        navegacao.addEventListener("click", (evento) => {
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
            modoCompactoAnterior = telaCompacta.matches;
            const focoNaNavegacao = navegacao.contains(foco);
            const focoNaLista = listaPaises.contains(foco);
            definirMenu(false);
            if (telaCompacta.matches && focoNaNavegacao) botaoMenu.focus();
            else if (!telaCompacta.matches && (foco === botaoMenu || focoNaLista)) {
                navegacao.querySelector("a").focus();
            }
        });

        definirMenu(false);
        cabecalho.setAttribute("data-tc-menu-pronto", "");
    }

    // Uma instância de cada componente por página; repetir o script não duplica eventos.
    const cabecalho = pagina.querySelector("header.tc-cabecalho[data-tc-cabecalho]");
    if (cabecalho && !cabecalho.hasAttribute("data-tc-inicializado")) {
        montarCabecalho(cabecalho);
        iniciarMenu(cabecalho);
        cabecalho.setAttribute("data-tc-inicializado", "");
    }
    const rodape = pagina.querySelector("footer.tc-rodape[data-tc-rodape]");
    if (rodape && !rodape.hasAttribute("data-tc-inicializado")) {
        montarRodape(rodape);
        rodape.setAttribute("data-tc-inicializado", "");
    }
})();
