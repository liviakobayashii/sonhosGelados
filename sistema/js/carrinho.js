//função para adicionar item no carrinho

function addCarrinho(idProduto){
    let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []
    const produto= sorvetes.find(item =>item.id ===idProduto)
    if(produto){
        sorvetes.push(produto)
        localStorage.setItem('@sorveteriaOnline:sorvetes', JSON.stringify(sorvetes))
    }
}