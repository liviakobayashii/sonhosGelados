const personalizacaoPadrao = {
    primeiroSabor: null,
    segundoSabor: null,
    cobertura: null,
    casquinha: null,
}

const getSorvetePersonalizado = () => JSON.parse(localStorage.getItem('@sonhosGelados:sorvetePersonalizado')) || personalizacaoPadrao
const setSorvetePersonalizado = dadosSorvete => localStorage.setItem('@sonhosGelados:sorvetePersonalizado', JSON.stringify(dadosSorvete))

const addPersonalizacao = (chave, valor) => {
    const sorvetePersonalizado = getSorvetePersonalizado()

    sorvetePersonalizado[chave] = valor
    // console.log(sorvetePersonalizado)

    const right = document.querySelector("#right")

    right.innerHTML = `
        <div class="container">
            <h3>Sabor 1<h3>
            <p>${sorvetePersonalizado.primeiroSabor}</p>
            <h3>Sabor 2<h3>
            <h3>Cobertura<h3>
            <h3>Casquinha<h3>
        </div>
    `
}



// {
//     primeiroSabor: 'Chocolate',
//     segundoSabor: null,
//     cobertura: 'Morango',
//     tipo: 'Casquinha',
// }

//lado2

