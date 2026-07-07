const hero = document.querySelector(".hero");

function revelarHero() {
    const topo = hero.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (topo < alturaTela - 100) {
        hero.classList.add("show");
    }
}

window.addEventListener("scroll", revelarHero);

revelarHero();