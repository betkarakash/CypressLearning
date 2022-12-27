/// <reference types="cypress"/>

const cars = [" Electronics ", " Apparel ", " Digital downloads "]

describe('Day 3 - Assignment 3', ()=>{
    it("first test case", ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        if(cy.get('.category-grid > .item-grid').find('div.item-box').should('have.length', 3)){
            for(let i=1; i<=3; i++){
                cy.get(':nth-child('+i+') > .category-item > .title > a').should('have.text', cars[i-1])
            }
        }

        cy.get(':nth-child(1) > .product-item > .details > .product-title > a').invoke('attr', 'href').should('eq', '/build-your-own-computer')
        cy.get(':nth-child(1) > .product-item > .details > .product-title > a').click()

        cy.get('.header-logo > a > img').click()
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .prices > .price').invoke('text').as('macbookPrice')
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click()
        cy.get('#add-to-cart-button-4').click()
        cy.get('.cart-label').click()
        
        cy.get('@macbookPrice').then((macbookPrice)=>{
            cy.get('.product-unit-price').should('have.text', macbookPrice)
        })
    })
})