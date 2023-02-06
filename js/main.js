 
async function getResponse (){
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")  // await - дождаться пока переменной response присвоиться результать запроса fetch
  let responseJSON = await response.json()   //  преобразование в json
  console.log(responseJSON)
  }
  
  getResponse()
  

