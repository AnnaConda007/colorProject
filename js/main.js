 import modals from "./modules/modals";

window.addEventListener("DOMContentLoaded", () => {
  modals()
});

 
// фильтр элементов
/*filterBlock = () => {
  const showColor = (btn, showSelector) => {
    document.querySelector(btn).addEventListener("click", () => {
      document.querySelectorAll(".color-wrap div").forEach((div) => {
        div.style.display = "none";
      });
      document.querySelectorAll(".title-colors li").forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelector(btn).classList.add("active");
      document.querySelectorAll(showSelector).forEach((div) => {
        div.style.display = "block";
      });
    });
  };

  showColor(".pink", ".pink-color");
  showColor(".blue", ".blue-color");
  showColor(".yellow", ".yellow-color");
  showColor(".green", ".green-color");
  showColor(".all-collors", ".color-wrap div");
};
*/