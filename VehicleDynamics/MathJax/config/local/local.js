MathJax.Hub.Config({
  TeX: {
    equationNumbers: {  autoNumber: "AMS"  },
    extensions: ["AMSmath.js", "AMSsymbols.js", "autobold.js", "color.js"]
    Macros: {
      real: "{\\mathbb R}"
    }
  }
});

MathJax.Ajax.loadComplete("[MathJax]/config/local/local.js");
