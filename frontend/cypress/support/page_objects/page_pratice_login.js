/// Login - page_object criado para login, utilizando o faker para gerar dados aleatórios

export function preencheEmail(email) {
     cy.get('#user').type(email)
}

export function preencheSenha(senha) {
     cy.get('#password').type(senha)
}

export function clicaEntrar(entrar) {
     cy.get('#btnLogin').click()
}

export function validalogin(mensagem) {
     cy.get('#swal2-title').should('be.visible').should('have.text', mensagem)
}

export function validaErroLogin(mensagem) {
     cy.get('.invalid_input').should('be.visible').should('have.text', mensagem)
}

export function realizalogin(email, senha, entrar, mensagem) {
     preencheEmail(email)
     preencheSenha(senha)
     clicaEntrar()
     validalogin(mensagem)     
}

