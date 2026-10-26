let intervalo

function pegarTempo () {
    const dataAtual = new Date().toLocaleDateString('pt-BR')
    const horaAtual = new Date().toLocaleTimeString('pt-BR')

    return {
        data: dataAtual,
        hora: horaAtual
    }
}

function normalizarTexto(texto) {
    return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
}

function esconderListaAbertas () {
    tarefasAbertas.style.height = '0px'
    setaAbertas.classList.remove('aberta')
}

function esconderListaConcluidas () {
    tarefasConcluidas.style.height = '0px'
    setaConcluidas.classList.remove('aberta')
}

function calcularTarefasAbertas (tarefas) {

    const tarefasQuantia = tarefas.filter((tarefa) => {
        return tarefa.status === 'Novo'
    })

    quantiaTarefasAbertas.textContent = `${tarefasQuantia.length}`
}


function calcularTarefasExecucao (tarefas) {
    const tarefasQuantia = tarefas.filter((tarefa) => {
        return tarefa.status === 'Executando'
    })

    quantiaTarefasExecucao.textContent = `${tarefasQuantia.length}`
}

function calcularTarefasFinalizadas(tarefas) {
    const tarefasQuantia = tarefas.filter((tarefa) => {
        return tarefa.status === 'Finalizado'
    })

    quanatiaTarefasFinalizadas.textContent = `${tarefasQuantia.length}`
}

function buscarDadosTarefas (tarefas) {
    quantiaTarefasTotais.textContent = `${tarefas.length}`
    calcularTarefasAbertas(tarefas)
    calcularTarefasExecucao(tarefas)
    calcularTarefasFinalizadas(tarefas)
}

expandirTarefasAbertas.addEventListener('click', () => {

    if (tarefasAbertas.style.height === '0px' || tarefasAbertas.style.height === '') {
        tarefasAbertas.style.height = `${tarefasAbertas.scrollHeight}px`
        setaAbertas.classList.add('aberta')
    } else {
       esconderListaAbertas()
    }

})

expandirTarefasConcluidas.addEventListener('click', () => {

    if (tarefasConcluidas.style.height === '0px' || tarefasConcluidas.style.height === '') {
        tarefasConcluidas.style.height = `${tarefasConcluidas.scrollHeight}px`
        setaConcluidas.classList.add('aberta')
    } else {
        esconderListaConcluidas()
    }

})

function fecharTarefasModal () {
    clearInterval(intervalo)
    tarefasModal.classList.add('fade-out')

    tarefasModal.addEventListener('animationend',(event) => {
        if (event.animationName !== 'fadeOut') return

        tarefasModal.classList.remove('fade-out')
        tarefasModal.style.display = 'none'
        esconderListaAbertas()
        esconderListaConcluidas()
        limparPesquisas()
    }, {once: true} )
}

fecharTarefas.addEventListener('click', () => {
    fecharTarefasModal()
})

tarefasModal.addEventListener('click', (event) => {
    if (event.target === tarefasModal) {
        fecharTarefasModal()
    }
})

/*Cadastro de tarefa*/

novaTarefa.addEventListener('click', () => {
    finalizarCadastroTarefa.disabled = false
    escolhaCadastroNota = false
    cadastroTarefaModal.style.display = 'flex'
    prioridadeTarefa[0].value = 'Media'

    cadastroTarefaModal.classList.add('fade-in')

    cadastroTarefaModal.addEventListener('animationend', (event) => {
        cadastroTarefaModal.classList.remove('fade-in')
    }, {once: true})
})

function limparNotaCadastro () {
    for (let i = 0; i < notaTarefa.length; i++){
        notaTarefa[i].value = ''
        caractContNota[i].textContent = '0/500'
        caractContNota[i].style.display = 'none'
    }
}

function limparTituloCadastro () {
    nomeTarefa[0].value = ""
    nomeTarefa[1].value = ""
}

function limparCadastroModal () {
    limparTituloCadastro()
    limparNotaCadastro()

    notaTarefa[0].style.display = 'none'
    escolhaCadastroNota = false
    caractContNota[0].style.display = none
}

function fecharCadastroTarefaModal () {
    clearInterval(intervalo)
    cadastroTarefaModal.classList.add('fade-out')

    cadastroTarefaModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        cadastroTarefaModal.classList.remove('fade-out')

        cadastroTarefaModal.style.display = 'none'
        limparCadastroModal()
        alternarEscolhaNotaInicial()
        limparPesquisas()
    }, {once: true})
}

novaNota[0].addEventListener('click', () => {
    notaTarefa[0].style.display = 'block'
    caractContNota[0].style.display = 'flex'
    novaNota[0].style.display = 'none'
    cancelarNota[0].style.display = 'block'
})

function alternarEscolhaNotaInicial () {
    notaTarefa[0].style.display = 'none'
    cancelarNota[0].style.display = 'none'
    novaNota[0].style.display = 'block'
}

