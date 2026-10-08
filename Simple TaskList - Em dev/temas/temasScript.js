/*Modal Temas*/

/*Cor fundo*/

if (corFundoSalva) {
    document.documentElement.style.setProperty('--cor-fundo', corFundoSalva)
}

corFundo.value = corFundoSalva

corFundo.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-fundo', corFundo.value)
    localStorage.setItem('cor-fundo', corFundo.value)
})
    
/*Cor Confirmar*/

if (corConfirmarSalva) {
    document.documentElement.style.setProperty('--cor-confirmar', corConfirmarSalva)
}

corConfirmar.value = corConfirmarSalva

corConfirmar.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-confirmar', corConfirmar.value)
    localStorage.setItem('cor-confirmar', corConfirmar.value)
})

/*Cor Fechar*/

if (corFecharSalva) {
    document.documentElement.style.setProperty('--cor-fechar', corFecharSalva)
}

corFechar.value = corFecharSalva

corFechar.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-fechar', corFechar.value)
    localStorage.setItem('cor-fechar', corFechar.value)
})

/*Cor Destaque*/

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
    localStorage.removeItem('cor-confirmar')
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
