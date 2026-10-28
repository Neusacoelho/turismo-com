(() => {
    const criarRedesSociais = () => {
        document.querySelectorAll('footer nav').forEach((coluna) => {
            const titulo = coluna.querySelector('h3');
            const contato = [...coluna.querySelectorAll('a')]
                .find((link) => link.textContent.trim().toLowerCase() === 'contato');

            if (!titulo || titulo.textContent.trim().toLowerCase() !== 'informações' || !contato ||
                coluna.querySelector('[data-redes-sociais-portugal]')) return;

            const redes = document.createElement('div');
            redes.className = 'redes-sociais-portugal';
            redes.setAttribute('data-redes-sociais-portugal', '');
            redes.innerHTML = `
                <p class="redes-sociais-portugal__titulo">Acompanhe nossas redes</p>
                <div class="redes-sociais-portugal__icones" role="group" aria-label="Redes sociais: Facebook, Instagram, X e YouTube">
                    <span class="redes-sociais-portugal__icone" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.5v8h3Z"/></svg>
                    </span>
                    <span class="redes-sociais-portugal__icone" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.4 3h9.2A4.4 4.4 0 0 1 21 7.4v9.2a4.4 4.4 0 0 1-4.4 4.4H7.4A4.4 4.4 0 0 1 3 16.6V7.4A4.4 4.4 0 0 1 7.4 3Zm0 2A2.4 2.4 0 0 0 5 7.4v9.2A2.4 2.4 0 0 0 7.4 19h9.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 16.6 5H7.4ZM12 7.7A4.3 4.3 0 1 1 7.7 12 4.3 4.3 0 0 1 12 7.7Zm0 2A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.5-3.1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" clip-rule="evenodd"/></svg>
                    </span>
                    <span class="redes-sociais-portugal__icone" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.3L6.6 21H3.5l7.3-8.4L3.3 3h6.2l4.3 5.7L18.9 3Zm-1.1 16h1.7L8.6 4.9H6.8L17.8 19Z"/></svg>
                    </span>
                    <span class="redes-sociais-portugal__icone" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9.1 2 12 2 12s0 2.9.4 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 14.9 22 12 22 12s0-2.9-.4-4.8ZM10 15.4V8.6l5.7 3.4-5.7 3.4Z"/></svg>
                    </span>
                </div>`;
            contato.insertAdjacentElement('afterend', redes);
        });
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', criarRedesSociais, { once: true });
    else criarRedesSociais();
})();
