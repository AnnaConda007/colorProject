// вызов всех функций
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modalBlock(".triger-pink", ".form-substrate-pink", ".closeBtn");
});

// modalBlock
const modalBlock = (openSelector, modalSelector, closeSelector) => {
  const open = document.querySelector(openSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);

  const toCloseBy = (eventType, elem) => {
    elem.addEventListener(eventType, (e) => {
      if (e.target === modal || e.target === close || e.code == "Escape") {
        modal.style.display = "none";
      }
    });
  };

  open.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  toCloseBy("click", close);
  toCloseBy("click", window);
  toCloseBy("keydown", window);
};
