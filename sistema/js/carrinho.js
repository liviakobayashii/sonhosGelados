const carrinho = document.querySelector("#carrinho")

carrinho.addEventListener('click', (e)=>{
    e.preventDefault()

    //recupera itens do localstorage
    let itensCarrinho = JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []

    itensCarrinho.push()

    
})