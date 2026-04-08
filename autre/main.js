document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    let page = path.split("/").pop();
    
    // Si l'URL est vide ou correspond à la racine, on force index.html
    if (page === "" || page.toLowerCase() === "index.html") {
        page = "index.html";
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
});