cancelarNota[0].addEventListener('click', () => {
    esconderErroNota ()
    limparNotaCadastro()
    alternarEscolhaNotaInicial()
})

fecharCadastroTarefa.addEventListener('click', () => {
    fecharCadastroTarefaModal()
})

cadastroTarefaModal.addEventListener('click', (event) =>{
    if (event.target === cadastroTarefaModal) {
        fecharCadastroTarefaModal()
    }
})

/*Modal de edição de tarefa*/

novaNota[1].addEventListener('click', (event) => {
    esconderErroNota ()

    telaHistorico.classList.add('aberto')
    telaCadastroNota.classList.add('aberto')

    novaNota[1].style.display = 'none'

    caractContNota[1].style.display = 'flex'
    cancelarNota[1].style.display = 'block'
    salvarNotaEdicao.style.display = 'block'
})

notaTarefa[0].addEventListener('focus', (event) => {
    esconderErroNota ()
})

notaTarefa[1].addEventListener('focus', (event) => {
    esconderErroNota ()
})

salvarNotaEdicao.addEventListener('click', (event) => {
    const notaDescricao = notaTarefa[1].value

    if (notaDescricao.trim() === '') {
        erroNotaVazia[1].style.display = 'flex'
        limparNotaCadastro()
        return
    }

    const nota = {}

    criarNota(notaDescricao, nota, tarefaAtual, tarefaAtual.notas)

    limparNotaCadastro()
    
    exibirNotas(tarefaAtual)

    salvarNotaEdicao.classList.add('aberto')

    salvarNotaEdicao.addEventListener('animationend', (event) => {
        salvarNotaEdicao.style.display = 'none'
        salvarNotaEdicao.classList.remove('aberto')
    }, {once: true})

    cancelarNotaEdicao()
})

function cancelarNotaEdicao() {
    esconderErroNota()
    limparNotaCadastro()
    telaHistorico.classList.remove('aberto')
    telaCadastroNota.classList.remove('aberto')

    cancelarNota[1].style.display = 'none'

    novaNota[1].style.display = 'flex'
    historicoNotas.style.display = 'flex'
}

cancelarNota[1].addEventListener('click', (event) => {
    cancelarNotaEdicao()
})

cancelarExclusaoTarefa.addEventListener ('click', (event) => {
    fecharConfirmarExclusao()
})

confirmarExclusaoTarefaModal.addEventListener ('click', (event) => {
    if (event.target === confirmarExclusaoTarefaModal) {
        fecharConfirmarExclusao()
    }
})

cancelarExclusaoLote.addEventListener ('click', (event) => {
    fecharExclusaoLote()
})

confirmarExclusaoLoteModal.addEventListener('click', (event) => {
    if(event.target === confirmarExclusaoLoteModal) {
        fecharExclusaoLote()
    }
})

cancelarCopia.addEventListener('click', (event) => {
    fecharConfirmarCopia()
})

confirmarCopiaModal.addEventListener('click', (event) => {
    if (event.target === confirmarCopiaModal) {
        fecharConfirmarCopia()
    }
})

function alternarBotaoExclusaoLote () {
    if (tarefasExcluir.length >= 1) {
        excluirTudo.style.display = 'block'
    } else {
        excluirTudo.style.display = 'none'
    }
}

function fecharConfirmarCopia () {
    confirmarCopiaModal.classList.add('fade-out')

    confirmarCopiaModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        confirmarCopiaModal.classList.remove('fade-out')
        confirmarCopiaModal.style.display = 'none'

        limparPesquisas()
    }, {once: true})
}

function fecharConfirmarExclusao () {
    confirmarExclusaoTarefaModal.classList.add('fade-out')

    confirmarExclusaoTarefaModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        confirmarExclusaoTarefaModal.classList.remove('fade-out')
        confirmarExclusaoTarefaModal.style.display = 'none'

        limparPesquisas()
    }, {once: true})
}

function fecharExclusaoLote () {
    confirmarExclusaoLoteModal.classList.add('fade-out')

    confirmarExclusaoLoteModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return
        
        confirmarExclusaoLoteModal.classList.remove('fade-out')
        confirmarExclusaoLoteModal.style.display = 'none'

        limparPesquisas()
    }, {once: true})
}

function fecharTarefaCadastradaModal () {
    clearInterval(intervalo)
    tarefaCadastradaModal.classList.add('fade-out')

    tarefaCadastradaModal.addEventListener('animationend', (event) => {
        if(event.animationName !== 'fadeOut') return

        tarefaCadastradaModal.classList.remove('fade-out')
        tarefaCadastradaModal.style.display = 'none'

        cancelarNotaEdicao()
        limparPesquisas()
    }, {once: true})
}

fecharTarefaCadastrada.addEventListener('click', (event) => {
    fecharTarefaCadastradaModal()
})

tarefaCadastradaModal.addEventListener('click', (event) => {
    if (event.target === tarefaCadastradaModal) {
        fecharTarefaCadastradaModal()
    }
})
