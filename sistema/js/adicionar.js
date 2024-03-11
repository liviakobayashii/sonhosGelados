//adicionar sorvetes
const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")
const inputPreco = document.querySelector('#inputPreco')
const  sorvetesAdicionados = document.querySelector(".sorvetesAdicionados")

formAdicionar.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const valorInputNome = inputNome.value
    const valorInputPreco = inputPreco.value

    let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []

    sorvetes.push({id: sorvetes.length + 1, nome:valorInputNome, preco: valorInputPreco})

    console.log(sorvetes)


    localStorage.setItem('@sorveteriaOnline:sorvetes', JSON.stringify(sorvetes))
 
    // $.ajax({
    //     url: './sistema/js/adicionar.js',
    //     type: 'POST',
    //     data: { nome: valorInputNome, preco: valorInputPreco},
    //     success: function() {
    //         Toastify({
    //             text: "Produto adicionado ao cardápio!",
    //             duration: 3000,
    //             close: true,
    //             gravity: "top", // `top` or `bottom`
    //             position: "right", // `left`, `center` or `right`
    //             stopOnFocus: true, // Prevents dismissing of toast on hover
    //             style: {
    //               background: "#97fc97",
    //               color:"#000000",
    //               border: '1px solid green'
    //             },
    //           }).showToast();
    //     }
    // })
    
    // limpar dados de entrada
    inputNome.value = ""
    inputPreco.value = ""

})
