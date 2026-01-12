/* docs/assets/mathjax.js */

// 1. Definição da Configuração (Antes de carregar a lib)
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// 2. Carregamento da Biblioteca (Injeção Manual)
(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  script.async = true;
  document.head.appendChild(script);
})();

// 3. Integração com MkDocs Material (Navegação Instantânea)
document$.subscribe(() => { 
  // Se o MathJax já estiver carregado (navegação subsequente), força o render
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.typesetPromise();
  }
});