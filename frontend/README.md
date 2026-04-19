# 🌐 Frontend - Testes E2E com Cypress

Testes end-to-end (E2E) da interface web utilizando **Cypress**, cobrindo os principais fluxos da aplicação.

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

Melhor opção para desenvolvimento e debugging. Você verá o navegador abrindo e poderá acompanhar cada passo.

---

### Executar todos os testes em headless
```bash
npm test
```

Executa todos os testes sem interface gráfica. Útil para CI/CD.

---

### Executar teste específico
```bash
npx cypress run --spec "cypress/e2e/ts01-Pratice-login.cy.js"
```

---

### Executar testes com arquivo de configuração específico
```bash
npx cypress run --config baseUrl=https://www.automationpratice.com.br
```

---

## 📁 Estrutura do Projeto

```
frontend/
├── cypress/
│   ├── e2e/                         # Testes end-to-end
│   │   ├── ts01-Pratice-login.cy.js       # Testes de login
│   │   ├── ts02-Pratice-cadastro.cy.js    # Testes de cadastro
│   │   └── ts03-Pratice-checkout.cy.js    # Testes de checkout
│   │
│   ├── fixtures/                    # Dados de teste (JSON)
│   │   └── example.json             # Dados reutilizáveis
│   │
│   └── support/                     # Utilitários e configurações
│       ├── commands.js              # Comandos customizados
│       ├── e2e.js                  # Configurações globais
│       │
│       └── page_objects/            # Page Object Models
│           ├── page_pratice_login.js
│           ├── page_pratice_cad.js
│           └── page_pratice_shop.js
│
├── cypress.config.js                # Configuração do Cypress
├── package.json                     # Dependências do projeto
├── README.md                        # Este arquivo
└── node_modules/                    # Módulos instalados
```

---

## 🏗️ Padrões Utilizados

### **Page Object Model (POM)**
Organização de elementos e ações por página para facilitar manutenção e reutilização:

```javascript
// page_pratice_login.js
export const login_page = {
  email_input: 'input[id="user-name"]',
  password_input: 'input[id="password"]',
  login_button: 'input[id="login-button"]',
  
  fillEmail: (email) => cy.get(login_page.email_input).type(email),
  fillPassword: (password) => cy.get(login_page.password_input).type(password),
  clickLogin: () => cy.get(login_page.login_button).click()
}
```

### **Fixtures**
Dados de teste centralizados em JSON:

```json
{
  "name": "Using fixtures to represent data",
  "email": "hello@cypress.io",
  "body": "Fixtures are a great way to mock data"
}
```

### **Custom Commands**
Reutilização de ações comuns para simplificar testes.

---

## 📦 Dependências

- **cypress**: ^15.13.0 - Framework de testes e2e
- **@faker-js/faker**: ^10.4.0 - Geração de dados aleatórios para testes

---

## 📝 Convenção de Nomes

Os testes seguem a convenção: `ts<número>-<descrição>.cy.js`

| Arquivo | Responsabilidade |
|---------|-----------------|
| `ts01-Pratice-login.cy.js` | Testes de login e autenticação |
| `ts02-Pratice-cadastro.cy.js` | Testes de cadastro e registro |
| `ts03-Pratice-checkout.cy.js` | Testes de checkout e carrinho |

---

## 🔧 Configuração

As principais configurações estão em `cypress.config.js`:

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationpratice.com.br',  // URL base
    setupNodeEvents(on, config) {
      // event listeners
    },
  },
});
```

**Você pode ajustar:**
- URL base da aplicação
- Timeout dos testes
- Resolução da tela
- Comportamento do navegador
- Entre outras opções

Veja [Cypress Configuration](https://docs.cypress.io/guides/references/configuration) para mais detalhes.

---

## 💡 Boas Práticas

- ✅ Use Page Object Model para organizar elementos
- ✅ Centralize dados de teste em fixtures
- ✅ Escreva testes independentes (não dependem um do outro)
- ✅ Use nomes descritivos para testes
- ✅ Evite hardcoding (use seletores reutilizáveis)
- ✅ Mantenha testes rápidos e focados

---

## 🎯 Exemplo de Teste

```javascript
import { login_page } from '../support/page_objects/page_pratice_login'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')  // Visita a URL base configurada
  })

  it('Deve fazer login com sucesso', () => {
    login_page.fillEmail('standard_user@example.com')
    login_page.fillPassword('secret_sauce')
    login_page.clickLogin()
    
    cy.url().should('include', '/inventory')
  })
})
```

---

## 📚 Documentação Útil

- [Cypress Documentation](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [API Reference](https://docs.cypress.io/api/table-of-contents)
- [Cypress Examples](https://docs.cypress.io/examples/examples/actions)

---

## 🐛 Troubleshooting

### Testes falhando aleatoriamente?
- Aumente o timeout: `cy.get('selector', { timeout: 10000 })`
- Verifique se a aplicação está rodando
- Confira a URL base em `cypress.config.js`

### Seletores não encontram elementos?
- Use `cy.pause()` para pausar a execução
- Abra o DevTools (F12) para inspecionar elementos
- Use `cy.debug()` para debug

---

## 👤 Autor

Desenvolvido para fins de estudo em Automação QA.

---

**Happy Testing! 🧪**
