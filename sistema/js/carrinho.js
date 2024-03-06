const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []
const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))

const carrinho = document.querySelector("#carrinho")
const buttonCarrinho = (".buttoncarrinho")

buttonCarrinho = onclick("addCarrinho")
const addCarrinho = id => {
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
}

// carrinho.addEventListener('onclick', (e)=>{
//     e.preventDefault()

//     //recupera itens do localstorage
//     let itensCarrinho = JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []

//     itensCarrinho.push()

    
// })