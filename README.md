# Documentação do Projeto de Autenticação de Usuário

## Introdução

Este é um projeto simples de autenticação de usuário utilizando JavaScript. O objetivo é permitir que os usuários façam login fornecendo um nome de usuário e senha, e, se os dados forem corretos, exibir as informações do usuário autenticado em um crachá.

## Pré-requisitos

Antes de executar o projeto, verifique se você tem os seguintes requisitos:

1. Navegador moderno com suporte a JavaScript habilitado.

## Como rodar o projeto

1. Clone o repositório do projeto a partir do GitHub: [URL do repositório](URL_DO_REPOSITORIO)

2. Abra o arquivo `index.html` no seu navegador.

3. O formulário de login será exibido.

## Funcionamento do Código

O código JavaScript presente no arquivo `main.js` é responsável por gerenciar a autenticação do usuário e exibir as informações no crachá. Abaixo, explicaremos o funcionamento das principais funções.

### `authenticateUser(username, password)`

Esta função é responsável por autenticar o usuário. Ela recebe o nome de usuário (`username`) e a senha (`password`) como argumentos.

1. Faz uma requisição para uma API fictícia que retorna um arquivo JSON com dados de usuários (URL da API: [https://dummyjson.com/users](https://dummyjson.com/users)).

2. Extrai a lista de usuários (`users`) a partir dos dados retornados pela API.

3. Verifica se as informações do usuário fornecidas no formulário correspondem a algum usuário da lista. Caso encontre um usuário com os mesmos dados, retorna os detalhes desse usuário. Caso contrário, lança um erro de "Usuário ou senha inválidos".

### `showUserData(userData)`

Essa função é acionada quando o usuário é autenticado com sucesso e recebe os dados do usuário autenticado (`userData`) como argumento.

1. Esconde o formulário de login (`loginForm`).

2. Preenche os campos do crachá (`cracha`) com as informações do usuário autenticado, incluindo o ID, a imagem, o primeiro nome, o sobrenome, o e-mail e o gênero.

## API de Teste

O projeto utiliza uma API fictícia que retorna dados de usuários para testes. A URL da API é [https://dummyjson.com/users](https://dummyjson.com/users). A API contém usuários com nomes de usuário e senhas fictícias para simular a autenticação.

## Considerações Finais

Este projeto é apenas uma demonstração simples de como realizar autenticação de usuário em JavaScript. Em um cenário real, é necessário implementar medidas de segurança mais robustas, como criptografia das senhas, autenticação com backend e armazenamento seguro de credenciais. Lembre-se de que este projeto não deve ser utilizado em produção sem devidas melhorias de segurança.

Caso você tenha alguma dúvida ou precise de mais informações, sinta-se à vontade para entrar em contato.

Aproveite o projeto!