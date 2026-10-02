let tarefaId = 1
let tarefaAtual
const tarefas = []


function apresentarErroNota () {
    erroNotaVazia[0].style.display = 'flex'
    erroNotaVazia[1].style.display = 'flex'
}

function esconderErroNota () {
    erroNotaVazia[0].style.display = 'none'
    erroNotaVazia[1].style.display = 'none'    
}

function criarNota(notaDescricao, nota, tarefa, notas) {
    nota.notaDescricao = notaDescricao

    if (notaDescricao === '') {
        apresentarErroNota()
        return
    }

    nota.notaId = tarefa.nextNotaId

    const tempo = pegarTempo()

    nota.notaData = tempo.data
    nota.notaHora = tempo.hora

    notas.push(nota)
    tarefa.nextNotaId++
}

function montarTarefa(titulo, prioridade, notaDescricao) {
    const tarefa = {}

    tarefa.tarefaId = tarefaId
    tarefa.titulo = titulo
    tarefa.prioridade = prioridade

    const status = 'Novo'
    tarefa.status = status
    
    const tempo = pegarTempo()
    tarefa.tarefaData = tempo.data
    tarefa.tarefaHora = tempo.hora

    tarefas.push(tarefa)
    tarefaId++

    const notas = []
    const nota = {}

    tarefa.nextNotaId = 1
    tarefa.notas = notas
    
    if (escolhaCadastroNota) {
        criarNota(notaDescricao, nota, tarefa, notas)
    }

    return tarefa
}

function exibirTarefa(tarefa, listaDestino){
    const linha = document.createElement('div')
    linha.classList.add('linha_tarefa')
    
    const id = document.createElement('span')
    id.classList.add('id_tarefa')

    const titulo = document.createElement('span')
    titulo.classList.add('titulo_tarefa')

    const prioridade = document.createElement('span')
    prioridade.classList.add('prioridade_tarefa')

    const status = document.createElement('span')
    status.classList.add('status_tarefa')

    const acoes = document.createElement('div')

    const editar = document.createElement('button')
    editar.textContent = "✎"
    editar.classList.add('botao_editar')
    editar.botaoId = tarefa.tarefaId
    acoes.appendChild(editar)

    const excluir = document.createElement('button')
    excluir.textContent = "✕"
    excluir.classList.add('botao_excluir')
    excluir.botaoId = tarefa.tarefaId
    acoes.appendChild(excluir)

    acoes.classList.add('acoes_tarefa')

    id.textContent = tarefa.tarefaId
    titulo.textContent = tarefa.titulo
    prioridade.textContent = tarefa.prioridade
    status.textContent = tarefa.status

    linha.appendChild(id)
    linha.appendChild(titulo)
    linha.appendChild(prioridade)
    linha.appendChild(status)
    linha.appendChild(acoes)

    linha.id = tarefa.tarefaId

    listaDestino.appendChild(linha)

    editar.addEventListener ('click', (event) => {
        const tarefaEncontrada = tarefas.find((tarefa) => { 
            return tarefa.tarefaId === event.currentTarget.botaoId
        })

        tarefaAtual = tarefaEncontrada
        nomeTarefa[1].value = tarefaEncontrada.titulo
        prioridadeTarefa[1].value = tarefaEncontrada.prioridade
        statusTarefaEdicao.value = tarefaEncontrada.status
        
        dataCriacaoTarefa.textContent = `Tarefa criada em ${tarefaEncontrada.tarefaData} às ${tarefaEncontrada.tarefaHora}.`
        
        salvarEdicao.botaoId = tarefaEncontrada.tarefaId

        exibirNotas(tarefaAtual)

        tarefaCadastradaModal.style.display = 'flex'
        
        tarefaCadastradaModal.classList.add('fade-in')

        tarefaCadastradaModal.addEventListener('animationend', (event) => {
            tarefaCadastradaModal.classList.remove('fade-in')
        }, {once: true})
    })

    excluir.addEventListener ('click', (event) => {
        const indiceTarefa = tarefas.findIndex((tarefa) => {
            return tarefa.tarefaId === event.currentTarget.botaoId
        })

        tarefas.splice(indiceTarefa, 1)

        reordenarListas(tarefas)
    })
}

