/// <reference types="cypress" />
import { fakerPT_BR as faker } from '@faker-js/faker';
faker.locale = 'pt_BR';
const page_pratice_login = require('../support/page_objects/page_pratice_login')
const page_pratice_shop = require('../support/page_objects/page_pratice_shop')

/// deve realizar login com sucesso
/// devo adicionar um produto na cesta (produto: 3 > product-details-one/3)
/// ir até a cesta
/// preencher o formulário de checkout

describe('Checkout para cliente com conta já criada', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('Deve realizar o checkout com sucesso', () => {
        page_pratice_login.realizalogin(faker.internet.email(), faker.internet.password({ length: 6 }), null, 'Login realizado')
        page_pratice_shop.AcessaPaginaShop()
        // Abre a página do produto (evita pegar o select de ordenação da vitrine)
        page_pratice_shop.abrirProdutoPorNome('V-Neck Dress', '/product-details-one/3')
        // Agora o select é do produto
        page_pratice_shop.configurarProduto({ tamanho: 'M', cor: 'green', quantidade: 4 })
        page_pratice_shop.adicionarAoCarrinho()
        page_pratice_shop.validarModalSucessoAddCarrinho()
        page_pratice_shop.irParaCheckoutPeloModal()
        page_pratice_shop.validarPaginacheckout()
        cy.get('#fname').type(faker.person.firstName())
        cy.get('#lname').type(faker.person.lastName())
        cy.get('#cname').type(faker.company.name())
        cy.get('#email').type(faker.internet.email())
        cy.get('#country').select('usa')
        cy.get('#city').select('Aland Islands')
        cy.get('#zip').type(faker.location.zipCode())
        cy.get('#faddress').type(faker.location.streetAddress())
        cy.get('#messages').type(faker.lorem.sentence())
        cy.get('#materialUnchecked').click()
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3').should('have.text', 'Billings Information registred with success!').should('be.visible')
        cy.get('#headingTwo > .collapsed > label').click()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.get('h2')
            .should('have.text', 'Order success!')
            .should('be.visible')
        cy.get('.offer_modal_left > h3')
            .should('have.text', 'Congrats! Your order was created with sucess!')
            .should('be.visible')
    })

})