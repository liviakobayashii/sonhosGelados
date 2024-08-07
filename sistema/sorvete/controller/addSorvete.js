//adicionar sorvetes
const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")
const inputPreco = document.querySelector('#inputPreco')
const inputImg = document.querySelector('#inputImg')
const tipoDoProduto = document.querySelector("#tipo")
const  sorvetesAdicionados = document.querySelector(".sorvetesAdicionados")

formAdicionar.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const valorInputNome = inputNome.value
    const valorInputPreco = inputPreco.value
    const valorInputImg = inputImg.value
    const valorTipoDoProduto = tipoDoProduto.value

    let sorvetes = JSON.parse(localStorage.getItem('@sonhosGelados:sorvetes')) || []
    let coberturas = JSON.parse(localStorage.getItem('@sonhosGelados:coberturas')) || []
    let casquinhas = JSON.parse(localStorage.getItem('@sonhosGelados:casquinhas')) || []


    let id = 1
    sorvetes.forEach(item => {
      id += 1
    });

    if(valorInputNome && valorInputPreco && valorInputImg && valorTipoDoProduto){

      switch(valorTipoDoProduto){
        case "sorvete": 
          sorvetes.push({id:id, nome:valorInputNome, preco: valorInputPreco, img: valorInputImg})
          localStorage.setItem('@sonhosGelados:sorvetes', JSON.stringify(sorvetes))
          break
        case "cobertura":
          coberturas.push({id:id, nome:valorInputNome, preco: valorInputPreco, img: valorInputImg})
          localStorage.setItem('@sonhosGelados:coberturas', JSON.stringify(coberturas))
          break
        case "casquinha":
          casquinhas.push({id:id, nome:valorInputNome, preco: valorInputPreco, img: valorInputImg})
          localStorage.setItem('@sonhosGelados:casquinhas', JSON.stringify(casquinhas))
          break
      }
      
      Toastify({
          text: "Produto adicionado ao cardápio com sucesso!",
          duration: 3000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#97fc97",
            color:"#000000",
            border: '1px solid green'
          },
        }).showToast();

      }else{
        Toastify({
          text: "Favor preencher todos os campos!",
          duration: 3000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#f09d9d",
            color:"#000000",
            border: '1px solid red'
          },
        }).showToast();
      }

      // limpar dados de entrada
      inputNome.value = ""
      inputPreco.value = ""
      inputImg.value = ""
      tipoDoProduto.value = ""
})
