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
