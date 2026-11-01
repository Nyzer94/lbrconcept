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

  // Gestionnaire de fichiers multiples avec suppression et renommage
  initMultiFileManager();
}

// État des fichiers téléversés
let uploadedFiles = [];

function initMultiFileManager() {
  const fileInput = document.getElementById('dceUpload');
  const fileListContainer = document.getElementById('fileListContainer');
  const fileLabel = document.getElementById('dceUploadLabel');

  if (!fileInput) return;

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // Ajouter les nouveaux fichiers sélectionnés à notre liste
      Array.from(e.target.files).forEach(file => {
        uploadedFiles.push({
          id: 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
          originalFile: file,
          name: file.name,
          size: file.size,
          type: file.type
        });
      });
      // Réinitialiser le champ input pour permettre de ré-importer si besoin
      fileInput.value = '';
      renderFileList();
    }
  });

  window.removeUploadedFile = function(fileId) {
    uploadedFiles = uploadedFiles.filter(f => f.id !== fileId);
    renderFileList();
  };

  window.renameUploadedFile = function(fileId) {
    const item = uploadedFiles.find(f => f.id === fileId);
    if (!item) return;

    // Extraire extension
    const lastDot = item.name.lastIndexOf('.');
    const ext = lastDot !== -1 ? item.name.substring(lastDot) : '';
    const nameWithoutExt = lastDot !== -1 ? item.name.substring(0, lastDot) : item.name;

    const newName = prompt("Nouveau nom pour ce document :", nameWithoutExt);
    if (newName && newName.trim() !== '') {
      item.name = newName.trim() + ext;
      renderFileList();
    }
  };

  function renderFileList() {
    if (!fileListContainer) return;

    if (uploadedFiles.length === 0) {
      fileListContainer.innerHTML = '';
      fileListContainer.classList.add('hidden');
      if (fileLabel) {
        fileLabel.textContent = 'Déposer vos plans ou DCE (PDF, DWG, ZIP — max 10 Mo au total)';
      }
      return;
    }

    fileListContainer.classList.remove('hidden');
    let totalBytes = 0;

    let html = `
      <div class="text-[11px] font-mono text-[#c5a059] flex items-center justify-between pb-1 border-b border-white/10">
        <span>${uploadedFiles.length} document${uploadedFiles.length > 1 ? 's' : ''} joint${uploadedFiles.length > 1 ? 's' : ''} :</span>
        <button type="button" onclick="clearAllFiles()" class="text-xs text-gray-400 hover:text-red-400 transition-colors">Tout retirer</button>
      </div>
    `;

    uploadedFiles.forEach(file => {
      totalBytes += file.size;
      const sizeMo = (file.size / 1024 / 1024).toFixed(2);
      
      html += `
        <div class="flex items-center justify-between p-2.5 bg-[#15171f] border border-white/10 rounded-sm text-xs hover:border-[#c5a059]/40 transition-all">
          <div class="flex items-center gap-2.5 overflow-hidden pr-2">
            <i class="fa-solid fa-file-pdf text-[#c5a059] shrink-0 text-sm"></i>
            <div class="truncate">
              <span class="text-white font-medium truncate block">${escapeHtml(file.name)}</span>
              <span class="text-[10px] text-gray-400 font-mono">${sizeMo} Mo</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <!-- Bouton Crayon / Renommer -->
            <button type="button" onclick="renameUploadedFile('${file.id}')" title="Renommer la pièce jointe" class="w-7 h-7 rounded-sm bg-[#1c1f2a] hover:bg-[#c5a059] text-gray-300 hover:text-black transition-colors flex items-center justify-center">
              <i class="fa-solid fa-pen text-[11px]"></i>
            </button>
            <!-- Bouton Poubelle / Supprimer -->
            <button type="button" onclick="removeUploadedFile('${file.id}')" title="Supprimer la pièce jointe" class="w-7 h-7 rounded-sm bg-[#1c1f2a] hover:bg-red-500/80 text-gray-300 hover:text-white transition-colors flex items-center justify-center">
              <i class="fa-solid fa-trash-can text-[11px]"></i>
            </button>
          </div>
        </div>
      `;
    });

    const totalMo = (totalBytes / 1024 / 1024).toFixed(2);
    if (fileLabel) {
      fileLabel.innerHTML = `<span class="text-[#c5a059] font-mono">${uploadedFiles.length} fichier(s)</span> préparé(s) (${totalMo} Mo)`;
    }

    fileListContainer.innerHTML = html;
  }

  window.clearAllFiles = function() {
    uploadedFiles = [];
    renderFileList();
  };
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

window.handleFormSubmit = async function(event) {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMessage');
  const errorMsg = document.getElementById('formErrorMessage');
  const errorText = document.getElementById('formErrorText');

  const btn = form.querySelector('button[type="submit"]');
  const originalHtml = btn.innerHTML;

  // Récupération des données du formulaire
  const company = document.getElementById('company')?.value?.trim() || 'Prospect';
  const subject = `Demande de devis depuis le site : ${company}`;

  // Mettre à jour l'objet pour l'email
  const subjectInput = document.getElementById('formSubmitSubject');
  if (subjectInput) subjectInput.value = subject;

  // Si des fichiers ont été ajoutés par l'utilisateur
  if (uploadedFiles.length > 0) {
    // Supprimer les anciens inputs de fichiers injectés
    form.querySelectorAll('.injected-file-input').forEach(el => el.remove());

    // Injecter les fichiers renommés dans le formulaire sous forme d'inputs réels
    uploadedFiles.forEach((item, index) => {
      // Reconstituer le fichier avec son nom personnalisé
      const renamedFile = new File([item.originalFile], item.name, { type: item.originalFile.type });
      
      const dt = new DataTransfer();
      dt.items.add(renamedFile);

      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'file';
      // FormSubmit prend en charge 'attachment' ou 'attachment[]' pour de multiples pièces jointes
      hiddenInput.name = uploadedFiles.length === 1 ? 'attachment' : 'attachment[]';
      hiddenInput.className = 'injected-file-input hidden';
      hiddenInput.files = dt.files;
      form.appendChild(hiddenInput);
    });

    // Soumission native standard pour que FormSubmit attache tous les fichiers dans le mail
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Transmission du dossier et des ${uploadedFiles.length} pièces...`;
    return true; // continue la soumission native HTML
  }

  // Sinon (pas de fichier), envoi AJAX fluide sans rechargement
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
