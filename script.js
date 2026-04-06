document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU LATERAL (SIDEBAR) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        if (menuToggle && sidebar && overlay) {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        }
    };

    // Eventos de clique para o menu
    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    // Fecha a sidebar ao clicar em um dos links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- LÓGICA DOS CARROSSEIS (FOTOS) ---
    const carousels = document.querySelectorAll('section');

    carousels.forEach(section => {
        const slides = section.querySelectorAll('.slide');
        const dots = section.querySelectorAll('.dot');
        const prevBtn = section.querySelector('.prev-arrow');
        const nextBtn = section.querySelector('.next-arrow');

        if (slides.length === 0) return;

        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides[currentSlide].classList.add('active');
            if (dots.length > 0) {
                dots[currentSlide].classList.add('active');
            }
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
    });
});