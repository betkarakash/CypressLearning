/// <reference types='cypress'/>

describe('Day 2 - Assignment 2', ()=>{
    it('first test case', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.menu-toggle').click()
        cy.get('.mobile > :nth-child(1) > .sublist-toggle').click()
        cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(1) > a').click()
        cy.get(':nth-child(3) > .product-item > .details > .product-title > a').click()
        cy.get('#product_enteredQuantity_3').clear()
        cy.get('#product_enteredQuantity_3').type('2{enter}')
        cy.get('#add-to-cart-button-3').click()
        cy.get('.cart-label').click()
        cy.get('.product-unit-price').should('have.text', '$500.00')
        cy.get('.product-subtotal').should('have.text','$1,000.00')
    })
})