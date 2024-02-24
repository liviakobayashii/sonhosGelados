//adicionar sorvetes
const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")
const inputPreco = document.querySelector('#inputPreco')
const  sorvetesAdicionados = document.querySelector("#sorvetesAdicionados")

formAdicionar.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const valorInputNome = inputNome.value
    const valorInputPreco = inputPreco.value

    let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []

    sorvetes.push({nome:valorInputNome, preco: valorInputPreco})

    localStorage.setItem('@sorveteriaOnline:sorvetes', JSON.stringify(sorvetes))

    //limpar elementos anteriores
    sorvetesAdicionados.innerHTML=""

    //mostrar os sorvetes adicionados
    sorvetes.forEach((sorvete) => {
        const card = document.createElement("section")
        card.classList.add("card")

        const nomeSorvete = document.createElement("p")
        nomeSorvete.textContent =  sorvete.nome
        nomeSorvete.classList.add("nome")

        const precoSorvete = document.createElement("p")
        precoSorvete.textContent = "Preço: R$ " + sorvete.preco
        precoSorvete.classList.add("preco")

        card.appendChild(nomeSorvete)
        card.appendChild(precoSorvete)

        //adiciona o card à section sorvetesAdicionados
        sorvetesAdicionados.appendChild(card)

        //limpar dados de entrada
        inputNome.value = ""
        inputPreco.value = ""
    });





    // const sorvetesAdicionados = document.createElement("section")
    // const card = document.createElement("section")

    // sorvetesAdicionados.appendChild(card)
    // document.body.appendChild(sorvetesAdicionados)

    




        // function inserirImg(url){
    //     const img = document.createElement("img")
    //     img.src = url
    //     card.appendChild(img)
    // }

})
