document.addEventListener("DOMContentLoaded", () => {
    // Lógica para o Leitor Sanfonado (Accordion) das Redações
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
            // Alterna a classe 'active' para mudar o ícone de + para -
            this.classList.toggle("active");

            // Seleciona o painel de conteúdo imediatamente após o botão
            const panel = this.nextElementSibling;

            // Se o painel estiver aberto, feche-o; caso contrário, abra-o
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Rolagem suave para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Margem no topo
                    behavior: 'smooth'
                });
            }
        });
    });
});