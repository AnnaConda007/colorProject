// вызов функций
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modals(".triger-blue", ".form-substrate-blue", ".closeBtn");
  modals(".triger-pink", ".form-substrate-pink", ".closeBtn");
  modals(".triger-red", ".form-substrate-red", ".closeBtn");
});

// modals
const modals = (trigerSelecrtor, modalSelector, closeSelector) => {
  const openTrigers = document.querySelectorAll(trigerSelecrtor);
  const modal = document.querySelector(modalSelector);
  const closeModals = document.querySelectorAll(closeSelector);

  openTrigers.forEach((triger) => {
    triger.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  closeModals.forEach((close) => {
    close.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
};

/*



*/
