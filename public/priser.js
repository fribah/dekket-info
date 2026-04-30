(function () {
  'use strict';

  var DISCLAIMER = 'Prisene er innhentede tilbud for én standardprofil. Faktisk pris avhenger av din situasjon, alder og bosted.';

  /* ── Prisdata ────────────────────────────────────────────────────
     Hver post: { selskap, produkt, pris (kr/mnd), dato (YYYY-MM) }
     Tall merket med "?" er plassholdere – erstatt med riktig pris.
  ─────────────────────────────────────────────────────────────── */
  var PRISER = {

    bilforsikring: {
      ansvar: [
        { selskap: 'Gjensidige', produkt: 'Ansvar',    pris: 499,  dato: '2026-03' }, // ?
        { selskap: 'If',         produkt: 'Ansvar',    pris: 450,  dato: '2026-03' }, // ?
        { selskap: 'DNB',        produkt: 'Ansvar',    pris: 465,  dato: '2026-04' }, // ?
        { selskap: 'Enter',      produkt: 'Ansvar',    pris: 420,  dato: '2026-04' }, // ?
        { selskap: 'Tryg',       produkt: 'Ansvar',    pris: 480,  dato: '2026-03' }, // ?
      ],
      delkasko: [
        { selskap: 'Gjensidige', produkt: 'Delkasko',  pris: 750,  dato: '2026-03' }, // ?
        { selskap: 'If',         produkt: 'Delkasko',  pris: 720,  dato: '2026-03' }, // ?
        { selskap: 'DNB',        produkt: 'Delkasko',  pris: 780,  dato: '2026-04' }, // ?
        { selskap: 'Enter',      produkt: 'Delkasko',  pris: 690,  dato: '2026-04' }, // ?
        { selskap: 'Tryg',       produkt: 'Delkasko',  pris: 760,  dato: '2026-03' }, // ?
      ],
      kasko: [
        { selskap: 'DNB',        produkt: 'Kasko',     pris: 1600, dato: '2026-04' },
        { selskap: 'DNB',        produkt: 'Toppkasko', pris: 1637, dato: '2026-04' },
        { selskap: 'Enter',      produkt: 'Toppkasko', pris: 1776, dato: '2026-04' },
        { selskap: 'Gjensidige', produkt: 'Kasko',     pris: 1550, dato: '2026-03' }, // ?
        { selskap: 'If',         produkt: 'Kasko',     pris: 1620, dato: '2026-03' }, // ?
        { selskap: 'Tryg',       produkt: 'Kasko',     pris: 1590, dato: '2026-03' }, // ?
      ],
    },

    innboforsikring: [
      { selskap: 'Gjensidige',  produkt: 'Innbo',       pris: 189, dato: '2026-03' }, // ?
      { selskap: 'If',          produkt: 'Innbo',       pris: 175, dato: '2026-03' }, // ?
      { selskap: 'Tryg',        produkt: 'Innbo',       pris: 195, dato: '2026-03' }, // ?
      { selskap: 'Storebrand',  produkt: 'Innbo',       pris: 210, dato: '2026-02' }, // ?
      { selskap: 'SpareBank 1', produkt: 'Innbo',       pris: 185, dato: '2026-03' }, // ?
    ],

    reiseforsikring: [
      { selskap: 'Gjensidige',  produkt: 'Årsreise',    pris: 230, dato: '2026-03' }, // ?
      { selskap: 'If',          produkt: 'Årsreise',    pris: 215, dato: '2026-03' }, // ?
      { selskap: 'DNB',         produkt: 'Årsreise',    pris: 249, dato: '2026-04' }, // ?
      { selskap: 'Europeiske',  produkt: 'Årsreise',    pris: 199, dato: '2026-03' }, // ?
      { selskap: 'SpareBank 1', produkt: 'Årsreise',    pris: 220, dato: '2026-02' }, // ?
    ],

    barneforsikring: [
      { selskap: 'Storebrand',  produkt: 'Barneforsikring', pris: 279, dato: '2026-02' }, // ?
      { selskap: 'Gjensidige',  produkt: 'Barneforsikring', pris: 315, dato: '2026-03' }, // ?
      { selskap: 'SpareBank 1', produkt: 'Barneforsikring', pris: 295, dato: '2026-02' }, // ?
      { selskap: 'If',          produkt: 'Barneforsikring', pris: 330, dato: '2026-03' }, // ?
    ],

    livsforsikring: [
      { selskap: 'Storebrand',  produkt: 'Livsforsikring', pris: 250, dato: '2025-12' }, // ?
      { selskap: 'Gjensidige',  produkt: 'Livsforsikring', pris: 280, dato: '2025-12' }, // ?
      { selskap: 'DNB',         produkt: 'Livsforsikring', pris: 265, dato: '2025-12' }, // ?
      { selskap: 'SpareBank 1', produkt: 'Livsforsikring', pris: 240, dato: '2026-01' }, // ?
    ],

    helseperson: {
      behandling: [
        { selskap: 'Vertikal Helse', produkt: 'Behandlingsforsikring', pris: 399, dato: '2026-03' }, // ?
        { selskap: 'Gjensidige',     produkt: 'Behandlingsforsikring', pris: 420, dato: '2026-03' }, // ?
        { selskap: 'If',             produkt: 'Behandlingsforsikring', pris: 450, dato: '2026-03' }, // ?
      ],
      uforhet: [
        { selskap: 'Storebrand',  produkt: 'Uføreforsikring', pris: 680, dato: '2026-01' }, // ?
        { selskap: 'Gjensidige',  produkt: 'Uføreforsikring', pris: 720, dato: '2026-01' }, // ?
        { selskap: 'DNB',         produkt: 'Uføreforsikring', pris: 650, dato: '2026-01' }, // ?
      ],
      kritisk_sykdom: [
        { selskap: 'Storebrand', produkt: 'Kritisk sykdom', pris: 180, dato: '2026-02' }, // ?
        { selskap: 'Gjensidige', produkt: 'Kritisk sykdom', pris: 195, dato: '2026-02' }, // ?
        { selskap: 'DNB',        produkt: 'Kritisk sykdom', pris: 170, dato: '2026-02' }, // ?
      ],
    },

    dyreforsikring: {
      hund: [
        { selskap: 'Agria',      produkt: 'Hund basis', pris: 350, dato: '2026-03' }, // ?
        { selskap: 'Gjensidige', produkt: 'Hund',       pris: 390, dato: '2026-03' }, // ?
        { selskap: 'If',         produkt: 'Hund',       pris: 375, dato: '2026-03' }, // ?
      ],
      katt: [
        { selskap: 'Agria',      produkt: 'Katt basis', pris: 230, dato: '2026-03' }, // ?
        { selskap: 'Gjensidige', produkt: 'Katt',       pris: 265, dato: '2026-03' }, // ?
        { selskap: 'If',         produkt: 'Katt',       pris: 250, dato: '2026-03' }, // ?
      ],
    },

    sykkelforsikring: [
      { selskap: 'Eika',       produkt: 'Sykkelforsikring', pris: 79, dato: '2025-10' }, // ?
      { selskap: 'Gjensidige', produkt: 'Sykkelforsikring', pris: 95, dato: '2025-10' }, // ?
    ],

    ulykkesforsikring: [
      { selskap: 'Gjensidige', produkt: 'Ulykke', pris: 89,  dato: '2026-02' }, // ?
      { selskap: 'If',         produkt: 'Ulykke', pris: 95,  dato: '2026-02' }, // ?
      { selskap: 'Storebrand', produkt: 'Ulykke', pris: 85,  dato: '2026-02' }, // ?
    ],

  };

  /* ── Hjelpefunksjoner ────────────────────────────────────────── */

  function getPrisListe(key, subkey) {
    var top = PRISER[key];
    if (!top) return null;
    if (subkey) return Array.isArray(top[subkey]) ? top[subkey] : null;
    return Array.isArray(top) ? top : null;
  }

  function datoAlder(dato) {
    var today = new Date();
    var parts = dato.split('-');
    return (today.getFullYear() - parseInt(parts[0], 10)) * 12
         + (today.getMonth() + 1 - parseInt(parts[1], 10));
  }

  function datoTagHTML(dato) {
    var alder = datoAlder(dato);
    var cls = alder < 3 ? 'pris-dato--gronn' : alder < 6 ? 'pris-dato--gul' : 'pris-dato--rod';
    var tekst = alder <= 0 ? 'Ny' : alder === 1 ? '1 mnd siden' : alder + ' mnd siden';
    return '<span class="pris-dato ' + cls + '" title="Oppdatert ' + dato + '">' + tekst + '</span>';
  }

  function fmtPris(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function infoWrapHTML() {
    return '<span class="pris-info-wrap">'
      + '<span class="pris-info-ikon" tabindex="0" aria-label="Om prisene">ⓘ</span>'
      + '<span class="pris-tooltip" role="tooltip">' + DISCLAIMER + '</span>'
      + '</span>';
  }

  /* ── Priskort – viser billigste oppføring ────────────────────── */
  function genPriskort(liste, label) {
    if (!liste || !liste.length) return '';
    var billigst = liste.slice().sort(function (a, b) { return a.pris - b.pris; })[0];
    return '<div class="priskort">'
      + '<div class="priskort-header">'
      +   '<span class="priskort-label">' + (label || 'Billigste') + '</span>'
      +   datoTagHTML(billigst.dato)
      + '</div>'
      + '<div class="priskort-beloep">' + fmtPris(billigst.pris) + '<span class="priskort-enhet"> kr/mnd</span></div>'
      + '<div class="priskort-kilde">' + billigst.selskap + ' · ' + billigst.produkt + ' ' + infoWrapHTML() + '</div>'
      + '</div>';
  }

  /* ── Inline-pris – viser billigste ──────────────────────────── */
  function genPrisinline(liste) {
    if (!liste || !liste.length) return '';
    var billigst = liste.slice().sort(function (a, b) { return a.pris - b.pris; })[0];
    return '<span class="pris-inline">'
      + 'fra ' + fmtPris(billigst.pris) + ' kr/mnd '
      + datoTagHTML(billigst.dato)
      + infoWrapHTML()
      + '</span>';
  }

  /* ── Pristabell – alle oppføringer, sortert billigst først ───── */
  function genPristabell(liste) {
    if (!liste || !liste.length) return '';
    var sorted = liste.slice().sort(function (a, b) { return a.pris - b.pris; });
    var rows = sorted.map(function (e) {
      return '<tr>'
        + '<td class="pristabell-selskap">' + e.selskap + '</td>'
        + '<td class="pristabell-produkt">' + e.produkt + '</td>'
        + '<td class="pristabell-pris">' + fmtPris(e.pris) + '</td>'
        + '<td>' + datoTagHTML(e.dato) + '</td>'
        + '</tr>';
    }).join('');
    return '<div class="pristabell-wrap">'
      + '<table class="pristabell">'
      + '<thead><tr><th>Selskap</th><th>Produkt</th><th>Kr/mnd</th><th>Oppdatert</th></tr></thead>'
      + '<tbody>' + rows + '</tbody>'
      + '</table>'
      + '<p class="pristabell-disclaimer">' + DISCLAIMER + ' ' + infoWrapHTML() + '</p>'
      + '</div>';
  }

  /* ── Auto-init ───────────────────────────────────────────────── */
  function init() {
    document.querySelectorAll('[data-priskort]').forEach(function (el) {
      var parts = el.dataset.priskort.split('.');
      el.innerHTML = genPriskort(getPrisListe(parts[0], parts[1]), el.dataset.prislabel || '');
    });
    document.querySelectorAll('[data-pris]').forEach(function (el) {
      var parts = el.dataset.pris.split('.');
      el.innerHTML = genPrisinline(getPrisListe(parts[0], parts[1]));
    });
    document.querySelectorAll('[data-pristabell]').forEach(function (el) {
      var parts = el.dataset.pristabell.split('.');
      el.innerHTML = genPristabell(getPrisListe(parts[0], parts[1]));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.Priser = { PRISER: PRISER, getPrisListe: getPrisListe,
    genPriskort: genPriskort, genPrisinline: genPrisinline,
    genPristabell: genPristabell, datoTagHTML: datoTagHTML };
})();
