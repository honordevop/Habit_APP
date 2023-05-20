/// <reference types="cypress" />

describe("Testing Reward component for HTTP req and res", ()=>{
    before(()=>{
        cy.visit("/rewards")
    })
    it("should display a list of rewards", ()=>{
        cy.get("ul").should("not.be.empty")
        cy.get("ul").should("contain", "500 points for drinking 8 cups of water for 7 straight days").and("contain", "850 points for fasting for 5 days straight")
    })
})