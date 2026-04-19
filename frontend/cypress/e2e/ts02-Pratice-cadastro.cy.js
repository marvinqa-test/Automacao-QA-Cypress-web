/// <reference types="cypress" />
import { fakerPT_BR as faker } from '@faker-js/faker';
const page_pratice_cad = require('../support/page_objects/page_pratice_cad')

describe('Cadastro de Usuário', () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it('Cadastro com Sucesso', () => {

        const name = faker.person.fullName() /// guardando o nome em uma variável, pois ele será validado na mensagem de sucesso

        page_pratice_cad.preencheNome(name)
        page_pratice_cad.preencheEmailCadastro(faker.internet.email())
        page_pratice_cad.preencheSenhaCadastro(faker.internet.password({ length: 6 }))
        page_pratice_cad.registraCadastro()
        page_pratice_cad.validaCadastro(name)
    })

    it('Cadastro com nome vazio', () => {
        page_pratice_cad.preencheEmailCadastro(faker.internet.email())
        page_pratice_cad.preencheSenhaCadastro(faker.internet.password({ length: 6 }))
        page_pratice_cad.registraCadastro()
        page_pratice_cad.validaCadastroErro('O campo nome deve ser prenchido')
    })

    it('Cadastro com e-mail vazio', () => {
        page_pratice_cad.preencheNome(faker.person.fullName())
        page_pratice_cad.preencheSenhaCadastro(faker.internet.password({ length: 6 }))
        page_pratice_cad.registraCadastro()
        page_pratice_cad.validaCadastroErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com senha vazia', () => {
        page_pratice_cad.preencheNome(faker.person.fullName())
        page_pratice_cad.preencheEmailCadastro(faker.internet.email())
        page_pratice_cad.registraCadastro()
        page_pratice_cad.validaCadastroErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com e-mail inválido', () => {
        page_pratice_cad.preencheNome(faker.person.fullName())
        page_pratice_cad.preencheEmailCadastro(faker.internet.email().replace('@', ''))
        page_pratice_cad.preencheSenhaCadastro(faker.internet.password({ length: 6 }))
        page_pratice_cad.registraCadastro()
        page_pratice_cad.validaCadastroErro('O campo e-mail deve ser prenchido corretamente')
    })
    
    it('Cadastro com senha inválida', () => {
        page_pratice_cad.preencheNome(faker.person.fullName())
        page_pratice_cad.preencheEmailCadastro(faker.internet.email())
        page_pratice_cad.preencheSenhaCadastro(faker.internet.password({ length: 2 }))
        page_pratice_cad.registraCadastro()
        page_pratice_cad.validaCadastroErro('O campo senha deve ter pelo menos 6 dígitos')
    })  
})