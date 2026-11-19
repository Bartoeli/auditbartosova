// Přepínání karet služeb. Bez JavaScriptu zůstanou vidět všechny panely.
(function () {
  var tabs = document.querySelectorAll('[data-tab]');
  var panels = document.querySelectorAll('[data-panel]');

  function show(name) {
    tabs.forEach(function (tab) {
      tab.setAttribute('aria-pressed', String(tab.dataset.tab === name));
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.panel !== name;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () { show(tab.dataset.tab); });
  });

  show('audit');
})();

// Oprávnění KAČR: otevřít v okně, bez JS se obrázek otevře samostatně.
(function () {
  var dialog = document.getElementById('cert');
  var link = document.querySelector('[data-cert-open]');
  if (!dialog || !link || typeof dialog.showModal !== 'function') return;

  link.addEventListener('click', function (e) {
    e.preventDefault();
    dialog.showModal();
  });
  dialog.querySelector('[data-cert-close]').addEventListener('click', function () {
    dialog.close();
  });
  // klik mimo obrázek (na pozadí) okno zavře
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', function () { link.focus(); });
})();
