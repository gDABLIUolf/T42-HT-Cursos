// adicionar tarefa 
var contadorDeId = 1;

//marcar como concliuda
//criar usando enter

function construirElemento(id, valor) {
    var item = `<div id="${id}" class="item">
        <div onclick="marcarTarefa(${id})" class="item-icone">
            <i id="icone_${id}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${id})" class="item-nome">
            ${valor}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${id})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

    return item
}
var listaDeTarefa = [
    {
        id: 1,
        nome: teste1,
        concluida: false
    },
    {
        id: 1,
        nome: teste1,
        concluida: false
    },
    {
        id: 1,
        nome: teste1,
        concluida: false
    },
]



function deletar(id) {
    let elementoParaDeletar = document.getElementById(id)
    elementoParaDeletar.remove()
}

function addTarefa() {
    // ler o campo 

    var campo = document.getElementById("inputTarefa")
    var nomeTarefa = campo.value
    document.getElementById("inputTarefa").value = ""
    // se o campo for vazio dar um alerta
    if (nomeTarefa == "") {
        alert("Preencha o campo!")
    } else {
        var elementoCriado = construirElemento(contadorDeId, nomeTarefa)
        let tarefa = {
            id: contadorDeId,
            texto: nomeTarefa,
            concluida: false
        }
        document.getElementById("areaLista").innerHTML += elementoCriado
        contadorDeId++
        campo.value = ""
    }
    // inserir na lista
}

function marcarTarefa(id) {
    if (id == "" || id == null || id == undefined) {
        alert("Não pode usar sem o id")
    }
    let elemento = document.getElementById(id)
    let classeDeEstilo = elemento.getAttribute("class")
    let icone = document.getElementById(`icone_${id}`)

    if (classeDeEstilo == "item") {
        elemento.classList.add("clicado")
        icone.classList.remove("mdi-circle-outline")
        icone.classList.add("mdi-check-circle")
    } else {
        elemento.classList.remove("clicado")
        icone.classList.remove("mdi-check-circle")
        icone.classList.add("mdi-circle-outline")
    }
}