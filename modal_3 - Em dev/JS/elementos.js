const menu = document.getElementById('menu');

/*Modal Simob*/

const abrirSimob = document.getElementById('abrir_simob');
const simob_modal = document.getElementById('simob_modal');
const conteudo_simob = document.getElementById('conteudo_simob');
const botaoAdm = document.getElementById('botao_adm');
const botaoDemo = document.getElementById('botao_demo');
const botaoSimob = document.getElementById('botao_simob');
const botaoBasePropria = document.getElementById('botao_base_propria');
const botaoHabiteto = document.getElementById('botao_habiteto');
const fecharSimob = document.getElementById('fechar_simob');

/*Modal Temas*/

const abrirTemas = document.getElementById('abrir_temas');
const temas_modal = document.getElementById('temas_modal');
const conteudo_temas = document.getElementById('conteudo_temas');
const fecharTemas = document.getElementById('fechar_temas');
const corFundo = document.getElementById('cor_fundo');
const corFechar = document.getElementById('cor_fechar');
const corDestaque = document.getElementById('cor_destaque');
const corFundoSalva = localStorage.getItem('cor-fundo');
const corFecharSalva = localStorage.getItem('cor-fechar');
const corDestaqueSalva = localStorage.getItem('cor-destaque');
const restaurarTemaPadrao = document.getElementById('restaurar_tema_padrao');

/*Modal Tarefas*/

const abrirTarefas = document.getElementById('abrir_tarefas')
const tarefasModal = document.getElementById('tarefas_modal')
const conteudoTarefas = document.getElementById('conteudo_tarefas')
const novaTarefa = document.getElementById('nova_tarefa')
const fecharTarefas = document.getElementById('fechar_tarefas')
const expandirTarefasAbertas = document.getElementById('expandir_tarefas_abertas');
const expandirTarefasConcluidas = document.getElementById('expandir_tarefas_concluidas');
const tarefasAbertas = document.getElementById('tarefas_abertas');
const tarefasConcluidas = document.getElementById('tarefas_concluidas');

/*Cadastro de Tarefas*/

const cadastroTarefaModal = document.getElementById('cadastro_tarefa_modal');
const conteudoCadastroTarefa = document.getElementById('conteudo_cadastro_tarefa');
const fecharCadastroTarefa = document.getElementById('fechar_cadastro_tarefa');
const tarefaCadastradaModal = document.getElementById('tarefa_cadastrada_modal');
const tarefaCadastradaConteudo = document.getElementById('tarefa_cadastrada_conteudo');
const fecharTarefaCadastrada = document.getElementById('fechar_tarefa_cadastrada');

const nomeTarefa = [
    document.getElementById('nome_tarefa'),
    document.getElementById('nome_tarefa_edicao')
]
const prioridadeTarefa = [
    document.getElementById('prioridade_tarefa'),
    document.getElementById('prioridade_tarefa_edicao')
]
const novaNota = [
    document.getElementById('nova_nota'),
    document.getElementById('nova_nota_edicao')
];
const notaTarefa = [
    document.getElementById('nota_tarefa'),
    document.getElementById('nota_tarefa_edicao')
];
const finalizarCadastroTarefa = document.getElementById('finalizar_cadastro_tarefa');

const cancelarNota = [
    document.getElementById('cancelar_nota'),
    document.getElementById('cancelar_nota_edicao')
];

const dataAtual = new Date().toLocaleDateString('pt-BR');
const dataCriacaoTarefa = document.getElementById('data_criacao_tarefa');
