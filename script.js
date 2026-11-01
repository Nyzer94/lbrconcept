/**
 * LBR CONCEPT — FRONT-END ARCHITECTURE & INTERACTIONS
 * Direction Artistique & Expérience Réactive
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initCounters();
  initFormInteractivity();
  checkSubmissionRedirect();
});

/* Affichage du message de confirmation si redirection après envoi avec fichier */
function checkSubmissionRedirect() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') === 'success') {
    const successMsg = document.getElementById('formSuccessMessage');
    if (successMsg) {
      successMsg.classList.remove('hidden');
      setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
      }, 1000);
    }
  }
}

/* 1. Navbar dynamic background on scroll */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* 2. Mobile Menu Toggle */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('opacity-100');
    if (isOpen) {
      menu.classList.remove('opacity-100', 'pointer-events-auto');
      menu.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    } else {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('opacity-100', 'pointer-events-auto');
      menu.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    });
  });
}

/* 3. Number Counter Animation on Intersection */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 2000;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('chiffres');
  if (statsSection) observer.observe(statsSection);
}

/* 4. Form Select Interactivity & File Upload Feedback */
function initFormInteractivity() {
  const select = document.getElementById('projectTypeSelect');
  const otherContainer = document.getElementById('otherProjectTypeContainer');
  const otherInput = document.getElementById('otherProjectTypeInput');

  if (select && otherContainer) {
    select.addEventListener('change', () => {
      if (select.value === 'autre') {
        otherContainer.classList.remove('hidden');
        if (otherInput) otherInput.setAttribute('required', 'required');
      } else {
        otherContainer.classList.add('hidden');
        if (otherInput) {
          otherInput.removeAttribute('required');
          otherInput.value = '';
        }
      }
    });
  }

  // File upload indicator
  const fileInput = document.getElementById('dceUpload');
  const fileLabel = document.getElementById('dceUploadLabel');
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        const count = fileInput.files.length;
        if (count === 1) {
          fileLabel.innerHTML = `<span class="text-[#c5a059] font-mono">${fileInput.files[0].name}</span> (${(fileInput.files[0].size / 1024 / 1024).toFixed(2)} Mo)`;
        } else {
          fileLabel.innerHTML = `<span class="text-[#c5a059] font-mono">${count} fichiers sélectionnés</span>`;
        }
      }
    });
  }
}

window.handleFormSubmit = async function(event) {
  const form = document.getElementById('contactForm');
  const fileInput = document.getElementById('dceUpload');
  const successMsg = document.getElementById('formSuccessMessage');
  const errorMsg = document.getElementById('formErrorMessage');
  const errorText = document.getElementById('formErrorText');

  const btn = form.querySelector('button[type="submit"]');
  const originalHtml = btn.innerHTML;

  // Récupération des données du formulaire
  const company = document.getElementById('company')?.value?.trim() || 'Prospect';
  const selectVal = document.getElementById('projectTypeSelect')?.value;
  const customVal = document.getElementById('otherProjectTypeInput')?.value?.trim();
  const projectType = (selectVal === 'autre' && customVal) ? `Autre: ${customVal}` : (selectVal || 'Non spécifié');

  const subject = `Demande de devis depuis le site : ${company}`;

  // Mettre à jour l'objet pour l'email
  const subjectInput = document.getElementById('formSubmitSubject');
  if (subjectInput) subjectInput.value = subject;

  // Si l'utilisateur a joint un fichier : soumission native obligatoire pour que FormSubmit attache le fichier
  const hasFile = fileInput && fileInput.files && fileInput.files.length > 0;

  if (hasFile) {
    // Laisser la soumission HTML standard s'exécuter
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Transmission du dossier et des pièces...`;
    return true; // continue standard submit
  }

  // Sinon (pas de fichier), envoi fluide AJAX sans rechargement de page
  event.preventDefault();

  if (successMsg) successMsg.classList.add('hidden');
  if (errorMsg) errorMsg.classList.add('hidden');

  btn.disabled = true;
  btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Transmission en cours...`;

  const formData = new FormData(form);

  try {
    const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/rayanchennaoui@gmail.com';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const result = await response.json().catch(() => ({ success: true }));
    const isSuccess = response.ok && (result.success === "true" || result.success === true);

    if (isSuccess) {
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Dossier Transmis`;
      btn.classList.add('bg-emerald-600', 'text-white');
      if (successMsg) successMsg.classList.remove('hidden');
      form.reset();

      const otherContainer = document.getElementById('otherProjectTypeContainer');
      if (otherContainer) otherContainer.classList.add('hidden');

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
        btn.classList.remove('bg-emerald-600', 'text-white');
      }, 5000);
    } else {
      throw new Error(result.message || `Erreur serveur (${response.status})`);
    }
  } catch (err) {
    console.error('Erreur transmission formulaire:', err);
    if (errorMsg) {
      if (errorText) errorText.textContent = "Erreur d'envoi. Veuillez vérifier la connexion ou contacter le 01 48 81 00 00.";
      errorMsg.classList.remove('hidden');
    }
    btn.disabled = false;
    btn.innerHTML = originalHtml;
  }
};
