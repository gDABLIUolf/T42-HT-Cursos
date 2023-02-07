const QTD_PARA_UMA_ADULTO = 400 //grama
const QTD_PARA_UMA_CRIANCA = 150 //gramas
const QTD_BEBIDA_PARA_ADULTO = 5 //latas

function calcular() {
    /*1 Ler o numero de adultos
    2 ler o numero de crianças
    3 calcular a quantidade de carne para adultos
    4 calcular a quantidade de carne para crianças
    5 calcular a quantidade de bebida para adultos 
    6 mostrar o resultado*/
    var numeroAdultos = document.getElementById("numeroAdultos").value
    var numeroCriancas = document.getElementById("numeroCriancas").value

    var qdtCarneParaAdultos = parseInt(numeroAdultos) * QTD_PARA_UMA_ADULTO
    var qdtCarneParaCrianca = parseInt(numeroCriancas) * QTD_PARA_UMA_CRIANCA

    var qtdBebidaParaAdulto = QTD_BEBIDA_PARA_ADULTO * parseInt(numeroAdultos)

    document.getElementById("resultado").innerHTML =
        `
    <ul>
    <li>Quantidade de carne para adultos: ${qdtCarneParaAdultos}gramas</li>
    <li>Quantidade de carne para crianças: ${qdtCarneParaCrianca}gramas</li>
    <li>Quantidade de bebida para adultos: ${qtdBebidaParaAdulto}latas de 350ml</li>
    </ul>
    `
    console.log(qtdBebidaParaAdulto)
    console.log(qdtCarneParaAdultos)
    console.log(qdtCarneParaCrianca)
}