# Instruções de Uso - Sistema de Controle Financeiro (Versão 3.0)

## Visão Geral

Este sistema de controle financeiro foi desenvolvido como uma aplicação web HTML pura, que funciona diretamente no navegador sem necessidade de instalação de software adicional. Ele utiliza o armazenamento local do navegador (localStorage) para salvar seus dados.

## Funcionalidades Principais

1. **Login Personalizado**
   - Acesso para dois usuários distintos
   - Credenciais para Italo Amorim: usuário `italo`, senha `italo123`
   - Credenciais para Maely Amorim: usuário `maely`, senha `maely123`

2. **Dashboard com Saldo Dinâmico**
   - Visão geral das finanças
   - **NOVO: Saldo disponível que diminui automaticamente conforme despesas são registradas**
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

1. Abra o arquivo `index.html` no navegador
2. Faça login com as credenciais de um dos usuários:
   - Para Italo: usuário `italo`, senha `italo123`
   - Para Maely: usuário `maely`, senha `maely123`

### Uso Diário

1. **Registrar Transações**
   - Clique em "Transações" no menu lateral
   - Preencha o formulário com os detalhes da transação
   - Clique em "Salvar"
   - **NOVO: Observe o saldo disponível diminuir automaticamente no dashboard**

2. **Visualizar Dashboard**
   - Clique em "Dashboard" no menu lateral
   - Veja o resumo financeiro e gráficos
   - **NOVO: Acompanhe o saldo disponível e a barra de progresso que mostra quanto da receita já foi gasto**
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

## Novidades da Versão 3.0

- **Saldo Dinâmico**: Agora você pode ver o saldo disponível diminuir automaticamente conforme registra despesas
- **Barra de Progresso**: Visualize facilmente quanto da sua receita já foi comprometida com despesas
- **Detalhamento do Orçamento**: Veja o percentual gasto do seu orçamento mensal
- **Alertas Visuais**: A barra de progresso muda de cor conforme o percentual gasto (verde, amarelo, vermelho)

## Segurança e Dados

- Todos os dados são armazenados localmente no navegador (localStorage)
- Os dados não são enviados para nenhum servidor externo
- Para preservar seus dados, evite limpar o cache do navegador
- Recomendamos exportar relatórios periodicamente como backup

## Requisitos Técnicos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- Conexão com internet apenas para carregar bibliotecas externas (opcional)

## Personalização

Para personalizar o sistema:

- Edite o arquivo `css/style.css` para alterar cores e estilos
- Modifique o arquivo `index.html` para alterar a tela de login
- Ajuste o arquivo `dashboard.html` para personalizar o layout principal

## Suporte

Para qualquer dúvida ou problema, entre em contato com o desenvolvedor.
