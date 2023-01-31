// вызов функций
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  filterBlock();
});

// modals
const modal = () => {};

// фильтр элементов

const filterBlock = () => {
  const showColor = (btn, showSelector) => {
    document.querySelector(btn).addEventListener("click", () => {
      document.querySelectorAll(".color-wrap div").forEach((div) => {
        div.style.display = "none"; // все цвета скрываются
      });
      if (showSelector.length > 0) {
        document.querySelectorAll(showSelector).forEach((div) => {
          div.style.display = "block"; // показывается только нужный цвет
          console.log("эта часть кода срабатывает");
        });
      } else {
        document.querySelector(showSelector).style.display = "block"; // показывается только нужный цвет
      }
    });
  };

  showColor(".pink", ".pink-color");
  showColor(".blue", ".blue-color");
  showColor(".yellow", ".yellow-color");
  showColor(".green", ".green-color");
  showColor(".all-collors", ".color-wrap div");
};
