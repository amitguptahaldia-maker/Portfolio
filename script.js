// Typed.js Animation on Home Page
document.addEventListener("DOMContentLoaded", () => {
    if(document.querySelector("#element")) {
        var typed = new Typed('#element', {
            strings: ['Web Developer', 'Java Programmer'],
            typeSpeed: 50,
            loop: true,
            backSpeed: 30,
            backDelay: 1500
        });
    }

    // Navbar active link highlighting
    const navLinks = document.querySelectorAll("nav .right ul li a");
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPage) {
            link.style.color = "#065084";
            link.style.fontWeight = "600";
        }
    });
});
