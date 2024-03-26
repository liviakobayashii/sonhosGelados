let sorvetes = JSON.parse(localStorage.getItem('@sonhosGelados:sorvetes')) || []
localStorage.setItem('@sonhosGelados:sorvetes', JSON.stringify(sorvetes))

const select = document.querySelector("#select")

if(sorvetes){
    sorvetes.forEach(item => {
    const option = ''
    option.innerHTML = `
    <option value="${item.nome}">${item.nome}</option>
    `
    select.appendChild(option)

});
}
// const select = `
//     <select id="select"></select>
//     <option value="1"></option>

// `
// select.innerHTML