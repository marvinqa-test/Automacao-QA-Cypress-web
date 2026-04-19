describe('API - Posts (JSONPlaceholder)', () => {
  
  it('Deve listar todos os posts', () => {
    cy.request('GET', '/posts').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
    })
  })

  it('Deve obter um post específico', () => {
    cy.request('GET', '/posts/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('body')
    })
  })

  it('Deve criar um novo post', () => {
    cy.request('POST', '/posts', {
      title: 'Novo Post',
      body: 'Conteúdo do post',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      expect(response.body.title).to.eq('Novo Post')
    })
  })

  it('Deve atualizar um post', () => {
    cy.request('PUT', '/posts/1', {
      title: 'Post Atualizado',
      body: 'Conteúdo atualizado',
      userId: 1,
      id: 1
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.title).to.eq('Post Atualizado')
    })
  })

  it('Deve deletar um post', () => {
    cy.request('DELETE', '/posts/1').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
