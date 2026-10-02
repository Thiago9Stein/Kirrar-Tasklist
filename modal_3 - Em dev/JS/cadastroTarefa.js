let escolhaCadastroNota = false

function cadastroNotaInicial () {
    
    novaNota[0].addEventListener ('click', () => {
        escolhaCadastroNota = true
    })

    cancelarNota[0].addEventListener('click', () => {
        escolhaCadastroNota = false
    })
    
    finalizarCadastroTarefa.addEventListener('click', () => {
        const titulo = nomeTarefa[0].value

        if (titulo === "") {
            erroSemTitulo[0].style.display = 'flex'
            return
        }

        const prioridade = prioridadeTarefa[0].value
        const notaDescricao = notaTarefa[0].value

        if (escolhaCadastroNota === true && notaDescricao === '') {
            apresentarErroNota()
            return
        }

        const tarefaCriada = montarTarefa(titulo, prioridade, notaDescricao)

        reordenarListas(tarefas)

        finalizarCadastroTarefa.disabled = true
        fecharCadastroTarefaModal ()
    })
}

cadastroNotaInicial()
