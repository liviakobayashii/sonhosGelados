let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []

const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")

const formFiltrar = document.querySelector("#formFiltrar")
const inputFiltrar = document.querySelector("#inputFiltrar")

const ul = document.querySelector("#listaSorvetes")

sorvetes.forEach(sorvete => {
    const produto = document.createElement("li") 
    ul.appendChild(produto)
    produto.innerHTML = sorvete.nome

});

//filtrar sorvetes

formFiltrar.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    let valor = inputFiltrar.value
    let saborSelecionado = sorvetes.filter((sorvete) => sorvete.nome == valor)
    if(saborSelecionado.length != 0){
        console.log(saborSelecionado)
    }else{
        console.log("Sorvete não encontrado")
    }

});

