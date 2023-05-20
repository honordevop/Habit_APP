/// <reference types="cypress" />

describe("Testing Habit component", ()=>{
    beforeEach("run first", ()=>{
        cy.visit("/habits")
    })

    it("Click habit modal display btn", ()=>{
        cy.contains("button", "Add").click()
        cy.contains("Add a new habit").should("be.visible")

        cy.contains(".close", "Close").click()
        // cy.contains("Add a new habit").should("be.hidden")
        // cy.get("modal-content").should("be.false")
    })

    //Testing Add Habit modal component
    it("Add a habit", ()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink Water")
        cy.get("button").contains("Save Changes").click()
        //Check if new card was added for the created habit
        cy.get(".HabitCard").contains("Drink Water").should("be.visible").and("have.class", "HabitCard__habit-container")
    })

    //Testing marking habit as done
    it("Mark a habit as Done", ()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Do homework and wash the dishes")
        cy.get("button").contains("Save Changes").click()

        cy.get("img").should("have.attr", "src").and("equal", "/static/media/close.fa7e5ead.svg")
        cy.get(".HabitCard").contains("Do homework and wash the dishes").should("be.visible").and("have.class", "HabitCard__habit-container").click()        
        cy.get("img").should("have.attr", "src").and("equal", "/static/media/check.9e8832df.svg")
    })
})