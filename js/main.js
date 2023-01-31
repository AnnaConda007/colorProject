// вызов функций
window.addEventListener('DOMContentLoaded', () => {
  'use strict'
})

// modals
 // изменение изображения при наведении 
const chengeImg=({img, newLink, lastLink})=>{
  const showNewImg = (imgSelector, newImgLink) => {
    const img = document.querySelectorAll(imgSelector).forEach((img) => {
        img.addEventListener('mouseenter', () => {
          img.classList.add("active-img")// увеличение изображения, не работает, так как перебивается стилем на 135 строке
          img.setAttribute("src", newImgLink)
        })
      })
  }
  const hideNewImg = (imgSelector, lastImgLink) => {
    const img = document.querySelectorAll(imgSelector).forEach((img) => {
        img.addEventListener('mouseleave', () => {
          img.classList.remove("active-img")
          img.setAttribute("src", lastImgLink)
        })
      })
  }
  showNewImg(img, newLink)
  hideNewImg(img, lastLink)
   
}
/*
chengeImg({img:".pink-color img", newLink:"img/salute.png",
lastLink:"img/allColors/pink.png"})

chengeImg({img:".blue-color img", newLink:"img/salute2.png",
lastLink:"img/allColors/blue.png"})

chengeImg({img:".green-color img", newLink:"img/salute3.png",
lastLink:"img/allColors/green.png"})

chengeImg({img:".yellow-color img", newLink:"img/salute4.png",
lastLink:"img/allColors/yellow.png"})





*/
