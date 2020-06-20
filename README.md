# Laura
Projeto
    - git clone https://github.com/jeanmmayer/Laura.git;
frontend:
    - cd frontend;
    - npm install;
    - npm run dev;
backend:
    - cd backend;
    - npm install;
    - cd docker;
    - docker-compose up tad;
    - node_modules/.bin/sequelize db:create;
    - node_modules/.bin/sequelize db:migrate;
    - npm run dev;
