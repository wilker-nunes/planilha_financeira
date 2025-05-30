# Instruções de Uso - Sistema de Controle Financeiro (Versão 4.0)

## Visão Geral

Este sistema de controle financeiro foi desenvolvido como uma aplicação web HTML pura, que funciona diretamente no navegador sem necessidade de instalação de software adicional. Ele utiliza o armazenamento local do navegador (localStorage) para salvar seus dados.

## Funcionalidades Principais

1. **Login Personalizado**
   - Acesso para dois usuários distintos
   - Credenciais para Italo Amorim: usuário `italo`, senha `italo123`
   - Credenciais para Maely Amorim: usuário `maely`, senha `maely123`

2. **Dashboard com Saldo Dinâmico**
   - Visão geral das finanças
   - Saldo disponível que diminui automaticamente conforme despesas são registradas
   - Barra de progresso visual mostrando quanto da receita já foi gasto
   - Resumo de receitas, despesas e saldo
   - Gráficos de despesas por categoria
   - Transações recentes

3. **Controle de Transações**
   - Cadastro de receitas e despesas
   - Categorização de transações
   - Filtros por mês, ano, tipo e categoria
   - Edição e exclusão de transações

4. **Gerenciamento de Categorias**
   - Criação de categorias personalizadas
   - Separação entre categorias de receita e despesa
   - Edição e exclusão de categorias

5. **Relatórios**
   - Relatórios mensais
   - Relatórios por categoria
   - Relatórios por método de pagamento
   - Exportação para PDF

## Como Usar

### Instalação

1. **Hospedagem Local (Offline)**
   - Descompacte o arquivo ZIP em qualquer pasta do seu computador
   - Abra o arquivo `index.html` diretamente no navegador

2. **Hospedagem Online**
   - Faça upload de todos os arquivos para seu servidor web
   - Acesse através da URL do seu servidor

### Primeiro Acesso

1. Abra o arquivo `index.html` no navegador (computador ou celular)
2. Faça login com as credenciais de um dos usuários:
   - Para Italo: usuário `italo`, senha `italo123`
   - Para Maely: usuário `maely`, senha `maely123`

### Uso Diário

1. **Registrar Transações**
   - Clique em "Transações" no menu lateral
   - Preencha o formulário com os detalhes da transação
   - Clique em "Salvar"
   - Observe o saldo disponível diminuir automaticamente no dashboard

2. **Visualizar Dashboard**
   - Clique em "Dashboard" no menu lateral
   - Veja o resumo financeiro e gráficos
   - Acompanhe o saldo disponível e a barra de progresso que mostra quanto da receita já foi gasto
   - Consulte as transações recentes

3. **Gerenciar Categorias**
   - Clique em "Categorias" no menu lateral
   - Crie novas categorias conforme necessário
   - Edite ou exclua categorias existentes

4. **Gerar Relatórios**
   - Clique em "Relatórios" no menu lateral
   - Selecione o tipo de relatório desejado
   - Escolha o mês e ano
   - Clique em "Gerar Relatório"
   - Use o botão "Baixar PDF" para salvar o relatório

## Novidades da Versão 4.0

- **Responsividade Total**: O sistema agora é totalmente responsivo, funcionando perfeitamente em smartphones e tablets
- **Menu Adaptativo**: Menu lateral se transforma em menu hambúrguer em telas pequenas
- **Formulários Otimizados**: Campos de formulário adaptados para facilitar a digitação em dispositivos móveis
- **Gráficos Responsivos**: Visualizações de dados ajustadas para diferentes tamanhos de tela
- **Navegação Simplificada**: Experiência de usuário aprimorada em dispositivos móveis

## Dicas para Uso em Dispositivos Móveis

- **Menu Lateral**: Toque no ícone de hambúrguer (☰) no canto superior esquerdo para abrir o menu
- **Tabelas**: Deslize horizontalmente para ver todas as colunas das tabelas
- **Formulários**: Os campos de formulário foram otimizados para toque, facilitando a entrada de dados
- **Orientação**: O sistema funciona tanto em orientação retrato quanto paisagem, mas a orientação paisagem oferece melhor visualização de gráficos e tabelas

## Segurança e Dados

- Todos os dados são armazenados localmente no navegador (localStorage)
- Os dados não são enviados para nenhum servidor externo
- Para preservar seus dados, evite limpar o cache do navegador
- Recomendamos exportar relatórios periodicamente como backup

## Requisitos Técnicos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- Conexão com internet apenas para carregar bibliotecas externas (opcional)

## Suporte

Para qualquer dúvida ou problema, entre em contato com o desenvolvedor.
