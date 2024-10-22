// Module pattern for better organization
const CafeDelights = (() => {
    // Private variables and functions
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuItems = document.querySelectorAll('.menu-item');

    const init = () => {
        attachEventListeners();
    };

    const attachEventListeners = () => {
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', changeLinkColor);
            link.addEventListener('mouseleave', resetLinkColor);
        });

        menuItems.forEach(item => {
            item.addEventListener('click', showItemAlert);
        });
    };

    const changeLinkColor = (event) => {
        event.target.style.color = '#ff9900';
    };

    const resetLinkColor = (event) => {
        event.target.style.color = '#fff';
    };

    const showItemAlert = (event) => {
        const itemName = event.currentTarget.querySelector('h3').innerText;
        alert(`You selected: ${itemName}`);
    };

    return {
        init
    };
})();

// Smooth scroll functionality
const smoothScroll = () => {
    const smoothScrollLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// Initialize modules
document.addEventListener('DOMContentLoaded', () => {
    CafeDelights.init();
    smoothScroll();
});
