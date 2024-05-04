const personalizacaoPadrao = {
    primeiroSabor: null,
    segundoSabor: null,
    cobertura: null,
    casquinha: null,
}

const getSorvetePersonalizado = () => JSON.parse(localStorage.getItem('@sonhosGelados:sorvetePersonalizado')) || personalizacaoPadrao
const setSorvetePersonalizado = dadosSorvetePersonalizado => localStorage.setItem('@sonhosGelados:sorvetePersonalizado', JSON.stringify(dadosSorvetePersonalizado))

const addPersonalizacao = (chave, valor) => {
    const sorvetePersonalizado = getSorvetePersonalizado()

    sorvetePersonalizado[chave] = valor

    setSorvetePersonalizado(sorvetePersonalizado)

    mostrarSorvetesPersonalizados()
}

//lado direito

const mostrarSorvetesPersonalizados = () => {
    const sorvetePersonalizado = getSorvetePersonalizado()

    const right = document.querySelector("#right")

    right.innerHTML = `
        <div id="container">
            <h3>Sabor 1</h3>
            <p>${sorvetePersonalizado.primeiroSabor ? sorvetePersonalizado.primeiroSabor.nome : "Sabor não selecionado"}<p>

            <h3>Sabor 2</h3>
            <p>${sorvetePersonalizado.segundoSabor ? sorvetePersonalizado.segundoSabor.nome : "Sabor não selecionado"}</p>

            <h3>Cobertura</h3>
            <p>${sorvetePersonalizado.cobertura ? sorvetePersonalizado.cobertura.nome : "Cobertura não selecionada"}</p>

            <h3>Casquinha</h3>
            <p>${sorvetePersonalizado.casquinha ? sorvetePersonalizado.casquinha.nome : "Casquinha não selecionada"}</p>

            <button type="submit" onclick="addCarrinhoPersonalizado()">Adicionar no carrinho</button>
        </div>
    `

}

mostrarSorvetesPersonalizados()
