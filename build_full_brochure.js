const fs = require('fs');
const path = require('path');

const brochureHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LBR CONCEPT — Brochure Commerciale & Institutionnelle 2026 (26 Pages A4)</title>
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">

  <!-- Polices Officielles de Prestige -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'lbr-navy': '#0b1e36',
            'lbr-navy-dark': '#071526',
            'lbr-navy-light': '#132d4e',
            'lbr-blue': '#1d4ed8',
            'lbr-blue-subtle': '#0284c7',
            'lbr-lavender': '#7c87c5',
            'lbr-magenta': '#701A45',
            'lbr-magenta-dark': '#520F30',
            'lbr-magenta-hover': '#852253'
          },
          fontFamily: {
            syne: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
            outfit: ['"Outfit"', 'sans-serif'],
            mono: ['"Space Grotesk"', 'monospace'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      margin: 0;
      padding: 0;
      background-color: #cbd5e1;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
    }

    /* Page A4 Portrait Strict : 210mm × 297mm */
    .a4-page {
      width: 210mm;
      height: 297mm;
      min-height: 297mm;
      max-height: 297mm;
      position: relative;
      overflow: hidden;
      background-color: #ffffff;
      margin: 20px auto;
      box-shadow: 0 15px 35px rgba(11, 30, 54, 0.18);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10mm 13mm 9mm 13mm;
    }

    .a4-page.no-padding {
      padding: 0 !important;
    }

    @media print {
      html, body {
        width: 210mm !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        background: transparent !important;
      }
      .no-print {
        display: none !important;
      }
      .a4-page {
        width: 210mm !important;
        height: 296.8mm !important;
        min-height: 296.8mm !important;
        max-height: 296.8mm !important;
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
        page-break-after: always !important;
        break-after: page !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      .a4-page:last-of-type {
        page-break-after: auto !important;
        break-after: auto !important;
      }
    }

    .font-syne { font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif; }
    .font-mono { font-family: 'Space Grotesk', monospace; }
    .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

    .lbr-line {
      height: 2.5px;
      background: linear-gradient(90deg, #1d4ed8 0%, #7c87c5 40%, #701A45 100%);
      border-radius: 9999px;
    }

    .lbr-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
    }
  </style>
</head>
<body class="flex flex-col items-center">

  <!-- BARRE D'OUTILS NO-PRINT -->
  <div class="fixed top-3 z-50 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl border border-slate-200 no-print">
    <a href="index.html" class="text-xs font-mono uppercase tracking-wider text-slate-700 hover:text-lbr-magenta flex items-center gap-1.5 transition-colors">
      <i class="fa-solid fa-arrow-left"></i>
      <span>Site Web</span>
    </a>
    <span class="text-slate-300">|</span>
    <span class="text-xs font-mono text-lbr-navy font-bold">LBR CONCEPT — Brochure Commerciale 2026 (26 Pages A4)</span>
    <span class="text-slate-300">|</span>
    <div class="flex items-center gap-2">
      <a href="LBR_CONCEPT_Brochure_Commerciale_2026.pdf" download class="px-4 py-1.5 rounded-full bg-lbr-navy hover:bg-lbr-navy-dark text-white font-syne font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5">
        <i class="fa-solid fa-download text-lbr-lavender"></i>
        <span>Télécharger PDF</span>
      </a>
      <button onclick="window.print()" class="px-4 py-1.5 rounded-full bg-lbr-magenta hover:bg-lbr-magenta-dark text-white font-syne font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5">
        <i class="fa-solid fa-print"></i>
        <span>Imprimer / Exporter</span>
      </button>
    </div>
  </div>

  <div class="h-14 no-print"></div>

  <!-- ========================================================================= -->
  <!-- PAGE 1 : COUVERTURE PRESTIGE (IMAGE MOITIÉ HAUTE + BRANDING MOITIÉ BASSE) -->
  <!-- ========================================================================= -->
  <section class="a4-page no-padding justify-between" id="page-1">
    <!-- Moitié Haute : Image Immersive Pleine Largeur (145mm) -->
    <div class="relative w-full h-[142mm] overflow-hidden bg-lbr-navy-dark">
      <img src="images/realisations/p10_table_ronde_boardroom.jpg" alt="Aménagement Tertiaire de Prestige LBR CONCEPT" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-lbr-navy via-transparent to-black/30"></div>
      
      <!-- Badge statutaire supérieur -->
      <div class="absolute top-6 left-8 flex items-center gap-3">
        <div class="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-lbr-navy font-mono text-[9pt] font-bold tracking-widest uppercase shadow-md flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Contractant Général TCE</span>
        </div>
        <div class="px-3 py-1.5 rounded-full bg-lbr-magenta/90 text-white font-mono text-[8.5pt] font-bold tracking-wider uppercase">
          Fondée en 2009
        </div>
      </div>

      <div class="absolute top-6 right-8">
        <span class="px-3.5 py-1.5 rounded-full bg-black/50 text-white font-mono text-[8.5pt] uppercase tracking-widest border border-white/20">
          Édition 2026
        </span>
      </div>

      <!-- Légende discrète sur photo -->
      <div class="absolute bottom-4 left-8 text-white/90 font-mono text-[8.5pt] tracking-wider">
        <span>Réalisation Siège Tertiaire • Salle du Conseil & Mobilier Architectural</span>
      </div>
    </div>

    <!-- Moitié Basse : Identité, Titre & Informations Officielles (155mm) -->
    <div class="flex-1 flex flex-col justify-between px-10 py-6 bg-white relative">
      <div>
        <!-- Logo Officiel et Slogan -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-200">
          <div class="flex items-center gap-4">
            <div class="h-16 flex items-center justify-center p-1 bg-white rounded-lg border border-slate-200 shadow-sm">
              <img src="images/logo.png" alt="LBR CONCEPT Logo Officiel" class="h-14 w-auto object-contain">
            </div>
            <div>
              <span class="font-syne font-extrabold tracking-wider text-lbr-navy text-2xl leading-none block">LBR CONCEPT</span>
              <span class="font-mono text-[9.5pt] tracking-[0.2em] text-lbr-magenta uppercase font-bold block mt-1">BÂTIMENT • DÉCORATION • RÉNOVATION</span>
            </div>
          </div>
          <div class="text-right font-mono text-[9pt] text-slate-500">
            <span class="font-bold text-lbr-navy block">26 Collaborateurs</span>
            <span>CA 2024 : 3 031 808 € HT</span>
          </div>
        </div>

        <!-- Titre Statutaire -->
        <div class="mt-4">
          <span class="font-mono text-[9.5pt] uppercase tracking-[0.22em] text-lbr-blue font-bold block mb-1">
            DOSSIER COMMERCIAL & INSTITUTIONNEL
          </span>
          <h1 class="font-syne font-extrabold text-[26pt] leading-[1.1] text-lbr-navy uppercase tracking-tight">
            Aménagement Tertiaire & Haute Rénovation TCE
          </h1>
          <div class="lbr-line w-24 my-2.5"></div>
          <p class="font-sans text-[10.5pt] text-slate-700 leading-relaxed font-normal">
            Contractant Général et Entreprise Générale du Bâtiment spécialisée dans les plateaux de bureaux, sièges sociaux tertiaires, enseignes de prestige et réhabilitations tous corps d'état en Île-de-France.
          </p>
        </div>

        <!-- 3 Piliers d'Excellence -->
        <div class="grid grid-cols-3 gap-3.5 mt-4">
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <i class="fa-solid fa-shield-halved text-lbr-magenta text-sm"></i>
              <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase">Garantie Décennale</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-tight">Couverture globale AXA France de tous les ouvrages TCE.</p>
          </div>

          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <i class="fa-solid fa-award text-lbr-blue text-sm"></i>
              <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase">Qualibat RGE & SS4</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-tight">Certifications 6111, 4131 et habilitation amiante SS4.</p>
          </div>

          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <i class="fa-solid fa-handshake text-emerald-600 text-sm"></i>
              <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase">Zéro Dépassement</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-tight">Engagement contractuel sur le planning et le budget.</p>
          </div>
        </div>
      </div>

      <!-- Footer Couverture -->
      <div class="pt-3 border-t border-slate-200 flex items-center justify-between text-[9pt] font-mono text-slate-600">
        <div>
          <strong class="text-lbr-navy">El Saïd BADR — Président</strong>
          <span class="mx-2">•</span>
          <span>Tél : 06 66 99 19 71 / 01 45 94 59 89</span>
        </div>
        <div class="font-bold text-lbr-magenta">
          PARIS & ÎLE-DE-FRANCE
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 2 : SOMMAIRE GÉNÉRAL & TABLE DES MATIÈRES (SANS MENTION 2D/3D) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-2">
    <!-- Header Page -->
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">SOMMAIRE // 02</span>
    </div>

    <!-- Contenu Sommaire débutant en haut -->
    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <div class="flex items-start justify-between gap-6 mb-4">
          <div>
            <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">ORGANISATION DU DOSSIER</span>
            <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
              Table des Matières
            </h2>
            <div class="lbr-line w-20 my-2"></div>
            <p class="font-sans text-[10pt] text-slate-600 leading-relaxed">
              Présentation complète de notre savoir-faire d'entreprise générale, de nos moyens humains et de notre méthodologie de pilotage de chantiers tertiaires et institutionnels.
            </p>
          </div>
          <!-- Grande Photo Réalisation -->
          <div class="w-[75mm] h-[48mm] rounded-xl overflow-hidden border border-slate-200 shadow-md shrink-0">
            <img src="images/realisations/p10_veranda_restaurant.jpg" alt="Espace Réceptif VIP" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Grille Sommaire en 2 Colonnes avec grandes polices -->
        <div class="grid grid-cols-2 gap-4 text-slate-800">
          
          <div class="space-y-2.5">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 01</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">L'Entreprise & Chiffres Clés</strong>
                <p class="text-[8.5pt] text-slate-500">Histoire, gouvernance, 26 salariés, 3,03 M€ CA</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 03-04</span>
            </div>

            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 02</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">Certifications & Garanties AXA</strong>
                <p class="text-[8.5pt] text-slate-500">Qualibat RGE 6111-4131, SS4 Amiante, Qualigaz</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 05</span>
            </div>

            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 03</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">Nos 6 Métiers Tous Corps d'État</strong>
                <p class="text-[8.5pt] text-slate-500">Plâtrerie, menuiserie, peinture, sols, façades, CVC</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 06-12</span>
            </div>

            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 04</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">Méthodologie & Phasage Travaux</strong>
                <p class="text-[8.5pt] text-slate-500">Les 5 étapes rigoureuses de réussite du chantier</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 13-14</span>
            </div>
          </div>

          <div class="space-y-2.5">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 05</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">Pilotage TCE & Ordonnancement</strong>
                <p class="text-[8.5pt] text-slate-500">Interlocuteur unique, maîtrise planning & DTU</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 15</span>
            </div>

            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 06</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">Aménagement Tertiaire & Plateaux</strong>
                <p class="text-[8.5pt] text-slate-500">Cloisons modulaires, acoustique & flex office</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 16</span>
            </div>

            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 07</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">Organisation, ERP & Réalisations</strong>
                <p class="text-[8.5pt] text-slate-500">Organigramme, milieu occupé & portfolio photos</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 17-23</span>
            </div>

            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span class="font-mono text-[8.5pt] text-lbr-magenta font-bold block">SECTION 08</span>
                <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase">Références Tertiaires & Contact</strong>
                <p class="text-[8.5pt] text-slate-500">40 grands comptes (Snapchat, Siemens...) & contact</p>
              </div>
              <span class="font-mono text-[11pt] font-extrabold text-lbr-blue">P. 24-26</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Devise Signature -->
      <div class="p-3.5 rounded-xl bg-lbr-navy text-white flex items-center justify-between mt-4">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-certificate text-lbr-magenta text-xl"></i>
          <div>
            <span class="font-syne font-bold text-[10.5pt] uppercase block">Engagement de Résultat Garanti</span>
            <span class="text-[8.5pt] text-slate-300">Zéro réserve à la livraison • Accompagnement contractuel clé en main.</span>
          </div>
        </div>
        <span class="font-mono text-[9pt] font-bold text-lbr-lavender uppercase">BÂTIR ENSEMBLE, DURABLEMENT</span>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • BROCHURE INSTITUTIONNELLE</span>
        <span>PAGE 02 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 3 : L'ENTREPRISE LBR CONCEPT (HISTOIRE & VALEURS) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-3">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">L'ENTREPRISE // 03</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <div class="flex items-start justify-between gap-6 mb-4">
          <div>
            <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">TRAJECTOIRE & POSITIONNEMENT</span>
            <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
              Qui Sommes-Nous ?
            </h2>
            <div class="lbr-line w-20 my-2"></div>
          </div>
          <!-- Grande Photo Réalisation -->
          <div class="w-[75mm] h-[44mm] rounded-xl overflow-hidden border border-slate-200 shadow-md shrink-0">
            <img src="images/realisations/p10_table_ronde_boardroom.jpg" alt="Direction LBR Concept" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="space-y-3.5 text-[10pt] text-slate-700 leading-relaxed">
          <p>
            Fondée en <strong class="text-lbr-navy font-bold">2009</strong> sous la présidence de <strong class="text-lbr-navy font-bold">El Saïd BADR</strong>, <strong class="text-lbr-navy font-bold">LBR CONCEPT</strong> s'est imposée comme un acteur de référence du bâtiment tous corps d'état (TCE) et du contractant général en Île-de-France.
          </p>
          <p>
            Avec une prédominance marquée pour les <strong class="text-lbr-navy font-bold">environnements tertiaires, les sièges sociaux et les plateaux de bureaux complexes</strong>, LBR CONCEPT réunit en interne l'ensemble des compétences techniques nécessaires pour mener des chantiers ambitieux en milieu occupé comme en site vierge.
          </p>
          <p>
            Forte d'une équipe permanente de <strong class="text-lbr-navy font-bold">26 collaborateurs qualifiés</strong> et d'un chiffre d'affaires 2024 officiel de <strong class="text-lbr-navy font-bold">3 031 808 € HT</strong>, notre entreprise garantit une parfaite maîtrise des délais, des budgets et de la conformité réglementaire aux normes DTU et ERP.
          </p>
        </div>

        <!-- 4 Cartouches ADN -->
        <div class="grid grid-cols-2 gap-3.5 mt-5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <i class="fa-solid fa-award text-lbr-magenta text-sm"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">17 Ans de Savoir-Faire</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-normal">Chantiers publics et privés menés avec un niveau d'exigence constant depuis 2009.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <i class="fa-solid fa-user-tie text-lbr-blue text-sm"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Interlocuteur Dédié Unique</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-normal">Un conducteur de travaux dédié présent sur site pour piloter tous vos corps d'état.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <i class="fa-solid fa-building text-emerald-600 text-sm"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Spécialiste Tertiaire & ERP</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-normal">Interventions soignées en milieu occupé sans interruption de l'activité cliente.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <i class="fa-solid fa-scale-balanced text-lbr-navy text-sm"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Solidité & Assurances</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-normal">Garantie décennale AXA France et solvabilité certifiée au registre du commerce.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • IDENTITÉ DE L'ENTREPRISE</span>
        <span>PAGE 03 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 4 : ÉVOLUTION DU CHIFFRE D'AFFAIRES & SOLIDITÉ FINANCIÈRE -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-4">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">INDICATEURS CLÉS // 04</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">CROISSANCE CONTINUE & PÉRENNITÉ</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Évolution du Chiffre d'Affaires
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          La progression constante du chiffre d'affaires témoigne de la confiance renouvelée de nos donneurs d'ordres institutionnels et de la rigueur de notre gestion financière.
        </p>

        <!-- Image Réelle de Réalisation Open Space -->
        <div class="w-full h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md mb-4">
          <img src="images/realisations/p10_open_space_collaboratif.jpg" alt="Plateau de bureaux collaboratif" class="w-full h-full object-cover">
        </div>

        <!-- 3 Blocs Chiffres Clés -->
        <div class="grid grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 border-l-4 border-lbr-navy border border-slate-200">
            <span class="font-mono text-[8.5pt] uppercase text-slate-500 font-bold block">Création</span>
            <div class="font-syne font-extrabold text-[22pt] text-lbr-navy leading-none mt-1">2009</div>
            <p class="text-[8.5pt] text-slate-600 mt-1">17 années d'expérience TCE</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border-l-4 border-lbr-magenta border border-slate-200">
            <span class="font-mono text-[8.5pt] uppercase text-slate-500 font-bold block">Collaborateurs</span>
            <div class="font-syne font-extrabold text-[22pt] text-lbr-magenta leading-none mt-1">26 Pers.</div>
            <p class="text-[8.5pt] text-slate-600 mt-1">Équipes qualifiées internes</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border-l-4 border-lbr-blue border border-slate-200">
            <span class="font-mono text-[8.5pt] uppercase text-slate-500 font-bold block">Chiffre d'Affaires 2024</span>
            <div class="font-syne font-extrabold text-[20pt] text-lbr-navy leading-none mt-1">3,03 M€ HT</div>
            <p class="text-[8.5pt] text-slate-600 mt-1">3 031 808 € certifiés</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • CHIFFRES CLÉS & SOLIDITÉ</span>
        <span>PAGE 04 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 5 : NOS CERTIFICATIONS & GARANTIES (VRAIS LOGOS TRANSPARENTS) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-5">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">CERTIFICATIONS // 05</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">NORMES & SÉCURITÉ CONTRACTUELLE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Nos Certifications & Garanties
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          La qualité d'exécution et la conformité aux normes en vigueur sont attestées par les plus hautes qualifications professionnelles du bâtiment en France.
        </p>

        <!-- Les 4 Certifications Officielles avec VRAIS LOGOS -->
        <div class="grid grid-cols-2 gap-4">
          <!-- QUALIBAT RGE -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-sm">
            <div class="w-20 h-20 rounded-xl bg-white p-2.5 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
              <img src="images/logos/certifications/qualibat.svg" alt="Qualibat RGE" class="max-h-16 max-w-full object-contain">
            </div>
            <div>
              <span class="font-mono text-[8pt] text-lbr-blue uppercase font-bold block">QUALIFICATION 6111 & 4131</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase block">RGE QUALIBAT</strong>
              <p class="text-[8.5pt] text-slate-600 mt-1 leading-normal">
                Peintures, ravalement, plâtrerie technique, faux plafonds et revêtements. Éligibilité aux aides à la rénovation.
              </p>
            </div>
          </div>

          <!-- SS4 AMIANTE -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-sm">
            <div class="w-20 h-20 rounded-xl bg-white p-2.5 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
              <img src="images/logos/certifications/ss4_amiante.svg" alt="SS4 Amiante" class="max-h-16 max-w-full object-contain">
            </div>
            <div>
              <span class="font-mono text-[8pt] text-lbr-magenta uppercase font-bold block">HABILITATION NATIONALE</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase block">Sous-Section 4 (SS4)</strong>
              <p class="text-[8.5pt] text-slate-600 mt-1 leading-normal">
                Intervention en milieu amianté avec confinement hermétique, dépoussiérage THE et bordereaux BSDA officiels.
              </p>
            </div>
          </div>

          <!-- QUALIGAZ ÉVONIA -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-sm">
            <div class="w-20 h-20 rounded-xl bg-white p-2.5 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
              <img src="images/logos/certifications/qualigaz_evonia.png" alt="Qualigaz Évonia" class="max-h-14 max-w-full object-contain">
            </div>
            <div>
              <span class="font-mono text-[8pt] text-emerald-600 uppercase font-bold block">SÉCURITÉ DU GAZ & CVC</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase block">QUALIGAZ ÉVONIA</strong>
              <p class="text-[8.5pt] text-slate-600 mt-1 leading-normal">
                Attestations réglementaires pour installations thermiques, raccordements collectifs et conformité des réseaux gaz.
              </p>
            </div>
          </div>

          <!-- GARANTIE DÉCENNALE AXA -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4 shadow-sm">
            <div class="w-20 h-20 rounded-xl bg-white p-2.5 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
              <img src="images/logos/certifications/axa.svg" alt="AXA France" class="max-h-14 max-w-full object-contain">
            </div>
            <div>
              <span class="font-mono text-[8pt] text-lbr-navy uppercase font-bold block">ASSURANCE CONSTRUCTEUR</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase block">Décennale AXA France</strong>
              <p class="text-[8.5pt] text-slate-600 mt-1 leading-normal">
                Couverture intégrale de tous nos ouvrages de gros œuvre, second œuvre et aménagement technique TCE.
              </p>
            </div>
          </div>
        </div>

        <!-- Photo Chantiers Sécurisés -->
        <div class="mt-4 p-3.5 rounded-xl bg-lbr-navy text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-hard-hat text-lbr-magenta text-xl"></i>
            <div>
              <span class="font-syne font-bold text-[10pt] uppercase block">Sécurité & Santé sur Chantier</span>
              <span class="text-[8.5pt] text-slate-300">Application stricte des protocoles SPS, PGC et causeries régulières 0 accident.</span>
            </div>
          </div>
          <span class="font-mono text-[9pt] text-emerald-400 font-bold uppercase">100% CONFORME DTU</span>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • QUALIFICATIONS & NORMES OFFICIELLES</span>
        <span>PAGE 05 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 6 : NOS 6 MÉTIERS TOUS CORPS D'ÉTAT (VUE D'ENSEMBLE) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-6">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">SAVOIR-FAIRE GLOBAL // 06</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <div class="flex items-start justify-between gap-6 mb-4">
          <div>
            <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">COMPÉTENCES INTÉGRÉES</span>
            <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
              Nos 6 Métiers Tous Corps d'État
            </h2>
            <div class="lbr-line w-20 my-2"></div>
            <p class="font-sans text-[10pt] text-slate-600 leading-relaxed">
              Une maîtrise complète de la chaîne des travaux de second œuvre et d'agencement intérieur sans sous-traitance opaque.
            </p>
          </div>
          <div class="w-[75mm] h-[44mm] rounded-xl overflow-hidden border border-slate-200 shadow-md shrink-0">
            <img src="images/realisations/p10_cloisons_bois_bureaux.jpg" alt="Second Œuvre TCE" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Les 6 Métiers en Cartes Aérées -->
        <div class="grid grid-cols-2 gap-3.5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded bg-lbr-navy text-white font-mono text-[8pt] font-bold flex items-center justify-center">01</span>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Plâtrerie & Cloisons Modulaires</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-normal">Cloisons vitrées bord à bord, faux plafonds acoustiques staff et dalles 600x600.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded bg-lbr-navy text-white font-mono text-[8pt] font-bold flex items-center justify-center">02</span>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Menuiserie & Agencement</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-normal">Banques d'accueil, verrières atelier, menuiseries coupe-feu et ébénisterie.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded bg-lbr-navy text-white font-mono text-[8pt] font-bold flex items-center justify-center">03</span>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Peintures & Revêtements Muraux</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-normal">Enduits soignés, peintures éco-labellisées grand trafic et toiles acoustiques.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded bg-lbr-navy text-white font-mono text-[8pt] font-bold flex items-center justify-center">04</span>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Sols Souples, Parquets & Carrelages</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-normal">Moquettes acoustiques en dalles, sols PVC grand trafic et parquets massifs.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded bg-lbr-navy text-white font-mono text-[8pt] font-bold flex items-center justify-center">05</span>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Ravalement de Façades & Isolation</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-normal">Nettoyage vapeur, traitement pierre de taille, imperméabilisation et ITE.</p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded bg-lbr-navy text-white font-mono text-[8pt] font-bold flex items-center justify-center">06</span>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Plomberie, CVC & Électricité RJ45</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-normal">Réseaux informatiques Cat 6A, sanitaires ERP, colonnes montantes et éclairage LED.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • VUE D'ENSEMBLE TCE</span>
        <span>PAGE 06 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 7 : MÉTIER 1 — PLÂTRERIE, FAUX PLAFONDS & CLOISONS AMOVIBLES -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-7">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">MÉTIER 01 // 07</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">STRUCTURATION SPATIALE & ACOUSTIQUE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Plâtrerie, Faux Plafonds & Cloisons
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          La flexibilité des espaces tertiaires repose sur la qualité de leur cloisonnement. LBR CONCEPT installe des solutions modulables alliant isolation phonique de haut niveau et transparence visuelle.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/boxes%20reu.webp" alt="Boxes acoustiques de réunion" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p9_couloir_perfore_acoustique.jpg" alt="Faux plafonds perforés acoustiques" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- 3 Spécifications Techniques -->
        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Cloisons Vitrées Bord à Bord</strong>
            <p class="text-[8.5pt] text-slate-600">Simples ou doubles vitrages avec affaiblissement acoustique certifié jusqu'à 48 dB.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Faux Plafonds Techniques</strong>
            <p class="text-[8.5pt] text-slate-600">Dalles démontables 600x600, plâtre perforé, bacs métalliques et gorges lumineuses.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Plâtrerie Norme NF DTU 25.41</strong>
            <p class="text-[8.5pt] text-slate-600">Plaques BA13 à BA25, cloisons coupe-feu CF 1h/2h et renforts pour charges lourdes.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • AMÉNAGEMENT TECHNIQUE</span>
        <span>PAGE 07 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 8 : MÉTIER 2 — MENUISERIE & AGENCEMENT SUR-MESURE -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-8">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">MÉTIER 02 // 08</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">ÉBÉNISTERIE & AGENCEMENT BOIS</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Menuiserie & Agencement Sur-Mesure
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Conception et pose de menuiseries bois et métal haut de gamme : banques d'accueil statutaires, verrières d'atelier acier, portes blindées ou acoustiques, et mobiliers intégrés sur mesure.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/bureau.webp" alt="Bureau exécutif avec verrière" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p9_cuisine_bois_marbre.jpg" alt="Agencement bois et marbre" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Verrières Acier d'Atelier</strong>
            <p class="text-[8.5pt] text-slate-600">Profilés acier fins thermolaqués, vitrages feuilletés sécurisés et portes battantes affleurantes.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Banques d'Accueil VIP</strong>
            <p class="text-[8.5pt] text-slate-600">Comptoirs sur-mesure en placages nobles, marbres synthétiques et passages de câbles intégrés.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Portes Coupe-Feu & DAS</strong>
            <p class="text-[8.5pt] text-slate-600">Blocs-portes acoustiques certifiés EI30 à EI60, ventouses électromagnétiques reliées au SSI.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • MENUISERIE & ÉBÉNISTERIE</span>
        <span>PAGE 08 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 9 : MÉTIER 3 — PEINTURES INTÉRIEURES & REVÊTEMENTS MURAUX -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-9">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">MÉTIER 03 // 09</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">FINITIONS SOIGNÉES QUALIBAT 6111</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Peintures & Revêtements Muraux
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          La signature esthétique d'un chantier dépend de la perfection de ses surfaces. LBR CONCEPT met en œuvre des enduits de lissage fins et des peintures techniques éco-labellisées adaptées aux espaces recevant du public.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/sympaa.webp" alt="Peinture soignée bureaux" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p9_salon_luxe.jpg" alt="Salon de prestige et finitions" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Peintures Dépolluantes A+</strong>
            <p class="text-[8.5pt] text-slate-600">Peintures velours à faible émission de COV, lessivables et certifiées Ecolabel européen.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Toiles Vinyles & Acoustiques</strong>
            <p class="text-[8.5pt] text-slate-600">Revêtements muraux textiles lourds type Vescom, apportant élégance et correction phonique.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Préparation des Supports</strong>
            <p class="text-[8.5pt] text-slate-600">Ratissage intégral en deux passes croisées, ponçage mécanisé avec aspiration à la source.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • HAUTE FINITION MURALE</span>
        <span>PAGE 09 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 10 : MÉTIER 4 — REVÊTEMENTS DE SOLS SOUPLES & DURS -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-10">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">MÉTIER 04 // 10</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">SOLS TECHNIQUES & NOBLES</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Revêtements de Sols Souples & Durs
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Fourniture et pose de tous types de revêtements adaptés au trafic intense des bureaux et commerces : parquets massifs (point de Hongrie), dalles de moquette phonique et carrelages grands formats.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/salle%20a%20manger%20luxe.webp" alt="Parquet noble point de Hongrie" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p9_espace_collaboratif_chaises.jpg" alt="Moquette dalles acoustiques tertiaires" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Moquettes en Dalles 50x50</strong>
            <p class="text-[8.5pt] text-slate-600">Sous-couche acoustique feutre, plombantes, facilitant l'accès aux planchers techniques et réseaux RJ45.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Parquets Nobles & Rénovation</strong>
            <p class="text-[8.5pt] text-slate-600">Pose collée ou flottante de chêne de France, vitrification haute résistance trafic extrême.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Grès Cérame & Marbres</strong>
            <p class="text-[8.5pt] text-slate-600">Carrelages grands formats rectifiés, calepinage au laser et pose sur chape autonivelante fibrée.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • REVÊTEMENTS DE SOLS</span>
        <span>PAGE 10 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 11 : MÉTIER 5 — RAVALEMENT DES FAÇADES & ISOLATION -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-11">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">MÉTIER 05 // 11</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">ENVELOPPE DU BÂTIMENT & PATRIMOINE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Ravalement des Façades & Isolation
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Restauration et préservation du patrimoine bâti francilien : traitement des pierres de taille haussmanniennes, réfection des modénatures, imperméabilisation de façades modernes et isolation thermique par l'extérieur (ITE).
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/escaliers%20immeuble%20luxe.webp" alt="Immeuble Haussmannien rénové" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p10_palace_facade_rose.jpg" alt="Façade d'exception réhabilitée" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Pierres de Taille & Hydrogommage</strong>
            <p class="text-[8.5pt] text-slate-600">Nettoyage basse pression, ragréage à la chaux naturelle et restauration des corniches sculptées.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Revêtements d'Imperméabilité</strong>
            <p class="text-[8.5pt] text-slate-600">Systèmes I1 à I4 pontant les microfissures et assurant l'étanchéité durable des parois extérieures.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Échafaudages & Sécurité Voie Publique</strong>
            <p class="text-[8.5pt] text-slate-600">Montage d'échafaudages conformes, filets pare-gravois et tunnels piétons sécurisés pour riverains.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • ENVELOPPE EXTÉRIEURE</span>
        <span>PAGE 11 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 12 : MÉTIER 6 — PLOMBERIE, CHAUFFAGE & ÉLECTRICITÉ RJ45 -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-12">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">MÉTIER 06 // 12</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">RÉSEAUX TECHNIQUES & PERFORMANCE RE2020</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Plomberie, CVC & Électricité RJ45
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Conception et mise aux normes complètes des installations de courants forts, courants faibles VDI (RJ45 Cat 6A), climatisation réversible CVC et blocs sanitaires PMR pour bâtiments tertiaires et ERP.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/lavanop.webp" alt="Sanitaires tertiaires de prestige" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/salle%20de%20bain%20luxe.webp" alt="Robinetteries brossées et installations" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Réseaux Informatiques VDI</strong>
            <p class="text-[8.5pt] text-slate-600">Baies de brassage 19", câblage cuivre Cat 6A / 7, fibre optique et certification aux réflectomètres.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Plomberie & Blocs Sanitaires PMR</strong>
            <p class="text-[8.5pt] text-slate-600">Alimentation multicouche, évacuations acoustiques et équipements PMR certifiés conformes.</p>
          </div>
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block mb-1">Attestations Qualigaz & Consuel</strong>
            <p class="text-[8.5pt] text-slate-600">Délivrance systématique des certificats officiels garantissant la parfaite conformité réglementaire.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • RÉSEAUX TECHNIQUES</span>
        <span>PAGE 12 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 13 : NOTRE APPROCHE MÉTHODOLOGIQUE GLOBALE -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-13">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">MÉTHODOLOGIE GLOBALE // 13</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <div class="flex items-start justify-between gap-6 mb-4">
          <div>
            <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">LE PROCESSUS DE RÉUSSITE CONTRACTANT GÉNÉRAL</span>
            <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
              Notre Approche Méthodologique
            </h2>
            <div class="lbr-line w-20 my-2"></div>
            <p class="font-sans text-[10pt] text-slate-600 leading-relaxed">
              Un phasage rigoureux issu de notre mémoire technique pour chantiers exigeants, assurant sécurité, fluidité et respect contractuel de chaque étape.
            </p>
          </div>
          <div class="w-[75mm] h-[44mm] rounded-xl overflow-hidden border border-slate-200 shadow-md shrink-0">
            <img src="images/realisations/p10_table_ronde_boardroom.jpg" alt="Méthodologie LBR Concept" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Les 4 Phases Clés en Grand Format -->
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2.5 mb-2">
              <span class="w-7 h-7 rounded bg-lbr-blue text-white font-mono text-[9pt] font-bold flex items-center justify-center">1</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase">Phase Étude & Relevés</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-relaxed">
              Diagnostic technique du bâti existant, état des lieux contradictoire avec le maître d'ouvrage, repérages des réseaux et calage du rétroplanning d'exécution.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2.5 mb-2">
              <span class="w-7 h-7 rounded bg-lbr-magenta text-white font-mono text-[9pt] font-bold flex items-center justify-center">2</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase">Installation & Sécurisation</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-relaxed">
              Plan d'installation de chantier (PIC), pose de la base-vie, protections hermétiques des zones occupées et balisage réglementaire des accès ERP.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2.5 mb-2">
              <span class="w-7 h-7 rounded bg-lbr-navy text-white font-mono text-[9pt] font-bold flex items-center justify-center">3</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase">Pilotage & Réalisation TCE</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-relaxed">
              Coordination de tous les corps d'état par le conducteur de travaux, réunions de chantier hebdomadaires, contrôles continus de conformité DTU.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2.5 mb-2">
              <span class="w-7 h-7 rounded bg-emerald-600 text-white font-mono text-[9pt] font-bold flex items-center justify-center">4</span>
              <strong class="font-syne text-[11pt] text-lbr-navy uppercase">Réception & Remise du DOE</strong>
            </div>
            <p class="text-[9pt] text-slate-600 leading-relaxed">
              Opérations préalables de réception (OPR), levée immédiate des réserves et remise des dossiers des ouvrages exécutés complets avec fiches techniques.
            </p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • PROCESSUS MÉTHODOLOGIQUE</span>
        <span>PAGE 13 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 14 : PHASE ÉTUDE & DIAGNOSTIC PRÉALABLE -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-14">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">PHASE 01 // 14</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">CADRAGE OPÉRATIONNEL & TECHNIQUE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Phase Étude & Diagnostic Préalable
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Avant tout démarrage de chantier, notre équipe technique effectue un diagnostic exhaustif du site afin d'anticiper les contraintes structurelles, fluidiques et d'accessibilité.
        </p>

        <!-- Grande Photo Réalisation -->
        <div class="w-full h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md mb-4">
          <img src="images/realisations/p9_salle_reunion_onde.jpg" alt="Diagnostic et Études" class="w-full h-full object-cover">
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Relevés Métriques In Situ</strong>
            <p class="text-[8.5pt] text-slate-600">Relevés au télémètre laser des cotes réelles, des hauteurs sous faux plafond et des encombrements.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Repérages Fluides & Réseaux</strong>
            <p class="text-[8.5pt] text-slate-600">Identification des colonnes montantes, des puissances souscrites et des contraintes d'évacuation.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Planning Directeur Validé</strong>
            <p class="text-[8.5pt] text-slate-600">Établissement du rétroplanning jalonné avec le client pour sécuriser la date de livraison finale.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • CADRAGE ET ÉTUDES</span>
        <span>PAGE 14 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 15 : PILOTAGE DE CHANTIER & COORDINATION TCE (SANS PLANS 2D/3D) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-15">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">PHASE 02 // 15</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-magenta font-bold">GESTION DE PROJET INTÉGRÉE TCE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Pilotage & Coordination Tous Corps d'État
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          En tant que Contractant Général et Entreprise Générale, LBR CONCEPT assure le pilotage unifié de votre opération. Un interlocuteur unique coordonne les approvisionnements, les équipes de compagnons et le respect absolu du planning.
        </p>

        <!-- Deux Grandes Photos Réelles de Chantier -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p10_cloisons_bois_bureaux.jpg" alt="Coordination d'agencement tertiaire" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p9_verriere_couloir_noir.jpg" alt="Installation verrières et circulations" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Interlocuteur Unique MOA / MOE</strong>
            <p class="text-[8.5pt] text-slate-600">Un conducteur de travaux dédié gère l'ensemble des interactions avec le client et l'architecte.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Commandes Anticipées</strong>
            <p class="text-[8.5pt] text-slate-600">Réservation anticipée des matériaux critiques (verrières, profilés, dalles) pour éliminer les ruptures.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Réunions de Chantier Hebdo</strong>
            <p class="text-[8.5pt] text-slate-600">Diffusion d'un compte-rendu exhaustif à chaque point d'avancement avec journal photographique.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • PILOTAGE OPÉRATIONNEL TCE</span>
        <span>PAGE 15 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 16 : AMÉNAGEMENT TERTIAIRE & ESPACES COLLABORATIFS (SANS PLANS 2D/3D) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-16">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">EXPERTISE TERTIAIRE // 16</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">PLATEAUX DE BUREAUX & ENVIRONNEMENTS AGILES</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Aménagement Tertiaire & Espaces Collaboratifs
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Le cœur d'activité majeur de LBR CONCEPT réside dans l'aménagement de plateaux tertiaires contemporains : cloisons amovibles acoustiques, flex office, alcôves de concentration et distribution VDI complète.
        </p>

        <!-- Deux Grandes Photos Réelles de Bureaux LBR -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p10_box_acoustique_vert.jpg" alt="Alcôves et cabines acoustiques" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p9_couloir_orange_virtual.jpg" alt="Espaces dynamiques et collaboratifs" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Flex Office & Mobilité</strong>
            <p class="text-[8.5pt] text-slate-600">Organisation spatiale favorisant le travail hybride, les réunions impromptues et les zones calmes.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Confort Acoustique Global</strong>
            <p class="text-[8.5pt] text-slate-600">Absorption phonique par baffles suspendus, moquettes acoustiques et vitrages phoniques doubles.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Connectivité Réseau RJ45</strong>
            <p class="text-[8.5pt] text-slate-600">Nourrices de sol, bornes Wi-Fi plafonniers et prises informatiques Cat 6A au poste de travail.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • EXPÉRIENCE TERTIAIRE</span>
        <span>PAGE 16 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 17 : RÉALISATION DES TRAVAUX & SUIVI DE CHANTIER -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-17">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">PHASE 03 // 17</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">EXÉCUTION TECHNIQUE RIGUREUSE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Réalisation des Travaux & Suivi
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          La phase d'exécution mobilise nos compagnons permanents sous le contrôle permanent du conducteur de travaux. Chaque lot technique est soumis à un contrôle qualité rigoureux en cours d'avancement.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p10_escalier_metal_design.jpg" alt="Structure escalier métallique" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p10_couloir_vitre_tertiaire.jpg" alt="Couloir tertiaire vitré" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Sécurité & PPSPS</strong>
            <p class="text-[8.5pt] text-slate-600">Application stricte des fiches de sécurité et vérification continue du port des EPI.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Contrôles In Situ DTU</strong>
            <p class="text-[8.5pt] text-slate-600">Autocontrôles de planéité, d'aplomb, d'étanchéité et tests d'isolement électrique.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Nettoyage Quotidien</strong>
            <p class="text-[8.5pt] text-slate-600">Maintien d'un chantier propre et ordonné propice à une cadence de travail sécurisée.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • CONDUITE DES TRAVAUX</span>
        <span>PAGE 17 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 18 : FIN DE CHANTIER & REMISE DU DOE -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-18">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">PHASE 04 // 18</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-emerald-600 font-bold">LIVRAISON IRRÉPROCHABLE SANS RÉSERVE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Fin de Chantier & Remise du DOE
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          L'aboutissement de notre engagement contractuel : un chantier nettoyé de fond en comble, des autocontrôles stricts avant OPR et la fourniture d'un dossier complet des ouvrages exécutés pour la maintenance future.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p9_cuisine_blanche_ilot.jpg" alt="Livraison finitions soignées" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p10_hall_colonnes_prestige.jpg" alt="Hall d'accueil livré" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">OPR & Pré-Réception</strong>
            <p class="text-[8.5pt] text-slate-600">Visite préalable minutieuse avec reprise immédiate des moindres détails avant la réception officielle.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Dossier DOE Complet</strong>
            <p class="text-[8.5pt] text-slate-600">Remise des fiches techniques, certificats d'essais, PV d'ignifugation et plans de récolement.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Garantie Parfait Achèvement</strong>
            <p class="text-[8.5pt] text-slate-600">Suivi réactif sous 48h pendant la première année complète suivant la livraison du chantier.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • LIVRAISON & GARANTIE</span>
        <span>PAGE 18 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 19 : ORGANIGRAMME DE CHANTIER (AVEC BONHOMMES STYLISÉS) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-19">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">ORGANISATION CHANTIER // 19</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">HIÉRARCHIE OPÉRATIONNELLE DU MARCHÉ</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Organigramme de Chantier
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Une chaîne de commandement claire, réactive et incarnée par des professionnels qualifiés, garantissant une communication fluide avec le client et le respect des engagements contractuels.
        </p>

        <!-- NIVEAU 1 : Conducteur de Travaux Principal avec avatar bonhomme -->
        <div class="p-4 rounded-xl bg-lbr-navy text-white text-center shadow-md relative">
          <div class="w-12 h-12 rounded-full bg-lbr-magenta text-white flex items-center justify-center mx-auto mb-2 shadow">
            <i class="fa-solid fa-user-tie text-xl"></i>
          </div>
          <span class="font-mono text-[8.5pt] uppercase tracking-widest text-lbr-lavender font-bold block">Interlocuteur Unique MOA / MOE</span>
          <h4 class="font-syne font-extrabold text-[12pt] text-white uppercase mt-0.5">Conducteur de Travaux Principal Dédié</h4>
          <p class="text-[9pt] text-slate-300 font-light mt-1">Pilotage opérationnel permanent sur site • Décisions immédiates, gestion des flux et tenue du planning</p>
        </div>

        <div class="w-[2px] h-3 bg-lbr-magenta/50 mx-auto"></div>

        <!-- NIVEAU 2 : 4 Pôles Experts avec bonhommes stylisés -->
        <div class="grid grid-cols-4 gap-3">
          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
            <div class="w-9 h-9 rounded-full bg-lbr-blue/15 text-lbr-blue flex items-center justify-center mx-auto mb-1.5">
              <i class="fa-solid fa-user-gear text-sm"></i>
            </div>
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block">Resp. Méthodes</strong>
            <p class="text-[8pt] text-slate-500 mt-0.5">Plans EXE & phasage</p>
          </div>

          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
            <div class="w-9 h-9 rounded-full bg-lbr-magenta/15 text-lbr-magenta flex items-center justify-center mx-auto mb-1.5">
              <i class="fa-solid fa-user-clock text-sm"></i>
            </div>
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block">Resp. Planning</strong>
            <p class="text-[8pt] text-slate-500 mt-0.5">Rétroplanning & flux</p>
          </div>

          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
            <div class="w-9 h-9 rounded-full bg-emerald-600/15 text-emerald-600 flex items-center justify-center mx-auto mb-1.5">
              <i class="fa-solid fa-user-check text-sm"></i>
            </div>
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block">Resp. Qualité</strong>
            <p class="text-[8pt] text-slate-500 mt-0.5">Autocontrôles DTU</p>
          </div>

          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
            <div class="w-9 h-9 rounded-full bg-lbr-navy/15 text-lbr-navy flex items-center justify-center mx-auto mb-1.5">
              <i class="fa-solid fa-user-shield text-sm"></i>
            </div>
            <strong class="font-syne text-[9.5pt] text-lbr-navy uppercase block">Resp. Sécurité SPS</strong>
            <p class="text-[8pt] text-slate-500 mt-0.5">PGC & 0 accident</p>
          </div>
        </div>

        <div class="w-[2px] h-3 bg-lbr-magenta/50 mx-auto"></div>

        <!-- NIVEAU 3 : Chefs de Chantier & Compagnons Intégrés -->
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-lbr-blue text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
            <i class="fa-solid fa-users"></i>
          </div>
          <div>
            <strong class="font-syne text-[10.5pt] text-lbr-navy uppercase block">Chefs de Chantier & 26 Compagnons Intégrés</strong>
            <p class="text-[8.5pt] text-slate-600 mt-0.5">Plaquistes, menuisiers, peintres, électriciens et plombiers formés en interne aux standards de haute exigence LBR Concept.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • GOUVERNANCE CHANTIER</span>
        <span>PAGE 19 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 20 : CONTRAINTES CHANTIER ERP & DÉMARCHE RSE -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-20">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">ERP & RSE // 20</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">MILIEU OCCUPÉ & ÉCO-RESPONSABILITÉ</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Contraintes Chantier ERP & RSE
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Travailler en site habité ou en établissement recevant du public exige une organisation millimétrée afin d'assurer la continuité absolue de vos activités sans aucune gêne pour les usagers.
        </p>

        <!-- 4 Blocs Contraintes & RSE -->
        <div class="grid grid-cols-2 gap-4">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-volume-xmark text-lbr-magenta text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Réduction des Nuisances Sonores</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Plages horaires spécifiques pour travaux bruyants convenues avec le maître des lieux, outillages électroportatifs récents insonorisés.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-shield-virus text-lbr-blue text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Maîtrise des Poussières</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Confinement hermétique des zones de travail, bâches polyane, extracteurs d'air et aspiration continue des gravats à la source.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-recycle text-emerald-600 text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Tri 5 Flux & Valorisation</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Tri strict à la source (bois, métaux, plâtre, cartons, gravats) et évacuation en filières de recyclage agréées avec traçabilité.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-wheelchair text-lbr-navy text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Accessibilité PMR & Sécurité ERP</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Respect strict de la réglementation des ERP, cheminements balisés préservés, maintien des dégagements et issues de secours.
            </p>
          </div>
        </div>

        <div class="mt-4 p-3.5 rounded-xl bg-emerald-900/10 border border-emerald-600/30 flex items-center justify-between text-slate-800">
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-leaf text-emerald-600 text-xl"></i>
            <div>
              <span class="font-syne font-bold text-[10pt] uppercase block text-emerald-950">Flotte Électrique & Produits Éco-Labellisés</span>
              <span class="text-[8.5pt] text-slate-600">Renouvellement continu des véhicules et peintures A+ pour réduire l'empreinte carbone.</span>
            </div>
          </div>
          <span class="font-mono text-[8.5pt] text-emerald-700 font-bold uppercase">ENGAGEMENT RSE ACTIF</span>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • PROTOCOLES ERP & RSE</span>
        <span>PAGE 20 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 21 : MOBILIER, ERGONOMIE & ACOUSTIQUE -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-21">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">ESPACES TERTIAIRES // 21</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">BIEN-ÊTRE AU TRAVAIL & PERFORMANCE</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Mobilier, Ergonomie & Acoustique
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          L'aménagement d'un environnement tertiaire moderne combine ergonomie posturale, modularité du mobilier et absorption phonique ciblée pour décupler la productivité et le confort des équipes.
        </p>

        <!-- Deux Grandes Photos Réelles -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/salle%20reunion.webp" alt="Salle de réunion ergonomique" class="w-full h-full object-cover">
          </div>
          <div class="h-[65mm] rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="images/realisations/p10_open_space_collaboratif.jpg" alt="Mobilier collaboratif agencement" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Mobilier Réglable & Ergonomie</strong>
            <p class="text-[8.5pt] text-slate-600">Bureaux assis-debout électriques, sièges synchrones réglables et dessertes mobiles.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Panneaux Acoustiques Phoniques</strong>
            <p class="text-[8.5pt] text-slate-600">Séparateurs de bureaux en feutre thermoformé et baffles suspendus anti-réverbération.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong class="font-syne text-[10pt] text-lbr-navy uppercase block mb-1">Zones de Convivialité</strong>
            <p class="text-[8.5pt] text-slate-600">Création de cafétérias design, agoras d'échange et espaces lounge décontractés.</p>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • ERGONOMIE DES ESPACES</span>
        <span>PAGE 21 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 22 : RÉALISATIONS MAJEURES TERTIAIRES & SIÈGES SOCIAUX -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-22">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">RÉALISATIONS TERTIAIRES // 22</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <div class="flex items-start justify-between gap-6 mb-3">
          <div>
            <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">GALERIE PHOTOGRAPHIQUE OFFICIELLE</span>
            <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
              Sièges Tertiaires & Bureaux
            </h2>
            <div class="lbr-line w-20 my-2"></div>
          </div>
          <span class="font-mono text-[9pt] text-lbr-magenta font-bold uppercase tracking-wider bg-purple-50 border border-purple-200 px-3 py-1 rounded-full shrink-0">
            Cœur de Métier LBR
          </span>
        </div>

        <!-- Grille de 4 Photos Réelles LBR en Grand Format -->
        <div class="grid grid-cols-2 gap-3.5 mb-3">
          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/realisations/p10_table_ronde_boardroom.jpg" alt="Boardroom Prestige LBR" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Siège Corporate • Salle du Conseil</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Table ronde monolithe & suspension anneau</span>
            </div>
          </div>

          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/realisations/p9_salle_reunion_onde.jpg" alt="Salle de réunion onde" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Espace Décisionnel & Visio</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Luminaire ondulatoire & acoustique murale</span>
            </div>
          </div>

          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/realisations/p10_box_acoustique_vert.jpg" alt="Boxes acoustiques tertiaires" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Alcôves Réunion & Phone Boxes</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Intimité phonique et mobilier dynamique</span>
            </div>
          </div>

          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/realisations/p9_couloir_orange_virtual.jpg" alt="Virtual room et circulations" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Espace Innovant & Circulations</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Éclairage scénographié et néons intégrés</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • PORTFOLIO TERTIAIRE</span>
        <span>PAGE 22 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 23 : RÉALISATIONS RETAIL DE LUXE & RÉSIDENCES NOBLES -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-23">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">RÉALISATIONS NOBLES // 23</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-magenta font-bold">HAUTE DÉCORATION & ESPACES D'EXCEPTION</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Retail de Luxe & Patrimoine
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-3">
          Le savoir-faire de LBR CONCEPT s'exprime également au service des plus grandes enseignes de la mode, de l'hôtellerie de prestige et de la réhabilitation de résidences bourgeoises.
        </p>

        <!-- Grille de 4 Photos Réelles LBR -->
        <div class="grid grid-cols-2 gap-3.5 mb-3">
          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/escaliers%20immeuble%20luxe.webp" alt="Immeuble Haussmannien cage d'escalier" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Immeuble Haussmannien • Paris 8e</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Escaliers d'apparat et lustrerie monumentale</span>
            </div>
          </div>

          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/realisations/p1_boutique_luxe_rose.jpg" alt="Boutique luxe agencement" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Retail Prestige & Portants Or</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Boutique de créateur et éclairages intégrés</span>
            </div>
          </div>

          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/realisations/p9_cuisine_bois_marbre.jpg" alt="Cuisine contemporaine marbre" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Haute Menuiserie & Marbre</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Plans en marbre veiné et placages naturels</span>
            </div>
          </div>

          <div class="relative h-[62mm] rounded-xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="images/realisations/p10_palace_facade_rose.jpg" alt="Palace réhabilitation" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
              <strong class="font-syne text-[10pt] text-white uppercase">Hôtellerie d'Envergure & Façades</strong>
              <span class="font-mono text-[7.5pt] text-slate-300">Ravalement patrimonial et isolation extérieure</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • PORTFOLIO RETAIL & LUXE</span>
        <span>PAGE 23 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 24 : NOS RÉFÉRENCES & GRANDS COMPTES (PRÉDOMINANCE TERTIAIRE COMPLÈTE) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-24">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">RÉFÉRENCES // 24</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-3">
      <div>
        <div class="flex items-center justify-between gap-3 mb-2">
          <div>
            <span class="font-mono text-[9pt] uppercase tracking-widest text-lbr-blue font-bold">RELATIONS DE CONFIANCE PÉRENNES</span>
            <h2 class="font-syne font-extrabold text-[22pt] text-lbr-navy uppercase tracking-tight leading-none mt-0.5">
              Nos Références Clients
            </h2>
            <div class="lbr-line w-20 my-1.5"></div>
          </div>
          <span class="font-mono text-[8pt] text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full font-bold uppercase">
            Prédominance Tertiaire
          </span>
        </div>

        <!-- 1. TERTIAIRE : BLOC MAJEUR (65% DE LA SURFACE) -->
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-3 shadow-sm">
          <div class="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
            <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase flex items-center gap-2">
              <i class="fa-solid fa-building text-lbr-magenta text-xs"></i>
              <span>1. Tertiaire & Sièges Sociaux (25 Références)</span>
            </span>
            <span class="font-mono text-[7.5pt] text-slate-500 font-semibold uppercase">Plateaux de Bureaux • Coworking • Institutions</span>
          </div>

          <!-- Grille des 25 logos transparents Tertiaire -->
          <div class="grid grid-cols-5 gap-2 text-center items-center">
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Snapchat"><img src="images/logos/tertiaire/snapchat.png" alt="Snapchat" class="max-h-7 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Sanofi"><img src="images/logos/tertiaire/sanofi.png" alt="Sanofi" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Siemens"><img src="images/logos/tertiaire/siemens.png" alt="Siemens" class="max-h-5 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="L'Oréal Paris"><img src="images/logos/tertiaire/loreal.png" alt="L'Oréal Paris" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Regus"><img src="images/logos/tertiaire/regus.png" alt="Regus" class="max-h-6 max-w-full object-contain"></div>

            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Ocellis Groupe"><img src="images/logos/tertiaire/ocellis.png" alt="Ocellis Groupe" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="PMU"><img src="images/logos/tertiaire/pmu.png" alt="PMU" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Tétris design x build"><img src="images/logos/tertiaire/tetris.png" alt="Tétris" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Sony Music"><img src="images/logos/tertiaire/sony_music.png" alt="Sony Music" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Banque Palatine"><img src="images/logos/tertiaire/banque_palatine.png" alt="Banque Palatine" class="max-h-6 max-w-full object-contain"></div>

            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Léon Grosse"><img src="images/logos/tertiaire/leon_grosse.png" alt="Léon Grosse" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Netflix"><img src="images/logos/tertiaire/netflix.png" alt="Netflix" class="max-h-5 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="M.P"><img src="images/logos/tertiaire/mp.png" alt="M.P" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Indigo Group"><img src="images/logos/tertiaire/indigo_group.png" alt="Indigo Group" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Morgan Stanley"><img src="images/logos/tertiaire/morgan_stanley.png" alt="Morgan Stanley" class="max-h-6 max-w-full object-contain"></div>

            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="J.P. Morgan"><img src="images/logos/tertiaire/jp_morgan.png" alt="J.P. Morgan" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Spaces."><img src="images/logos/tertiaire/spaces.png" alt="Spaces." class="max-h-5 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Europcar"><img src="images/logos/tertiaire/europcar.png" alt="Europcar" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Naf Naf"><img src="images/logos/tertiaire/naf_naf.png" alt="Naf Naf" class="max-h-5 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Hilton Hotels & Resorts"><img src="images/logos/tertiaire/hilton.png" alt="Hilton" class="max-h-7 max-w-full object-contain"></div>

            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Exa Group"><img src="images/logos/tertiaire/exa_group.png" alt="Exa Group" class="max-h-5 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="J&J (Johnson & Johnson)"><img src="images/logos/tertiaire/jj.png" alt="J&J" class="max-h-6 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Musée du Louvre"><img src="images/logos/tertiaire/louvre.png" alt="Louvre" class="max-h-5 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="Telmma Property Group"><img src="images/logos/tertiaire/telmma.png" alt="Telmma" class="max-h-5 max-w-full object-contain"></div>
            <div class="p-1.5 bg-white rounded border border-slate-200 h-9 flex items-center justify-center shadow-xs" title="L.M.G.A. sas"><img src="images/logos/tertiaire/lmga.png" alt="L.M.G.A." class="max-h-5 max-w-full object-contain"></div>
          </div>
        </div>

        <!-- 2. RETAIL & RÉSIDENTIEL : SECTIONS COMPLÉMENTAIRES -->
        <div class="grid grid-cols-2 gap-3">
          <!-- Retail (9 logos) -->
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="pb-1 mb-2 border-b border-slate-200">
              <span class="font-syne font-bold text-[9pt] text-lbr-magenta uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-store text-xs"></i>
                <span>2. Retail & Luxe (9 Marques)</span>
              </span>
            </div>
            <div class="grid grid-cols-3 gap-1.5 text-center items-center">
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Hermès Paris"><img src="images/logos/retail/hermes.png" alt="Hermès" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Hôtel Le Pavillon"><img src="images/logos/retail/hotel_le_pavillon.png" alt="Le Pavillon" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Hippopotamus"><img src="images/logos/retail/hippopotamus.png" alt="Hippopotamus" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Modes"><img src="images/logos/retail/modes.png" alt="Modes" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Valentino"><img src="images/logos/retail/valentino.png" alt="Valentino" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Buccellati"><img src="images/logos/retail/buccellati.png" alt="Buccellati" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Alexander McQueen"><img src="images/logos/retail/alexander_mcqueen.png" alt="Alexander McQueen" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Gucci"><img src="images/logos/retail/gucci.png" alt="Gucci" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Nike"><img src="images/logos/retail/nike.png" alt="Nike" class="max-h-5 max-w-full object-contain"></div>
            </div>
          </div>

          <!-- Résidentiel & Bailleurs (6 logos) -->
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="pb-1 mb-2 border-b border-slate-200">
              <span class="font-syne font-bold text-[9pt] text-lbr-navy uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-house-chimney text-xs text-lbr-blue"></i>
                <span>3. Résidentiel & Foncières (6 Réf.)</span>
              </span>
            </div>
            <div class="grid grid-cols-3 gap-1.5 text-center items-center">
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Studio 113"><img src="images/logos/residentielle/studio_113.png" alt="Studio 113" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Sergic"><img src="images/logos/residentielle/sergic.png" alt="Sergic" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Cabinet Pons"><img src="images/logos/residentielle/cabinet_pons.png" alt="Cabinet Pons" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="IDF Habitat"><img src="images/logos/residentielle/idf_habitat.png" alt="IDF Habitat" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Cogeim"><img src="images/logos/residentielle/cogeim.png" alt="Cogeim" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center" title="Nexity"><img src="images/logos/residentielle/nexity.png" alt="Nexity" class="max-h-6 max-w-full object-contain"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • 40 GRANDS COMPTES OFFICIELS</span>
        <span>PAGE 24 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 25 : POURQUOI CHOISIR LBR CONCEPT ? (6 ENGAGEMENTS CLÉS) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-25">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">ENGAGEMENTS // 25</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-4">
      <div>
        <span class="font-mono text-[9.5pt] uppercase tracking-widest text-lbr-blue font-bold">VOS GARANTIES CONTRACTUELLES</span>
        <h2 class="font-syne font-extrabold text-[24pt] text-lbr-navy uppercase tracking-tight leading-none mt-1">
          Pourquoi Choisir LBR CONCEPT ?
        </h2>
        <div class="lbr-line w-20 my-2"></div>
        <p class="font-sans text-[10pt] text-slate-600 leading-relaxed mb-4">
          Choisir LBR CONCEPT, c'est s'appuyer sur une structure indépendante, financièrement solide et entièrement tournée vers l'excellence d'exécution et le respect de la parole donnée.
        </p>

        <!-- 6 Piliers d'Engagement -->
        <div class="grid grid-cols-2 gap-3.5 mb-4">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-user-check text-lbr-magenta text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">1. Interlocuteur Unique Dédié</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Un conducteur de travaux expérimenté pilote personnellement votre projet de la consultation jusqu'au parfait achèvement.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-clock-rotate-left text-lbr-blue text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">2. Respect Strict des Délais</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Planification jalonné par chemin critique pour éliminer les retards et assurer l'emménagement de vos équipes au jour fixé.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-piggy-bank text-emerald-600 text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">3. Zéro Dépassement Budgétaire</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Un marché à prix global et forfaitaire sans mauvaise surprise ni supplément non concerté en cours de chantier.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-award text-lbr-navy text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">4. Qualifications & Habilitations</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Qualibat RGE, SS4 Amiante et Qualigaz attestant du respect des règles de l'art sur chantiers ERP et marchés publics.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-users text-lbr-magenta text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">5. 26 Compagnons Qualifiés</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              Des artisans spécialisés internes maîtrisant les matériaux nobles, les finitions raffinées et les réseaux techniques.
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div class="flex items-center gap-2 mb-1.5">
              <i class="fa-solid fa-shield-halved text-lbr-blue text-base"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">6. Solidité & Décennale AXA</strong>
            </div>
            <p class="text-[8.5pt] text-slate-600 leading-relaxed">
              17 ans d'existence pérenne, plus de 3 M€ de CA annuel et une garantie décennale AXA couvrant l'ensemble des lots TCE.
            </p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-lbr-navy text-white text-center">
          <span class="font-syne font-bold text-[10.5pt] uppercase tracking-wider text-white">
            "BÂTIR ENSEMBLE, DURABLEMENT"
          </span>
          <span class="font-mono text-[8.5pt] text-slate-300 block mt-1">
            LBR CONCEPT — Votre partenaire de confiance pour des espaces professionnels performants.
          </span>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • ENGAGEMENTS DE CONFIANCE</span>
        <span>PAGE 25 // 26</span>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- PAGE 26 : CONTACT EN HAUT & TOUS LES PARTENAIRES EN BAS (VRAIS LOGOS) -->
  <!-- ========================================================================= -->
  <section class="a4-page" id="page-26">
    <!-- Header Page -->
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2.5">
        <img src="images/logo.png" alt="LBR CONCEPT" class="h-8 w-auto object-contain">
        <span class="font-syne font-bold text-[10pt] text-lbr-navy uppercase tracking-wider">LBR CONCEPT</span>
      </div>
      <span class="font-mono text-[9pt] text-slate-400 uppercase tracking-widest font-semibold">CONTACT // 26</span>
    </div>

    <div class="flex-1 flex flex-col justify-between mt-3">
      <div>
        
        <!-- SECTION HAUT : COORDONNÉES OFFICIELLES & CONTACT DIRECTION -->
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm mb-3">
          <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <div class="h-12 flex items-center justify-center p-1 bg-white rounded-lg border border-slate-200">
                <img src="images/logo.png" alt="LBR CONCEPT" class="h-10 w-auto object-contain">
              </div>
              <div>
                <span class="font-syne font-bold text-[11pt] text-lbr-navy uppercase block">LBR CONCEPT — DIRECTION GÉNÉRALE</span>
                <span class="font-mono text-[8pt] text-lbr-magenta uppercase font-bold">BÂTIMENT • DÉCORATION • RÉNOVATION • FONDÉE EN 2009</span>
              </div>
            </div>
            <div class="text-right">
              <span class="px-2.5 py-1 rounded bg-lbr-magenta text-white font-mono text-[8pt] uppercase font-bold tracking-wider">Présidence</span>
              <span class="font-syne font-extrabold text-[10.5pt] text-lbr-navy block mt-0.5">El Saïd BADR</span>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-3 text-xs">
            <div class="p-2.5 bg-white rounded-lg border border-slate-200">
              <span class="font-mono text-[7.5pt] text-slate-400 uppercase tracking-wider block">Ligne Mobile</span>
              <a href="tel:+33666991971" class="font-syne font-bold text-lbr-navy text-[10pt] hover:text-lbr-magenta block">06 66 99 19 71</a>
            </div>

            <div class="p-2.5 bg-white rounded-lg border border-slate-200">
              <span class="font-mono text-[7.5pt] text-slate-400 uppercase tracking-wider block">Standard Siège</span>
              <a href="tel:+33145945989" class="font-syne font-bold text-lbr-navy text-[10pt] hover:text-lbr-magenta block">01 45 94 59 89</a>
            </div>

            <div class="p-2.5 bg-white rounded-lg border border-slate-200">
              <span class="font-mono text-[7.5pt] text-slate-400 uppercase tracking-wider block">Courriels Directs</span>
              <span class="font-mono font-bold text-lbr-navy text-[8.5pt] block truncate">contact@lbr-concept.fr</span>
              <span class="font-mono text-slate-500 text-[8pt] block truncate">b.s@lbr-concept.fr</span>
            </div>

            <div class="p-2.5 bg-white rounded-lg border border-slate-200">
              <span class="font-mono text-[7.5pt] text-slate-400 uppercase tracking-wider block">Siège & Web</span>
              <span class="text-slate-700 text-[8pt] block truncate font-medium">94500 Champigny</span>
              <span class="font-mono font-bold text-lbr-blue text-[8.5pt] block">www.lbrconcept.com</span>
            </div>
          </div>
        </div>

        <!-- SECTION BAS : TOUS LES PARTENAIRES CLIENTS AVEC VRAIS LOGOS TRANSPARENTS -->
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-handshake text-lbr-magenta text-xs"></i>
              <strong class="font-syne text-[10pt] text-lbr-navy uppercase">Nos Clients & Partenaires de Référence</strong>
            </div>
            <span class="font-mono text-[7.5pt] text-emerald-700 font-bold uppercase bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              Grands Comptes Tertiaires, Retail & Institutionnels
            </span>
          </div>

          <!-- Grille Complète des Logos Partenaires (35+ marques) -->
          <div class="space-y-1.5">
            <!-- Rangée 1 : Tertiaire Majeur -->
            <div class="grid grid-cols-8 gap-1.5 items-center">
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Snapchat"><img src="images/logos/tertiaire/snapchat.png" alt="Snapchat" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Sanofi"><img src="images/logos/tertiaire/sanofi.png" alt="Sanofi" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Siemens"><img src="images/logos/tertiaire/siemens.png" alt="Siemens" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="L'Oréal Paris"><img src="images/logos/tertiaire/loreal.png" alt="L'Oréal" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Regus"><img src="images/logos/tertiaire/regus.png" alt="Regus" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Ocellis Groupe"><img src="images/logos/tertiaire/ocellis.png" alt="Ocellis" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="PMU"><img src="images/logos/tertiaire/pmu.png" alt="PMU" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Tétris design x build"><img src="images/logos/tertiaire/tetris.png" alt="Tétris" class="max-h-5 max-w-full object-contain"></div>
            </div>

            <!-- Rangée 2 : Tertiaire Suite -->
            <div class="grid grid-cols-8 gap-1.5 items-center">
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Sony Music"><img src="images/logos/tertiaire/sony_music.png" alt="Sony Music" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Banque Palatine"><img src="images/logos/tertiaire/banque_palatine.png" alt="Banque Palatine" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Léon Grosse"><img src="images/logos/tertiaire/leon_grosse.png" alt="Léon Grosse" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Netflix"><img src="images/logos/tertiaire/netflix.png" alt="Netflix" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="M.P"><img src="images/logos/tertiaire/mp.png" alt="M.P" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Indigo Group"><img src="images/logos/tertiaire/indigo_group.png" alt="Indigo Group" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Morgan Stanley"><img src="images/logos/tertiaire/morgan_stanley.png" alt="Morgan Stanley" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="J.P. Morgan"><img src="images/logos/tertiaire/jp_morgan.png" alt="J.P. Morgan" class="max-h-5 max-w-full object-contain"></div>
            </div>

            <!-- Rangée 3 : Tertiaire Suite & Coworking -->
            <div class="grid grid-cols-8 gap-1.5 items-center">
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Spaces."><img src="images/logos/tertiaire/spaces.png" alt="Spaces." class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Europcar"><img src="images/logos/tertiaire/europcar.png" alt="Europcar" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Naf Naf"><img src="images/logos/tertiaire/naf_naf.png" alt="Naf Naf" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Hilton Hotels & Resorts"><img src="images/logos/tertiaire/hilton.png" alt="Hilton" class="max-h-6 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Exa Group"><img src="images/logos/tertiaire/exa_group.png" alt="Exa Group" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="J&J"><img src="images/logos/tertiaire/jj.png" alt="J&J" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Musée du Louvre"><img src="images/logos/tertiaire/louvre.png" alt="Louvre" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Telmma"><img src="images/logos/tertiaire/telmma.png" alt="Telmma" class="max-h-4 max-w-full object-contain"></div>
            </div>

            <!-- Rangée 4 : Retail de Luxe & Résidentiel -->
            <div class="grid grid-cols-8 gap-1.5 items-center">
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Hermès Paris"><img src="images/logos/retail/hermes.png" alt="Hermès" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Valentino"><img src="images/logos/retail/valentino.png" alt="Valentino" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Gucci"><img src="images/logos/retail/gucci.png" alt="Gucci" class="max-h-3.5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Nike"><img src="images/logos/retail/nike.png" alt="Nike" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Buccellati"><img src="images/logos/retail/buccellati.png" alt="Buccellati" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Nexity"><img src="images/logos/residentielle/nexity.png" alt="Nexity" class="max-h-5 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Sergic"><img src="images/logos/residentielle/sergic.png" alt="Sergic" class="max-h-4 max-w-full object-contain"></div>
              <div class="p-1 bg-white rounded border border-slate-200 h-8 flex items-center justify-center shadow-xs" title="Cabinet Pons"><img src="images/logos/residentielle/cabinet_pons.png" alt="Cabinet Pons" class="max-h-5 max-w-full object-contain"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Page -->
      <div class="flex items-center justify-between border-t border-slate-200 pt-2 text-[8.5pt] font-mono text-slate-400 mt-2">
        <span>LBR CONCEPT • 477 RUE MARCEL PAUL, 94500 CHAMPIGNY-SUR-MARNE</span>
        <span>PAGE 26 // 26</span>
      </div>
    </div>
  </section>

</body>
</html>
`;

fs.writeFileSync('brochure-commerciale.html', brochureHtml, 'utf8');
console.log('Successfully generated complete updated brochure-commerciale.html! Size:', brochureHtml.length);
