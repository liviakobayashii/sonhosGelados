const diminuirQtd = (id) => {
    const carrinho = getCarrinho();

    const novoCarrinho = carrinho.map((item) => {
        if (item.id == id) item.qtd -= 1;

        return item
    });

    setCarrinho(novoCarrinho)
    mostrarCarrinho()
};

const aumentarQtd = (id) => {
    carrinho.forEach((item) => {
        let qtd = Number(item.qtd);
        qtd += 1;
        setCarrinho();
    });
    mostrarCarrinho();
};

// const alterarQtd = (id, sinal) => {
//     const carrinho = getCarrinho()

//     carrinho.forEach(item => {
//         if(sinal = "-"){
//           let qtd = Number(item.qtd)
//           qtd -=1
//         }else if(sinal = "+"){
//           let qtd = Number(item.qtd)
//           qtd +=1
//         }
//         setCarrinho()

//         // if( item.qtd > 1){
//         //     let qtd = Number(item.qtd)
//         //     qtd -=1
//         // }else if(){
//         //     let novoCarrinho = carrinho.filter(item =>item.id !== id)
//         //     setCarrinho(novoCarrinho)
//         // }
//     });

//     mostrarCarrinho()

// }
