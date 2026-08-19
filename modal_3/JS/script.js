/*Modal Lista*/

abrir_lista.addEventListener('click', () => {
    lista_modal.style.display = 'flex';
    conteudo_lista.style.display = 'flex';
    lista_elementos.innerHTML = '';

    fetch('https://sahabiteto.simob.com.br/v2/api/jira/sql-filters', {
        headers: {
            Authorization: 'Bearer 7f4082776a7fa5de42b4cbe0751fb993'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (dados) {
            dados.result.forEach(function(item) {
            const elemento = document.createElement('li');
            elemento.textContent = item.value;
            lista_elementos.appendChild(elemento);

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Excluir';
            botaoRemover.classList.add('botao_excluir');
            botaoRemover.addEventListener('click', () => {
                elemento.remove();
            });
            elemento.appendChild(botaoRemover);
        });
    });
});

fechar_lista.addEventListener('click', () => {
    lista_modal.style.display = 'none';
    conteudo_lista.style.display = 'none';
});

lista_modal.addEventListener('click', (event) => {
    if (event.target === lista_modal) {
        lista_modal.style.display = 'none';
        conteudo_lista.style.display = 'none';
    }
});

/*Fim do Modal Lista*/

/*Modal Simob*/

abrirSimob.addEventListener('click', () => {
    simob_modal.style.display = 'flex';
});

botaoAdm.addEventListener('click', () => {
    window.open('https://adm.simob.app', '_blank');
});

botaoDemo.addEventListener('click', () => {
    window.open('https://demonstracao.simob.app', '_blank');
});

botaoSimob.addEventListener('click', () => {
    window.open('https://simob.app', '_blank');
});

botaoHabiteto.addEventListener('click', () => {
    window.open('https://sahabiteto.simob.app/', '_blank');
});

botaoBasePropria.addEventListener('click', () => {
    window.open('https://dash.flexpro.com.br/', '_blank');
});

fecharSimob.addEventListener('click', () => {
    simob_modal.style.display = 'none';
});

simob_modal.addEventListener('click', (event) => {
    if (event.target === simob_modal) {
        simob_modal.style.display = 'none';
    }
});

/*Fim do Modal Simob*/

