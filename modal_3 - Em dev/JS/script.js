let intervalo
function pegarTempo () {
    const dataAtual = new Date().toLocaleDateString('pt-BR')
    const horaAtual = new Date().toLocaleTimeString('pt-BR')

    return {
        data: dataAtual,
        hora: horaAtual
    }
}

/*Modal Temas*/

abrirTemas.addEventListener('click', () => {
    temasModal.style.display = 'flex'
    temasModal.classList.add('fade-in')

    temasModal.addEventListener('animationend', (event) => {
        temasModal.classList.remove('fade-in')
    }, {once: true})
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

function fecharModalTemas () {
    clearInterval(intervalo)
    temasModal.classList.add('fade-out')

    temasModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        temasModal.classList.remove('fade-out')
        temasModal.style.display = 'none'
    }, {once: true})
}
fecharTemas.addEventListener('click', () => {
    fecharModalTemas()
})

temasModal.addEventListener('click', (event) => {
    if (event.target === temasModal) {
        fecharModalTemas()
    }
})

/*Fim do Modal Temas*/

/*Modal Tarefas*/

function esconderListaAbertas () {
    tarefasAbertas.style.display = 'none'
    expandirTarefasAbertas.textContent = 'Tarefas Abertas ▼'
}

function esconderListaConcluidas () {
    tarefasConcluidas.style.display = 'none'
    expandirTarefasConcluidas.textContent = 'Tarefas Concluídas ▼'
}

abrirTarefas.addEventListener('click', () => {
    tarefasModal.style.display = 'flex'
    tarefasModal.classList.add('fade-in')

    tarefasModal.addEventListener('animationend', (event) => {
        tarefasModal.classList.remove('fade-in')
    }, {once: true})
})

expandirTarefasAbertas.addEventListener('click', () => {

    if (tarefasAbertas.style.display !== 'flex') {
        tarefasAbertas.style.display = 'flex'
        expandirTarefasAbertas.textContent = 'Tarefas Abertas ▲'
    } else {
        esconderListaAbertas()
    }

})

expandirTarefasConcluidas.addEventListener('click', () => {

    if (tarefasConcluidas.style.display !== 'flex') {
        tarefasConcluidas.style.display = 'flex'
        expandirTarefasConcluidas.textContent = 'Tarefas Concluídas ▲'
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
    escolhaCadastroNota = false
}

function fecharCadastroTarefaModal () {
    clearInterval(intervalo)
    cadastroTarefaModal.classList.add('fade-out')

    cadastroTarefaModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        cadastroTarefaModal.classList.remove('fade-out')

        cadastroTarefaModal.style.display = 'none'
        limparCadastroModal()

    }, {once: true})
}

novaNota[0].addEventListener('click', () => {
    notaTarefa[0].style.display = 'block'
    novaNota[0].style.display = 'none'
    cancelarNota[0].style.display = 'block'
})

cancelarNota[0].addEventListener('click', () => {
    esconderErroNota ()
    limparNotaCadastro()
    alternarCancelarCadastro()
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
    novaNota[1].style.display = 'none'
    historicoNotas.style.display = 'none'

    cancelarNota[1].style.display = 'block'
    notaTarefa[1].style.display = 'block'
    salvarNotaEdicao.style.display = 'block'
})

notaTarefa[0].addEventListener('focus', (event) => {
    esconderErroNota ()
})

notaTarefa[1].addEventListener('focus', (event) => {
    esconderErroNota ()
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
    esconderErroNota ()
    limparNotaCadastro()
    alternarCancelarCadastro()

    salvarNotaEdicao.style.display = 'none'
    historicoNotas.style.display = 'flex'
})


function fecharTarefaCadastradaModal () {
    clearInterval(intervalo)
    tarefaCadastradaModal.classList.add('fade-out')

    tarefaCadastradaModal.addEventListener('animationend', (event) => {
        if(event.animationName !== 'fadeOut') return

        tarefaCadastradaModal.classList.remove('fade-out')
        tarefaCadastradaModal.style.display = 'none'

        limparNotaCadastro()
        alternarCancelarCadastro()

        historicoNotas.style.display = 'flex'
        salvarNotaEdicao.style.display = 'none'
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

/*Fim das tarefas*/

/*cafe*/

abrirCafe.addEventListener('click', (event) => {
    cafeModal.style.display = 'flex'
    cafeModal.classList.add('fade-in')

    cafeModal.addEventListener('animationend', (event) => {
        cafeModal.classList.remove('fade-in')
    }, {once: true})
})

const respostaCafe = document.createElement('span')
respostaCafe.classList.add('respostaCafe')

function apresentarRespostaCafe (respostaCafeEscolhida){
    let caractereAtual = 0
        
    intervalo = setInterval(() => {
        cafeModal.classList.remove('tremendo')
        void cafeModal.offsetWidth
        cafeModal.classList.add('tremendo')

        let caractereRecebido = respostaCafeEscolhida[caractereAtual]

        respostaCafe.textContent += caractereRecebido

        caractereAtual++

        if (caractereAtual >= respostaCafeEscolhida.length) {
            clearInterval(intervalo)
        }
    }, 200);
    
    cafeModal.addEventListener('animationend', (event) => {
        cafeModal.classList.remove('tremendo')
    })
}

calcularCafe.addEventListener('click', (event) => {
    clearInterval(intervalo)

    respostaCafe.textContent = ''

    cafe = Math.floor(Math.random() * 10) + 1

    if (cafe === 1) {
        let respostaCafeEscolhida = 'Tem café!'
        apresentarRespostaCafe(respostaCafeEscolhida)

    } else {
        let respostaCafeEscolhida = 'Não tem café!'
        apresentarRespostaCafe(respostaCafeEscolhida)
    }

    conteudoCafe.appendChild(respostaCafe)

    cafeModal
})

function fecharModalCafe () {
    clearInterval(intervalo)
    respostaCafe.textContent = ''
    cafeModal.classList.add('fade-out')

    cafeModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        cafeModal.classList.remove('fade-out')
        cafeModal.style.display = 'none'

    }, {once: true})
}

fecharCafe.addEventListener('click', (event) => {
    fecharModalCafe()
})

cafeModal.addEventListener('click', (event) => {
    if (event.target === cafeModal) {
        fecharModalCafe()
    }
})
