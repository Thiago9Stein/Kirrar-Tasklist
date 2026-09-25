/*Modal Temas*/

abrirTemas.addEventListener('click', () => {
    temas_modal.style.display = 'flex'
})

if (corFundoSalva) {
    document.documentElement.style.setProperty('--cor-fundo', corFundoSalva)
}

corFundo.value = corFundoSalva

corFundo.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-fundo', corFundo.value)
    localStorage.setItem('cor-fundo', corFundo.value)
})
    
if (corFundoSalva) {
    document.documentElement.style.setProperty('--cor-fundo', corFundoSalva)
}

if (corFecharSalva) {
    document.documentElement.style.setProperty('--cor-fechar', corFecharSalva)
}

corFechar.value = corFecharSalva

corFechar.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-fechar', corFechar.value)
    localStorage.setItem('cor-fechar', corFechar.value)
})

if (corDestaqueSalva) {
    document.documentElement.style.setProperty('--cor-destaque', corDestaqueSalva)
}

corDestaque.value = corDestaqueSalva

corDestaque.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-destaque', corDestaque.value)
    localStorage.setItem('cor-destaque', corDestaque.value)
})

restaurarTemaPadrao.addEventListener('click', () => {
    localStorage.removeItem('cor-fundo')
    localStorage.removeItem('cor-fechar')
    localStorage.removeItem('cor-destaque')

    location.reload()
})

fecharTemas.addEventListener('click', () => {
    temas_modal.style.display = 'none'
})

temas_modal.addEventListener('click', (event) => {
    if (event.target === temas_modal) {
        temas_modal.style.display = 'none'
    }
})

/*Fim do Modal Temas*/

/*Modal Tarefas*/

abrirTarefas.addEventListener('click', () => {
    tarefas_modal.style.display = 'flex'
})

expandirTarefasAbertas.addEventListener('click', () => {

    if (tarefasAbertas.style.display !== 'flex') {
        tarefasAbertas.style.display = 'flex'
        expandirTarefasAbertas.textContent = 'Tarefas Abertas ▲'
    } else {
        tarefasAbertas.style.display = 'none'
        expandirTarefasAbertas.textContent = 'Tarefas Abertas ▼'
    }

})

expandirTarefasConcluidas.addEventListener('click', () => {

    if (tarefasConcluidas.style.display !== 'flex') {
        tarefasConcluidas.style.display = 'flex'
        expandirTarefasConcluidas.textContent = 'Tarefas Concluídas ▲'
    } else {
        tarefasConcluidas.style.display = 'none'
        expandirTarefasConcluidas.textContent = 'Tarefas Concluídas ▼'
    }

})

fecharTarefas.addEventListener('click', () => {
    tarefas_modal.style.display = 'none'
})

tarefasModal.addEventListener('click', (event) => {
    if (event.target === tarefas_modal) {
        tarefas_modal.style.display = 'none'
    }
})

/*Cadastro de tarefa*/

novaTarefa.addEventListener('click', () => {
    cadastroTarefaModal.style.display = 'flex'
    dataCriacaoTarefa.textContent = `Data de criação: ${dataAtual}`
    prioridadeTarefa[0].value = 'Media'
})

function limparNotaCadastro () {
    notaTarefa[0].value = ""
    notaTarefa[1].value = ""
}

function limparTituloCadastro () {
    nomeTarefa[0].value = ""
    nomeTarefa[1].value = ""
}

function alternarCancelarCadastro () {
    for (let i = 0; i < notaTarefa.length; i++) {
        notaTarefa[i].style.display = 'none'
        cancelarNota[i].style.display = 'none'
        novaNota[i].style.display = 'block'
    }
}

function limparCadastroModal () {
    limparTituloCadastro()
    limparNotaCadastro()
    alternarCancelarCadastro()
}

novaNota[0].addEventListener('click', () => {
    notaTarefa[0].style.display = 'block'
    novaNota[0].style.display = 'none'
    cancelarNota[0].style.display = 'block'
})

cancelarNota[0].addEventListener('click', () => {
    limparNotaCadastro()
    alternarCancelarCadastro()
})

fecharCadastroTarefa.addEventListener('click', () => {
    limparNotaCadastro()
    limparTituloCadastro()
    alternarCancelarCadastro()

    cadastroTarefaModal.style.display = 'none'
})

cadastroTarefaModal.addEventListener('click', (event) =>{
    if (event.target === cadastroTarefaModal) {
        limparNotaCadastro()
        limparTituloCadastro()
        alternarCancelarCadastro()

        cadastroTarefaModal.style.display = 'none'
    }
})

novaNota[1].addEventListener('click', (event) => {
    novaNota[1].style.display = 'none'
    historicoNotas.style.display = 'none'

    cancelarNota[1].style.display = 'block'
    notaTarefa[1].style.display = 'block'
    salvarNotaEdicao.style.display = 'block'
})

salvarNotaEdicao.addEventListener('click', (event) => {
    const nota = {}
    const notaDescricao = notaTarefa[1].value

    criarNota(notaDescricao, nota, tarefaAtual, tarefaAtual.notas)
    limparNotaCadastro()
    alternarCancelarCadastro()

    exibirNotas(tarefaAtual)

    salvarNotaEdicao.style.display = 'none'
    historicoNotas.style.display = 'flex'
})

cancelarNota[1].addEventListener('click', (event) => {
    limparNotaCadastro()
    alternarCancelarCadastro()

    salvarNotaEdicao.style.display = 'none'
    historicoNotas.style.display = 'flex'
})

fecharTarefaCadastrada.addEventListener('click', (event) => {
    limparNotaCadastro()
    alternarCancelarCadastro()

    historicoNotas.style.display = 'flex'
    salvarNotaEdicao.style.display = 'none'
    tarefaCadastradaModal.style.display = 'none'
})

tarefaCadastradaModal.addEventListener('click', (event) => {
    if (event.target === tarefaCadastradaModal) {
        limparNotaCadastro()
        alternarCancelarCadastro()

        historicoNotas.style.display = 'flex'
        salvarNotaEdicao.style.display = 'none'
        tarefaCadastradaModal.style.display = 'none'
    }
})
let cafe

abrirCafe.addEventListener('click', (event) => {
    cafeModal.style.display = 'flex'
})

calcularCafe.addEventListener('click', (event) => {
    cafe = let numero = Math.floor(Math.random() * 10) + 1
    
})
