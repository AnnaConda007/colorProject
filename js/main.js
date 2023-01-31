// вызов всех функций
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modalBlock(".triger-pink", ".form-substrate-pink", ".closeBtn");
});

// modalBlock и бургер-меню
const modalBlock = (openSelector, modalSelector, closeSelector) => {
  const openModal = document.querySelector(openSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);

  const toCloseBy = (eventType, closeBtn, closeElem) => {
    closeElem =
      closeElem[0] === "." ? document.querySelector(closeElem) : closeElem;
    closeBtn =
      closeBtn[0] === "." ? document.querySelector(closeBtn) : closeBtn;
    closeBtn.addEventListener(eventType, (e) => {
      if (e.target === modal || e.code == "Escape" || e.target === closeBtn) {
        closeElem.style.display = "none";
      }
    });
  };

  const toOpenBy = (triger, visible) => {
    triger = triger[0] === "." ? document.querySelector(triger) : triger;
    visible = visible[0] === "." ? document.querySelector(visible) : visible;
    triger.addEventListener("click", () => {
      visible.style.display = "block";
    });
  };

  toOpenBy(openModal, modal);
  toOpenBy(".menu-btn", ".menu");

  toCloseBy("click", close, modal);
  toCloseBy("click", window, modal);
  toCloseBy("keydown", window, modal);
  toCloseBy("click", ".closeMenu", ".menu");
};
