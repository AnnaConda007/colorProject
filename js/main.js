
const btn =  document.querySelector(".more-colors")
const wrap = document.querySelector(".color-wrap")


function closingForGetPosts(){  // замыкающая функция
  const amountShowColor = 6
 let startShowCollor = 0
  let lastShowCollor=amountShowColor

  async function getPosts(){
    const response = await fetch("./js/color.json") 
    const result = await response.json()
   const showResponse = result.slice(startShowCollor,lastShowCollor)
    for(key in showResponse ){
      wrap.innerHTML += `<div >
      <img src=${showResponse[key].src} alt="цвет"  />
     </div>` 
    }
    startShowCollor+=amountShowColor
    lastShowCollor+=amountShowColor
   if(lastShowCollor>=result.length+amountShowColor){btn.remove()}
    }
return getPosts
}

let getPosts = closingForGetPosts()
 btn.addEventListener("click",getPosts)



 