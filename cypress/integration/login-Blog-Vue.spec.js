/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('http://localhost:8080/home/');
    cy.get('.grid > :nth-child(1) > a > .hydrated').click();
    cy.get('.button').click();
    cy.get('[href="/BackOffice/"] > .hydrated').click();
    cy.get('#SigIn > :nth-child(1) > .form-control').type('Rajoy');
    cy.get('#SigIn > :nth-child(2) > .form-control').type('1234');
    cy.get('#SigIn > .flex > .button').click();
    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(1)').click();
    cy.get('#commentContent').type('testing Cypress');
    cy.get('#pv_id_6_content > .p-fieldset-content > .comment-btn > .signIn > .p-button-text').click();
    cy.get('#pv_id_7_content > .p-fieldset-content > .comment-btn > .p-button-danger').click();
    cy.get('.p-button-info').click()
    cy.get('.signIn').click()
    cy.get('.p-card-title > .form-group > .form-comtrol').type('Testing Cypress');
    cy.get('.p-card-content > .form-group > .form-comtrol').type('Testing Cypress Body');
    cy.get('.p-button-success').click();
    cy.get(':nth-child(7) > :nth-child(1)').click();
    cy.get('.p-button-danger > .p-button-text').click();
    cy.get('[text="LOG OUT"]').click();
})