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

/* 1. Inicializa no carregamento da página (Instant Loading) */
document$.subscribe(() => { 
  MathJax.typesetPromise()
})

/* 2. Escuta a troca de tema e força a repintura das fórmulas */
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      // Pequeno delay para garantir que o CSS do tema já trocou
      setTimeout(() => {
        MathJax.typesetPromise()
      }, 100);
    }
  });
});

/* Observa mudanças no atributo 'data-md-color-scheme' no corpo do site */
var element = document.querySelector("body");
observer.observe(element, {
  attributes: true,
  attributeFilter: ["data-md-color-scheme"]
});