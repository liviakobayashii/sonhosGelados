const mostrarOpcoes = () => {
    const sorvetes = JSON.parse(localStorage.getItem("@sonhosGelados:sorvetes")) || [];
    const coberturas = JSON.parse(localStorage.getItem("@sonhosGelados:coberturas")) || [];
    const casquinhas = JSON.parse(localStorage.getItem("@sonhosGelados:casquinhas")) || [];

    const real = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    if (sorvetes) {
        //lado 1

        //primeiro sabor do sorvete
        const primeiroSabor = document.querySelector("#primeiroSabor");

        sorvetes.forEach((item) => {
            // tranformou codigo js para strting e trocou ' por " e " por '
            const dadosFormatados = JSON.stringify(item).replaceAll('"', "'");

            primeiroSabor.innerHTML += `
            <div class="card" onclick="addPersonalizacao('primeiroSabor', ${dadosFormatados})">
                <div class="imagem">
                    <img src="${
                        item.img
                            ? item.img
                            : "../../img/backgroundSorvetePadrao.jpg"
                    }" alt="Sorvete de ${item.nome}">
                </div>
                <p class="nome">${item.nome}</p>
            </div>
            `;
        });

         //SEGUNDO SABOR DO SORVETE
        const segundoSabor = document.querySelector("#segundoSabor");

        sorvetes.forEach((item) => {
            // tranformou codigo js para strting e trocou ' por " e " por '
            const dadosFormatados = JSON.stringify(item).replaceAll('"', "'");

            segundoSabor.innerHTML += `
                    <div class="card" onclick="addPersonalizacao('segundoSabor', ${dadosFormatados})">
                        <div class="imagem">
                            <img src="${
                                item.img
                                    ? item.img
                                    : "../../img/backgroundSorvetePadrao.jpg"
                            }" alt="Sorvete de ${item.nome}">
                        </div>
                        <div class="descricao">
                            <p class="nome">${item.nome}</p>
                        </div>
                    </div>
                    `;
        });

        //COBERTURA

        const cobertura = document.querySelector("#cobertura");

        coberturas.forEach((item) => {
            // tranformou codigo js para strting e trocou ' por " e " por '
            const dadosFormatados = JSON.stringify(item).replaceAll('"', "'");

            cobertura.innerHTML += `
                    <div class="card" onclick="addPersonalizacao('cobertura', ${dadosFormatados})">
                        <div class="imagem">
                            <img src="${
                                item.img
                                    ? item.img
                                    : "../../img/backgroundSorvetePadrao.jpg"
                            }" alt="Cobertura de ${item.nome}">
                        </div>
                        <div class="descricao">
                            <p class="nome">${item.nome}</p>
                        </div>
                    </div>
                    `;
        });

        //CASQUINHA

        const casquinha= document.querySelector("#casquinha");

        casquinhas.forEach((item) => {
            // tranformou codigo js para strting e trocou ' por " e " por '
            const dadosFormatados = JSON.stringify(item).replaceAll('"', "'");

            casquinha.innerHTML += `
                    <div class="card" onclick="addPersonalizacao('casquinha', ${dadosFormatados})">
                        <div class="imagem">
                            <img src="${
                                item.img
                                    ? item.img
                                    : "../../img/backgroundSorvetePadrao.jpg"
                            }" alt="Casquinha de ${item.nome}">
                        </div>
                        <div class="descricao">
                            <p class="nome">${item.nome}</p>
                        </div>
                    </div>
                    `;
        });

    }
};

mostrarOpcoes();

