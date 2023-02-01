 
const slider= ()=>{

  const backBtn = document.querySelector(".back")
  const nextBtn = document.querySelector(".next")
const allImg = document.querySelectorAll(".slider-item-wrap")
 

 
 
let count = 0


backBtn.addEventListener("click", ()=>{
  allImg.forEach(img=>{
    img.style.display="none"
  })
  
  allImg[count].style.display="block"
  count++
  checkCount() 
})

 
nextBtn.addEventListener("click", ()=>{
  allImg.forEach(img=>{
    img.style.display="none"
  })
  
  allImg[count].style.display="block"
  count++
  checkCount() 
 })

const checkCount= ()=>{
  count = (count>3) ? 0 : count
  count = (count<0) ?3 : count
  
}





 }

 slider()