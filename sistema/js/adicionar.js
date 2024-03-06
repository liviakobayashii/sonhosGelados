//adicionar sorvetes
const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")
const inputPreco = document.querySelector('#inputPreco')
const  sorvetesAdicionados = document.querySelector(".sorvetesAdicionados")

formAdicionar.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const valorInputNome = inputNome.value
    const valorInputPreco = inputPreco.value

    let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []

    sorvetes.push({nome:valorInputNome, preco: valorInputPreco, qtd : 0})

    localStorage.setItem('@sorveteriaOnline:sorvetes', JSON.stringify(sorvetes))

    alert("item adicionado com sucesso!")
    
    //limpar dados de entrada
    inputNome.value = ""
    inputPreco.value = ""

})
