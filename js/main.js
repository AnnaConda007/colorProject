// вызов всех функций
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modalBlock();
});

// modalBlock
const modalBlock = () => {
  const modals = (
    trigerSelecrtor,
    modalSelector,
    closeSelector,
    clickClose = true
  ) => {
    const openTrigers = document.querySelectorAll(trigerSelecrtor);
    const modal = document.querySelector(modalSelector);
    const closeModalsBtn = document.querySelectorAll(closeSelector);
    const allModals = document.querySelectorAll("[data-form]");

    const toCloseModalWith = (element) => {
      if (element) {
        element.addEventListener("click", () => {
          modal.style.display = "none";
        });
      } else {
        modal.style.display = "none";
      }
    };

    openTrigers.forEach((triger) => {
      triger.addEventListener("click", (e) => {
        e.preventDefault();
        allModals.forEach((modal) => {
          modal.style.display = "none";
        });
        modal.style.display = "block";
      });
    });

    closeModalsBtn.forEach((closeBtn) => {
      toCloseModalWith(closeBtn);
    });
    window.addEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        toCloseModalWith();
      }
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal && clickClose) {
        modal.style.display = "none";
      }
    });

    const showModalByTime = (modalSelector, time) => {
      setTimeout(function () {
        let checkDisplay;
        document.querySelectorAll("[data-form]").forEach((form) => {
          if (getComputedStyle(form).display !== "none") {
            console.log("open");
            checkDisplay = true;
          }
        });
        if (!checkDisplay) {
          document.querySelector(modalSelector).style.display = "block";
        }
      }, time);
    };
    showModalByTime(".form-substrate-red", 10000);
  };

  modals(".triger-blue", ".form-substrate-blue", ".closeBtn");
  modals(".triger-pink", ".form-substrate-pink", ".closeBtn");
  modals(".triger-red", ".form-substrate-red", ".closeBtn", false);
};
