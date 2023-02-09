/*// вызов функций
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  filterBlock();
});

// modals
const modal = () => {};

// фильтр элементов
filterBlock = () => {
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


const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
 //   .then(() => console.log( new URLSearchParams(formData).toString()))
   
};

document.querySelector("form").addEventListener("submit", handleSubmit);