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
    console.log("Tarefa cadastrada")
    return tarefa
}

function exibirTarefa(tarefa){
    const linha = document.createElement('div')
    linha.classList.add('linha_tarefa')
    const titulo = document.createElement('span')
    const prioridade = document.createElement('span')
    const status = document.createElement('span')

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

    tarefasAbertas.appendChild(linha)

    editar.addEventListener ('click', (event) => {
        const tarefaEncontrada = tarefas.find((tarefa) => { 
            return tarefa.tarefaId === event.currentTarget.botaoId
        })
        nomeTarefa[1].value = tarefaEncontrada.titulo
        if (nomeTarefa[1].value === "") {
            erroSemTitulo.style.display = 'flex'
            return
        }
        prioridadeTarefa[1].value = tarefaEncontrada.prioridade
        statusTarefaEdicao.value = tarefaEncontrada.status
        salvarEdicao.botaoId = tarefaEncontrada.tarefaId
        tarefaCadastradaModal.style.display = 'flex'
    })
}

function salvarEdicaoTarefa (tarefa) {
    const tarefaEncontrada = tarefas.find((tarefa) => { 
        return tarefa.tarefaId === event.currentTarget.botaoId
    })
    tarefaEncontrada.titulo = nomeTarefa[1].value
    tarefaEncontrada.prioridade = prioridadeTarefa[1].value
    tarefaEncontrada.status = statusTarefaEdicao.value
}

salvarEdicao.addEventListener('click', (event) => {
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
    }, 5000)
})
