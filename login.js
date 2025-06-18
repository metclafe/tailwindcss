function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", document.documentElement.classList.contains("dark"));
}

if (localStorage.getItem("darkMode") === "true" || (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('senha');
    const showIcon = document.getElementById('show-password-icon');
    const hideIcon = document.getElementById('hide-password-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showIcon.classList.add('hidden');
        hideIcon.classList.remove('hidden');
    } else {
        passwordInput.type = 'password';
        showIcon.classList.remove('hidden');
        hideIcon.classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const alerts = document.querySelectorAll('[role="alert"]');
    alerts.forEach((alert) => {
        setTimeout(() => {
            alert.style.opacity = "0";
            alert.style.transform = "translateY(-100%)";
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    });
});