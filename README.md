# processo_seletico_itbit
<p>Projeto implementado para processo seletivo da empresa Itbit, foram utilizadas as tecnologias Node JS no backend e Angular 12 no frontend</p>

## Executando o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

## Acesse a pasta do projeto no terminal/cmd
$ cd processo_seletico_itbit
<br/>
$ cd backend

## Instale as dependências
$ npm install / yarn

## Edite o arquivo ormconfig.json com as credenciais do banco de dados

## Execute as migrations para criação das tabelas no banco
$ npm run typeorm migration:run
<br/>
$ yarn typeorm migration:run

## Execute a aplicação em modo de desenvolvimento
$ npm run start 
<br/>
$ yarn start

### 🎲 Rodando o Front End (servidor)

## Acesse a pasta do projeto no terminal/cmd
$ cd processo_seletico_itbit
<br/>
$ cd frontend

## Instale as dependências
$ npm install / yarn

## Execute a aplicação em modo de desenvolvimento
$ npm run start / yarn start
