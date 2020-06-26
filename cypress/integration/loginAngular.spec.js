/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('http://localhost:4200/home/');
    cy.scrollTo(0, 1400);
    cy.scrollTo(0, 0);
    cy.get('[ng-reflect-router-link="login"] > .hydrated').click();
    cy.get('#username').type('Rajoy');
    cy.get('#password').type('1234');
    cy.get('.button').click();
    cy.get('.ui-button-text').click();
    cy.get('#postTitle').type('caca');
    cy.get('#postContent').type('Testing type with Cypress')
    cy.get('.ui-button-success > .ui-button-text').click();
    cy.get('#postTitle').clear();
    cy.get('#postTitle').type('Test Cypress');
    cy.get('.ui-button-success > .ui-button-text').click();
    cy.get('.ui-table-tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('#commentContent').type('hola');
    cy.get('.ui-float-label > .ui-button-raised > .ui-button-text').click();
    cy.get('.p-header > div.ng-star-inserted > .ui-button-danger > .ui-button-text').click()

})