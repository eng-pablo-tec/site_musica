// Função para rolar automaticamente os cards
let carousel = document.querySelector('.music-cards');
let scrollAmount = 0;

setInterval(() => {
    if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount += 200;  // Ajuste a quantidade do deslocamento
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    } else {
        scrollAmount = 0;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}, 3000);  // A cada 3 segundos
