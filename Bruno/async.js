const botao = document.getElementById("botao");
const valor = document.getElementById("input");
const paragrafo = document.getElementById("paragrafo");

botao.addEventListener('click', async () => {
    
    try {
        
        const resposta = await fetch(`https://api.adviceslip.com/advice/${valor.value}`);
        const userData = await resposta.json();
        paragrafo.innerText = userData.slip.advice
        return userData.slip.advice
        
    } catch(e) {
        return console.log("O erro encontrado foi: ", e);
    }
            
})



// Utilizando o método antigo
        

// botao.addEventListener('click',  () => {    
    
    //     fetch(`https://api.adviceslip.com/advice/${valor.value}`)
    //         .then(resposta => resposta.json())
    //         .then(resposta => paragrafo.innerText = resposta.slip.advice)
    //         .then((resposta) => console.log(resposta))
    //         .catch(e => console.log('O erro encontrado foi: ', e))
    
    // })



    //          O retorno de uma função async
    
    // const getAdvice = async () => {
    //     const resposta =  await fetch("https://api.adviceslip.com/advice");
    //     const userData = await resposta.json();
        
    //     return userData.slip.advice;
    // }
    
    // getAdvice().then(value => console.log(value))