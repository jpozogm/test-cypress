/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('http://localhost:8080/home/');
    cy.get('#menu > ul > :nth-child(2) > a').click();
    cy.get('#SigIn > :nth-child(1) > input').type('Rajoy');
    cy.get('#SigIn > :nth-child(2) > input').type('1234');
    cy.get('#SigIn > [type="submit"]').click();
    cy.get('div > ul > :nth-child(1) > a').click();
    cy.get('#commentContent').type('Ruiz');
    cy.get('.signIn').click();
    cy.get('section > :nth-child(1) > :nth-child(1) > :nth-child(6)').click();
    cy.get('.signIn').click();
    cy.get(':nth-child(1) > input').type('The future, es ahora');
    cy.get(':nth-child(2) > input').type('testing Cypress');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(7) > a').click();
    cy.get(':nth-child(4) > :nth-child(1)').click();
    cy.get(':nth-child(2) > input').type('texto editado');
    cy.get(':nth-child(3) > input').type('Cypress test');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(4) > :nth-child(2)').click();
    cy.get(':nth-child(2) > button').click();
})