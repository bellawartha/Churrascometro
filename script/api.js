function getAddressByPostalCode(cep) {

    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };
    return new Promise((resolve, reject) => {
        return fetch(endpoint, config)
            .then((response) => response.json())
            .then((dados) => {
                if (dados.erro === true) {
                    reject("CEP não encontrado.");
                } else {
                    resolve(dados);
                }
            });
    });
};