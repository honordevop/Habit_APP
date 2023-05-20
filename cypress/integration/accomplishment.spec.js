/// <reference types="cypress" />

describe("Testing the Acomplishment register Dashboard", ()=>{
    beforeEach("Visit Accomplishment Dashboard", ()=>{
        cy.visit("/accomplishments")
    })

    it("Check if Accomplishment dashboard is visibe", ()=>{
        cy.get(".Accomplishment").should("contain", "Accomplishment")

        cy.get("input[class='Accomplishment-input']").type("Got a new Job with fortune 500 Company")
        cy.get("textarea[class='Accomplishment-textarea']").type("The job comes with a good pay, accomadation and official car. It's my dream Job")
        cy.get("button[class='Accomplishment-btn']").click()
        cy.get(".Accomplishment-error-container").should("be.visible").and("contain", "Complete the items above to continue")
    })

    it("Register New Accomplishment", ()=>{

        cy.get("input[class='Accomplishment-input']").type("Started Fish farming bussines")
        cy.get("textarea[class='Accomplishment-textarea']").type("I just purchased 10 hectares of land for fish farming bussiness")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.get("button[class='Accomplishment-btn']").click()

        cy.get(".Accomplishment-spinner-container").should("contain", "This Accomplisment was Successfully Submitted")
    })

    it("Test 'Go Back' to accomplishment dashoard upon clicking 'Go Back' button", ()=>{

        cy.get("input[class='Accomplishment-input']").type("Started Fish farming bussines")
        cy.get("textarea[class='Accomplishment-textarea']").type("I just purchased 10 hectares of land for fish farming bussiness")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.get("button[class='Accomplishment-btn']").click()

        cy.get(".Accomplishment-btn").click()
        cy.get(".Accomplishment").should("be.visible").and("contain", "Accomplishment")
        cy.get("input[class='Accomplishment-input']").should("have.value", "")
        cy.get("textarea[class='Accomplishment-textarea']").should("have.value", "")
    })
})