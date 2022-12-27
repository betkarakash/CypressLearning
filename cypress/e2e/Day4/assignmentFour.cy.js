/// <reference types="cypress"/>

import { demoObject } from "../../PageObject/demoObject"

const cars = [" Electronics ", " Apparel ", " Digital downloads "]

describe('Day 3 - Assignment 3', ()=>{
    beforeEach(()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it("first test case", ()=>{
        if(demoObject.getImageHeaders.find('div.item-box').should('have.length', 3)){
            for(let i=1; i<=3; i++){
                cy.get(':nth-child('+i+') > .category-item > .title > a').should('have.text', cars[i-1])
            }
        }
    })

    it("second test case", ()=>{
        demoObject.getProductTitle.invoke('attr', 'href').should('eq', '/build-your-own-computer')
        demoObject.getProductTitle.click()
    })

    it("third test case", ()=>{
        demoObject.getPriceOfProduct.invoke('text').as('macbookPrice')
        demoObject.addToCartButtonOnHomePage.click()
        demoObject.addToCartButtonOnProductPage.click()
        demoObject.goToShoppingCart.click()
        
        cy.get('@macbookPrice').then((macbookPrice)=>{
            demoObject.getProductPriceOnCartPage.should('have.text', macbookPrice)
        })
    })
})