const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []
const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))
// const getSorvetePersonalizado = () => JSON.parse(localStorage.getItem('@sonhosGelados:sorvetePersonalizado')) || personalizacaoPadrao


const addCarrinho = (id, nome, preco) => {
    const carrinho = getCarrinho()

    if (existeUmSorveteComOMesmoID) {
        carrinho.forEach(item => {
            if (item.id === id) {
                item.qtd += 1
            }
        })
    } else {
        carrinho.push({ id, nome, qtd:1, preco, descricao:null })//quando nome: nome
    }

    setCarrinho(carrinho)

    Toastify({
        text: "Produto adicionado ao carrinho com sucesso!",
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

}


const addCarrinhoPersonalizado = (id, nome, preco) => {
    const carrinho = getCarrinho()
    const sorvetePersonalizado = getSorvetePersonalizado()

    const { primeiroSabor, segundoSabor, cobertura, casquinha } = sorvetePersonalizado

    const novoSorvete = {
        id: [primeiroSabor.id, segundoSabor.id, cobertura.id, casquinha.id].join(''),
        nome: 'Sorvete personalizado',
        descricao: `${primeiroSabor.nome}, ${segundoSabor.nome}, cobertura de ${cobertura.nome} e casquinha de ${casquinha.nome}`,
        preco: parseFloat(primeiroSabor.preco) + parseFloat(segundoSabor.preco) + parseFloat(cobertura.preco) + parseFloat(casquinha.preco),
        qtd:1
    }

    const existeUmSorveteComOMesmoID = carrinho.some(item => item.id === novoSorvete.id)

    if (existeUmSorveteComOMesmoID) {
        carrinho.forEach(item => {
            if (item.id === novoSorvete.id) {
                item.qtd += 1
            }
        })
    } else {
        carrinho.push(novoSorvete)
    }

    setCarrinho(carrinho)

    Toastify({
        text: "Produto adicionado ao carrinho com sucesso!",
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

}
