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

        confirmacaoCadastroTarefa.classList.add('fade-in')
        confirmacaoCadastroTarefa.style.display = 'flex'

        setTimeout(() => {
            confirmacaoCadastroTarefa.addEventListener('animationend', (event) => {
            confirmacaoCadastroTarefa.classList.remove('fade-in')
        }, {once: true})

        confirmacaoCadastroTarefa.classList.add('fade-out')

        confirmacaoCadastroTarefa.addEventListener('animationend', (event) => {
            if(event.animationName !== 'fadeOut') return

            confirmacaoCadastroTarefa.classList.remove('fade-out')
            confirmacaoCadastroTarefa.style.display = 'none'
        }, {once: true})
    }, 4000)

        finalizarCadastroTarefa.disabled = true
        buscarDadosTarefas(tarefas)
        fecharCadastroTarefaModal()
    })
}

cadastroNotaInicial()
