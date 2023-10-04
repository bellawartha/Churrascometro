const api = {

    getAddressByPostalCode:  (cep) => {
 
     const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
     
     const config = {
         method: "GET",
         headers: {
             "Content-Type": "application/json",
           }
     }
 
     return fetch(endpoint, config)
         .then((response)=> response.json())
         .then ((dados) => localStorage.setItem('endereco', JSON.stringify(dados)))
         .catch((error) => console.log(error));

    }
 };
