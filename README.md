<!-- # :construction: README customizado em construção ! :construction: -->

# Projeto Futebol Clube

## Objetivo do Projeto

O TFC é um site informativo sobre partidas e classificações de futebol!  
Nesse projeto, foi desenvolvido um back-end `dockerizado` utilizando modelagem de dados através do `Sequelize`. Seu desenvolvimento respeita as regras de negócio providas no projeto e a API é capaz de ser consumida por um front-end já provido nesse projeto pela [Trybe](https://www.betrybe.com/).  
Para adicionar uma partida é necessário ter um `token`, portanto a pessoa deverá estar logada para fazer as alterações. Existe um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

## Tecnologias

>[![Typescript][Typescript]][Typescript-url]
[![Node.js][Node.js-card]][Node.js-url]
[![EXPRESS][EXPRESS]][EXPRESS-url]
[![MYSQL][MYSQL]][MYSQL-url]
[![Sequelize][Sequelize]][Sequelize-url]
[![JWT][JWT]][JWT-url]
[![Mocha][Mocha]][Mocha-url]
[![Chai][Chai]][Chai-url]
[![Docker][Docker]][Docker-url]

[Typescript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org

[Node.js-card]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[EXPRESS]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black
[EXPRESS-url]: https://expressjs.com

[MYSQL]: https://img.shields.io/badge/MySQL-00758f?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com

[Sequelize]: https://img.shields.io/badge/Sequelize-06AFEF?style=for-the-badge&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org

[JWT]: https://img.shields.io/badge/jwt-000000?style=for-the-badge&logo=jwt&logoColor=white
[JWT-url]: https://jwt.org

[Mocha]: https://img.shields.io/badge/MOCHA-6D4A31?style=for-the-badge&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org

[Chai]: https://img.shields.io/badge/chai-974942?style=for-the-badge&logo=chai&logoColor=white
[Chai-url]: https://www.chaijs.com

[DOCKER]: https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white
[DOCKER-url]: https://www.docker.com

## Como Rodar

1. Clone o repositório, para isso use o comando: `git clone git@github.com:ValeriaMenezes/futebol-clube.git`
2. Entre na pasta `futebol-club` do repositório que você acabou de clonar
3. Instale as dependências com o comando `npm install`
4. Rode os serviços frontend, backend e db com o comando `docker-compose up -d` ou `npm run compose:up`

## Contatos

>[![LinkedIn][LinkedIn]][LinkedIn-url]
[![Gmail][Gmail]][Gmail-url]

[LinkedIn]: https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white
[LinkedIn-url]: https://www.linkedin.com/in/valeria-menezes-dev-web-full-stack/

[Gmail]: https://img.shields.io/badge/gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: mailto:valeriamenezes022@gmail.com
