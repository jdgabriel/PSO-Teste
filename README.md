<h1 align="center">
  <img alt="PSO" src="https://psoengenharia.com.br/wp-content/uploads/2020/04/PSO-Logo-Eng-RGB.svg" width="120px" />
</h1>

<h3 align="center">
  Teste PSO Engenharia - Programador
</h3>

<p align="center">Neste teste pude desenvolver uma API com CRUD básico de usuário</p>

## Tecnologias

- Express
- ReactJS
- Sequelize
- Docker

---

## Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)

---

## Instalação e execução

### Banco de Dados

1. Entre na pasta raiz - `pso-teste`
2. Execute `docker-compose up` ou `docker-compose up -d`

### Server

1. Entre na pasta `cd server` e rode o comando `yarn`
2. Rode `yarn sequelize db:create` para criar o banco de dados;
3. Rode `yarn sequelize db:migrate` para executar as migrations;
4. Rode `yarn start` para iniciar o servidor.

### Client

1. Entre na pasta `cd client`
2. Rode o comando `yarn`
3. Rode `yarn start` para iniciar o client.

---

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
