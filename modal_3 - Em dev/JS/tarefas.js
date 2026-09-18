let tarefaId = 1
const tarefas = []

function criarNota(notaDescricao, nota, tarefa, notas) {
    nota.notaDescricao = notaDescricao
    nota.notaId = tarefa.nextNotaId
    notas.push(nota)
    tarefa.nextNotaId++
}

function montarTarefa(titulo, prioridade, notaDescricao, escolhaCadastroNota) {
    const tarefa = {}
    tarefa.tarefaId = tarefaId
    tarefa.titulo = titulo
    tarefa.prioridade = prioridade
    const status = 'novo'
    tarefa.status = status
    tarefas.push(tarefa)
    tarefaId++

    const notas = []
    const nota = {}
    tarefa.nextNotaId = 1
    tarefa.notas = notas
    
    if (escolhaCadastroNota) {
        criarNota(nota, tarefa, notas)
    }
}
