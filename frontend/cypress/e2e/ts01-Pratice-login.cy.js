/// <reference types="cypress" />
import { fakerPT_BR as faker } from '@faker-js/faker';
const page_pratice_login = require('../support/page_objects/page_pratice_login')

describe ('Login', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

    it('Deve realizar login com sucesso', () => {
      page_pratice_login.preencheEmail(faker.internet.email())
      page_pratice_login.preencheSenha(faker.internet.password({ length: 6 }))
      page_pratice_login.clicaEntrar()
      page_pratice_login.validalogin('Login realizado')  
    })

    it('Senha inválida', () => {
      page_pratice_login.preencheEmail(faker.internet.email())
      page_pratice_login.preencheSenha(faker.internet.password({ length: 1 }))
      page_pratice_login.clicaEntrar()
      page_pratice_login.validaErroLogin('Senha inválida.')
    })

    it('E-mail inválido', () => {
      page_pratice_login.preencheEmail('eng.civilmarcoshotmail.com')
      page_pratice_login.preencheSenha(faker.internet.password({ length: 6 }))
      page_pratice_login.clicaEntrar()
      page_pratice_login.validaErroLogin('E-mail inválido.')  
    })
    
    it('E-mail e senha inválidos', () => {
      page_pratice_login.preencheEmail('eng.civilmarcoshotmail.com')
      page_pratice_login.preencheSenha(faker.internet.password({ length: 1 }))
      page_pratice_login.clicaEntrar()
      page_pratice_login.validaErroLogin('E-mail inválido.')   
    }) 

})