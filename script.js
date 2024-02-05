let sorvetes = [
    {nome:'Sensação' , sabor1:'morango', sabor2:'chocolate'},
    {nome:'Prestígio' , sabor1:'chocolate', sabor2:'coco'},
    {nome:'Flocos' , sabor1:'baunilha', sabor2:'chocolate'},
]
// const container = document.createElement("div")
// container.classList("container")//no elemento container coloquei uma classe container

// let listaSorvetes = document.createElement("ul")

const ul = document.querySelector("#listaSorvetes")

// container.appendChild(listaSorvetes)


sorvetes.forEach(sorvete => {
    // console.log(sorvete.nome)

    const produto = document.createElement("li") 
    // ul.appendChild(sorvete.nome)

    ul.appendChild(produto)

    produto.innerHTML = sorvete.nome


});
