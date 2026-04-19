describe('API - Users (JSONPlaceholder)', () => {
  
  it('Deve listar todos os usuários', () => {
    cy.request('GET', '/users').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body[0]).to.have.property('id')
      expect(response.body[0]).to.have.property('name')
      expect(response.body[0]).to.have.property('email')
    })
  })

  it('Deve obter usuário específico', () => {
    cy.request('GET', '/users/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(1)
      expect(response.body.name).to.exist
    })
  })

  it('Deve validar estrutura de usuário', () => {
    cy.request('GET', '/users/1').then((response) => {
      const user = response.body
      expect(user).to.have.all.keys('id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company')
    })
  })

  it('Deve obter posts de um usuário específico', () => {
    cy.request('GET', '/posts?userId=1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      expect(response.body[0].userId).to.eq(1)
    })
  })
})
