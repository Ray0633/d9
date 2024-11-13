document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light"; 
    document.documentElement.setAttribute("data-bs-theme", savedTheme);

    const themeIcon = document.getElementById("themeIcon");
    if (savedTheme === "dark") {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    } else {
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }
});

function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById("themeIcon");

    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-bs-theme", newTheme);

    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    } else {
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }
}
