# Desafio MB Web

Este projeto faz parte do desafio técnico da Mercado Bitcoin e tem como objetivo criar uma aplicação para cadastro de usuários.

## Tecnologias Utilizadas

    Frontend:

    Vue.js
    Vite
    SCSS

    Backend:

    Node.js
    Express

## Estrutura do Projeto

O projeto está estruturado da seguinte maneira:

```sh
.
├── public
│   └── favicon.ico
├── src
│   ├── client # Frontend files (Vue)
│   │   ├── assets
│   │   │   └── styles
│   │   │       ├── global.scss
│   │   │       ├── mixins.scss
│   │   │       └── variables.scss
│   │   ├── components
│   │   │   ├── Button.vue
│   │   │   ├── Header.vue
│   │   │   ├── InputField.vue
│   │   │   ├── InputGroup.vue
│   │   │   ├── InputRadio.vue
│   │   │   └── Message.vue
│   │   ├── helpers
│   │   │   └── validations.js
│   │   ├── views
│   │   │   ├── EntityInfo.vue
│   │   │   ├── Password.vue
│   │   │   ├── Review.vue
│   │   │   └── Welcome.vue
│   │   ├── App.vue
│   │   ├── main.js
│   │   └── style.scss
│   └── server # Backend Files (Express)
│       ├── routes
│       │   └── registration.js # API Routes (GET/POST)
│       └── index.js
├── README.md
├── index.hmr.html # Used for hot module replacement in development
├── index.html # Used for production
├── package-lock.json
├── package.json
├── vercel.json
└── vite.config.js
```

## Como Executar

    Para executar este projeto localmente, siga os passos abaixo:

    Clone este repositório.
    Instale as dependências com npm install.
    Inicie o servidor de desenvolvimento com npm run dev.
    O projeto estará disponível em http://localhost:5173/.
