let tarefaId = 1
let tarefaAtual
const tarefas = []
const tarefasExcluir = []

/*Salvamento local das tarefas*/

const tarefasSalvas = localStorage.getItem('tarefas')

if (tarefasSalvas) {
    const tarefasCarregadas = JSON.parse(tarefasSalvas)

    tarefas.push(...tarefasCarregadas)
}

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const tarefaIdSalvo = localStorage.getItem('tarefaId')

if (tarefaIdSalvo) {
    tarefaId = Number(tarefaIdSalvo)
}

/*Fim do salvamento local*/

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

    if (notaDescricao.trim() === '') {
        apresentarErroNota()
        limparNotaCadastro()
        return
    }

    nota.notaId = tarefa.nextNotaId

    const tempo = pegarTempo()

    nota.notaData = tempo.data
    nota.notaHora = tempo.hora

    notas.push(nota)
    tarefa.nextNotaId++

    salvarTarefas()
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
    localStorage.setItem('tarefaId', tarefaId)

    const notas = []
    const nota = {}

    tarefa.nextNotaId = 1
    tarefa.notas = notas
    
    if (escolhaCadastroNota) {
        criarNota(notaDescricao, nota, tarefa, notas)
    }

    salvarTarefas()

    return tarefa
}

function exibirTarefa(tarefa, listaDestino){
    const linha = document.createElement('div')
    linha.classList.add('linha_tarefa')
    
    const check = document.createElement('span')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    check.appendChild(checkbox)

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
    acoes.appendChild(editar)

    const copiar = document.createElement('button')
    copiar.textContent = "❐"
    copiar.classList.add('botao_editar')
    acoes.appendChild(copiar)

    const excluir = document.createElement('button')
    excluir.textContent = "✕"
    excluir.classList.add('botao_excluir')
    acoes.appendChild(excluir)

    acoes.classList.add('acoes_tarefa')

    id.textContent = tarefa.tarefaId
    titulo.textContent = tarefa.titulo
    prioridade.textContent = tarefa.prioridade
    status.textContent = tarefa.status

    linha.appendChild(check)
    linha.appendChild(id)
    linha.appendChild(titulo)
    linha.appendChild(prioridade)
    linha.appendChild(status)
    linha.appendChild(acoes)

    linha.id = tarefa.tarefaId

    listaDestino.appendChild(linha)

    editar.addEventListener ('click', (event) => {
        tarefaAtual = tarefa

        nomeTarefa[1].value = tarefa.titulo
        prioridadeTarefa[1].value = tarefa.prioridade
        statusTarefaEdicao.value = tarefa.status
        
        dataCriacaoTarefa.textContent = `Tarefa criada em ${tarefaAtual.tarefaData} às ${tarefaAtual.tarefaHora}.`

        exibirNotas(tarefaAtual)

        tarefaCadastradaModal.style.display = 'flex'
        
        tarefaCadastradaModal.classList.add('fade-in')

        tarefaCadastradaModal.addEventListener('animationend', (event) => {
            tarefaCadastradaModal.classList.remove('fade-in')
        }, {once: true})
    })

    copiar.addEventListener ('click', (event) => {
        tarefaAtual = tarefa

        confirmarCopiaModal.classList.add('fade-in')
        confirmarCopiaModal.style.display = 'flex'

        confirmarCopiaModal.addEventListener('animationend', (event) => {
            confirmarCopiaModal.classList.remove('fade-in')
        }, {once: true})
    })

    excluir.addEventListener ('click', (event) => {
        tarefaAtual = tarefa

        confirmarExclusaoTarefaModal.classList.add('fade-in')
        confirmarExclusaoTarefaModal.style.display = 'flex'

        confirmarExclusaoTarefaModal.addEventListener('animationend', (event) => {
            if (event.animationName !== 'fade-in') return

            confirmarExclusaoTarefa.classList.remove('fade-in')
        }, {once: true})
    })

    checkbox.addEventListener ('change', () => {
        alternarCheck(tarefa, checkbox)
    })
}

confirmarCopia.addEventListener('click', (event) => {
    const copiaTarefa = structuredClone(tarefaAtual)
    
    copiaTarefa.tarefaId = tarefaId
    tarefaId++

    tarefas.push(copiaTarefa)

    salvarTarefas()
    localStorage.setItem('tarefaId', tarefaId)

    reordenarListas(tarefas)
    buscarDadosTarefas(tarefas)
    fecharConfirmarCopia()
})

function alternarCheck (tarefa, checkbox) {
    const idAtual = tarefa.tarefaId

    if (checkbox.checked) {
        if (!tarefasExcluir.includes(idAtual)) {
            tarefasExcluir.push(idAtual)
        }

    } else {
        const indiceTarefa = tarefasExcluir.findIndex(id => id === idAtual)

        if (indiceTarefa !== -1) {
            tarefasExcluir.splice(indiceTarefa, 1)
        }
    }
    alternarBotaoExclusaoLote()
}

excluirTudo.addEventListener('click', (event) => {
    confirmarExclusaoLoteModal.classList.add('fade-in')
    confirmarExclusaoLoteModal.style.display = 'flex'

    confirmarExclusaoLoteModal.addEventListener('animationend', (event) => {
        confirmarExclusaoLoteModal.classList.remove('fade-in')
    }, {once: true})
})

