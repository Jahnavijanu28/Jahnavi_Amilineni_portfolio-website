// script.js — Interactive Portfolio Enhancements
console.log("Portfolio JS loaded");

// 🌐 1. Mobile Menu Toggle
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}

// 🧑‍💻 2. Typewriter Effect for Hero Tagline
const typewriter = (text, elementId, speed = 80) => {
  const element = document.getElementById(elementId);
  let i = 0;
  const typing = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  };
  if (element) {
    element.textContent = '';
    typing();
  }
};
window.addEventListener('load', () => {
  typewriter("A Full Stack Engineer crafting smart web apps.", "typewriter-text");
});

// 🔄 3. Smooth Scroll for Navbar Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✨ 4. Reveal Sections on Scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("opacity-0");
  observer.observe(section);
});

// ⬆️ 5. Scroll to Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "⬆";
scrollTopBtn.className = "fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 rounded shadow hidden z-50";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 📬 6. Contact Form Submission
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          contactForm.reset();
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      })
      .catch((error) => {
        alert("Oops! There was a network error.");
      });
  });
}
