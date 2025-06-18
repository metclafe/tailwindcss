tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Outfit", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "rgb(3, 105, 161)",
                    dark: "rgb(56, 189, 248)",
                },
                secondary: "rgb(7, 89, 133)",
                dark: {
                    bg: "#0F172A",
                    card: "#1E293B",
                    hover: "#334155",
                },
            },
        },
    },
};


// Verifica o tema salvo ou preferência do sistema
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    }
}

// Auto-hide toasts after 5 seconds
document.addEventListener("DOMContentLoaded", function () {
    const toasts = document.querySelectorAll('[role="alert"]');
    toasts.forEach((toast) => {
        setTimeout(() => {
            toast.style.transition = "opacity 0.5s ease-out";
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    });
});

// Função para controlar visibilidade do campo Flow URL
function toggleFlowUrl() {
    const flowSelect = document.querySelector('select[name="flow"]');
    const flowUrlContainer = document.querySelector('#flow_url_container');
    
    if (!flowSelect || !flowUrlContainer) return;

    // Função para atualizar visibilidade
    const updateVisibility = () => {
        if (flowSelect.value === '1') {
            flowUrlContainer.style.display = 'block';
            flowUrlContainer.querySelector('input').required = true;
        } else {
            flowUrlContainer.style.display = 'none';
            flowUrlContainer.querySelector('input').required = false;
            flowUrlContainer.querySelector('input').value = '';
        }
    }

    // Atualiza no carregamento
    updateVisibility();

    // Atualiza quando mudar o status
    flowSelect.addEventListener('change', updateVisibility);
}

// Inicializa o controle de Flow URL quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    toggleFlowUrl();
});
