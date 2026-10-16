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

        if (titulo.trim() === '') {
            erroSemTitulo[0].style.display = 'flex'
            limparTituloCadastro()
            return
        }

        const prioridade = prioridadeTarefa[0].value
        const notaDescricao = notaTarefa[0].value

        if (escolhaCadastroNota === true && notaDescricao.trim() === '') {
            apresentarErroNota()
            limparNotaCadastro()
            return
        }

        const tarefaCriada = montarTarefa(titulo, prioridade, notaDescricao)

        reordenarListas(tarefas)

        finalizarCadastroTarefa.disabled = true
        fecharCadastroTarefaModal ()
    })
}

cadastroNotaInicial()
