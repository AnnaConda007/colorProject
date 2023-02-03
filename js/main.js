 const moreBtn = document.querySelector(".more-colors")



 

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.responseType = "json";
xhr.onreadystatechange = function() {

  let response = xhr.response
  console.log(response[1]);

  for (let key in response) { 
  }
  
};
xhr.send();



/*

 moreBtn.addEventListener("click",()=>{

const xhr = new XMLHttpRequest()
xhr.open("GET", "./color.json")
//xhr.responseType = "json";


const wrap = document.querySelector(".JSON")
 wrap.innerHTML = ` <div >
  <img src="img/allColors/pink.png" alt="цвет"  />
</div>
 `



 })
*/