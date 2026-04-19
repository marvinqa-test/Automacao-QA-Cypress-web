# 🧪 API Automation - Cypress

Testes automatizados para APIs usando Cypress e JSONPlaceholder como exemplo.

## 📋 Pré-requisitos

- **Node.js** v14+ instalado
- **npm** v6+

## 🚀 Instalação

```bash
npm install
```

## ▶️ Execução dos Testes

### Abrir Cypress Test Runner (modo interativo)
```bash
npm run test:open
```

### Executar testes em headless
```bash
npm test
```

### Executar teste específico
```bash
npx cypress run --spec "cypress/e2e/api-posts.cy.js"
```

## 📁 Estrutura do Projeto

```
api/
├── cypress/
│   ├── e2e/                    # Testes de API
│   │   ├── api-posts.cy.js     # Testes de Posts
│   │   └── api-users.cy.js     # Testes de Usuários
│   ├── fixtures/               # Dados de teste
│   │   └── post.json
│   └── support/
│       ├── api_helpers/        # Helpers reutilizáveis
│       │   └── api.js
│       ├── commands.js         # Comandos customizados
│       └── e2e.js             # Configurações globais
├── cypress.config.js           # Configuração do Cypress
├── package.json               # Dependências
└── .gitignore                # Arquivos ignorados
```

## 🏗️ Padrões Utilizados

- **API Helpers**: Encapsulamento de requisições HTTP
- **Fixtures**: Dados de teste centralizados
- **Page Object Pattern Adaptado**: Reutilização de lógica

## 📦 Dependências

- **cypress**: ^15.13.0 - Framework de testes
- **@faker-js/faker**: ^10.4.0 - Geração de dados aleatórios

## 📝 Exemplos de Uso

### Usando Helpers (Recomendado)

```javascript
import { postsAPI, usersAPI } from '../support/api_helpers/api'

it('Deve criar e validar um post', () => {
  postsAPI.createPost('Título', 'Corpo', 1).then((response) => {
    expect(response.status).to.eq(201)
  })
})
```

### Usando Fixtures

```javascript
it('Deve criar post com dados de fixture', () => {
  cy.fixture('post').then((data) => {
    cy.request('POST', '/posts', data.validPost).then((response) => {
      expect(response.status).to.eq(201)
    })
  })
})
```

## 🔗 API de Exemplo

Estamos usando [JSONPlaceholder](https://jsonplaceholder.typicode.com/) como API de exemplo.

## 📚 Recursos Úteis

- [Cypress API](https://docs.cypress.io/api/table-of-contents)
- [cy.request() Documentation](https://docs.cypress.io/api/commands/request)
- [Testing Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

**Happy Testing! 🚀**
