(function () {
    var m = document.querySelector(".botao-menu"), n = document.querySelector(".navegacao"), g = document.querySelector(".grupo-dropdown");
    m.addEventListener("click", function () { m.setAttribute("aria-expanded", n.classList.toggle("aberta")) });
    g.querySelector(".botao-dropdown").addEventListener("click", function () { g.classList.toggle("aberto") });
})();