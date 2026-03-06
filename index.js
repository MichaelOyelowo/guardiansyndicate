document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu_button');
    const floatingBtn = document.getElementById('floatingBtn');
    const mobileMenu = document.querySelector('.mobile_menu');
    const menuLinks = document.querySelectorAll('.mobile_menu a');

    floatingBtn.addEventListener('click', () => {
        menuButton.classList.toggle('drop')
        mobileMenu.classList.toggle('active');
        floatingBtn.classList.toggle('is-open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuButton.classList.remove('drop')
            mobileMenu.classList.remove('active');
            floatingBtn.classList.remove('is-open');
        })
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !floatingBtn.contains(e.target)) {
            menuButton.classList.remove('drop')
            mobileMenu.classList.remove('active');
            floatingBtn.classList.remove('is-open');
        }
    })

    // ----- SCROLL REVEAL ENGINE -----
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            } else {
                // entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.15
    });
    revealElements.forEach(el => revealObserver.observe(el));
});
