class Router{
    visitHome(){
        cy.visit('https://www.toolsqa.com/')
    }

    visitEnrollForm() {
        cy.visit('https://www.toolsqa.com/selenium-training/#enroll-form')
    }
}

export default Router;