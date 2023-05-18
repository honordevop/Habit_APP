/// <reference types="cypress" />

describe("Locator", () =>{
    beforeEach(()=>{
        cy.visit("/elements")
    })

    it("locating elements with get", ()=>{
        //Get all button tags
        cy.get("button")

        //Get element with this className
        cy.get(".btn-with-class")

        //Get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        //Get element with ID
        cy.get("#btn-with-id")
        cy.get("[id='btn-with-id']")

        //Get elements with specific attribute
        cy.get("[type='submit']")

        //Get element with tag and className
        cy.get("button.Elements-btn")

        //Get element with tag, className and id
        cy.get("button.Elements-btn#btn-with-id")

        //Get element with tag, className and type
        cy.get("button.Elements-btn[type='submit']")

        //Get element with cy data id
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId('btn-id-1')
    })
    //Get h3 tag
    /*it("locate h3 tags", ()=>{
        cy.get("h3")
    })

    //Get element by classname
    it("Get element by classname", ()=>{
        cy.get(".Elements-subheader")
    })*/
})