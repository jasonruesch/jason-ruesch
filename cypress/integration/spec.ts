import { navigateTo, getGreeting } from '../support/po';

describe('Jason Ruesch App', () => {
  beforeEach(navigateTo);

  it('should load', () => {
    // Loaded!
  });

  // it('should display welcome message', () => {
  //   getGreeting().contains('Jason Ruesch app is running!');
  // });

  // it('should have 3 links', () => {
  //   cy.get('app-root a.card').should('have.length', 3);
  // });
});
