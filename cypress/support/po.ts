export const navigateTo = () => cy.visit('/');

export const getGreeting = () => cy.get('app-root .content span');
