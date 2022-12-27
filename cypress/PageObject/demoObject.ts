class DemoObject {
    get getImageHeaders(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('.category-grid > .item-grid');
    }

    get getProductTitle(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(':nth-child(1) > .product-item > .details > .product-title > a');
    }

    get getPriceOfProduct(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(':nth-child(2) > .product-item > .details > .add-info > .prices > .price');
    }

    get addToCartButtonOnHomePage(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button');
    }

    get addToCartButtonOnProductPage(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('#add-to-cart-button-4');
    }

    get goToShoppingCart(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('.cart-label');
    }

    get getProductPriceOnCartPage(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('.product-unit-price');
    }
}

export const demoObject = new DemoObject()