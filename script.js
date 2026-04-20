/* =========================
   SIMPLE PROFESSIONAL UX JS
   ========================= */

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


/* Navbar shadow on scroll */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        header.style.transition = "0.3s ease";
    } else {
        header.style.boxShadow = "none";
    }
});


/* Fade-in animation on scroll */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.6s ease-out";
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    observer.observe(section);
});


/* Console message (developer signature) */
console.log("InsightBlog loaded successfully 🚀");
window.onload = function() {
  // Always show the modal on page load
  document.getElementById("welcomeModal").style.display = "flex";

  document.getElementById("laterBtn").onclick = function() {
    document.getElementById("welcomeModal").style.display = "none";
    // ✅ No saving — so it will come back again on refresh
  };

  document.getElementById("supportBtn").onclick = function() {
    document.getElementById("welcomeModal").style.display = "none";
    // ✅ Redirect to support page
    window.location.href = "Support Us.html";
  };
};
/* DARK MODE TOGGLE */

const toggleBtn = document.getElementById("darkModeToggle");

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
}
/* AUTO DETECT SYSTEM THEME */

const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// Apply on load
applyTheme(systemDark.matches);

// Listen for system changes
systemDark.addEventListener("change", (e) => {
    applyTheme(e.matches);
});

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
