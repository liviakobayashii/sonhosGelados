let sorvetes = JSON.parse(localStorage.getItem("@sonhosGelados:sorvetes")) || [];
localStorage.setItem("@sonhosGelados:sorvetes", JSON.stringify(sorvetes));

const real = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

if (sorvetes) {
    primeiroSabor = document.querySelector("#primeiroSabor")
    segundoSabor = document.querySelector("#segundoSabor")

    //lado 1
    
    //primeiro sabor do sorvete
    sorvetes.forEach(item => {
        primeiroSabor.innerHTML += `
        <div class="card">
            <div class="imagem">
                <img src="${item.img ? item.img : '../../img/backgroundSorvetePadrao.jpg'}" alt="Sorvete de ${item.nome}">
            </div>
            <div class="descricao">
                <p class="nome">${item.nome}</p>
                <p class="preco">Preço: ${real.format(item.preco) || '-'}</p>
            </div>
        </div>
        `
    });

    //segundo sabor do sorvete
    sorvetes.forEach(item => {
        segundoSabor.innerHTML += `
        <div class="card">
            <div class="imagem">
                <img src="${item.img ? item.img : '../../img/backgroundSorvetePadrao.jpg'}" alt="Sorvete de ${item.nome}">
            </div>
            <div class="descricao">
                <p class="nome">${item.nome}</p>
                <p class="preco">Preço: ${real.format(item.preco) || '-'}</p>
            </div>
        </div>
        `
    });
    //cobertura do sorvete
    //casquinha do sorvete

    //lado2

}
    
