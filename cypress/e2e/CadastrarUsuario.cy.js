import Router from '../pages/PagesRouter'
import user_fac from '../Factories/user_fac'

describe('Verificar resposta do sistema ao tentar cadastrar usuário e não preencher corretamente o captcha', () => {
    const router = new Router()
    let newUser = user_fac.createUser()

    beforeEach(() => {
      router.visitEnrollForm()
    })
    
    it('Deve conter os campos de formulário visíveis', () => {        
        cy.get('#first-name').should('be.visible')
        cy.get('#last-name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#mobile').should('be.visible')
        cy.get('#country').should('be.visible')
        cy.get('#city').should('be.visible')
        cy.get('#message').should('be.visible')
        cy.get('#code').should('be.visible')
    })

    it('Deve conter botão para submissão do formulário', () => {
        cy.get('.btn.btn-block.btn-primary').should('be.visible')
    })

    it('Realizar tentativa de cadastro com falha no captcha', () => {
        cy.get('#first-name').type(newUser.firstName)
        cy.get('#last-name').type(newUser.lastName)
        cy.get('#email').type(newUser.email)
        cy.get('#mobile').type(newUser.phone)
        cy.get('#country').select(newUser.country)
        cy.get('#city').type(newUser.city)
        cy.get('#message').type(newUser.message)
        cy.get('#code').type(newUser.code, { force: true })
        cy.get('.btn.btn-block.btn-primary').click()

        cy.get('.alert-error').should('be.visible')
        cy.contains('Sorry ! Unable to verify that you are human.').should('exist')
    })
})