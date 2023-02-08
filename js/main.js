  
    document.querySelector("form").addEventListener("submit", (event)=>{
      event.preventDefault();
      const myForm = event.target;
      console.log(myForm)
      const formData = new FormData(myForm);
      
      fetch("", {// адрес чего нужно вставить ?
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    });
