# 🎯 Automação QA - Testes com Cypress

Projeto de testes automatizados e2e desenvolvido com **Cypress**, cobrindo os principais fluxos da aplicação.

## 📋 Pré-requisitos

- **Node.js** v14+ instalado
- **npm** v6+

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd "Automação Prática"
```

2. Navegue até a pasta frontend:
```bash
cd frontend
```

3. Instale as dependências:
```bash
npm install
```

## ▶️ Execução dos Testes

### Executar todos os testes
```bash
npm run test
```

### Abrir Cypress Test Runner (modo interativo)
```bash
npx cypress open
```

### Executar testes específicos em headless
```bash
npx cypress run --spec "cypress/e2e/ts01-Pratice-login.cy.js"
```

## 📁 Estrutura do Projeto

```
frontend/
├── cypress/
│   ├── e2e/                    # Testes end-to-end
│   │   ├── ts01-Pratice-login.cy.js
│   │   ├── ts02-Pratice-cadastro.cy.js
│   │   └── ts03-Pratice-checkout.cy.js
│   ├── fixtures/               # Dados de teste (JSON)
│   │   └── example.json
│   └── support/                # Configurações e utilitários
│       ├── commands.js         # Comandos customizados
│       ├── e2e.js             # Configurações globais
│       └── page_objects/       # Page Object Models
│           ├── page_pratice_login.js
│           ├── page_pratice_cad.js
│           └── page_pratice_shop.js
├── cypress.config.js           # Configuração do Cypress
├── package.json               # Dependências do projeto
└── node_modules/              # Módulos instalados
```

## 🏗️ Padrões Utilizados

- **Page Object Model (POM)**: Organização de elementos e ações por página
- **Fixtures**: Dados de teste centralizados em JSON
- **Custom Commands**: Reutilização de ações comuns

## 📦 Dependências

- **cypress**: ^15.13.0 - Framework de testes
- **@faker-js/faker**: ^10.4.0 - Geração de dados aleatórios

## 📝 Convenção de Nomes

Os testes seguem a convenção: `ts<número>-<descrição>.cy.js`

Exemplo:
- `ts01-Pratice-login.cy.js` - Testes de login
- `ts02-Pratice-cadastro.cy.js` - Testes de cadastro
- `ts03-Pratice-checkout.cy.js` - Testes de checkout

## 🔧 Configurações

As principais configurações estão em `cypress.config.js`. Você pode ajustar:
- URL base da aplicação
- Timeout dos testes
- Resolução da tela
- Entre outras opções

## 📚 Documentação Útil

- [Documentação Cypress](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [API Reference](https://docs.cypress.io/api/table-of-contents)

## 👤 Autor

Desenvolvido para fins de estudo em Automação QA.

---

**Boa sorte com seus testes! 🧪**
