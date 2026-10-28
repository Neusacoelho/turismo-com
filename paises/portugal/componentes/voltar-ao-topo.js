(() => {
    const iniciar = () => {
        if (document.querySelector('[data-voltar-ao-topo]')) return;

        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'voltar-ao-topo';
        botao.setAttribute('aria-label', 'Voltar ao topo');
        botao.setAttribute('data-voltar-ao-topo', '');
        botao.innerHTML = `
            <svg class="voltar-ao-topo__icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
            </svg>`;

        const atualizarEstado = () => {
            botao.classList.toggle('voltar-ao-topo--visivel', window.scrollY > 160);
        };

        botao.addEventListener('click', () => {
            const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: movimentoReduzido ? 'auto' : 'smooth' });
        });

        window.addEventListener('scroll', atualizarEstado, { passive: true });
        document.body.append(botao);
        atualizarEstado();
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, { once: true });
    else iniciar();
})();
