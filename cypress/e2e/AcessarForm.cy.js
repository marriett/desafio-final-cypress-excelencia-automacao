import Router from '../pages/PagesRouter'

describe('Verificar que existe formulário de cadastro', () => {
    const router = new Router()

    beforeEach(() => {
      router.visitHome()
    })

    it('Acessar página inicial', () => {
      cy.get('.btn.btn-primary-shadow.btn-block').should('exist')
      cy.contains('Enroll Yourself').should('exist')
    })

    it('Acessar formulário de cadastro', () => {
      cy.contains('Enroll Yourself').click()
      cy.get('#enroll-form').should('be.visible')

    })
})