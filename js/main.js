



var xhr = new XMLHttpRequest();//  создаем объект, хранящий в себе запрос
xhr.open("GET", "color.json" );// "открываем" запрос, настраиваем - тип, адрес, по которому нужно обратиться
// 6 строкой, ЗАРАНЕЕ задается команда - собрать все что есть по указанному адресу.
// По умолчанию данные сохраняются в объект xhr в том же формате,в котором данные храняться по указанному в запросе адресу 

xhr.responseType = "json"; // ЗАРАНЕЕЕ меняем тип данных после сохранения в переменную(объект). Пока запрос еще не соверщается 

xhr.onreadystatechange = ()=>{// запрос пока так же не запускается, тут ЗАРАНЕЕ задаются все команды, которые должны выполнится при каждом изменении статуса запроса
// событие onreadystatechange в данном случае выполнится более  раза, следовательно и данные выведутся несколько раз?
 let response = xhr.response
 for (key in response){
console.log(response[key].title)
}
} 

xhr.send();// запрос отправляется, запускются все команды описанные выше.






/*let arr = {
  one : 1,
two:2,
three :3

}
 
for (key in arr){
  console.log(key)
console.log(arr[key])
}
const moreBtn = document.querySelector(".more-colors")

*/ 
  


/*

xhr.onreadystatechange = function() {
if(this.readyState==4 && this.status==200){
  
}
*/
//xhr.responseType = "json";
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