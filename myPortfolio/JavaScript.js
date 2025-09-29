// Navbar shadow on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.Navbar');
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Typewriter effect for portfolio title
function typeWriter(element, text, speed = 80) {
  let i = 0;
  element.textContent = '';
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.white-text');
  if (title) {
    typeWriter(title, "Your Name's Portfolio");
  }
});

// Ripple effect for buttons
document.querySelectorAll('input[type=submit], button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Light/Dark theme toggle
const themeBtn = document.createElement('button');
themeBtn.textContent = '🌙 Toggle Theme';
themeBtn.className = 'theme-toggle';
document.body.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️ Toggle Theme' : '🌙 Toggle Theme';
});

// Fade in sections on scroll (already included previously)
const rows = document.querySelectorAll('.Row');
const fadeInOnScroll = () => {
  rows.forEach(row => {
    const rect = row.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      row.style.opacity = 1;
      row.style.transform = 'translateY(0)';
    }
  });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', () => {
  rows.forEach(row => {
    row.style.opacity = 0;
    row.style.transform = 'translateY(50px)';
    row.style.transition = 'opacity 1s, transform 1s';
  });
  fadeInOnScroll();
});