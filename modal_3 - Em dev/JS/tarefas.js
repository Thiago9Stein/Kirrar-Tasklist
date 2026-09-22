let tarefaId = 1
const tarefas = []

function criarNota(notaDescricao, nota, tarefa, notas) {
    nota.notaDescricao = notaDescricao
    nota.notaId = tarefa.nextNotaId
    notas.push(nota)
    tarefa.nextNotaId++
    console.log("Nota criada")
}

function montarTarefa(titulo, prioridade, notaDescricao, escolhaCadastroNota) {
    const tarefa = {}

    tarefa.tarefaId = tarefaId
    tarefa.titulo = titulo
    tarefa.prioridade = prioridade

    const status = 'Novo'
    tarefa.status = status

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

function exibirTarefa(tarefa){
    const linha = document.createElement('div')
    linha.classList.add('linha_tarefa')

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

    titulo.textContent = tarefa.titulo
    prioridade.textContent = tarefa.prioridade
    status.textContent = tarefa.status

    linha.appendChild(titulo)
    linha.appendChild(prioridade)
    linha.appendChild(status)
    linha.appendChild(acoes)

    linha.id = tarefa.tarefaId

    tarefasAbertas.appendChild(linha)

    editar.addEventListener ('click', (event) => {
        const tarefaEncontrada = tarefas.find((tarefa) => { 
            return tarefa.tarefaId === event.currentTarget.botaoId
        })
        nomeTarefa[1].value = tarefaEncontrada.titulo
        prioridadeTarefa[1].value = tarefaEncontrada.prioridade
        statusTarefaEdicao.value = tarefaEncontrada.status
        salvarEdicao.botaoId = tarefaEncontrada.tarefaId
        tarefaCadastradaModal.style.display = 'flex'
    })

    excluir.addEventListener ('click', (event) => {
        const indiceTarefa = tarefas.findIndex((tarefa) => {
            return tarefa.tarefaId === event.currentTarget.botaoId
        })
        tarefas.splice(indiceTarefa, 1)
        linha.remove()
    })
}

function salvarEdicaoTarefa (tarefaId) {
    const tarefaEncontrada = tarefas.find((tarefa) => { 
        return tarefa.tarefaId === tarefaId
    })

    tarefaEncontrada.titulo = nomeTarefa[1].value
    tarefaEncontrada.prioridade = prioridadeTarefa[1].value
    tarefaEncontrada.status = statusTarefaEdicao.value

    const linha = document.getElementById(tarefaId)

    linha.querySelector('.titulo_tarefa').textContent = tarefaEncontrada.titulo
    linha.querySelector('.prioridade_tarefa').textContent = tarefaEncontrada.prioridade
    linha.querySelector('.status_tarefa').textContent = tarefaEncontrada.status

    if (statusTarefaEdicao.value === 'Finalizado') {
        tarefasConcluidas.appendChild(linha)
    } else {
        tarefasAbertas.appendChild(linha)
    }
}

salvarEdicao.addEventListener('click', () => {
    if (nomeTarefa[1].value === "") {
        erroSemTitulo[1].style.display = 'flex'
        return
    }
    salvarEdicaoTarefa(salvarEdicao.botaoId)

    tarefaCadastradaModal.style.display = 'none'

    const tarefaSalvaMensagem = document.createElement('div')
    tarefaSalvaMensagem.classList.add('confirmacao')

    const mensagemSalva = document.createElement('span')
    mensagemSalva.textContent = 'Alterações salvas com sucesso!'

    tarefaSalvaMensagem.appendChild(mensagemSalva)
    tarefaSalvaMensagem.style.display = 'flex'

    document.body.appendChild(tarefaSalvaMensagem)

    setTimeout(() => {
        tarefaSalvaMensagem.remove()
    }, 4000)
})

for (let i = 0; i < nomeTarefa.length; i++) {
    nomeTarefa[i].addEventListener('click', () => {
        erroSemTitulo[i].style.display = 'none'
    })    
}

for (let i = 0; i < pesquisaTarefas.length; i++) {
    pesquisaTarefas[i].addEventListener('input', () => {
        const tituloPesquisado = pesquisaTarefas[i].value
    })

    const tarefaEncontrada = resultadoPesquisa.find((tarefa) => {
        return linha.id == tarefa.tarefaId
    })

    if (tarefaEncontrada) {
        linha.style.display = 'flex'
    } else {
        linha.style.display = 'none'
    }
}
