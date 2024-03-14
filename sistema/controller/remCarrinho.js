
const remCarrinho = (id) => {
    carrinho.forEach(item => {
        // if(item.qtd > 1){
        //     let qtd = Number(item.qtd)
        //     qtd = qtd -1
        // }else{
            let novoCarrinho = carrinho.filter(item =>item.id !== id)
            setCarrinho(novoCarrinho)
        // }
    });
}
