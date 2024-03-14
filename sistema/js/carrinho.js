const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []
const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))

const tabela = document.querySelector("#tabela")
const buttonCarrinho = document.querySelector(".buttonCarrinho")

const real = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

let carrinho = getCarrinho()

let mostrarNaPagina = `
    <tr>
        <th>Nome</th>
        <th>Quantidade</th>
        <th>Preço</th>
        <th>Deletar</th>
    </tr>
` 

if (carrinho.length > 0) {

    let soma =0

    carrinho.forEach(item => {
        mostrarNaPagina += `
            <tr class="trProdutos">
                <td>${item.nome}</td>
                <td>${item.qtd}</td>
                <td>${real.format(item.preco * item.qtd)} 
                    <small>
                        (${item.qtd}x ${real.format(item.preco)})
                    </small>
                </td>
                <td>
                    <button class="material-symbols-outlined" onclick=" remCarrinho(${item.id})">
                        delete
                    </button>
                </td>
            </tr>  
        `

        soma += item.qtd * item.preco
    })

    tabela.innerHTML = mostrarNaPagina

    const trTotal = document.createElement("tr")
    trTotal.innerHTML = 
        `<td class="total" colspan="4" style="font-weight: bold;">Valor total: ${real.format(soma)}</td>`
        
    tabela.appendChild(trTotal)
}  else{
    mostrarNaPagina += `
        <tr>
            <td class="carrinhoVazio" colspan="4">Carrinho Vazio!</td>
        </tr>`
    tabela.innerHTML = mostrarNaPagina

}

const remCarrinho = (id) => {
    carrinho.forEach(item => {
        if(item.qtd > 1){
            let qtd = Number(item.qtd)
            qtd = qtd -1
        }else{
            let novoCarrinho = carrinho.filter(item =>item.id !== id)
            setCarrinho(novoCarrinho)
        }
    });
}

// const removeCarrinho = (id) =>{
//     const carrinho = getCarrinho()
    
//     carrinho.forEach(item => {
//         if(item.id ===id && item.qtd >1){
//             carrinho.splice(item.id,1)
//             carrinho.push({id:item.id, qtd:item.qtd -1})        
//         }else{
//             carrinho.splice(item.id,1)
//         }
//     });
//     setCarrinho(carrinho)
// }


// const remItem = id => {
//     const cartItems = getCart()
//     const newCartItems = []

//     cartItems.forEach(item => {
//         if (item.id === id && item.qtd > 1)
//             newCartItems.push({ id: item.id, qtd: item.qtd - 1 })
//         else if (item.id === id && item.qtd <= 1)
//             itemRemovedNotification.showToast()
//         else
//             newCartItems.push({ id: item.id, qtd: item.qtd })
//     })

//     setCart(newCartItems)
//     init()
// }