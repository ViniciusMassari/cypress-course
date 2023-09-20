describe('Various examples', function () {
  this.beforeAll(() => {
    cy.visit('/examples');
  });

  it('multi-page testing', function () {
    cy.getDataTest('nav-why-cypress').click();
    cy.location('pathname').should('equal', '/');

    cy.getDataTest('nav-overview').click();
    cy.location('pathname').should('equal', '/overview');

    cy.getDataTest('nav-fundamentals').click();
    cy.location('pathname').should('equal', '/fundamentals');

    cy.getDataTest('nav-forms').click();
    cy.location('pathname').should('equal', '/forms');

    cy.getDataTest('nav-examples').click();
    cy.location('pathname').should('equal', '/examples');

    cy.getDataTest('nav-component').click();
    cy.location('pathname').should('equal', '/component');

    cy.getDataTest('nav-best-practices').click();
    cy.location('pathname').should('equal', '/best-practices');
  });

  it.only('Post grudges', function () {
    cy.contains(/add some grudges/i);
    cy.getDataTest('clear-button').should('not.exist');
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 0);
    });
    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('number 1');
    });
    cy.getDataTest('add-grudge-button').click();
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1);
    });

    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('number 2');
    });
    cy.getDataTest('add-grudge-button').click();

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 2);
      cy.get('li').its(0).should('contain.text', 'number 1');
    });

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li')
        .its(0)
        .within(() => {
          cy.get('button').click();
        });
    });
  });
});
