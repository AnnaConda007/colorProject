 
async function getResponse (){
  let response = await fetch("color.json")  // await - дождаться пока переменной response присвоиться результать запроса fetch
  let responseJSON = await response.json()
  console.log(responseJSON)
  }
  
  getResponse()
  
