const diminuirQtd = (id) => {
    const carrinho = getCarrinho();

    const novoCarrinho = carrinho.map((item) => {
        if (item.id == id && item.qtd > 1){
            item.qtd -= 1;
        }
        return item
    });

    setCarrinho(novoCarrinho)
    mostrarCarrinho()
};

const aumentarQtd = (id) => {
    const carrinho = getCarrinho();

    const novoCarrinho = carrinho.map((item) =>{
        if(item.id == id) item.qtd +=1;

        return item
    })

    setCarrinho(novoCarrinho)
    mostrarCarrinho();
};

