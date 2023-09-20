describe('form tests', function () {
  this.beforeEach(() => {
    cy.visit('/forms');
  });

  it('Test subscribe form', function () {
    //valid email
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
    cy.contains(/testing forms/i);
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('not.exist');
    cy.get('@subscribe-input').type('ryan@coderyan.com');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('exist');

    cy.wait(4000);
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('not.exist');

    // invalid email
    cy.contains(/Invalid Email: ryan@coderyan.io!/i).should('not.exist');
    cy.get('@subscribe-input').type('ryan@coderyan.io');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Invalid Email: ryan@coderyan.io!/i).should('exist');

    cy.wait(4000);
    cy.contains(/Invalid Email: ryan@coderyan.io!/i).should('not.exist');
    // blank input
    cy.contains(/fail!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/fail!/i).should('exist');
  });
});
