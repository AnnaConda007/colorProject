const btn =  document.querySelector(".more-colors")
 const wrap = document.querySelector(".color-wrap")

 let startShowCollor = 0
 let lasttShowCollor=6

 btn.addEventListener("click",async function getPosts(){
  const response = await fetch("./js/color.json") 
  const result = await response.json()
 const showResponse = result.slice(startShowCollor,lasttShowCollor)
  for(key in showResponse ){
    wrap.innerHTML += `<div >
    <img src=${showResponse[key].src} alt="цвет"  />
   </div>` 
  }
  startShowCollor+=6
  lasttShowCollor+=6
 
 if(lasttShowCollor>=result.length+lasttShowCollor){btn.remove()}

  }

 )
