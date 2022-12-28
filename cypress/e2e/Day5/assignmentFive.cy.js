/// <reference types="cypress"/>

const cars = [" Electronics ", " Apparel ", " Digital downloads "]

describe('Day 5 - Assignment 5', ()=>{
    beforeEach("Open App", ()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })
    
    it("first test case", ()=>{
        if(cy.get('.category-grid > .item-grid').find('div.item-box').should('have.length', 3)){
            for(let i=1; i<=3; i++){
                cy.get(':nth-child('+i+') > .category-item > .title > a').should('have.text', cars[i-1])
            }
        }
    })

    it("second test case", ()=>{
        cy.get(':nth-child(1) > .product-item > .details > .product-title > a').invoke('attr', 'href').should('eq', '/build-your-own-computer')
        cy.get(':nth-child(1) > .product-item > .details > .product-title > a').click()
    })

    it("third test case", ()=>{
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .prices > .price').invoke('text').as('macbookPrice')
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click()
        cy.get('#add-to-cart-button-4').click()
        cy.get('.cart-label').click()
        
        cy.get('@macbookPrice').then((macbookPrice)=>{
            cy.get('.product-unit-price').should('have.text', macbookPrice)
        })
    })
})