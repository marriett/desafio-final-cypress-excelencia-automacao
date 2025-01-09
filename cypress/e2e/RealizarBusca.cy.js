import Router from '../pages/PagesRouter'
import { faker } from "@faker-js/faker"


describe('Verificar ferramenta de Busca do site', () => {
    const router = new Router()

    beforeEach(() => {
      router.visitHome()
    })

    it('Acessar página inicial', () => {
      cy.get('.btn.btn-primary-shadow.btn-block').should('exist')
      cy.contains('Enroll Yourself').should('exist')
    })

    it('Verificar ferramenta de busca', () => {
      cy.get('#search-form').should('exist')
      cy.get('.navbar__search--input').should('be.visible')
      cy.get('.icon-search').should('be.visible')
    })

    Cypress._.times(4, () => {
      var searchTerm = faker.word.words(1)
      it('Realizar buscas aleatórias', () => {
        cy.get('.navbar__search--input').first().type(searchTerm, { force: true })
        cy.get('.navbar__search--input').first().type('{enter}', { force: true })

        cy.get('.articles__list--heading').should('be.visible')
        cy.get('h1').contains(searchTerm);
      })
    })
})