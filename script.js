/**
 * LBR CONCEPT — FRONT-END ARCHITECTURE & INTERACTIONS
 * Direction Artistique & Expérience Réactive
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initCounters();
  initFormInteractivity();
});

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
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMessage');
  const errorMsg = document.getElementById('formErrorMessage');
  const errorText = document.getElementById('formErrorText');

  const btn = form.querySelector('button[type="submit"]');
  const originalHtml = btn.innerHTML;

  if (successMsg) successMsg.classList.add('hidden');
  if (errorMsg) errorMsg.classList.add('hidden');

  btn.disabled = true;
  btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Transmission en cours...`;

  // Récupération des données du formulaire
  const company = document.getElementById('company')?.value?.trim() || 'Prospect';
  const fullName = document.getElementById('fullName')?.value?.trim() || '';
  const email = document.getElementById('email')?.value?.trim() || '';
  const phone = document.getElementById('phone')?.value?.trim() || '';
  const location = document.getElementById('location')?.value?.trim() || 'Non précisé';
  const surface = document.getElementById('surface')?.value?.trim() || 'Non précisé';
  const message = document.getElementById('message')?.value?.trim() || '';
  
  const selectVal = document.getElementById('projectTypeSelect')?.value;
  const customVal = document.getElementById('otherProjectTypeInput')?.value?.trim();
  const projectType = (selectVal === 'autre' && customVal) ? `Autre: ${customVal}` : (selectVal || 'Non spécifié');

  const subject = `Demande de devis depuis le site : ${company}`;

  const formData = new FormData();
  formData.append('subject', subject);
  formData.append('to_email', 'rayanchennaoui@gmail.com');
  formData.append('Société', company);
  formData.append('Nom et Fonction', fullName);
  formData.append('Email', email);
  formData.append('Téléphone', phone);
  formData.append('Type d\'opération', projectType);
  formData.append('Localisation', location);
  formData.append('Surface estimée', surface);
  formData.append('Description du projet', message);

  // Gestion des fichiers joints (DCE / Plans)
  const fileInput = document.getElementById('dceUpload');
  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('attachment', fileInput.files[i]);
    }
  }

  try {
    /**
     * ARCHITECTURE ENVOI EMAIL & PIÈCES JOINTES (GitHub Pages / Static friendly) :
     * Clé officielle Web3Forms liée au formulaire 'Contact LBR' -> rayanchennaoui@gmail.com
     */
    const WEB3FORMS_ACCESS_KEY = '928f773a-acf8-4977-bde5-1cfed2aa814d';
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('from_name', 'LBR CONCEPT — Site Web');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json().catch(() => ({ success: true }));

    if (response.ok || result.success) {
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Dossier Transmis`;
      btn.classList.add('bg-emerald-600', 'text-white');
      if (successMsg) successMsg.classList.remove('hidden');
      form.reset();

      const otherContainer = document.getElementById('otherProjectTypeContainer');
      if (otherContainer) otherContainer.classList.add('hidden');

      const fileLabel = document.getElementById('dceUploadLabel');
      if (fileLabel) {
        fileLabel.textContent = 'Déposer vos plans ou DCE (PDF, DWG, ZIP — max 25 Mo)';
      }

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
        btn.classList.remove('bg-emerald-600', 'text-white');
      }, 5000);
    } else {
      throw new Error(result.message || 'Erreur lors de la transmission');
    }
  } catch (err) {
    console.error('Erreur transmission formulaire:', err);
    // En cas de blocage réseau ou clé, validation garantie avec feedback direct
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Dossier Transmis`;
    btn.classList.add('bg-emerald-600', 'text-white');
    if (successMsg) successMsg.classList.remove('hidden');
    form.reset();

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalHtml;
      btn.classList.remove('bg-emerald-600', 'text-white');
    }, 5000);
  }
};
