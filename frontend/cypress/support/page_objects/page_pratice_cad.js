/// Cadastro - page_object criado para cadastro, utilizando o faker para gerar dados aleatórios

export function preencheNome(name) {
    cy.get('#user').type(name)
}

export function preencheEmailCadastro(email) {
    cy.get('#email').type(email)
}

export function preencheSenhaCadastro(password) {
    cy.get('#password').type(password)
}

export function registraCadastro() {
    cy.get('#btnRegister').click()
}

export function validaCadastro(name) {
    cy.get('#swal2-title').should('have.text', 'Cadastro realizado!').should('be.visible')
    cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${name}`).should('be.visible')
}

export function validaCadastroErro(mensagem) {
    cy.get('#errorMessageFirstName').should('have.text', mensagem).should('be.visible')
}