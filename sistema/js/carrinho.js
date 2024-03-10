const tabela = document.querySelector("#tabela")

const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []
const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))

// const carrinho = document.querySelector("#carrinho")
const buttonCarrinho = document.querySelector(".buttonCarrinho")

// buttonCarrinho.onclick = function(){}

const addCarrinho = (id) => {
    const carrinho = getCarrinho()

    if(carrinho.length > 0){
        let modificado = false
        
        carrinho.forEach(item => {
            if(item.id === id){
                item.qtd ++
                modificado = true
            }
        });
        !modificado && carrinho.push({id:id, qtd:1})
    }
    else{
        carrinho.push({id:id, qtd:1})
    }
    setCarrinho(carrinho)

    carrinho.forEach(item => {
        const tr = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdQtd = document.createElement("td")
        tr.appendChild(tdNome)
        tr.appendChild(tdQtd)
    
        tdNome.textContent = item.nome
        tdQtd.textContent = item.qtd

        tabela.appendChild(th)
    });


}
// buttonCarrinho.addEventListener('click', (e) => {
//     e.preventDefault()

//     //recupera itens do localstorage
//     let carrinho = getCarrinho()

    
    
    
// })