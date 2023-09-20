describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals');
  });
  it('should find the h1 element with "testing fundamentals text"', async function () {
    cy.getDataTest('fundamentals-header')
      .should('exist')
      .and('have.text', 'Testing Fundamentals');
  });

  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block./i).should(
      'not.be.visible'
    );

    cy.getDataTest('accordion-item-1', 'div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      'be.visible'
    );

    cy.getDataTest('accordion-item-1', 'div[role="button"]').click();

    cy.contains(/Your tests will exist in a describe block/i).should(
      'not.be.visible'
    );
  });
});
