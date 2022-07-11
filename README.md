# processo_seletivo_itbit

<p>Projeto implementado para processo seletivo da empresa Itbit, foram utilizadas as tecnologias Node JS no backend e Angular 12 no frontend</p>

## Executando o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório
$ git clone <https://github.com/franciscooliver/processo_seletivo_itbit>

### 🎲 Rodando o Back End (servidor) em modo desenvolvimento

## Acesse a pasta do projeto no terminal/cmd
$ cd processo_seletivo_itbit
$ cd backend

## Execute o comando docker para executar o projeto do backend
$ docker-compose up -d --build

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

### 🎲 Rodando o Front End (servidor) em desenvolvimento

## Acesse a pasta do projeto no terminal/cmd
$ cd processo_seletivo_itbit
$ cd frontend

## Execute o comando docker para executar o projeto do frontend
$ docker-compose up -d --build
```
