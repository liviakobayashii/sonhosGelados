//adicionar sorvetes
const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")
const inputPreco = document.querySelector('#inputPreco')

formAdicionar.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorInputNome = inputNome.value
    const valorInputPreco = inputPreco.value

    let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []

    sorvetes.push({nome:valorInputNome, preco: valorInputPreco})

    localStorage.setItem('@sorveteriaOnline:sorvetes', JSON.stringify(sorvetes))

    const sorvetesAdicionados = document.createElement("section")
    const card = document.createElement("section")

    sorvetesAdicionados.appendChild(card)
    
    function inserirImg(url){
        const img = document.createElement("img")
        img.src = url
        card.appendChild(img)
    }

console.log("ola")
//     <section id="sorvetesAdicionados">
//     <section id="card">
//         <div id="imagem">
//             <img src="img/flocos.jpg" alt="">
//         </div>
//         <div id="descricao">
//             <div id="nome">
//                 <p>Flocos</p>
//             </div>
//             <div id="preco">
//                 <p>R$12,00</p>
//             </div>
//         </div>
//             </section>
// </section>

    
})
