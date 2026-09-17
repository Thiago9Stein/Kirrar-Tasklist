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

/*Modal Temas*/

abrirTemas.addEventListener('click', () => {
    temas_modal.style.display = 'flex';
});

if (corFundoSalva) {
    document.documentElement.style.setProperty('--cor-fundo', corFundoSalva);
}

corFundo.value = corFundoSalva;

corFundo.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-fundo', corFundo.value);
    localStorage.setItem('cor-fundo', corFundo.value);
});
    
if (corFundoSalva) {
    document.documentElement.style.setProperty('--cor-fundo', corFundoSalva);
}

if (corFecharSalva) {
    document.documentElement.style.setProperty('--cor-fechar', corFecharSalva);
}

corFechar.value = corFecharSalva;

corFechar.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-fechar', corFechar.value);
    localStorage.setItem('cor-fechar', corFechar.value);
});

if (corDestaqueSalva) {
    document.documentElement.style.setProperty('--cor-destaque', corDestaqueSalva);
}

corDestaque.value = corDestaqueSalva;

corDestaque.addEventListener('change', () => {
    document.documentElement.style.setProperty('--cor-destaque', corDestaque.value);
    localStorage.setItem('cor-destaque', corDestaque.value);
});

restaurarTemaPadrao.addEventListener('click', () => {
    localStorage.removeItem('cor-fundo');
    localStorage.removeItem('cor-fechar');
    localStorage.removeItem('cor-destaque');

    location.reload();
});

fecharTemas.addEventListener('click', () => {
    temas_modal.style.display = 'none';
});

temas_modal.addEventListener('click', (event) => {
    if (event.target === temas_modal) {
        temas_modal.style.display = 'none';
    }
});

/*Fim do Modal Temas*/

/*Modal Tarefas*/

abrirTarefas.addEventListener('click', () => {
    tarefas_modal.style.display = 'flex';
});

expandirTarefasAbertas.addEventListener('click', () => {

    if (tarefasAbertas.style.display !== 'flex') {
        tarefasAbertas.style.display = 'flex';
        expandirTarefasAbertas.textContent = 'Tarefas Abertas ▲';
    } else {
        tarefasAbertas.style.display = 'none';
        expandirTarefasAbertas.textContent = 'Tarefas Abertas ▼';
    }

});

expandirTarefasConcluidas.addEventListener('click', () => {

    if (tarefasConcluidas.style.display !== 'flex') {
        tarefasConcluidas.style.display = 'flex';
        expandirTarefasConcluidas.textContent = 'Tarefas Concluídas ▲';
    } else {
        tarefasConcluidas.style.display = 'none';
        expandirTarefasConcluidas.textContent = 'Tarefas Concluídas ▼';
    }

});

fecharTarefas.addEventListener('click', () => {
    tarefas_modal.style.display = 'none'
})

tarefasModal.addEventListener('click', (event) => {
    if (event.target === tarefas_modal) {
        tarefas_modal.style.display = 'none';
    }
});

/*Cadastro de tarefa*/

novaTarefa.addEventListener('click', () => {
    cadastroTarefaModal.style.display = 'flex'
    dataCriacaoTarefa.textContent = `Data de criação: ${dataAtual}`;
    prioridadeTarefa[0].value = 'media'
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
    notaTarefa[0].style.display = 'none'
    notaTarefa[1].style.display = 'none'
    cancelarNota[0].style.display = 'none'
    cancelarNota[1].style.display = 'none'
    novaNota[0].style.display = 'block'
    novaNota[1].style.display = 'block'
}

novaNota[0].addEventListener('click', () => {
    notaTarefa[0].style.display = 'block'
    novaNota[0].style.display = 'none'
    cancelarNota[0].style.display = 'block'
})

cancelarNota[0].addEventListener('click', () => {
    limparNotaCadastro()
    alternarCancelarCadastro()
})

fecharCadastroTarefa.addEventListener('click', () => {
    limparNotaCadastro()
    limparTituloCadastro()
    alternarCancelarCadastro()
    cadastroTarefaModal.style.display = 'none'
})

cadastroTarefaModal.addEventListener('click', (event) =>{
    if (event.target === cadastroTarefaModal) {
        limparNotaCadastro()
        limparTituloCadastro()
        alternarCancelarCadastro()
        cadastroTarefaModal.style.display = 'none'
    }
})
