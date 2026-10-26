/*Modal Tarefas*/

const tarefasModal = document.getElementById('tarefas_modal')
const conteudoTarefas = document.getElementById('conteudo_tarefas')
const novaTarefa = document.getElementById('nova_tarefa')
const fecharTarefas = document.getElementById('fechar_tarefas')
const expandirTarefasAbertas = document.getElementById('expandir_tarefas_abertas')
const expandirTarefasConcluidas = document.getElementById('expandir_tarefas_concluidas')
const tarefasAbertas = document.getElementById('tarefas_abertas')
const tarefasConcluidas = document.getElementById('tarefas_concluidas')
const quantiaTarefasTotais = document.getElementById('quantia_tarefas_totais')
const quantiaTarefasAbertas = document.getElementById('quantia_tarefas_abertas')
const quantiaTarefasExecucao = document.getElementById('quantia_tarefas_execucao')
const quanatiaTarefasFinalizadas = document.getElementById('quantia_tarefas_finalizadas')
const excluirTudo = document.getElementById('excluir_tudo')

const selectTarefas = [
    document.getElementsByClassName('select_tarefas')[0],
    document.getElementsByClassName('select_tarefas')[1]
]

const listaLinhasTarefas = [
    document.getElementsByClassName('lista_linhas_tarefas')[0],
    document.getElementsByClassName('lista_linhas_tarefas')[1]
]

const setaAbertas = document.getElementById('seta_abertas')
const setaConcluidas = document.getElementById('seta_concluidas')

const pesquisaTarefas = [
    document.getElementById('pesquisar_abertas'),
    document.getElementById('pesquisar_concluidas')
]

/*Cadastro de Tarefas*/

const cadastroTarefaModal = document.getElementById('cadastro_tarefa_modal')
const conteudoCadastroTarefa = document.getElementById('conteudo_cadastro_tarefa')
const fecharCadastroTarefa = document.getElementById('fechar_cadastro_tarefa')
const finalizarCadastroTarefa = document.getElementById('finalizar_cadastro_tarefa')
const confirmacaoCadastroTarefa = document.getElementById('confirmacao_cadastro_tarefa')

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

const caractContNota = [
    document.getElementById('cont_nota_tarefa'),
    document.getElementById('cont_nota_tarefa_edicao')
]

const cancelarNota = [
    document.getElementById('cancelar_nota'),
    document.getElementById('abrir_historico_nota')
]

const erroSemTitulo = [
    document.getElementById('erro_sem_titulo'),
    document.getElementById('erro_sem_titulo_edicao')
]

const erroNotaVazia = [
    document.getElementById('erro_nota_vazia'),
    document.getElementById('erro_nota_vazia_edicao')
]

/*Tarefa Cadastrada*/

const tarefaCadastradaModal = document.getElementById('tarefa_cadastrada_modal')
const tarefaCadastradaConteudo = document.getElementById('tarefa_cadastrada_conteudo')
const fecharTarefaCadastrada = document.getElementById('fechar_tarefa_cadastrada')
const historicoNotas = document.getElementById('historico_notas')
const statusTarefaEdicao = document.getElementById('status_tarefa_edicao')
const salvarEdicao = document.getElementById('salvar_edicao')
const salvarNotaEdicao = document.getElementById('salvar_nota_edicao')
const dataCriacaoTarefa = document.getElementById('data_criacao_tarefa')
const dataCriacaoNota = document.getElementById('data_criacao_nota')
const telaHistorico = document.getElementById('tela_historico')
const telaCadastroNota = document.getElementById('tela_cadastro_nota')

/*Confirmar cópia de tarefa*/

const confirmarCopiaModal = document.getElementById('confirmar_copia_modal')
const cancelarCopia = document.getElementById('cancelar_copia')
const confirmarCopia = document.getElementById('confirmar_copia')

/*Confirmação de Exclusão de Tarefa*/

const confirmarExclusaoTarefaModal = document.getElementById('confirmar_exclusao_tarefa_modal')
const cancelarExclusaoTarefa = document.getElementById('cancelar_exclusao_tarefa')
const confirmarExclusaoTarefa = document.getElementById('confirmar_exclusao_tarefa')
const confirmarExclusaoLoteModal = document.getElementById('confirmar_exclusao_lote_modal')
const cancelarExclusaoLote = document.getElementById('cancelar_exclusao_lote')
const confirmarExclusaoLote = document.getElementById('confirmar_exclusao_lote')
