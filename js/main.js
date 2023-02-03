// вызов функций
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












const accordionBlock = ()=>{
  const accordionBtn = document.querySelectorAll(".btn-accordion")
  const accordionText = document.querySelectorAll(".text-accordion")
  
  
  accordionText.forEach(item => {
    item.style.display="none"
    item.addEventListener("click",function(){
this.style.display="none"
this.previousElementSibling.classList.remove("active")
    })
  })
  
  
  
  
  accordionBtn.forEach(btn=>{
    btn.addEventListener("click", function(){
if( !this.classList.contains("active")){
  this.nextElementSibling.style.display="block"
      this.classList.add("active")
} else{
  this.nextElementSibling.style.display="none"
  this.classList.remove("active")
}
    
    })
  })
  
  
  }
  
  accordionBlock()