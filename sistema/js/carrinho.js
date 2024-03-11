const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []
const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))

const real = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

const tabela = document.querySelector("#tabela")
const buttonCarrinho = document.querySelector(".buttonCarrinho")
const carrinho = getCarrinho()

carrinho.forEach(item => {


    const tr = document.createElement("tr")
    const tdNome = document.createElement("td")
    const tdQtd = document.createElement("td")
    const tdPreco = document.createElement("td")
    
    tr.appendChild(tdNome)
    tr.appendChild(tdQtd)
    tr.appendChild(tdPreco)

    tdNome.textContent = item.nome
    tdQtd.textContent = item.qtd
    tdPreco.innerHTML = `${real.format(item.preco * item.qtd)} <small>(${item.qtd}x ${real.format(item.preco)})</small> ` 

    tabela.appendChild(tr)
});

// buttonCarrinho.addEventListener('click', (e) => {
//     e.preventDefault()

//     //recupera itens do localstorage
//     let carrinho = getCarrinho()

    
    
    
// })