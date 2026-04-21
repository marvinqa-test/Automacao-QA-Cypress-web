# 🎯 Automação QA - Testes E2E com Cypress

Projeto de testes end-to-end (E2E) desenvolvido com **Cypress**, cobrindo os principais fluxos da interface web.

## 📂 Estrutura do Projeto

```
Automação Prática/
├── frontend/              # Testes E2E (Interface/UI)
│   ├── cypress/
│   ├── package.json
│   ├── cypress.config.js
│   └── README.md
├── .gitignore
├── README.md             # Este arquivo
└── .git
```

---

## 🚀 Início Rápido

### 1️⃣ Instalar Dependências

```bash
cd frontend
npm install
```

### 2️⃣ Executar Testes (Modo Interativo)

```bash
npm run test:open
```

O Cypress abrirá uma interface gráfica onde você poderá executar e visualizar os testes em tempo real.

### 3️⃣ Executar Todos os Testes (Headless)

```bash
npm test
```

---

## 📋 Pré-requisitos

- **Node.js** v14+ instalado
- **npm** v6+

---

## 🏗️ Estrutura e Padrões

### **Frontend - Testes E2E**
- Testes end-to-end (E2E) da interface web
- **Padrão:** Page Object Model (POM)
- **Dados:** Fixtures centralizadas em JSON
- **Aplicação:** [automationpratice.com.br](https://www.automationpratice.com.br)

---

## 📦 Dependências

- **cypress**: ^15.13.0 - Framework de testes e2e
- **@faker-js/faker**: ^10.4.0 - Geração de dados aleatórios

---

## 💡 Padrões Utilizados

- **Page Object Model (POM)**: Organização de elementos e ações por página para facilitar manutenção
- **Fixtures**: Dados de teste centralizados em JSON para reutilização
- **Custom Commands**: Comandos customizados do Cypress para ações comuns
- **Nomenclatura**: `ts<número>-<descrição>.cy.js`

---

## 📚 Documentação

📖 [Documentação Completa do Frontend](./frontend/README.md)

- [Cypress Documentation](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [API Reference](https://docs.cypress.io/api/table-of-contents)

---

## 👤 Autor

Desenvolvido para fins de estudo em Automação QA.

---

**Boa sorte com seus testes! 🧪**
