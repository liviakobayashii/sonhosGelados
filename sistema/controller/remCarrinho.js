
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


location.reload()

// Toastify({
//   text: "Produto removido do carrinho com sucesso!",
//   duration: 3000,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "right", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "#97fc97",
//     color:"#000000",
//     border: '1px solid green'
//   },
// }).showToast();
}
