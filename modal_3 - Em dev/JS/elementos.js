const menu = document.getElementById('menu')

/*Modal Temas*/

const abrirTemas = document.getElementById('abrir_temas')
const temas_modal = document.getElementById('temas_modal')
const conteudo_temas = document.getElementById('conteudo_temas')
const fecharTemas = document.getElementById('fechar_temas')
const corFundo = document.getElementById('cor_fundo')
const corFechar = document.getElementById('cor_fechar')
const corDestaque = document.getElementById('cor_destaque')
const corFundoSalva = localStorage.getItem('cor-fundo')
const corFecharSalva = localStorage.getItem('cor-fechar')
const corDestaqueSalva = localStorage.getItem('cor-destaque')
const restaurarTemaPadrao = document.getElementById('restaurar_tema_padrao')

/*Modal Tarefas*/

const abrirTarefas = document.getElementById('abrir_tarefas')
const tarefasModal = document.getElementById('tarefas_modal')
const conteudoTarefas = document.getElementById('conteudo_tarefas')
const novaTarefa = document.getElementById('nova_tarefa')
const fecharTarefas = document.getElementById('fechar_tarefas')
const expandirTarefasAbertas = document.getElementById('expandir_tarefas_abertas')
const expandirTarefasConcluidas = document.getElementById('expandir_tarefas_concluidas')
const tarefasAbertas = document.getElementById('tarefas_abertas')
const tarefasConcluidas = document.getElementById('tarefas_concluidas')

const listaLinhasTarefas = [
    document.getElementsByClassName('lista_linhas_tarefas')[0],
    document.getElementsByClassName('lista_linhas_tarefas')[1]
]

/*Cadastro de Tarefas*/

const cadastroTarefaModal = document.getElementById('cadastro_tarefa_modal')
const conteudoCadastroTarefa = document.getElementById('conteudo_cadastro_tarefa')
const fecharCadastroTarefa = document.getElementById('fechar_cadastro_tarefa')
const tarefaCadastradaModal = document.getElementById('tarefa_cadastrada_modal')
const tarefaCadastradaConteudo = document.getElementById('tarefa_cadastrada_conteudo')
const fecharTarefaCadastrada = document.getElementById('fechar_tarefa_cadastrada')
const historicoNotas = document.getElementById('historico_notas')
const statusTarefaEdicao = document.getElementById('status_tarefa_edicao')
const salvarEdicao = document.getElementById('salvar_edicao')
const salvarNotaEdicao = document.getElementById('salvar_nota_edicao')
const dataCriacaoTarefa = document.getElementById('data_criacao_tarefa')
const finalizarCadastroTarefa = document.getElementById('finalizar_cadastro_tarefa')

const dataAtual = new Date().toLocaleDateString('pt-BR')

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
]
const notaTarefa = [
    document.getElementById('nota_tarefa'),
    document.getElementById('nota_tarefa_edicao')
]

const cancelarNota = [
    document.getElementById('cancelar_nota'),
    document.getElementById('abrir_historico_nota')
]

const erroSemTitulo = [
    document.getElementById('erro_sem_titulo'),
    document.getElementById('erro_sem_titulo_edicao')
]

const pesquisaTarefas = [
    document.getElementById('pesquisar_abertas'),
    document.getElementById('pesquisar_concluidas')
]

/*cafe*/

const abrirCafe = document.getElementById('abrir_cafe')
const cafeModal = document.getElementById('cafe_modal')
const conteudoCafe = document.getElementById('conteudo_cafe')
const calcularCafe = document.getElementById('calcular_cafe')
