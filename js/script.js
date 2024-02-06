let sorvetes = [
    {nome:'Sensação' , sabor1:'morango', sabor2:'chocolate'},
    {nome:'Prestígio' , sabor1:'chocolate', sabor2:'coco'},
    {nome:'Flocos' , sabor1:'baunilha', sabor2:'chocolate'},
]
const ul = document.querySelector("#listaSorvetes")


sorvetes.forEach(sorvete => {

    const produto = document.createElement("li") 
    ul.appendChild(produto)
    produto.innerHTML = sorvete.nome

});



