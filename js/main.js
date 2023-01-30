// вызов функций
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  filterBlock();
});

// modals
const modal = () => {};

// фильтр элементов

const filterBlock = () => {
  const allBtn = document.querySelector(".all-collors");

  const showColor = (btn, showSelector) => {
    document.querySelectorAll(".color-wrap div").forEach((div) => {
      div.style.opacity = 1;
    });

    document.querySelector(btn).addEventListener("click", () => {
      document
        .querySelectorAll(`.color-wrap div :not(${showSelector})`)
        .forEach((div) => {
          div.style.opacity = 0.1;
        });

      document.querySelectorAll(".pink-color").forEach((div) => {
        div.style.width = "50px";
      });
    });
  };

  showColor(".pink", ".pink-color");
  showColor(".blue", ".blue-color");
  showColor(".yellow", ".yellow-color");
  showColor(".green", ".pink-color");
};
