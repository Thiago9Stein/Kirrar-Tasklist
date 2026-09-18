function cadastroNotaInicial () {
    let escolhaCadastroNota = false
    novaNota[0].addEventListener ('click', () => {
        escolhaCadastroNota = true
    })
    cancelarNota[0].addEventListener('click', () => {
        escolhaCadastroNota = false
    })
    
    finalizarCadastroTarefa.addEventListener('click', () => {
        const titulo = nomeTarefa[0].value

        if (titulo === "") {
            erroSemTitulo.style.display = 'flex'
            return
        }

    const prioridade = prioridadeTarefa[0].value
    const notaDescricao = notaTarefa[0].value
    montarTarefa(titulo, prioridade, notaDescricao, escolhaCadastroNota)
    })
}

