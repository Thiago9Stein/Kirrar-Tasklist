abrirTarefas.addEventListener('click', () => {
    tarefasModal.style.display = 'flex'
    tarefasModal.classList.add('fade-in')

    tarefasModal.addEventListener('animationend', (event) => {
        tarefasModal.classList.remove('fade-in')
    }, {once: true})
})

abrirTemas.addEventListener('click', () => {
    temasModal.style.display = 'flex'
    temasModal.classList.add('fade-in')

    temasModal.addEventListener('animationend', (event) => {
        temasModal.classList.remove('fade-in')
    }, {once: true})
})

reset.addEventListener ('click', (event) => {
    modalKabum.classList.add('fade-in')
    modalKabum.style.display = 'flex'

    modalKabum.addEventListener('animationend', (event) => {
        modalKabum.classList.remove('fade-in')
    }, {once: true})
})

abrirCafe.addEventListener('click', (event) => {
    cafeModal.style.display = 'flex'
    cafeModal.classList.add('fade-in')

    cafeModal.addEventListener('animationend', (event) => {
        cafeModal.classList.remove('fade-in')
    }, {once: true})
})
