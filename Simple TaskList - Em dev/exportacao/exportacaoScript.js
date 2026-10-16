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