confirmarExclusaoLote.addEventListener('click', (event) => {
    for (let i = 0; i < tarefasExcluir.length; i++) {
        const indiceTarefa = tarefas.findIndex(tarefa => tarefa.tarefaId === tarefasExcluir[i])
        if (indiceTarefa !== -1) {
            tarefas.splice(indiceTarefa, 1)
        }
    }
    salvarTarefas()
    reordenarListas(tarefas)
    buscarDadosTarefas(tarefas)
    
    tarefasExcluir.length = 0

    alternarBotaoExclusaoLote()
    fecharExclusaoLote()
})

for (let i = 0; i < selectTarefas.length; i++) {
    const checkboxCabecalho = selectTarefas[i].querySelector('input[type="checkbox"]')

    checkboxCabecalho.addEventListener('change', (event) => {
        const linhasTarefas = listaLinhasTarefas[i].querySelectorAll('.linha_tarefa')

        for (let l = 0; l < linhasTarefas.length; l++) {
            const checkboxLinha = linhasTarefas[l].querySelector('input[type="checkbox"]')
            const tarefaEncontrada = tarefas.find(tarefa => tarefa.tarefaId == linhasTarefas[l].id)

            if (checkboxCabecalho.checked) {
                checkboxLinha.checked = true
            } else {
                checkboxLinha.checked = false
            }
            alternarCheck(tarefaEncontrada, checkboxLinha)
        }
    })
}

confirmarExclusaoTarefa.addEventListener ('click', (event) => {
    const indiceTarefa = tarefas.indexOf(tarefaAtual)

    if (indiceTarefa === -1) {
        return
    }

    tarefas.splice(indiceTarefa, 1)

    salvarTarefas()
    reordenarListas(tarefas)
    buscarDadosTarefas(tarefas)

    fecharConfirmarExclusao()
})

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

    const tarefasAbertasPesquisadas = tarefas.filter((tarefa) => {
        return tarefa.status !== 'Finalizado'
    })

    tarefasAbertasPesquisadas.sort((a, b) => a.tarefaId - b.tarefaId)

    const tarefasConcluidasPesquisadas = tarefas.filter((tarefa) => { 
        return tarefa.status === 'Finalizado'
    })

    tarefasConcluidasPesquisadas.sort((a, b) => a.tarefaId - b.tarefaId)

    const tarefasOrdenadas = [ ...tarefasAbertasPesquisadas, ...tarefasConcluidasPesquisadas]

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

    const listaAbertasAberta = tarefasAbertas.style.height !== '0px' && tarefasAbertas.style.height !== ''
    const listaConcluidasAberta = tarefasConcluidas.style.height !== '0px' && tarefasConcluidas.style.height !== ''

    if (listaAbertasAberta) {
        const alturaAtual = tarefasAbertas.offsetHeight
        tarefasAbertas.style.height = 'auto'
        const novaAltura = tarefasAbertas.scrollHeight

        tarefasAbertas.style.height = `${alturaAtual}px`

        requestAnimationFrame(() => {
            tarefasAbertas.style.height = `${novaAltura}px`
        })
    }

    if (listaConcluidasAberta) {
        const alturaAtual = tarefasConcluidas.offsetHeight
        tarefasConcluidas.style.height = 'auto'
        const novaAltura = tarefasConcluidas.scrollHeight

        tarefasConcluidas.style.height = `${alturaAtual}px`

        requestAnimationFrame(() => {
            tarefasConcluidas.style.height = `${novaAltura}px`
        })
    }

}

function salvarEdicaoTarefa () {
    tarefaAtual.titulo = nomeTarefa[1].value
    tarefaAtual.prioridade = prioridadeTarefa[1].value
    tarefaAtual.status = statusTarefaEdicao.value

    salvarTarefas()

    reordenarListas(tarefas)
    buscarDadosTarefas(tarefas)
    limparPesquisas()
}

salvarEdicao.addEventListener('click', () => {
    if (nomeTarefa[1].value.trim() === "") {
        erroSemTitulo[1].style.display = 'flex'
        limparTituloCadastro()
        return
    }
    salvarEdicaoTarefa()

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
        const textoPesquisado = normalizarTexto(pesquisaTarefas[i].value)
        
        const linhasTarefas = tipoLista [i].querySelectorAll('.linha_tarefa')
    
        for (let ii = 0; ii < linhasTarefas.length; ii++) {
            const idEncontrado = linhasTarefas[ii].querySelector('.id_tarefa').textContent
            const tituloEncontrado = normalizarTexto(linhasTarefas[ii].querySelector('.titulo_tarefa').textContent)
            const prioridadeEncontrada = normalizarTexto(linhasTarefas[ii].querySelector('.prioridade_tarefa').textContent)
            const statusEncontrado = normalizarTexto(linhasTarefas[ii].querySelector('.status_tarefa').textContent)
            
            if (tituloEncontrado.includes(textoPesquisado) || 
            idEncontrado.includes(textoPesquisado) ||
            prioridadeEncontrada.includes(textoPesquisado) ||
            statusEncontrado.includes(textoPesquisado)) {
                
                linhasTarefas[ii].style.display = ''
            } else {
                linhasTarefas[ii].style.display = 'none'
            }
        }
    })
}

reordenarListas(tarefas)

function limparPesquisas () {
    for (let i = 0; i < pesquisaTarefas.length; i++) {
        pesquisaTarefas[i].value = ''
    }
    reordenarListas(tarefas)
}

for (let n = 0; n < notaTarefa.length; n++) {
    notaTarefa[n].addEventListener('input', () => {
        caractContNota[n].textContent = `${notaTarefa[n].value.length}/500`
    })
}
