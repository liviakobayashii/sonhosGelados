const alterarQtd = (id, sinal) => {
    const carrinho = getCarrinho()

    carrinho.forEach(item => {
        if(sinal = "-"){
          let qtd = Number(item.qtd)
          qtd -=1 
        }else if(sinal = "+"){
          let qtd = Number(item.qtd)
          qtd +=1 
        }
        setCarrinho()

        // if( item.qtd > 1){
        //     let qtd = Number(item.qtd)
        //     qtd -=1 
        // }else if(){
        //     let novoCarrinho = carrinho.filter(item =>item.id !== id)
        //     setCarrinho(novoCarrinho)
        // }
    });

    mostrarCarrinho()

}
