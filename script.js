// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Apology reveal animation
document.addEventListener('DOMContentLoaded', () => {
  // Forgive buttons
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      alert("Yay Sania! 🌟 Best friends forever! Let's chat soon 😊");
    });
  }
  if (noBtn) {
    let ticking = false;
    document.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const x = e.clientX;
          const y = e.clientY;
          const noRect = noBtn.getBoundingClientRect();
          noBtn.style.left = `${Math.max(20, Math.min(window.innerWidth - noRect.width - 20, x - noRect.width / 2 - 100))}px`;
          noBtn.style.top = `${Math.max(20, Math.min(window.innerHeight - noRect.height - 20, y - noRect.height / 2 - 100))}px`;
          ticking = false;
        });
        ticking = true;
      }
    });

    noBtn.style.pointerEvents = 'auto';
    noBtn.addEventListener('click', (e) => e.preventDefault());
    noBtn.addEventListener('mouseenter', () => {
      noBtn.style.pointerEvents = 'none';
      noBtn.textContent = 'Nope! 😜';
    });
  }
  const apologyBtns = document.querySelectorAll('.apology-btn');
  apologyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const hiddenContent = btn.nextElementSibling;
      if (hiddenContent && hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
        hiddenContent.style.animation = 'fadeInUp 1s ease';
        btn.textContent = 'Thanks for reading 😊';
      }
    });
  });



  // Contact form
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks Sania! Looking forward to chat as good friends 😊🌟');
      form.reset();
    });
  }

  // Confetti on load for index
  if (document.title.includes('Home')) {
    // Simple confetti effect
    function confetti() {
      for (let i = 0; i < 50; i++) {
        const conf = document.createElement('div');
        conf.innerText = '🌟';
        conf.style.position = 'fixed';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-10px';
        conf.style.fontSize = '20px';
        conf.style.pointerEvents = 'none';
        conf.style.zIndex = '9999';
        conf.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 5000);
      }
    }
    confetti();
    setTimeout(confetti, 2000);
  }
});

// Add fall animation to CSS via JS if needed, but using inline
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
