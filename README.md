# Nome do projeto: Kirrar TaskList

# Resumo Geral
O projeto em questão consiste em um programa simples para gerenciamento de tarefas, com pequenas opções de customização de layout, e salvamento local das tarefas no navegador.

# Problemática
Inicialmente, o projeto surgiu como fonte de aprendizado em HTML, CSS e Javascript.
A ideia evoluiu para a criação de um programa simples e intuitivo com objetivo de auxiliar com a organização de tarefas.

# Tecnologias utilizadas

- HTML
- CSS
- JAVASCRIPT
- localStorage, para armazenamento de dados no navegador
  
- Editor de código: VSCode

# Como executar o projeto
Abra o arquivo index.html em um navegador.

#Funcionamento geral do projeto

 1. Tarefas

O usuário pode acessar o container de tarefas, onde será mostrado:

- Lista de tarefas abertas
- Lista de tarefas concluídas
- Cards apresentando quantia de tarefas (Tarefas totais, tarefas novas, tarefas executando, e tarefas finalizadas)
- Opção para cadastro de tarefas

> Lista de tarefas abertas
- Apresenta as tarefas com status "Nova" ou "Executando"

> Lista de tarefas concluídas
- Apresenta as tarefas com status "Finalizado"

Ambas as listas apresentação de pesquisa pelo ID da tarefa, título, status, e prioridade

> Cadastro de tarefas
- Permite o usuário pode fazer o cadastro de uma tarefa ao programa

Essa tarefa possui:

- ID (Ferramenta de identificação, inalterável e único para cada tarefa)
- Título (Obrigatório)
- Status (Inicialmente "Nova", pode ser alterada entre as opções "Nova", "Executando", e "Finalizado")
- Prioridade (Opções: "Baixa", "Média", "Alta", "Urgente")
- Lista de notas, permitindo o cadastro de uma Nota (Opcional, pode ter múltiplas notas, porém não pode ser vazia)

Após a criação, o usuário possui as seguintes opções:

> Editar
- O usuário pode visualizar e editar o Título, Status, e Prioridade da tarefa
- O usuário pode visualizar o histórico de notas e adicionar novas notas à tarefa

> Copiar
- O usuário pode fazer uma cópia perfeita da tarefa, mantendo Título, Status, Prioridade, e histórico de notas da tarefa original
- A cópia NÃO carrega o ID da tarefa original

> Excluir
- O usuário pode excluir a tarefa cadastrada
- Haverá uma tela pedindo a confirmação do usuário para fazer a exclusão da tarefa
- O usuário também tem a possibilidade de excluir tarefas em lote a partir da marcação do checkbox à esquerda, e então selecionar uma opção dedicada à exclusão em lote
- Após excluir uma ou mais tarefas, a ação NÃO pode ser desfeita

 2. Temas

O usuário pode fazer a alteração das cores do programa caso preferir
As possibilidades de customização incluem:

- Cor do fundo dos containers
- Cor de destaque (cor dos textos, etc)
- Cores de botões de ações específicas, como confirmar e editar/excluir
- Decoração na tela de título (Opções: Kasane Teto(padrão), Hatsune Miku, e Akita Neru)

Caso o usuário deseje voltar às cores padrões, existe a opção dedicada para essa ação

 3. Reset

O usuário tem a possibilidade de reiniciar todos os dados da aplicação

Ao confirmar a ação:

- Todas as tarefas serão apagadas, sem possibilidade de recuperação após finalizar a ação
- O ID será reiniciado para 1

 4. Exportação/Importação

Permite o usuário fazer a exportação/importação de suas tarefas

> Exportação
- Gera um arquivo "tarefas.json", que conterá todos os dados das tarefas atualmente cadastradas no programa

> Importação
- Faz a leitura de um arquivo .json para adicionar as tarefas presentes nele ao programa
- Arquivos com o formato ou estrutura inválidos serão rejeitados

# Persistência de dados

Os dados das tarefas, progresso do ID, e alterações nos temas, são armazenados no localStorage do navegador.
Para evitar perca das tarefas devido a limpeza de dados do navegador, recomenda-se a fazer exportação do arquivo json periodicamente.

# Limitações conhecidas

- Volume muito alto de tarefas (mais de 3000 tarefas) pode causar lentidão no programa
- A persistência depende dos dados armazenados no navegador. A aplicação não possui sincronização automática entre dispositivos