function exibirNotas(tarefa) {
    historicoNotas.innerHTML = ''

    const notas = tarefa.notas;

    for (let i = notas.length - 1; i >= 0; i--) {
        const nota = notas[i];

        const notaContainer = document.createElement('div')
        notaContainer.classList.add('container_menor','container_menor_nota')

        const expandirNota = document.createElement('button')

        const infoDataNota = document.createElement('span')
        infoDataNota.textContent = `Nota criada em: ${nota.notaData} às ${nota.notaHora}`
        infoDataNota.style.borderBottom = '2px solid var(--cor-destaque)'

        expandirNota.textContent = `▼`
        expandirNota.classList.add('botao_expansao','expandir_nota')

        const notaImpressa = document.createElement('div')
        notaImpressa.classList.add('nota')

        const notaTexto = document.createElement('span')
        notaTexto.textContent = nota.notaDescricao

        notaImpressa.appendChild(notaTexto)

        notaContainer.appendChild(expandirNota)
        notaContainer.appendChild(infoDataNota)
        notaContainer.appendChild(notaImpressa)

        historicoNotas.appendChild(notaContainer)

        expandirNota.addEventListener('click', (event) => {
            if (notaImpressa.style.height ==  '0px' || notaImpressa.style.height === '') {
                notaImpressa.style.height = `${notaImpressa.scrollHeight}px`
                expandirNota.classList.add('aberta')
            } else {
                notaImpressa.style.height = '0px'
                expandirNota.classList.remove('aberta')
            }
        })
    }
}

function reordenarListas (tarefas) {

    const tarefasAbertas = tarefas.filter((tarefa) => {
        return tarefa.status !== 'Finalizado'
    })

    tarefasAbertas.sort((a, b) => a.tarefaId - b.tarefaId)

    const tarefasConcluidas = tarefas.filter((tarefa) => { 
        return tarefa.status === 'Finalizado'
    })

    tarefasConcluidas.sort((a, b) => a.tarefaId - b.tarefaId)

    const tarefasOrdenadas = [ ...tarefasAbertas, ...tarefasConcluidas]

    listaLinhasTarefas[0].innerHTML = ''
    listaLinhasTarefas[1].innerHTML = ''

    for (let i = 0; i < tarefasOrdenadas.length; i++) {
        const tarefaEncontrada = tarefasOrdenadas[i]
        let listaDestino

        if (tarefaEncontrada.status === 'Finalizado') {
            listaDestino = listaLinhasTarefas[1]
        } else {
            listaDestino = listaLinhasTarefas[0]
        }
        exibirTarefa(tarefaEncontrada, listaDestino)
    }
}

function salvarEdicaoTarefa (tarefaId) {
    tarefaAtual.titulo = nomeTarefa[1].value
    tarefaAtual.prioridade = prioridadeTarefa[1].value
    tarefaAtual.status = statusTarefaEdicao.value

    reordenarListas (tarefas)
}

salvarEdicao.addEventListener('click', () => {
    if (nomeTarefa[1].value === "") {
        erroSemTitulo[1].style.display = 'flex'
        return
    }
    salvarEdicaoTarefa(salvarEdicao.botaoId)

    fecharTarefaCadastradaModal()

    const tarefaSalvaMensagem = document.createElement('div')
    tarefaSalvaMensagem.classList.add('confirmacao','fade-in')

    const mensagemSalva = document.createElement('span')
    mensagemSalva.textContent = 'Alterações salvas com sucesso!'

    tarefaSalvaMensagem.appendChild(mensagemSalva)
    tarefaSalvaMensagem.style.display = 'flex'

    document.body.appendChild(tarefaSalvaMensagem)

    setTimeout(() => {
        tarefaSalvaMensagem.addEventListener('animationend', (event) => {
            tarefaSalvaMensagem.classList.remove('fade-in')
        }, {once: true})

        tarefaSalvaMensagem.classList.add('fade-out')

        tarefaSalvaMensagem.addEventListener('animationend', (event) => {
            if(event.animationName !== 'fadeOut') return

            tarefaSalvaMensagem.classList.remove('fade-out')
            tarefaSalvaMensagem.remove()
        }, {once: true})
    }, 4000)
})

for (let i = 0; i < nomeTarefa.length; i++) {
    nomeTarefa[i].addEventListener('click', () => {
        erroSemTitulo[i].style.display = 'none'
    })    
}

const tipoLista = [listaLinhasTarefas[0], listaLinhasTarefas[1]]

for (let i = 0; i < pesquisaTarefas.length; i++) {
    pesquisaTarefas[i].addEventListener('input', () => {
        const tituloPesquisado = pesquisaTarefas[i].value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')
        
        const linhasTarefas = tipoLista [i].querySelectorAll('.linha_tarefa')
    
        for (let ii = 0; ii < linhasTarefas.length; ii++) {
            const tituloEncontrado = linhasTarefas[ii].querySelector('.titulo_tarefa').textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')

            if (tituloEncontrado.includes(tituloPesquisado)) {
                linhasTarefas[ii].style.display = ''
            } else {
                linhasTarefas[ii].style.display = 'none'
            }
        }
    })
}
