const themeToggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    html.classList.add("dark");
} else {
    html.classList.remove("dark");
}

themeToggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
});

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.add("hidden");
    } else {
        sidebar.classList.add("-translate-x-full");
    }
});

if (window.innerWidth < 1024) {
    sidebar.classList.add("-translate-x-full");
}

document.addEventListener("DOMContentLoaded", function () {
    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    var toastList = toastElList.map(function (toastEl) {
        var toast = new bootstrap.Toast(toastEl, {
            autohide: true,
            delay: 5000,
        });
        toast.show();
        return toast;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const flowSelect = document.getElementById("flow");
    const flowUrlContainer = document.getElementById("flow_url_container");
    const flowUrlInput = document.getElementById("flow_url");

    if (flowSelect && flowUrlContainer && flowUrlInput) {
        function toggleFlowUrl() {
            const isFlowActive = flowSelect.value === "1";
            flowUrlContainer.style.display = isFlowActive ? "block" : "none";
            if (!isFlowActive) {
                flowUrlInput.value = "";
            }
            flowUrlInput.required = isFlowActive;
        }

        flowSelect.addEventListener("change", toggleFlowUrl);
        toggleFlowUrl();
    }
});
