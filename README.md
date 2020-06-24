# Laura

Projeto simples para acompanhamento de pacientes e registro de evolução.
## Pré-requisitos
  - Docker
  - NodeJS
  - GIT

## Instalação
   - `git clone https://github.com/jeanmmayer/Laura.git;`
    - Serão necessárias 3 abas do console para executar o projeto
        - 1 para o banco de dados;
        - 1 para o backend;
        - 1 para o frontend;

#### Backend
 - `cd Laura/backend`;
- Na primeira aba:
  - `npm install;`
  - `cd docker;`
  - `docker-compose up tad;`

- Na segunda aba
  - `node_modules/.bin/sequelize db:create;`
  - `node_modules/.bin/sequelize db:migrate;`
  - `node_modules/.bin/sequelize db:seed:all;`
  - `npm run dev;`

#### Frontend:
- `cd Laura/frontend;`
- `npm install;`
- `npm run start;`

Após os procedimentos, o projeto abrirá em [http://localhost:8080](http://localhost:8080) e o servidor estará rodando em [http://localhost:4000](http://localhost:4000)
