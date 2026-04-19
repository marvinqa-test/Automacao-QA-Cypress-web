/// page_object criado para a adição de um produto e realização do checkout

export function AcessaPaginaShop() {
    cy.visit('/shop')
    cy.url().should('include', '/shop')
}

export function abrirProdutoPorNome(nomeProduto, hrefParcial) {
    cy.contains('.product_wrappers_one', nomeProduto)
        .find(`a[href*="${hrefParcial}"]`)
        .first()
        .click({ force: true })
    cy.url().should('include', hrefParcial)
}

export function selecionarTamanho(tamanho) {
    cy.get('select.customs_sel_box')
        .should('have.length.at.least', 1)
        .first()
        .select(tamanho, { force: true })
}

export function selecionarCor(cor) {
    const cores = {
        green: '.product-color-green',
        red: '.product-color-red',
        blue: '.product-color-blue'
    }

    const chave = String(cor).toLowerCase()
    const seletor = cores[chave]

    if (!seletor) {
        throw new Error(`Cor inválida: ${cor}. Use: green, red ou blue.`)
    }

    cy.get(seletor).first().click()
}

export function definirQuantidade(qtd) {
    const quantidade = Number(qtd)
    const cliquesNoMais = Math.max(quantidade - 1, 0) // já inicia em 1

    Cypress._.times(cliquesNoMais, () => {
        cy.get('.plus-minus-input button').last().click()
    })
}

export function adicionarAoCarrinho() {
    cy.get('.links_Product_areas > .theme-btn-one').click()
}

export function validarModalSucessoAddCarrinho() {
    cy.get('#swal2-title')
        .should('have.text', 'Success!')
        .and('be.visible')
}

export function irParaCheckoutPeloModal() {
    cy.get('a[href*="/checkout-one"]')
        .filter(':visible')
        .first()
        .scrollIntoView()
        .click({ force: true })
}

export function configurarProduto({ tamanho, cor, quantidade = 1 }) {
    if (tamanho) selecionarTamanho(tamanho)
    if (cor) selecionarCor(cor)
    definirQuantidade(quantidade)
}

export function validarPaginacheckout () {
    cy.url().should('include', '/checkout-one')
}