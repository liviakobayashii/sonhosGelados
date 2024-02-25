let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []

// const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")

const formFiltrar = document.querySelector("#formFiltrar")
const inputFiltrar = document.querySelector("#inputFiltrar")

const ul = document.querySelector("#listaSorvetes")
localStorage.setItem('@sorveteriaOnline:sorvetes', JSON.stringify(sorvetes))


//filtrar sorvetes

// formFiltrar.addEventListener("submit", (e) =>{
//     e.preventDefault()
    
//     let valor = inputFiltrar.value
//     let saborSelecionado = sorvetes.filter((sorvete) => sorvete.nome == valor)
//     if(saborSelecionado.length != 0){
//         console.log(saborSelecionado)
//     }else{
//         console.log("Sorvete não encontrado")
//     }

// });


//adicionar sorvetes

const  sorvetesAdicionados = document.querySelector(".sorvetesAdicionados")

sorvetes.forEach((sorvete) => { //mostrar os sorvetes adicionados
    const card = document.createElement("section")
    card.classList.add("card")

    const nomeSorvete = document.createElement("p")
    nomeSorvete.textContent =  sorvete.nome
    nomeSorvete.classList.add("nome")

    const preco = sorvete.preco || '-'

    const precoSorvete = document.createElement("p")
    precoSorvete.textContent = "Preço: R$ " + preco
    precoSorvete.classList.add("preco")

    card.appendChild(nomeSorvete)
    card.appendChild(precoSorvete)

    //adiciona o card à section sorvetesAdicionados
    sorvetesAdicionados.appendChild(card)

});


