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
