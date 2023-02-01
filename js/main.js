 
const slider= ()=>{

  const backBtn = document.querySelector(".back")
  const nextBtn = document.querySelector(".next")
const allImg = document.querySelectorAll(".slider-item-wrap")
const wrapImg = document.querySelectorAll("slider-item-wrap")

 

let count = 0
allImg[count].style.display ="none"


backBtn.addEventListener("click", ()=>{
  allImg[count].style.display ="block"
 count--
 checkCount()
 allImg[count].style.display ="none"

 console.log(count)
})

 
nextBtn.addEventListener("click", ()=>{
  allImg[count].style.display ="block"
  count++
  checkCount()
  allImg[count].style.display ="none"
  console.log(count)
     
 })

const checkCount= ()=>{
  count = (count>3) ? 0 : count
  count = (count<0) ?3 : count
  
}





 }

 slider()