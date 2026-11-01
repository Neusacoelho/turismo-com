
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector(".botao-menu-irlanda");
    const menu = document.querySelector(".nav-irlanda");

    if (!botao || !menu) return;

    botao.addEventListener("click", () => {
        const aberto = menu.classList.toggle("active");

        botao.setAttribute("aria-expanded", aberto);
        botao.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    });
});
