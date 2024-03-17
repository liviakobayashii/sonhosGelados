const remCarrinho = (id) => {
    const carrinho = getCarrinho()

    carrinho.forEach(item => {
        if(item.id === id){
            const novoCarrinho = carrinho.filter(item => item.id !== id)
            setCarrinho(novoCarrinho)
        }
        // if( item.qtd > 1){
        //     let qtd = Number(item.qtd)
        //     qtd -=1 
        // }else if(){
        //     let novoCarrinho = carrinho.filter(item =>item.id !== id)
        //     setCarrinho(novoCarrinho)
        // }
    });

    mostrarCarrinho()

Toastify({
  text: "Produto removido do carrinho com sucesso!",
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#ffb4b4",
    color:"#000000",
    border: '1px solid red'
  },
}).showToast();
}
