function fecharModalExportacao () {
    exportacaoModal.classList.add('fade-out')

    exportacaoModal.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return

        exportacaoModal.classList.remove('fade-out')
        exportacaoModal.style.display = 'none'
    }, {once: true})
}

fecharExportacao.addEventListener('click', (event) => {
    fecharModalExportacao()
})

exportacaoModal.addEventListener('click', (event) => {
    if (event.target === exportacaoModal) {
        fecharModalExportacao()
    }
})

exportar.addEventListener('click', (event) => {
    const dadosExportar = {tarefas}

    const arquivo = new Blob([JSON.stringify(dadosExportar)], {
        type: 'application/json'
    })

    const urlDownload = URL.createObjectURL(arquivo)

    const a = document.createElement('a')

    a.href = urlDownload
    a.download = 'tarefas.json'

    document.body.appendChild(a)

    a.click()

    a.remove()

    URL.revokeObjectURL(urlDownload)
})

importar.addEventListener('click', (event) => {
    const i = document.createElement('input')
    i.type = 'file'
    i.accept = '.json'

    i.addEventListener('change', async (event) => {
        if (!i.files[0]) return

        const file = i.files[0]
        let texto
        let dadosImportados

        try {
            texto = await file.text()
            dadosImportados = JSON.parse(texto)

            if (!Array.isArray(dadosImportados.tarefas)) {
                alert('Erro: Arquivo inválido!')
                return
            }

            for (let i = 0; i < dadosImportados.tarefas.length; i++) {
                const tarefa = dadosImportados.tarefas[i]

                if (tarefa === null || typeof tarefa !== 'object') {
                    alert('Erro: Arquivo inválido!')
                    return
                }

                if (!Number.isFinite(tarefa.tarefaId) ||
                typeof tarefa.titulo !== 'string' ||
                typeof tarefa.status !== 'string' ||
                typeof tarefa.prioridade !== 'string' ||
                !Array.isArray(tarefa.notas)) {
                    alert('Erro: Arquivo inválido!')
                    return
                }

                const notas = tarefa.notas

                for (let n = 0; n < notas.length; n++) {
                    const nota = notas[n]

                    if (nota === null || typeof nota !== 'object') {
                        alert('Erro: Arquivo inválido!')
                        return
                    }

                    if (!Number.isFinite(nota.notaId) ||
                    typeof nota.notaDescricao !== 'string') {
                       alert('Erro: Arquivo inválido!')
                       return 
                    }
                }
            }
            
        } catch(erro) {
            alert('Erro: Arquivo inválido!')
            return
        }

        for (let t = 0; t < dadosImportados.tarefas.length; t++) {
            const tarefa = dadosImportados.tarefas[t]

            tarefa.tarefaId = tarefaId
            tarefaId++

            tarefas.push(tarefa)
        }

        salvarTarefas()
        localStorage.setItem('tarefaId', tarefaId)
        reordenarListas(tarefas)
        
        confirmacaoImportacao.classList.add('fade-in')
        confirmacaoImportacao.style.display = 'flex'

        setTimeout(() => {
            confirmacaoImportacao.addEventListener('animationend', (event) => {
                confirmacaoImportacao.classList.remove('fade-in')
            }, {once: true})

            confirmacaoImportacao.classList.add('fade-out')

            confirmacaoImportacao.addEventListener('animationend', (event) => {
                if (event.animationName !== 'fadeOut') return

                confirmacaoImportacao.classList.remove('fade-out')
                confirmacaoImportacao.style.display = 'none'
            }, {once: true})

        }, 4000);

    })

    i.click()
})
