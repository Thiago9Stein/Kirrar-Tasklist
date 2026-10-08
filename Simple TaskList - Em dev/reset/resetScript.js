function resetarDados() {
    localStorage.removeItem('tarefas')
    localStorage.removeItem('tarefaId')
    location.reload()
}

function fecharModalKabum() {
    modalKabum.classList.add('fade-out')

    modalKabum.addEventListener('animationend', (event) => {
        if (event.animationName !== 'fadeOut') return
        modalKabum.classList.remove('fade-out')
        modalKabum.style.display = 'none'
    }, {once: true})
}

cancelarKabum.addEventListener ('click', (event) => {
    fecharModalKabum()
})

confirmarKabum.addEventListener ('click', (event) => {
    resetarDados()
})

modalKabum.addEventListener ('click', (event) => {
    if (event.target === modalKabum) {
        fecharModalKabum()
    }
})
