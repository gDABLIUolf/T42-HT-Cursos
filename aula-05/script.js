const LISTA_CARROS = []
const LISTA_VEICULOS = [
    {
        id: 'valorHoraMoto',
        textoPergunta: "Qual o valor hora Moto",
        textoBotao: "Qual o valor hora Moto",

    },
    {
        id: 'valorHoraCarro',
        textoPergunta: "Qual o valor hora Carro",
        textoBotao: "Qual o valor hora Carro",

    },
]

function atualizarValorHora(id) {
    localStorage.removeItem("valorHora")
    perguntarValor()
}

function perguntarValor() {
    let divbotoes = document.getElementById("botoes")
    divbotoes.innerHTML = ""

    for (let i = 0; i < LISTA_VEICULOS.length; i++) {
        const item = LISTA_VEICULOS[i];
        let valorSalvoAntes = localStorage.getItem(item.id)
        if (!valorSalvoAntes) {
            let valor = prompt(item.textoPergunta)
            localStorage.setItem(item.id, valor)
        }
        const botao = `
        <button onclick="atualizarValorHora(${item.id})">${item.textoBotao}</button>
        `
        divbotoes += botao
    }
}



function atualizarValorMoto() {
    let valorSalvoAntes = localStorage.getItem("valorHora")
    if (!valorSalvoAntes) {
        let valor = prompt("Digite o valor Hora")
        localStorage.setItem("valorHoraMoto", valor)
    }
}


function limpar() {
    document.getElementById("placa").value = ""
    document.getElementById("modelo").value = ""
    document.getElementById("marca").value = ""
    document.getElementById("cor").value = ""
}

function adicionarCarro() {

    //ler o tipo
    let placa = document.getElementById("placa").value;
    let modelo = document.getElementById("modelo").value;
    let marca = document.getElementById("marca").value;
    let cor = document.getElementById("cor").value;

    if (placa == "" || placa == null || placa == undefined) {
        alert("A placa é obrigatória!");
        return;
    }
    const carro = {
        placa: placa,
        modelo: modelo,
        marca: marca,
        cor: cor,
        horaEntrada: new Date(),
    }
    LISTA_CARROS.push(carro)
    limpar()
    montarLista()
}

function montarLista() {
    if (LISTA_CARROS.length > 0) {
        const elementoLista = document.getElementById("listaCarros")
        elementoLista.innerHTML = ""
        for (let i = 0; i < LISTA_CARROS.length; i++) {
            const carro = LISTA_CARROS[i];
            const item = `<div>Placa: ${carro.placa} - Cor: ${carro.cor} - Marca: ${carro.marca}- Modelo: ${carro.modelo}</div>`
            elementoLista.innerHTML += item;
        }
    }
}

function cobrarCarro() {
    // criar input
    // ler valor de um input
    const placa = document.getElementById("placaParaCobrar").value
    // se o input estiver vazio soltar um alerta e encerrar execução
    // !placa é equivalente a placa == "" || placa ==null|| placa == undefined
    if (!placa) {
        alert("Placa obrigatória")
        return
    }
    // buscar no array LISTA_CARROS
    for (let i = 0; i < LISTA_CARROS.length; i++) {
        const carro = LISTA_CARROS[i];
        // verificar se o carro esta na lista
        if (carro.placa == placa) {
            // se estiver efetuar cobrança
            let horaSaida = new Date()
            let horasEmMiliSegundos = horaSaida - carro.horaEntrada
            // converter horas de milisegundos para segundos
            let horaEmSegundos = horasEmMiliSegundos / 1000
            // converter segundo para minuto
            let horaEmMinuto = horaEmSegundos / 60
            // converter de minuto para hora
            let hora = horaEmMinuto / 60

            let valorHora = parseFloat(localStorage.getItem("valorHora"))
            let valoFinal = hora * 15
            console.log(valoFinal.toFixed(2))
        }
    }
    // se não estiver soltar um alerta

}