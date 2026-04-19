# 🎯 Automação QA - Testes com Cypress

Projeto completo de automação com testes **E2E (Interface)** e **API** desenvolvido com **Cypress**.

## 📂 Estrutura do Projeto

```
Automação Prática/
├── frontend/              # Testes E2E (Interface/UI)
├── api/                   # Testes de API
├── README.md             # Este arquivo
└── .gitignore
```

---

## 🚀 Guia Rápido

### **Testes E2E (Frontend)**
```bash
cd frontend
npm install
npm run test:open
```

📖 [Documentação Completa →](./frontend/README.md)

---

### **Testes de API**
```bash
cd api
npm install
npm run test:open
```

📖 [Documentação Completa →](./api/README.md)

---

## 📋 Pré-requisitos

- **Node.js** v14+ instalado
- **npm** v6+

---

## 🏗️ Arquitetura

### **Frontend** 
- Testes end-to-end (E2E) de interface
- Utiliza Page Object Model (POM)
- Fixtures com dados de teste
- Aplicação: [automationpratice.com.br](https://www.automationpratice.com.br)

### **API**
- Testes automatizados de endpoints
- Helpers reutilizáveis
- Fixtures centralizadas
- API exemplo: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## 📦 Tecnologias

- **Cypress**: ^15.13.0 - Framework de testes
- **@faker-js/faker**: ^10.4.0 - Geração de dados aleatórios
- **Node.js**: v14+
- **npm**: v6+

---

## 💡 Padrões Utilizados

- **Page Object Model (POM)**: Organização de elementos e ações por página
- **API Helpers**: Encapsulamento de requisições HTTP
- **Fixtures**: Dados de teste centralizados em JSON
- **Custom Commands**: Reutilização de ações comuns

---

## 📚 Documentação Completa

- [Frontend - E2E Tests](./frontend/README.md)
- [API - API Tests](./api/README.md)
- [Cypress Docs](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

## 👤 Autor

Desenvolvido para fins de estudo em Automação QA.

---

**Boa sorte com seus testes! 🧪**
