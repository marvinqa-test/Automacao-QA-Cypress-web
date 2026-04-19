export const postsAPI = {
  
  getAllPosts() {
    return cy.request('GET', '/posts')
  },

  getPostById(id) {
    return cy.request('GET', `/posts/${id}`)
  },

  createPost(title, body, userId) {
    return cy.request('POST', '/posts', {
      title,
      body,
      userId
    })
  },

  updatePost(id, title, body, userId = 1) {
    return cy.request('PUT', `/posts/${id}`, {
      title,
      body,
      id,
      userId
    })
  },

  deletePost(id) {
    return cy.request('DELETE', `/posts/${id}`)
  }
}

export const usersAPI = {
  
  getAllUsers() {
    return cy.request('GET', '/users')
  },

  getUserById(id) {
    return cy.request('GET', `/users/${id}`)
  },

  getUserPosts(userId) {
    return cy.request('GET', `/posts?userId=${userId}`)
  }
}
