const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []
const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))

const addCarrinho = (id, nome, preco) => {
    const carrinho = getCarrinho()

    if(carrinho.length > 0){
        let modificado = false
        
        carrinho.forEach(item => {

            if(item.id === id){
                item.qtd ++
                modificado = true
            }
        });
        !modificado && carrinho.push({id:id, nome:nome, qtd:1, preco:preco})
    }
    else{
        carrinho.push({id:id, nome:nome, qtd:1, preco:preco})
    }
    setCarrinho(carrinho)
}