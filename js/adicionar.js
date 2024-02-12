//adicionar sorvetes
const formAdicionar = document.querySelector("#formAdicionar")
const inputNome = document.querySelector("#inputNome")

formAdicionar.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorInput = inputNome.value

    let sorvetes = JSON.parse(localStorage.getItem('@sorveteriaOnline:sorvetes')) || []

    sorvetes.push({nome:valorInput})

    localStorage.setItem('@sorveteriaOnline:sorvetes', JSON.stringify(sorvetes))

    console.log(sorvetes)
    
})
