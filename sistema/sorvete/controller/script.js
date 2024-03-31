let sorvetes = JSON.parse(localStorage.getItem('@sonhosGelados:sorvetes')) || []
let coberturas = JSON.parse(localStorage.getItem('@sonhosGelados:coberturas')) || []
let casquinhas = JSON.parse(localStorage.getItem('@sonhosGelados:casquinhas'))

const real = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const sorvetesAdicionados = document.querySelector(".sorvetesAdicionados")
const inputNome = document.querySelector("#inputNome")
const formFiltrar = document.querySelector("#formFiltrar")
const inputFiltrar = document.querySelector("#inputFiltrar")
const ul = document.querySelector("#listaSorvetes")

mostrarSorveteNaPagina(sorvetes)

//filtrar sorvetes
formFiltrar.addEventListener("submit", (e) =>{
    e.preventDefault()
    let valor = inputFiltrar.value

    const saborSelecionado = sorvetes.filter((sorvete) => sorvete.nome == valor)

    if(saborSelecionado.length != 0){
        mostrarSorveteNaPagina(saborSelecionado)
    }else{
        mostrarSorveteNaPagina(sorvetes)
        const p = document.createElement("p")
        p.className= "mensagemErro"
        p.textContent = "Sorvete não encontrado!"
    }
});
function mostrarSorveteNaPagina(arraySorvetes) {
    sorvetesAdicionados.innerHTML = ''
    arraySorvetes.forEach((item) => {

        //mostrar os sorvetes adicionados
        const card = document.createElement("section")
        card.classList.add("card")

        // colocado uma imagem no card
        const imagem = document.createElement("div")
        imagem.classList.add("imagem")
        const img = document.createElement("img")
        img.src = `${item.img ? item.img : './sistema/img/backgroundSorvetePadrao.jpg'}`
        img.alt = `Sorvete de ${item.nome}`

        const descricao = document.createElement("div")
        descricao.classList.add("descricao")
        const nomeSorvete = document.createElement("p")
        nomeSorvete.textContent =  item.nome
        nomeSorvete.classList.add("nome")
    
        const preco = real.format(item.preco) || '-'
    
        const precoSorvete = document.createElement("p")
        precoSorvete.textContent = "Preço: " + preco
        precoSorvete.classList.add("preco")

        const bottom = document.createElement("div")
        bottom.className = "bottom"

        const buttonCarrinho = document.createElement("button")
        buttonCarrinho.className= "material-symbols-outlined "
        buttonCarrinho.onclick = () => addCarrinho(item.id,item.nome, item.preco)
        buttonCarrinho.textContent = "shopping_cart"
        
        card.appendChild(imagem)
        imagem.appendChild(img)
        card.appendChild(bottom)
        bottom.appendChild(descricao)
        bottom.appendChild(buttonCarrinho)
        descricao.appendChild(nomeSorvete)
        descricao.appendChild(precoSorvete)
    
        //adiciona o card à section sorvetesAdicionados
        sorvetesAdicionados.appendChild(card)
    });
}



