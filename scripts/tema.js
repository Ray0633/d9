// Inicializa el tema cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Por defecto, 'light'
    document.documentElement.setAttribute("data-bs-theme", savedTheme);

    const themeIcon = document.getElementById("themeIcon");
    if (savedTheme === "dark") {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    } else {
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }
});

// Función para alternar el tema y guardarlo en localStorage
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById("themeIcon");

    // Alterna entre 'light' y 'dark'
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-bs-theme", newTheme);

    // Guarda la preferencia del tema en localStorage
    localStorage.setItem("theme", newTheme);

    // Cambia el ícono en función del tema
    if (newTheme === "dark") {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    } else {
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }
}
